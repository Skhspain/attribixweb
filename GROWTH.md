# Growth & SEO process

Internal reference for running the ongoing SEO/content program once real
traffic and Search Console data exist. This is process documentation, not
a report — it doesn't contain any real numbers, since none have been
collected yet.

## Monthly SEO report template

Pull this from Search Console + GA/analytics once traffic exists. Fill in
the actual numbers — never carry over a prior month's figures or estimate
a number that wasn't measured.

```
## SEO Report — [Month Year]

**Traffic**
- Organic clicks: [ ] (prior month: [ ], change: [ ])
- Organic impressions: [ ]
- Brand vs non-brand clicks: [ ] / [ ]
- Brand vs non-brand impressions: [ ] / [ ]

**Rankings**
- Top gaining queries (position improved): [ ]
- Top losing queries (position dropped): [ ]
- New Top 10 keywords this month: [ ]
- New Top 20 keywords this month: [ ]

**Pages**
- Top pages by organic clicks: [ ]
- Pages with the biggest CTR change: [ ]

**Business outcomes**
- Organic Shopify installs / trial starts: [ ]
- Organic paid customers: [ ]
- Organic ad-management inquiries: [ ]

**Off-site**
- New referring domains (if tracked): [ ]

**This month's work**
- Published: [ list article/page URLs ]
- Updated: [ list URLs and what changed ]
- Technical issues found/fixed: [ ]

**Next month's priorities**
- [ 3-5 items, ranked ]
```

Don't report vanity metrics (total indexed pages, total impressions with
no context) without interpretation. A metric without a "so what" doesn't
belong in the report.

## Content refresh process

Every 60-90 days, pull Search Console data for the 5 core pages and the
10 resource articles. For each, check:

- Impressions and average position trend (up, flat, down)
- CTR relative to position (a page ranking well with low CTR usually has
  a title/description problem, not a content problem)
- Whether anything in the article has gone stale (a UI reference, a
  platform feature that changed, a broken external link)
- Whether new internal link opportunities exist (a newer article that
  should now link back to this one)

Only bump `dateModified` in the sitemap and article schema when something
meaningful actually changed — not on a schedule, and never to fake
freshness (see `SEO.md`).

## Search Console query-prioritization framework

Once query-level data exists, prioritize using this pattern:

**HIGH IMPRESSIONS + POSITION 5-30 + COMMERCIAL RELEVANCE** — these
queries are already showing your page to searchers; the content mostly
works, and it's usually cheaper to improve an existing page's title,
intro, internal links, or missing subtopic than to write something new
from scratch.

Example of how to read an opportunity:

```
Query: "shopify attribution software"
Impressions: 900/mo
Average position: 17
Current page: /shopify-attribution

→ This page is already being shown for a valuable query and sitting on
  page 2. Improving it (better intro, a missing FAQ, a stronger internal
  link from a newer article) is likely higher-leverage than publishing
  an unrelated new article this month.
```

Don't chase average site-wide position as a metric — it's meaningless
without knowing which queries make it up. Work at the page/query level.

## Competitor research process

Before writing anything that references a competitor (a comparison page,
a "why we're different" section):

1. Visit the competitor's actual pricing and feature pages directly —
   don't rely on memory, old screenshots, or what a third-party review
   site claims.
2. Note the date you checked, since pricing and features change.
3. Write the comparison from what you verified, not from assumption.
4. Re-verify before republishing if more than ~60 days have passed.

Never publish competitor pricing or feature claims that weren't checked
this way. See the case-study/comparison section in `SEO.md`.

## Backlink & digital PR — realistic targets

Goal is relevant referring domains, not link count. Legitimate targets,
roughly in priority order:

1. **Shopify agencies and consultants** who do tracking/attribution work
   and might reference a technical guide.
2. **Meta and Google Ads agencies** for the same reason — the
   server-side tracking guide and the Pixel-vs-CAPI article are the most
   citable assets for this audience.
3. **Ecommerce and performance-marketing newsletters/podcasts** — pitch
   with a specific article, not a generic "check out our blog."
4. **Shopify technology/app partners** with complementary (non-competing)
   apps — cross-mention opportunities.
5. **CRO and analytics consultants** who write about measurement.

Linkable assets that exist today: the server-side tracking guide
(cornerstone), the Pixel vs CAPI comparison, and the attribution-models
explainer are the three most likely to earn citations as-is. Future
linkable assets worth building once resourced: a Shopify tracking audit
checklist, a Meta CAPI debugging flowchart, and the ROAS/MER calculators
referenced in `SEO.md`.

Do not: buy links, use link farms or PBNs, run mass guest-post campaigns,
or pursue irrelevant directory listings. A handful of genuinely relevant
mentions beats any volume of low-quality links.

## Resource allocation (rough guide, not a hard rule)

- 35% original content (new articles, cornerstone guide updates)
- 30% authority/backlinks/partnerships/outreach
- 15% Search Console analysis + optimizing existing pages
- 10% case studies/comparison pages (once real data/verification exists)
- 5% Shopify App Store SEO
- 5% technical maintenance

Don't let most of the time go to endlessly rewriting titles and meta
descriptions — that's the 15% bucket, not the whole job.
