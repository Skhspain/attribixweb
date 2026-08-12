"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Should You Run Search Ads if Performance Max Is Already Running?",
  "description": "Yes, Search can still have a clear role even when Performance Max is active.",
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "author": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.attribix.app/assets/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/run-search-ads-with-performance-max"
  }
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.attribix.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.attribix.app/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Should You Run Search Ads if Performance Max...",
      "item": "https://www.attribix.app/resources/run-search-ads-with-performance-max"
    }
  ]
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should You Run Search Ads if Performance Max..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Run Search Ads if Performance Max Is Already Running?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Yes, Search can still have a clear role even when Performance Max is active. PMax is designed to automate across a broad set of Google inventory. Search remains useful when you want explicit control over high-value query themes and messaging.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search can protect strategic intent</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              You may want dedicated campaigns for: brand terms; best-selling product categories; high-margin searches; competitor terms; queries requiring specialized landing pages. Search provides clearer query-level management for those themes.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not duplicate structure for the sake of it</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Running hundreds of Search keywords next to PMax simply because &quot;you need both&quot; can add complexity without incremental sales. Ask what the Search campaign does that PMax does not.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Track the combined business result</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If launching Search reduces PMax-attributed conversions while Shopify sales remain unchanged, some credit may simply have moved between campaigns. If total sales and profit increase, the additional campaign is creating a stronger case for itself. The right setup is complementary: use Search for areas where control matters and PMax where automation can expand useful coverage.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/search-campaign-vs-performance-max-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Search Campaign vs Performance Max for Ecommerce</Link></li>
            <li><Link href="/resources/google-ads-exact-match-not-exact" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Exact Match Isn&apos;t Really Exact: What Ecommerce Advertisers Should Know</Link></li>
            <li><Link href="/resources/google-ads-spend-increases-no-more-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Google Ads Spend Increases Without More Sales</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are running Search and PMax but cannot tell whether they complement or cannibalize each other, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
