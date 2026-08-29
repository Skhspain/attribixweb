import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/mutation-plan.json"), "utf8"));

function slugOf(href) {
  return href.replace(/^\/resources\//, "");
}

let applied = 0;
let alreadyHad = 0;
let missing = [];

for (const href of plan.noindexSlugs) {
  const slug = slugOf(href);
  const layoutPath = path.join(ROOT, "src/app/resources", slug, "layout.tsx");
  if (!fs.existsSync(layoutPath)) {
    missing.push(href);
    continue;
  }
  let src = fs.readFileSync(layoutPath, "utf8");
  if (/robots:\s*\{/.test(src)) {
    alreadyHad++;
    continue;
  }
  // Insert `robots: { index: false, follow: true },` right after `export const metadata: Metadata = {`
  const newSrc = src.replace(
    /(export const metadata:\s*Metadata\s*=\s*\{)/,
    `$1\n  robots: { index: false, follow: true },`
  );
  if (newSrc === src) {
    console.warn(`WARNING: could not find metadata export pattern in ${layoutPath}`);
    continue;
  }
  fs.writeFileSync(layoutPath, newSrc);
  applied++;
}

console.log(`Applied noindex to ${applied} layout.tsx files.`);
console.log(`Already had a robots field: ${alreadyHad}`);
console.log(`Missing layout.tsx: ${missing.length}`);
for (const m of missing) console.log(`  ${m}`);
