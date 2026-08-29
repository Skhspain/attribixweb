import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const records = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/scaffold-records.json"), "utf8"));
const dupCandidates = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/scaffold-dup-candidates.json"), "utf8"));

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

const outDir = path.join(ROOT, "seo-audit/splits");
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) fs.unlinkSync(path.join(outDir, f));

function slugOf(href) {
  return href.replace(/^\/resources\//, "").replace(/^\//, "");
}

const priority = records.filter((r) => r.isCore || PRIORITY_SLUGS.has(slugOf(r.href)));
const rest = records.filter((r) => !r.isCore && !PRIORITY_SLUGS.has(slugOf(r.href)));

fs.writeFileSync(path.join(outDir, "split-priority.json"), JSON.stringify(priority, null, 2));

const byCategory = {};
for (const r of rest) {
  (byCategory[r.categoryId] ??= []).push(r);
}

// how many sub-splits per category, sized ~25-29 items per agent
const chunkTargets = {
  "meta-ads": 2,
  "google-ads": 2,
  "shopify-growth": 1,
  "cro-landing-pages": 2,
  attribution: 2,
  tracking: 1,
  "email-retention": 2,
  "creative-offers": 2,
  "marketing-agency": 1,
};

const manifest = [{ name: "priority", count: priority.length, file: "split-priority.json" }];

for (const [catId, items] of Object.entries(byCategory)) {
  const n = chunkTargets[catId] ?? 1;
  const chunkSize = Math.ceil(items.length / n);
  for (let i = 0; i < n; i++) {
    const chunk = items.slice(i * chunkSize, (i + 1) * chunkSize);
    if (chunk.length === 0) continue;
    const letter = String.fromCharCode(97 + i); // a, b, c
    const name = n === 1 ? catId : `${catId}-${letter}`;
    const file = `split-${name}.json`;
    fs.writeFileSync(path.join(outDir, file), JSON.stringify(chunk, null, 2));
    manifest.push({ name, count: chunk.length, file, categoryId: catId });
  }
}

fs.writeFileSync(path.join(outDir, "_manifest.json"), JSON.stringify(manifest, null, 2));

const total = manifest.reduce((s, m) => s + m.count, 0);
console.log(`Wrote ${manifest.length} split files, total records: ${total} (expected 353)`);
for (const m of manifest) console.log(`  ${m.file.padEnd(35)} ${m.count}`);

// also write per-split relevant dup-candidates for convenience
for (const m of manifest) {
  if (!m.categoryId) continue;
}
fs.writeFileSync(path.join(outDir, "_dup-candidates.json"), JSON.stringify(dupCandidates, null, 2));
