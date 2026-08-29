import fs from "node:fs";
import path from "node:path";

const ROOT = "D:/attribixweb";
const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "seo-audit/mutation-plan.json"), "utf8"));
const redirectMap = plan.redirectMap;
const removedNoDest = new Set(plan.removeSlugs);

const files = [
  "are-you-sending-too-many-marketing-emails",
  "ecommerce-popup-conversion-rate",
  "exit-intent-popup-ecommerce",
  "good-email-click-rate-but-no-sales-what-to-check",
  "how-to-find-the-real-reason-customers-buy-your-product",
  "how-to-know-whether-your-ecommerce-offer-is-the-problem",
].map((slug) => path.join(ROOT, "src/app/resources", slug, "page.tsx"));

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const before = src;

  // 1. repoint consolidated links
  for (const [source, destination] of Object.entries(redirectMap)) {
    const re = new RegExp(`href="${source.replace(/[/.]/g, "\\$&")}"`, "g");
    src = src.replace(re, `href="${destination}"`);
  }

  // 2. strip ONLY the specific <li><Link href="removed-href" ...>...</Link></li> — anchored so the
  // <li> must be immediately (whitespace only) followed by the Link with that exact href, and the
  // match must not cross another <li> or </ul> boundary.
  for (const href of removedNoDest) {
    const esc = href.replace(/[/.]/g, "\\$&");
    const liRe = new RegExp(`[ \\t]*<li>\\s*<Link href="${esc}"[^>]*>[\\s\\S]*?<\\/Link>\\s*<\\/li>\\n?`, "g");
    src = src.replace(liRe, "");
  }

  if (src !== before) {
    fs.writeFileSync(file, src);
    console.log(`Updated: ${file}`);
  } else {
    console.log(`No change needed: ${file}`);
  }
}
