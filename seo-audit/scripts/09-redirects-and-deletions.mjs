import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const CONFIG_PATH = path.join(ROOT, "next.config.js");
const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/mutation-plan.json"), "utf8"));

// --- 1. Insert redirect entries ---
let cfg = fs.readFileSync(CONFIG_PATH, "utf8");
const marker = "      // Consolidate the .com domain onto the canonical .app marketing site.";
if (!cfg.includes(marker)) {
  console.error("ERROR: could not find insertion marker in next.config.js — aborting redirect insertion.");
  process.exit(1);
}

const entries = Object.entries(plan.redirectMap)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(
    ([source, destination]) =>
      `      {\n        source: "${source}",\n        destination: "${destination}",\n        permanent: true,\n      },`
  )
  .join("\n");

const header = `      // SEO cleanup consolidation redirects (2026-08-29): near-duplicate\n      // resource articles merged into their strongest sibling.\n`;

cfg = cfg.replace(marker, `${header}${entries}\n${marker}`);
fs.writeFileSync(CONFIG_PATH, cfg);
console.log(`Inserted ${Object.keys(plan.redirectMap).length} redirect entries into next.config.js`);

// --- 2. Delete directories ---
let deleted = 0;
let missing = [];
for (const href of plan.deleteDirs) {
  const slug = href.replace(/^\/resources\//, "");
  const dir = path.join(ROOT, "src/app/resources", slug);
  if (!fs.existsSync(dir)) {
    missing.push(href);
    continue;
  }
  fs.rmSync(dir, { recursive: true, force: true });
  deleted++;
}
console.log(`Deleted ${deleted} article directories.`);
if (missing.length) {
  console.warn(`WARNING: ${missing.length} directories were already missing:`);
  for (const m of missing) console.warn(`  ${m}`);
}
