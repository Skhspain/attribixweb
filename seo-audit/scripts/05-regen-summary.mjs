import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const inv = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/resource-inventory.json"), "utf8"));

const counts = {};
for (const r of inv) counts[r.recommended_status] = (counts[r.recommended_status] || 0) + 1;

const consolidatePairs = inv.filter((r) => r.recommended_status === "CONSOLIDATE" && r.consolidate_target);
const targetGroups = new Map();
for (const p of consolidatePairs) {
  if (!targetGroups.has(p.consolidate_target)) targetGroups.set(p.consolidate_target, []);
  targetGroups.get(p.consolidate_target).push(p.href);
}
const byHref = new Map(inv.map((r) => [r.href, r]));
const needsPromotion = [...targetGroups.keys()].filter((t) => byHref.get(t)?.recommended_status !== "KEEP_INDEXABLE");

let md = `# Resource Inventory Summary (post-tightening)\n\nGenerated ${new Date().toISOString().slice(0, 10)}. Total records: ${inv.length}.\n\n## Status counts\n\n`;
for (const [status, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  md += `- **${status}**: ${count}\n`;
}

const keepResources = inv.filter((r) => r.recommended_status === "KEEP_INDEXABLE" && !r.isCore);
const keepCore = inv.filter((r) => r.recommended_status === "KEEP_INDEXABLE" && r.isCore);
md += `\n(${keepCore.length} commercial pages + ${keepResources.length} resource articles = ${keepCore.length + keepResources.length} total indexable)\n`;

md += `\n## KEEP_INDEXABLE resource articles by cluster\n\n`;
const byCluster = {};
for (const r of keepResources) (byCluster[r.categoryId] ??= []).push(r);
for (const [cat, items] of Object.entries(byCluster).sort((a, b) => b[1].length - a[1].length)) {
  md += `**${cat}** (${items.length})\n`;
  for (const i of items.sort((a, b) => (b.internal_links_in || 0) - (a.internal_links_in || 0))) {
    md += `  - ${i.href} — ${i.title}\n`;
  }
}

md += `\n## Consolidation pairings (${consolidatePairs.length} redirects → ${targetGroups.size} targets)\n\n`;
for (const [target, froms] of [...targetGroups.entries()].sort()) {
  const targetRec = byHref.get(target);
  md += `**${target}** (${targetRec?.recommended_status})${needsPromotion.includes(target) ? " \u26a0\ufe0f needs content merge + promotion to KEEP_INDEXABLE" : ""}\n`;
  for (const f of froms) md += `  \u2190 ${f}\n`;
}

md += `\n## REMOVE_OR_REDIRECT candidates (true deletions \u2192 404)\n\n`;
for (const rec of inv) {
  if (rec.recommended_status === "REMOVE_OR_REDIRECT") md += `- ${rec.href} \u2014 ${rec.rationale}\n`;
}

fs.writeFileSync(path.join(ROOT, "seo-audit/resource-inventory-summary.md"), md);
console.log("Regenerated resource-inventory-summary.md");
console.log(`KEEP_INDEXABLE: ${counts.KEEP_INDEXABLE} (${keepCore.length} core + ${keepResources.length} resources)`);
