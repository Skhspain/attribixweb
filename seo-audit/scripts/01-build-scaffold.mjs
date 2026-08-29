// One-off audit scaffold builder. Not part of the app build.
// Parses resources-data.ts + sitemap.ts, builds inbound-link graph from all
// article page.tsx files, and flags candidate near-duplicate clusters.
import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const RESOURCES_DATA = path.join(ROOT, "src/lib/resources-data.ts");
const SITEMAP = path.join(ROOT, "src/app/sitemap.ts");
const RESOURCES_DIR = path.join(ROOT, "src/app/resources");

function parseArticleBlock(blockText) {
  const re = /\{\s*title:\s*"((?:[^"\\]|\\.)*)",\s*desc:\s*"((?:[^"\\]|\\.)*)",\s*href:\s*"([^"]*)"\s*\}/g;
  const out = [];
  let m;
  while ((m = re.exec(blockText))) {
    out.push({
      title: m[1].replace(/\\"/g, '"'),
      desc: m[2].replace(/\\"/g, '"'),
      href: m[3],
    });
  }
  return out;
}

function main() {
  const src = fs.readFileSync(RESOURCES_DATA, "utf8");

  // CORE_GUIDES block
  const coreBlockMatch = src.match(/export const CORE_GUIDES[\s\S]*?=\s*\[([\s\S]*?)\n\];/);
  const coreItems = coreBlockMatch ? parseArticleBlock(coreBlockMatch[1]) : [];
  // core guides also have category field per item; re-extract with category
  const coreRe = /\{\s*title:\s*"((?:[^"\\]|\\.)*)",\s*desc:\s*"((?:[^"\\]|\\.)*)",\s*category:\s*"([^"]*)",\s*href:\s*"([^"]*)",?\s*\}/g;
  const coreWithCategory = [];
  let cm;
  while ((cm = coreRe.exec(coreBlockMatch[1]))) {
    coreWithCategory.push({ title: cm[1], desc: cm[2], category: cm[3], href: cm[4] });
  }

  // CATEGORIES block — split into per-category chunks
  const catBlockMatch = src.match(/export const CATEGORIES[\s\S]*?=\s*\[([\s\S]*)\n\];/);
  const catBlockText = catBlockMatch[1];

  const catHeaderRe = /\{\s*id:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*intro:\s*"((?:[^"\\]|\\.)*)",\s*items:\s*\[/g;
  const headers = [];
  let hm;
  while ((hm = catHeaderRe.exec(catBlockText))) {
    headers.push({ id: hm[1], label: hm[2], intro: hm[3], itemsStart: hm.index + hm[0].length });
  }

  const categories = [];
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i];
    const endIdx = i + 1 < headers.length ? headers[i + 1].itemsStart : catBlockText.length;
    const chunk = catBlockText.slice(h.itemsStart, endIdx);
    const items = parseArticleBlock(chunk);
    categories.push({ id: h.id, label: h.label, intro: h.intro, items });
  }

  const totalItems = categories.reduce((s, c) => s + c.items.length, 0);
  console.log(`Parsed ${categories.length} categories, ${totalItems} article items, ${coreWithCategory.length} core guides.`);

  // sitemap LASTMOD
  const sitemapSrc = fs.readFileSync(SITEMAP, "utf8");
  const lastmodBlockMatch = sitemapSrc.match(/const LASTMOD:[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
  const lastmod = {};
  if (lastmodBlockMatch) {
    const re = /"([^"]+)":\s*"([^"]+)"/g;
    let lm;
    while ((lm = re.exec(lastmodBlockMatch[1]))) {
      lastmod[lm[1]] = lm[2];
    }
  }
  console.log(`Parsed ${Object.keys(lastmod).length} explicit LASTMOD entries.`);

  // Inbound link graph: grep every article page.tsx + every other page.tsx in src/app for href="/resources/..."
  const allTsxFiles = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === "page.tsx" || entry.name === "layout.tsx") allTsxFiles.push(full);
    }
  }
  walk(path.join(ROOT, "src/app"));

  const inbound = {}; // href -> [{from, count}]
  const hrefRe = /href="(\/resources\/[a-z0-9-]+)"/g;
  for (const file of allTsxFiles) {
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    // derive the "self" slug if this file is itself a resource article, to exclude self-links
    const selfMatch = rel.match(/^src\/app\/resources\/([a-z0-9-]+)\//);
    const selfHref = selfMatch ? `/resources/${selfMatch[1]}` : null;
    const text = fs.readFileSync(file, "utf8");
    let m;
    while ((m = hrefRe.exec(text))) {
      const target = m[1];
      if (target === selfHref) continue;
      if (!inbound[target]) inbound[target] = [];
      inbound[target].push(rel);
    }
  }

  // Build flat article list with all metadata
  const records = [];
  for (const c of categories) {
    for (const item of c.items) {
      records.push({
        href: item.href,
        title: item.title,
        desc: item.desc,
        isCore: false,
        categoryId: c.id,
        categoryLabel: c.label,
        lastmodExplicit: Object.prototype.hasOwnProperty.call(lastmod, item.href),
        lastmodDate: lastmod[item.href] ?? "2026-08-11",
        inboundCount: (inbound[item.href] || []).length,
        inboundFrom: inbound[item.href] || [],
      });
    }
  }
  for (const item of coreWithCategory) {
    records.push({
      href: item.href,
      title: item.title,
      desc: item.desc,
      isCore: true,
      categoryId: "core",
      categoryLabel: item.category,
      lastmodExplicit: true,
      lastmodDate: "core",
      inboundCount: 0,
      inboundFrom: [],
    });
  }

  // Duplicate-candidate heuristic: within same category, Jaccard similarity of significant title tokens
  const STOPWORDS = new Set(["the","a","an","is","are","for","to","on","in","of","and","or","vs","your","you","should","how","why","what","does","do","when","which","can","it","this","that","with","without","than","much","many","be","have","has","not","no","before","after","between"]);
  function tokens(s) {
    return new Set(
      s
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter((w) => w && !STOPWORDS.has(w))
    );
  }
  function jaccard(a, b) {
    const inter = [...a].filter((x) => b.has(x)).length;
    const union = new Set([...a, ...b]).size;
    return union === 0 ? 0 : inter / union;
  }

  const dupCandidates = [];
  for (const c of categories) {
    const items = c.items.map((it) => ({ ...it, tok: tokens(it.title + " " + it.desc) }));
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const sim = jaccard(items[i].tok, items[j].tok);
        if (sim >= 0.25) {
          dupCandidates.push({
            categoryId: c.id,
            similarity: Math.round(sim * 100) / 100,
            a: items[i].href,
            aTitle: items[i].title,
            b: items[j].href,
            bTitle: items[j].title,
          });
        }
      }
    }
  }
  dupCandidates.sort((a, b) => b.similarity - a.similarity);

  fs.mkdirSync(path.join(ROOT, "seo-audit"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "seo-audit/scaffold-records.json"), JSON.stringify(records, null, 2));
  fs.writeFileSync(path.join(ROOT, "seo-audit/scaffold-dup-candidates.json"), JSON.stringify(dupCandidates, null, 2));

  // category size summary
  const catSummary = categories.map((c) => ({ id: c.id, label: c.label, count: c.items.length }));
  fs.writeFileSync(path.join(ROOT, "seo-audit/scaffold-category-summary.json"), JSON.stringify(catSummary, null, 2));

  console.log(`\nCategory sizes:`);
  for (const c of catSummary) console.log(`  ${c.id.padEnd(20)} ${c.count}`);
  console.log(`\nTotal records: ${records.length}`);
  console.log(`Duplicate candidates (similarity >= 0.35): ${dupCandidates.length}`);
  console.log(`Articles with zero inbound links: ${records.filter((r) => !r.isCore && r.inboundCount === 0).length}`);
  console.log(`Articles with explicit LASTMOD (pre-mass-batch): ${records.filter((r) => r.lastmodExplicit && !r.isCore).length}`);
  console.log(`\nWrote seo-audit/scaffold-records.json, scaffold-dup-candidates.json, scaffold-category-summary.json`);
}

main();
