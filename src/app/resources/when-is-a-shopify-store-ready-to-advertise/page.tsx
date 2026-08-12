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
  "headline": "When Is a Shopify Store Ready to Advertise Internationally?",
  "description": "A store is ready for international ads when the business can deliver an experience that is competitive enough for the target market.",
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
    "@id": "https://www.attribix.app/resources/when-is-a-shopify-store-ready-to-advertise"
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
      "name": "When Is a Shopify Store Ready to Advertise...",
      "item": "https://www.attribix.app/resources/when-is-a-shopify-store-ready-to-advertise"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "When Is a Shopify Store Ready to Advertise..." }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When Is a Shopify Store Ready to Advertise Internationally?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A store is ready for international ads when the business can deliver an experience that is competitive enough for the target market.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Advertising access is the easy part.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Domestic fundamentals should work</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            You do not need to dominate your home country, but there should be evidence that:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>customers want the product</li>
            <li>the site converts</li>
            <li>fulfilment works</li>
            <li>margins support acquisition</li>
            <li>tracking is reliable</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            International expansion does not repair weak fundamentals.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Logistics must be viable</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Know:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>shipping cost</li>
              <li>delivery time</li>
              <li>returns</li>
              <li>duties/taxes</li>
              <li>prohibited/restricted products</li>
              <li>customer service process</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Checkout should support the market</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Local currency and appropriate payment methods can matter.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The store needs measurement by market</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Separate revenue, CPA, AOV and contribution by country. A blended international ROAS can hide weak markets.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with evidence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Organic orders, customer inquiries, website traffic and search demand can point toward the strongest first expansion markets.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-choose-which-country-to-expand-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Choose Which Country to Expand Ecommerce Ads Into Next</Link></li>
            <li><Link href="/resources/should-you-run-different-meta-creatives-for-different" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Run Different Meta Creatives for Different Countries?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need a clearer read on the funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store is performing domestically and you are considering international expansion, send us an inquiry. We can help assess whether the marketing economics are ready.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
