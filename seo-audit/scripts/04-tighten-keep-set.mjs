import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const inv = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/resource-inventory.json"), "utf8"));

const PRIORITY_SLUGS = new Set([
  "why-shopify-meta-sales-dont-match",
  "shopify-attribution-models",
  "meta-pixel-vs-capi-shopify",
  "meta-event-match-quality-shopify",
  "fix-duplicate-meta-purchases-shopify",
  "google-ads-shopify-revenue-doesnt-match",
  "enhanced-conversions-shopify",
  "shopify-server-side-tracking-guide",
  "true-roas-shopify",
  "mer-vs-roas-shopify",
  "google-ads-clicks-no-sales",
]);

// Per-category cap on total KEEP_INDEXABLE count (includes guaranteed priority items)
const CAPS = {
  attribution: 16,
  "meta-ads": 16,
  "google-ads": 16,
  tracking: 8,
  "shopify-growth": 6,
  "cro-landing-pages": 10,
  "creative-offers": 5,
  "email-retention": 5,
  "marketing-agency": 6,
};

const DEPTH_SCORE = { deep: 6, moderate: 3, thin: 0 };
const CORE_TOPIC_BONUS = { attribution: 3, "meta-ads": 3, "google-ads": 3, tracking: 3, "shopify-growth": 2, "cro-landing-pages": 1, "creative-offers": 0, "email-retention": 0, "marketing-agency": 0 };

function slugOf(href) {
  return href.replace(/^\/resources\//, "").replace(/^\//, "");
}

function score(rec) {
  let s = 0;
  s += DEPTH_SCORE[rec.content_depth] ?? 0;
  s += Math.min(rec.internal_links_in || 0, 10);
  s += CORE_TOPIC_BONUS[rec.categoryId] ?? 0;
  if (rec.unique_analysis === false) s -= 5;
  return s;
}

// Any page that another article's CONSOLIDATE targets must survive — you cannot
// redirect a weak duplicate into a page that itself gets noindexed by this pass.
const consolidateTargetHrefs = new Set(
  inv.filter((r) => r.recommended_status === "CONSOLIDATE" && r.consolidate_target).map((r) => r.consolidate_target)
);

const keepCandidates = inv.filter((r) => r.recommended_status === "KEEP_INDEXABLE" && !r.isCore);
const core = inv.filter((r) => r.isCore);

// annotate
for (const r of keepCandidates) {
  r._guaranteed = PRIORITY_SLUGS.has(slugOf(r.href)) || consolidateTargetHrefs.has(r.href);
  r._score = score(r);
}

// group by category, sort each group by guaranteed first then score desc
const byCategory = {};
for (const r of keepCandidates) (byCategory[r.categoryId] ??= []).push(r);

const finalKeep = [];
const downgraded = [];

for (const [catId, items] of Object.entries(byCategory)) {
  const cap = CAPS[catId] ?? 6;
  items.sort((a, b) => (b._guaranteed - a._guaranteed) || (b._score - a._score));
  items.forEach((r, i) => {
    if (r._guaranteed || i < cap) {
      finalKeep.push(r);
    } else {
      r.recommended_status = "IMPROVE_BEFORE_INDEXING";
      r.rationale = `[tightening pass] Cut from KEEP to reduce indexable volume toward a curated set — score ${r._score} did not clear the cap for category '${catId}' (cap ${cap}). Original rationale: ${r.rationale}`;
      downgraded.push(r);
    }
  });
}

console.log(`Category breakdown (kept / total candidates / cap):`);
for (const [catId, items] of Object.entries(byCategory)) {
  const kept = items.filter((i) => finalKeep.includes(i)).length;
  console.log(`  ${catId.padEnd(20)} ${String(kept).padStart(3)} / ${String(items.length).padStart(3)}  (cap ${CAPS[catId] ?? 6})`);
}

console.log(`\nTotal resource articles kept indexable: ${finalKeep.length}`);
console.log(`Total downgraded to IMPROVE_BEFORE_INDEXING: ${downgraded.length}`);
console.log(`Plus ${core.length} commercial pages = ${finalKeep.length + core.length} total KEEP_INDEXABLE`);

// write updated inventory back
const updatedInv = inv.map((r) => {
  const match = downgraded.find((d) => d.href === r.href);
  return match ? { ...r, recommended_status: match.recommended_status, rationale: match.rationale } : r;
});
fs.writeFileSync(path.join(ROOT, "seo-audit/resource-inventory.json"), JSON.stringify(updatedInv, null, 2));

// updated counts
const counts = {};
for (const r of updatedInv) counts[r.recommended_status] = (counts[r.recommended_status] || 0) + 1;
console.log(`\nFinal status counts after tightening:`);
for (const [status, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${status.padEnd(25)} ${count}`);
}

fs.writeFileSync(path.join(ROOT, "seo-audit/tightening-downgrade-list.json"), JSON.stringify(downgraded.map(d => ({href: d.href, title: d.title, categoryId: d.categoryId, score: d._score, content_depth: d.content_depth, internal_links_in: d.internal_links_in})), null, 2));
console.log(`\nWrote updated resource-inventory.json and tightening-downgrade-list.json`);
