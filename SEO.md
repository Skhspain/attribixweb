# SEO architecture — read before touching marketing pages

This documents the conventions behind the SEO/content work on the marketing
site (everything outside `/analytics`). Follow it so future changes don't
quietly break canonicalization, indexing, or the internal link graph.

## Canonical domain

`https://www.attribix.app` — **with the `www`.** This is a deliberate,
verified deviation from "attribix.app" as commonly written: the apex domain
`attribix.app` 308-redirects to `www.attribix.app` at the Vercel/DNS level,
and a past attempt to make the apex canonical caused an infinite redirect
loop (see git history around `ac1eb4f` / `cc4b624`). Every canonical tag,
Open Graph URL, JSON-LD `url`, and sitemap entry must point at
`www.attribix.app`. Never introduce a bare `https://attribix.app/...` URL
into metadata — it points at a URL that itself redirects, which is bad
practice for canonical tags.

`attribix.com` is a legacy domain kept alive only to 301 old links onto
`www.attribix.app` (see `next.config.js`). Never link to it internally.

## URL conventions

- Lowercase, hyphenated, no trailing slash, no query params on canonical
  pages.
- Keep the URL tree shallow. `/resources/article-slug`, not
  `/resources/category/subcategory/article-slug`.
- If a URL must change, add a redirect in `next.config.js` — never break an
  indexed URL outright.

## Title / description rules

- Titles: natural, SERP-friendly, not mechanically "Keyword | Attribix" for
  every page. The 5 core commercial pages use that pattern because it reads
  fine there; resource articles should read like real headlines.
- Descriptions: unique per page, state what the page explains and who it's
  for. Never copy the first paragraph as the description. Avoid "Learn
  everything you need to know…", "Discover the ultimate guide…", "Unlock…".
- Never claim 100% tracking accuracy, "complete" visibility, or that
  consent/privacy rules can be bypassed. Attribution is measurement based on
  available data, not ground truth — say so where relevant.

## Schema architecture

- Root layout (`src/app/layout.tsx`): `Organization` + `WebSite` JSON-LD.
- Homepage (`src/app/page.tsx`): `SoftwareApplication` JSON-LD with the real
  pricing tiers.
- Pages with a genuine FAQ section use `FAQPage` JSON-LD generated from the
  same `FAQ_ITEMS` array that renders the visible `<FAQList>` — the schema
  must always match what's on the page, never a superset.
- Deeper pages (ad-management sub-pages, resource articles) add
  `BreadcrumbList` JSON-LD alongside the visible `<Breadcrumbs>` component.
  Top-level pages one hop from home (the 5 core SEO pages, `/resources`)
  don't need it — the hierarchy is too shallow to matter.
- Never fabricate `aggregateRating`, review counts, or awards.

## Internal linking rules — the core cluster

`/shopify-attribution`, `/server-side-tracking-shopify`, `/meta-capi-shopify`,
`/google-ads-conversion-tracking-shopify`, and `/shopify-roas-tracking` form
a fully-linked mesh: every page links to the other four, either in a
"Related reading" section or in the closing CTA copy. If you add a new page
to this cluster, link it from all four existing pages and have it link back
to all four. If you edit one of these pages, don't remove an existing
cross-link without adding an equivalent one back.

Each page also owns a distinct primary keyword (attribution / server-side
tracking / Meta CAPI / Google Ads tracking / ROAS). Don't create a new page
that targets the same primary intent as an existing one — extend the
existing page instead.

## Adding a resource article

There's no article template file (a stub route would just be dead code) —
copy the structure of an existing core page
(`src/app/meta-capi-shopify/page.tsx` is a good reference) and follow this
shape:

1. Route: `/resources/<slug>`, shallow, hyphenated.
2. `layout.tsx` — title, description, `alternates.canonical`, OpenGraph, all
   pointing at `www.attribix.app`.
3. `page.tsx` — wrap in `<ProductPageShell>`, start with `<Breadcrumbs
   items={[{label:"Home",href:"/"},{label:"Resources",href:"/resources"},{label:"<Article title>"}]} />`
   plus matching `BreadcrumbList` JSON-LD.
4. Answer the query directly in the first paragraph — no 300-word wind-up.
5. Link to 2–3 relevant pages in the core cluster above, and add this
   article to the "Related reading" of whichever core page it supports most.
6. Add it to `src/app/resources/page.tsx` (and give it a real category from
   the existing `CATEGORIES` list) and to `src/app/sitemap.ts`.
7. `lastModified` in the sitemap is a real date — only bump it when the
   content meaningfully changed, never to fake freshness.

## Case studies and comparison pages

`/case-studies` and `/compare` exist as honest empty-state hubs
(`robots: { index: false, follow: true }` — thin/empty pages shouldn't be
indexed). Don't populate either with invented numbers, invented client
names, or unverified competitor pricing/features — the site's whole
credibility position depends on not doing that.

When a real case study exists (with client approval): add
`/case-studies/<slug>` following the resource-article pattern (layout with
canonical/OG, breadcrumb, `Article` JSON-LD), link it from the `/case-studies`
hub, add it to the sitemap, and only then flip both that page's and the
hub's `robots` to indexable.

When a comparison page is warranted: verify the competitor's current
pricing and features firsthand before writing anything, present both sides
honestly (who each tool suits, not "Attribix perfect / competitor bad"),
and only publish the specific comparisons that are actually worth writing —
not one per competitor by default.

## Image requirements

- Use `next/image`, explicit width/height to avoid layout shift.
- Descriptive filenames, no keyword-stuffed alt text. Decorative images
  (backgrounds, icons already labelled by adjacent text) get `alt=""`.

## Content tone — things never to do

- No "In today's digital landscape", "unlock", "elevate", "supercharge",
  "revolutionize", "seamlessly", "leverage" (when a plainer verb works),
  "here's the thing", "the good news is".
- No invented stats, customer counts, testimonials, or case study results.
  The current case study cards on the homepage are explicitly labelled
  "examples, not guarantees" — keep that honesty pattern.
- No claim that server-side tracking or CAPI "bypasses" consent — it never
  does, and pages should say so explicitly when the topic comes up.
- Don't mass-produce near-duplicate pages targeting the same keyword
  (`/shopify-attribution-software`, `/best-shopify-attribution`, etc.) —
  extend the one page that already owns that intent.
