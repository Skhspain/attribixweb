import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const RD_PATH = path.join(ROOT, "src/lib/resources-data.ts");
const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/mutation-plan.json"), "utf8"));

const toRemove = new Set(plan.removeFromResourcesData);
console.log(`Removing ${toRemove.size} entries from resources-data.ts CATEGORIES...`);

const lines = fs.readFileSync(RD_PATH, "utf8").split("\n");
const kept = [];
const removedHits = new Set();

for (const line of lines) {
  // item lines look like: { title: "...", desc: "...", href: "/resources/slug" },
  const m = line.match(/href:\s*"(\/resources\/[a-z0-9-]+)"/);
  if (m && toRemove.has(m[1])) {
    removedHits.add(m[1]);
    continue; // drop this line
  }
  kept.push(line);
}

console.log(`Removed ${removedHits.size} lines (expected ${toRemove.size}).`);
const notFound = [...toRemove].filter((h) => !removedHits.has(h));
if (notFound.length) {
  console.warn(`WARNING: ${notFound.length} hrefs were in the removal plan but not found in resources-data.ts:`);
  for (const h of notFound) console.warn(`  ${h}`);
}

fs.writeFileSync(RD_PATH, kept.join("\n"));
console.log("Wrote updated resources-data.ts");
