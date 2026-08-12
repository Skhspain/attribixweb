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
  "headline": "Should You Show Competitor Price Comparisons on Product Pages?",
  "description": "Competitor comparisons can help when customers are actively evaluating alternatives.",
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
    "@id": "https://www.attribix.app/resources/should-you-show-competitor-price-comparisons-on"
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
      "name": "Should You Show Competitor Price Comparisons...",
      "item": "https://www.attribix.app/resources/should-you-show-competitor-price-comparisons-on"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should You Show Competitor Price Comparisons..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Show Competitor Price Comparisons on Product Pages?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Competitor comparisons can help when customers are actively evaluating alternatives. They can also send shoppers away to investigate a competitor they had never considered.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare meaningful differences</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A useful table might include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>price</li>
            <li>materials</li>
            <li>warranty</li>
            <li>shipping</li>
            <li>features</li>
            <li>included accessories</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Only include information you can verify and keep reasonably current.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Be careful with price</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Competitor prices change. Publishing an outdated comparison can mislead customers and damage credibility.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid childish attacks</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            “Competitor X is terrible” rarely makes your brand look stronger.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Explain the trade-off:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “They cost less, but our version includes X.”
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Comparison is strongest for considered purchases</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Customers buying a $1,500 product are more likely to compare alternatives than someone buying a $12 accessory.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider a separate comparison page</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            For SEO and paid search, dedicated “Brand A vs Brand B” pages can answer deeper comparison intent without crowding every product page.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/does-a-money-back-guarantee-improve-shopify-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does a Money-Back Guarantee Improve Shopify Conversion Rate?</Link></li>
            <li><Link href="/resources/buy-one-get-one-vs-percentage-discount-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Buy One Get One vs Percentage Discount for Ecommerce</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-guarantee-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Guarantee Be?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If customers routinely compare your products against the same alternatives before purchasing, contact us. We can help turn those objections into useful campaign and landing-page content.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
