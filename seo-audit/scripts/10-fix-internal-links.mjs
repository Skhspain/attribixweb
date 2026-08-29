import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/mutation-plan.json"), "utf8"));

const redirectMap = plan.redirectMap; // source href -> destination href
const removedNoDest = new Set(plan.removeSlugs); // hrefs with no valid destination

// walk all .tsx files under src/app
const allFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".tsx")) allFiles.push(full);
  }
}
walk(path.join(ROOT, "src/app"));

let filesTouched = 0;
let linksRepointed = 0;
let linksStripped = 0;
const strippedLog = [];

for (const file of allFiles) {
  let src = fs.readFileSync(file, "utf8");
  let changed = false;

  // 1. Repoint hrefs pointing at consolidated (redirected) slugs directly to the final target
  for (const [source, destination] of Object.entries(redirectMap)) {
    const re = new RegExp(`href="${source.replace(/[/.]/g, "\\$&")}"`, "g");
    if (re.test(src)) {
      src = src.replace(re, `href="${destination}"`);
      linksRepointed++;
      changed = true;
    }
  }

  // 2. Strip <li>...</li> (or similar single-line list items) whose only Link points to a removed-with-no-destination href
  for (const href of removedNoDest) {
    // Match a full <li>...</li> block containing this href, on one or more lines (non-greedy)
    const liRe = new RegExp(`\\s*<li>[\\s\\S]*?href="${href.replace(/[/.]/g, "\\$&")}"[\\s\\S]*?</li>`, "g");
    if (liRe.test(src)) {
      src = src.replace(liRe, "");
      linksStripped++;
      changed = true;
      strippedLog.push(`${file} :: ${href}`);
    }
  }

  if (changed) {
    fs.writeFileSync(file, src);
    filesTouched++;
  }
}

console.log(`Scanned ${allFiles.length} .tsx files.`);
console.log(`Files touched: ${filesTouched}`);
console.log(`Links repointed to final redirect target: ${linksRepointed}`);
console.log(`Links stripped (pointed to a deleted page with no redirect): ${linksStripped}`);
for (const s of strippedLog) console.log(`  stripped: ${s}`);

fs.writeFileSync(
  path.join(ROOT, "seo-audit/link-fix-log.json"),
  JSON.stringify({ filesTouched, linksRepointed, linksStripped, strippedLog }, null, 2)
);
