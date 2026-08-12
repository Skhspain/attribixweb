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
  "headline": "How to Tell What Performance Max Is Actually Doing",
  "description": "Performance Max is deliberately more automated than traditional Search, which means advertisers often feel they are funding a black box.",
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
    "@id": "https://www.attribix.app/resources/how-to-see-what-performance-max-is-doing"
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
      "name": "How to Tell What Performance Max Is Actually...",
      "item": "https://www.attribix.app/resources/how-to-see-what-performance-max-is-doing"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Tell What Performance Max Is Actually..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Tell What Performance Max Is Actually Doing
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Performance Max is deliberately more automated than traditional Search, which means advertisers often feel they are funding a black box. You cannot turn it into a fully transparent Search campaign, but you can understand much more than a single ROAS number.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with products</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              For ecommerce, look at product-level performance. Which products receive spend, clicks and conversions? Are best sellers carrying the campaign? Are low-margin products absorbing budget?
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Review search and audience insights</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Use whatever search category, search term and audience insights Google currently exposes. Look for branded demand, unexpected query themes and whether the campaign is reaching the market you intended.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Break down time, device and geography</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Performance can differ sharply by country, device and period. A blended account number can hide a weak market or a mobile conversion problem.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare with Shopify</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If PMax reports a large conversion increase but Shopify orders are flat, the campaign may be receiving more attribution rather than generating the same increase in actual sales.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow changes</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              When performance moves, ask what changed in the feed, inventory, budget, bidding, assets, website, conversion tracking or market demand. PMax will never provide the same control as Search. The job is to combine the available Google insights with independent store data so you understand enough to make business decisions.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/performance-max-brand-revenue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Much of Performance Max Revenue Comes From Brand Searches?</Link></li>
            <li><Link href="/resources/performance-max-vs-standard-shopping" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max vs Standard Shopping: Which Is Better?</Link></li>
            <li><Link href="/resources/separate-brand-traffic-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Separate Brand Traffic From Performance Max?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If PMax is spending heavily and the headline ROAS is not giving you enough confidence, send us an inquiry. We can unpack the campaign and connect it to actual Shopify sales.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
