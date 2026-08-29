import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const RD_PATH = path.join(ROOT, "src/lib/resources-data.ts");
const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/mutation-plan.json"), "utf8"));

const targets = plan.mergeTargets; // the 7 hrefs
console.log(`Finishing treatment for ${targets.length} former "merge-target" hrefs — noindexing them like any other IMPROVE_BEFORE_INDEXING page:`);
for (const t of targets) console.log(`  ${t}`);

// 1. remove from resources-data.ts
const toRemove = new Set(targets);
const lines = fs.readFileSync(RD_PATH, "utf8").split("\n");
const kept = [];
const hits = new Set();
for (const line of lines) {
  const m = line.match(/href:\s*"(\/resources\/[a-z0-9-]+)"/);
  if (m && toRemove.has(m[1])) {
    hits.add(m[1]);
    continue;
  }
  kept.push(line);
}
fs.writeFileSync(RD_PATH, kept.join("\n"));
console.log(`\nRemoved ${hits.size}/${targets.length} from resources-data.ts`);

// 2. add noindex
let applied = 0;
for (const href of targets) {
  const slug = href.replace(/^\/resources\//, "");
  const layoutPath = path.join(ROOT, "src/app/resources", slug, "layout.tsx");
  if (!fs.existsSync(layoutPath)) {
    console.warn(`WARNING: missing layout.tsx for ${href}`);
    continue;
  }
  let src = fs.readFileSync(layoutPath, "utf8");
  if (/robots:\s*\{/.test(src)) continue;
  const newSrc = src.replace(/(export const metadata:\s*Metadata\s*=\s*\{)/, `$1\n  robots: { index: false, follow: true },`);
  if (newSrc === src) {
    console.warn(`WARNING: pattern not found in ${layoutPath}`);
    continue;
  }
  fs.writeFileSync(layoutPath, newSrc);
  applied++;
}
console.log(`Applied noindex to ${applied}/${targets.length}`);
