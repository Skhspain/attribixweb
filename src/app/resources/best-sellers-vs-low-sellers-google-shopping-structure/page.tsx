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
  "headline": "Best Sellers vs Low Sellers: How Should You Structure Google Shopping?",
  "description": "Best sellers deserve attention because they have proven demand.",
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
    "@id": "https://www.attribix.app/resources/best-sellers-vs-low-sellers-google-shopping-structure"
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
      "name": "Best Sellers vs Low Sellers",
      "item": "https://www.attribix.app/resources/best-sellers-vs-low-sellers-google-shopping-structure"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Best Sellers vs Low Sellers" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Best Sellers vs Low Sellers: How Should You Structure Google Shopping?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Best sellers deserve attention because they have proven demand. Low sellers deserve investigation because they may be hidden opportunities or products the market simply does not want.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t let best sellers consume everything automatically</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Google naturally tends to allocate more spend toward products that generate conversion signals. That can create a feedback loop where established winners get more exposure and new products never receive enough traffic to prove themselves.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Give strategic products a fair test</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If a new or high-margin item matters to the business, isolate enough budget or structure to learn whether it can sell. Do not force unlimited spend. Give it a deliberate test.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Low sellers may have feed problems</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Before concluding a product is weak, check: impressions; search relevance; titles; images; price competitiveness; stock; landing page conversion. A product with no sales and no impressions has a different problem from one with 1,000 clicks and no sales.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Structure by economics, not ego</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Best sellers, high-margin products and strategic categories can deserve different targets. The objective is total profitable growth, not making every SKU spend equally.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/when-to-split-performance-max-campaigns" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Should You Split Products Into Multiple PMax Campaigns?</Link></li>
            <li><Link href="/resources/exclude-poor-performing-products-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Exclude Poor-Performing Products From Performance Max?</Link></li>
            <li><Link href="/resources/all-products-one-performance-max-campaign" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Put All Products in One Performance Max Campaign?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google Shopping is over-investing in a few products while the rest of your catalogue gets no useful test, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
