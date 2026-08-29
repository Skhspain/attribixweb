import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const RESULTS_DIR = path.join(ROOT, "seo-audit/results");
const scaffold = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/scaffold-records.json"), "utf8"));

const BASE = "https://www.attribix.app";
function hrefFromUrl(url) {
  return url.replace(BASE, "");
}

// index scaffold by href
const scaffoldByHref = new Map();
for (const r of scaffold) scaffoldByHref.set(r.href, r);

const resultFiles = fs.readdirSync(RESULTS_DIR).filter((f) => f.endsWith(".json"));
console.log(`Reading ${resultFiles.length} result files...`);

const records = new Map(); // href -> merged record
for (const file of resultFiles) {
  const arr = JSON.parse(fs.readFileSync(path.join(RESULTS_DIR, file), "utf8"));
  for (const rec of arr) {
    const href = hrefFromUrl(rec.url);
    const scaffoldRec = scaffoldByHref.get(href);
    if (!scaffoldRec) {
      console.warn(`WARNING: no scaffold match for ${href} (from ${file})`);
    }
    if (records.has(href)) {
      console.warn(`WARNING: duplicate record for ${href} (from ${file}) — overwriting`);
    }
    records.set(href, {
      href,
      url: rec.url,
      title: rec.title || scaffoldRec?.title,
      desc: scaffoldRec?.desc,
      primary_topic: rec.primary_topic ?? null,
      search_intent: rec.search_intent ?? null,
      content_cluster: rec.content_cluster || scaffoldRec?.categoryLabel || (scaffoldRec?.isCore ? "Commercial" : "Unknown"),
      categoryId: scaffoldRec?.categoryId ?? (scaffoldRec?.isCore ? "core" : "unknown"),
      isCore: scaffoldRec?.isCore ?? false,
      content_depth: rec.content_depth ?? null,
      unique_analysis: rec.unique_analysis ?? null,
      unique_analysis_note: rec.unique_analysis_note ?? null,
      overlaps_other_page: rec.overlaps_other_page ?? null,
      overlaps_commercial_page: rec.overlaps_commercial_page ?? null,
      internal_links_in: rec.internal_links_in ?? scaffoldRec?.inboundCount ?? 0,
      impressions: rec.impressions ?? "unknown",
      recommended_status: rec.recommended_status,
      consolidate_target: rec.consolidate_target ?? null,
      metadata_issues: rec.metadata_issues ?? null,
      read_status: rec.read_status ?? "read",
      rationale: rec.rationale ?? null,
      lastmodExplicit: scaffoldRec?.lastmodExplicit ?? false,
      lastmodDate: scaffoldRec?.lastmodDate ?? null,
      sourceFile: file,
    });
  }
}

console.log(`Total merged records: ${records.size} (expected 353)`);

// cross-check against scaffold
const missing = [];
for (const s of scaffold) {
  if (!records.has(s.href)) missing.push(s.href);
}
if (missing.length) {
  console.warn(`WARNING: ${missing.length} scaffold records have NO audit result:`);
  for (const m of missing) console.warn(`  ${m}`);
}

// resolve consolidate chains
function resolveTarget(href, seen = new Set()) {
  const rec = records.get(href);
  if (!rec || rec.recommended_status !== "CONSOLIDATE" || !rec.consolidate_target) return href;
  if (seen.has(href)) return href; // cycle guard
  seen.add(href);
  return resolveTarget(rec.consolidate_target, seen);
}

const consolidatePairs = [];
const needsPromotionAfterMerge = new Set();
for (const [href, rec] of records) {
  if (rec.recommended_status === "CONSOLIDATE" && rec.consolidate_target) {
    const finalTarget = resolveTarget(rec.consolidate_target);
    const targetRec = records.get(finalTarget);
    consolidatePairs.push({
      from: href,
      to: finalTarget,
      immediateTarget: rec.consolidate_target,
      wasChain: finalTarget !== rec.consolidate_target,
      targetStatus: targetRec?.recommended_status ?? "UNKNOWN",
    });
    if (targetRec && targetRec.recommended_status !== "KEEP_INDEXABLE") {
      needsPromotionAfterMerge.add(finalTarget);
    }
  }
}

// counts
const counts = {};
for (const rec of records.values()) {
  counts[rec.recommended_status] = (counts[rec.recommended_status] || 0) + 1;
}

// write final inventory
const inventoryArray = [...records.values()].sort((a, b) => a.href.localeCompare(b.href));
fs.writeFileSync(path.join(ROOT, "seo-audit/resource-inventory.json"), JSON.stringify(inventoryArray, null, 2));

// dedupe consolidate targets summary
const targetGroups = new Map();
for (const p of consolidatePairs) {
  if (!targetGroups.has(p.to)) targetGroups.set(p.to, []);
  targetGroups.get(p.to).push(p.from);
}

let md = `# Resource Inventory Summary\n\nGenerated ${new Date().toISOString().slice(0, 10)}. Total records: ${records.size}.\n\n## Status counts\n\n`;
for (const [status, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  md += `- **${status}**: ${count}\n`;
}

md += `\n## Consolidation pairings (${consolidatePairs.length} redirects)\n\n`;
for (const [target, froms] of [...targetGroups.entries()].sort()) {
  const targetRec = records.get(target);
  md += `**${target}** (${targetRec?.recommended_status})${needsPromotionAfterMerge.has(target) ? " ⚠️ needs content merge + promotion to KEEP_INDEXABLE" : ""}\n`;
  for (const f of froms) md += `  ← ${f}\n`;
}

md += `\n## REMOVE_OR_REDIRECT candidates (no value, no redirect target)\n\n`;
for (const rec of records.values()) {
  if (rec.recommended_status === "REMOVE_OR_REDIRECT") md += `- ${rec.href} — ${rec.rationale}\n`;
}

md += `\n## Targets needing content-merge before promotion to KEEP_INDEXABLE\n\n`;
for (const t of needsPromotionAfterMerge) {
  md += `- ${t} (currently ${records.get(t).recommended_status}) — absorbing: ${targetGroups.get(t).join(", ")}\n`;
}

fs.writeFileSync(path.join(ROOT, "seo-audit/resource-inventory-summary.md"), md);

console.log(`\nStatus counts:`);
for (const [status, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${status.padEnd(25)} ${count}`);
}
console.log(`\nConsolidation pairs: ${consolidatePairs.length}`);
console.log(`Chained consolidations (resolved through 2+ hops): ${consolidatePairs.filter((p) => p.wasChain).length}`);
console.log(`Targets needing merge-then-promote: ${needsPromotionAfterMerge.size}`);
console.log(`\nWrote seo-audit/resource-inventory.json and resource-inventory-summary.md`);
