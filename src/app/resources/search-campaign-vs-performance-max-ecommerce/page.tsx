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
  "headline": "Google Ads Search Campaign vs Performance Max for Ecommerce",
  "description": "Search campaigns and Performance Max solve different parts of Google advertising.",
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
    "@id": "https://www.attribix.app/resources/search-campaign-vs-performance-max-ecommerce"
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
      "name": "Google Ads Search Campaign vs Performance...",
      "item": "https://www.attribix.app/resources/search-campaign-vs-performance-max-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Ads Search Campaign vs Performance..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads Search Campaign vs Performance Max for Ecommerce
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Search campaigns and Performance Max solve different parts of Google advertising. Treating them as mutually exclusive usually oversimplifies the account.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search gives explicit query control</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Search campaigns let you organize keyword themes, write query-specific ads, use negatives and see a clearer relationship between search terms and landing pages. They are excellent when the customer expresses demand in words you can identify.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Performance Max uses a broader inventory</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              PMax can use Shopping product data and additional Google inventory while relying heavily on automation. For ecommerce, the product feed can make it a major sales driver. The trade-off is less granular control and visibility than traditional Search.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Overlap needs interpretation</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A customer may be eligible for both campaign types. Google uses its own prioritization rules, which can change over time. Review current official documentation rather than relying on old hierarchy charts.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The best setup depends on the job</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Use Search where query intent, messaging and control matter. Use PMax where product-led automation and broader reach can add value. Many stores benefit from both, with clear conversion tracking and reporting that separates branded demand from acquisition.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-ads-spend-increases-no-more-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Google Ads Spend Increases Without More Sales</Link></li>
            <li><Link href="/resources/run-search-ads-with-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Run Search Ads if Performance Max Is Already Running?</Link></li>
            <li><Link href="/resources/negative-keywords-ecommerce-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Negative Keywords for Ecommerce: What to Look For</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this checked against your own numbers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Search and Performance Max campaigns overlap and you are unsure which one is actually creating growth, contact us. We can restructure and measure them together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
