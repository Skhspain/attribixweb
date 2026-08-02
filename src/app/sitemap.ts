import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://attribix.app",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://attribix.app/features",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://attribix.app/pricing",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://attribix.app/managed-services",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://attribix.app/managed-services/inquiry",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://attribix.app/managed-services/meta-ads",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://attribix.app/managed-services/google-ads",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://attribix.app/shopify-attribution",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://attribix.app/server-side-tracking-shopify",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://attribix.app/meta-capi-shopify",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://attribix.app/google-ads-conversion-tracking-shopify",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://attribix.app/shopify-roas-tracking",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://attribix.app/faq",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://attribix.app/partners",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://attribix.app/consultation",
      lastModified: new Date("2026-05-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://attribix.app/agency/consultation",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://attribix.app/book-demo",
      lastModified: new Date("2026-05-26"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://attribix.app/ads",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://attribix.app/privacy",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://attribix.app/terms",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
