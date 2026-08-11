import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/resources-data";

const BASE = "https://www.attribix.app";

// Real "last meaningfully changed" dates. Existing articles keep their prior
// date unless this pass edited them; new articles use the date they were
// written. Update an entry here only when that page's content actually changes.
const LASTMOD: Record<string, string> = {
  "/resources/shopify-server-side-tracking-guide": "2026-08-08",
  "/resources/why-shopify-meta-sales-dont-match": "2026-08-11",
  "/resources/shopify-attribution-models": "2026-08-11",
  "/resources/meta-pixel-vs-capi-shopify": "2026-08-09",
  "/resources/meta-event-match-quality-shopify": "2026-08-11",
  "/resources/fix-duplicate-meta-purchases-shopify": "2026-08-11",
  "/resources/google-ads-shopify-revenue-doesnt-match": "2026-08-11",
  "/resources/enhanced-conversions-shopify": "2026-08-11",
  "/resources/true-roas-shopify": "2026-08-11",
  "/resources/mer-vs-roas-shopify": "2026-08-09",
};
const NEW_ARTICLE_DATE = "2026-08-11";

function resourceEntry(href: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${href}`,
    lastModified: new Date(LASTMOD[href] ?? NEW_ARTICLE_DATE),
    changeFrequency: "monthly",
    priority: 0.65,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const resourceArticleEntries = CATEGORIES.flatMap((c) => c.items.map((a) => resourceEntry(a.href)));

  return [
    {
      url: BASE,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/resources`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...resourceArticleEntries,
    {
      url: `${BASE}/tools`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/tools/roas-calculator`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/tools/mer-calculator`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/features`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/pricing`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/shopify-attribution`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/server-side-tracking-shopify`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/meta-capi-shopify`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/google-ads-conversion-tracking-shopify`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/shopify-roas-tracking`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/ad-management`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/ad-management/meta-ads`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/ad-management/google-ads`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/faq`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/partners`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/book-demo`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
