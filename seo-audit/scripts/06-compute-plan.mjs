import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const inv = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/resource-inventory.json"), "utf8"));
const byHref = new Map(inv.map((r) => [r.href, r]));

// 7 targets that need a content merge before they can be trusted as KEEP_INDEXABLE.
// Identify them the same way script 03 did: CONSOLIDATE targets whose own status isn't KEEP_INDEXABLE.
const consolidateSources = inv.filter((r) => r.recommended_status === "CONSOLIDATE" && r.consolidate_target);
const mergeTargets = new Set();
for (const s of consolidateSources) {
  const t = byHref.get(s.consolidate_target);
  if (t && t.recommended_status !== "KEEP_INDEXABLE") mergeTargets.add(t.href);
}

const removeSlugs = new Set(inv.filter((r) => r.recommended_status === "REMOVE_OR_REDIRECT").map((r) => r.href));
const consolidateSourceSlugs = new Set(consolidateSources.map((r) => r.href));
// noindex set = IMPROVE_BEFORE_INDEXING + NOINDEX_FOLLOW, EXCLUDING the 7 merge-targets (those stay indexable, pending content merge)
const noindexSlugs = new Set(
  inv
    .filter((r) => (r.recommended_status === "IMPROVE_BEFORE_INDEXING" || r.recommended_status === "NOINDEX_FOLLOW") && !mergeTargets.has(r.href))
    .map((r) => r.href)
);

// resources-data.ts removal set = noindex + removed + consolidate-sources (merge-targets are NOT removed, they stay in resources-data.ts)
const removeFromResourcesData = new Set([...noindexSlugs, ...removeSlugs, ...consolidateSourceSlugs]);

// redirect map: source -> final target (already resolved, no chains per script 03's check)
const redirectMap = {};
for (const s of consolidateSources) redirectMap[s.href] = s.consolidate_target;

// directories to delete = consolidate sources + remove-or-redirect
const deleteDirs = new Set([...consolidateSourceSlugs, ...removeSlugs]);

const plan = {
  mergeTargets: [...mergeTargets],
  removeSlugs: [...removeSlugs],
  consolidateSourceSlugs: [...consolidateSourceSlugs],
  noindexSlugs: [...noindexSlugs],
  removeFromResourcesData: [...removeFromResourcesData],
  redirectMap,
  deleteDirs: [...deleteDirs],
};

fs.writeFileSync(path.join(ROOT, "seo-audit/mutation-plan.json"), JSON.stringify(plan, null, 2));

console.log(`Merge-then-promote targets (stay KEEP, get content merged, NOT noindexed, NOT removed from resources-data.ts): ${plan.mergeTargets.length}`);
for (const t of plan.mergeTargets) console.log(`  ${t}`);
console.log(`\nREMOVE_OR_REDIRECT (delete dir, 404, no redirect): ${plan.removeSlugs.length}`);
console.log(`CONSOLIDATE sources (delete dir, add redirect): ${plan.consolidateSourceSlugs.length}`);
console.log(`NOINDEX set (IMPROVE_BEFORE_INDEXING + NOINDEX_FOLLOW, minus merge-targets): ${plan.noindexSlugs.length}`);
console.log(`\nTotal hrefs to remove from resources-data.ts CATEGORIES: ${plan.removeFromResourcesData.length}`);
console.log(`Total directories to delete: ${plan.deleteDirs.length}`);
console.log(`Total redirect entries to add: ${Object.keys(plan.redirectMap).length}`);

const remaining = 353 - plan.removeFromResourcesData.length - 5; // minus 5 core guides (untouched, separate array)
console.log(`\nExpected remaining CATEGORIES items after removal: ${remaining} (should equal KEEP_INDEXABLE non-core count + mergeTargets count if they weren't already counted)`);

const keepNonCore = inv.filter((r) => r.recommended_status === "KEEP_INDEXABLE" && !r.isCore).length;
console.log(`Actual KEEP_INDEXABLE non-core in inventory: ${keepNonCore}`);
console.log(`(mergeTargets already counted within removeFromResourcesData? ${plan.mergeTargets.some(t => plan.removeFromResourcesData.includes(t))})`);
