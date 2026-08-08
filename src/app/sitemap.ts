import type { MetadataRoute } from "next";

const BASE = "https://www.attribix.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/resources`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/resources/shopify-server-side-tracking-guide`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/resources/why-shopify-meta-sales-dont-match`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/resources/shopify-attribution-models`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/resources/meta-pixel-vs-capi-shopify`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/resources/meta-event-match-quality-shopify`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/resources/fix-duplicate-meta-purchases-shopify`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/resources/google-ads-shopify-revenue-doesnt-match`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/resources/enhanced-conversions-shopify`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/resources/true-roas-shopify`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/resources/mer-vs-roas-shopify`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
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
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/features`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/pricing`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/shopify-attribution`,
      lastModified: new Date("2026-08-08"),
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
      lastModified: new Date("2026-08-08"),
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
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/ad-management`,
      lastModified: new Date("2026-08-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/ad-management/meta-ads`,
      lastModified: new Date("2026-08-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/ad-management/google-ads`,
      lastModified: new Date("2026-08-03"),
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
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/book-demo`,
      lastModified: new Date("2026-05-26"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date("2026-04-17"),
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
