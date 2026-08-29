import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const inv = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/resource-inventory.json"), "utf8"));

let errors = [];

for (const r of inv) {
  if (r.isCore) continue; // commercial pages untouched by this audit's mechanics
  const slug = r.href.replace(/^\/resources\//, "");
  const dir = path.join(ROOT, "src/app/resources", slug);
  const exists = fs.existsSync(dir);

  if (r.recommended_status === "REMOVE_OR_REDIRECT" || r.recommended_status === "CONSOLIDATE") {
    if (exists) errors.push(`${r.href}: status ${r.recommended_status} but directory still exists`);
    continue;
  }

  if (!exists) {
    errors.push(`${r.href}: status ${r.recommended_status} but directory is MISSING`);
    continue;
  }

  const layoutPath = path.join(dir, "layout.tsx");
  const layoutSrc = fs.existsSync(layoutPath) ? fs.readFileSync(layoutPath, "utf8") : "";
  const hasNoindex = /robots:\s*\{\s*index:\s*false/.test(layoutSrc);
  const hasCanonical = /alternates:\s*\{\s*canonical:/.test(layoutSrc);

  if (r.recommended_status === "KEEP_INDEXABLE") {
    if (hasNoindex) errors.push(`${r.href}: KEEP_INDEXABLE but has noindex set`);
    if (!hasCanonical) errors.push(`${r.href}: KEEP_INDEXABLE but missing canonical`);
  }
  if (r.recommended_status === "IMPROVE_BEFORE_INDEXING" || r.recommended_status === "NOINDEX_FOLLOW") {
    if (!hasNoindex) errors.push(`${r.href}: ${r.recommended_status} but missing noindex`);
  }
}

// verify resources-data.ts only contains KEEP_INDEXABLE non-core hrefs
const rdSrc = fs.readFileSync(path.join(ROOT, "src/lib/resources-data.ts"), "utf8");
const rdHrefs = [...rdSrc.matchAll(/href:\s*"(\/resources\/[a-z0-9-]+)"/g)].map((m) => m[1]);
const keepSet = new Set(inv.filter((r) => r.recommended_status === "KEEP_INDEXABLE" && !r.isCore).map((r) => r.href));
for (const h of rdHrefs) {
  if (!keepSet.has(h)) errors.push(`resources-data.ts still contains non-KEEP href: ${h}`);
}
for (const h of keepSet) {
  if (!rdHrefs.includes(h)) errors.push(`resources-data.ts MISSING a KEEP_INDEXABLE href: ${h}`);
}
console.log(`resources-data.ts href count: ${rdHrefs.length} (expected ${keepSet.size})`);

if (errors.length === 0) {
  console.log("\n✅ All checks passed. Zero discrepancies.");
} else {
  console.log(`\n❌ ${errors.length} discrepancies found:`);
  for (const e of errors) console.log(`  ${e}`);
}
