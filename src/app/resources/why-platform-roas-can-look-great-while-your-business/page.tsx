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
  "headline": "Why Platform ROAS Can Look Great While Your Business Loses Money",
  "description": "ROAS compares attributed revenue with ad spend.",
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
    "@id": "https://www.attribix.app/resources/why-platform-roas-can-look-great-while-your-business"
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
      "name": "Why Platform ROAS Can Look Great While Your...",
      "item": "https://www.attribix.app/resources/why-platform-roas-can-look-great-while-your-business"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Platform ROAS Can Look Great While Your..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Platform ROAS Can Look Great While Your Business Loses Money
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              ROAS compares attributed revenue with ad spend. It does not know your gross margin, returns, shipping subsidies, agency cost, payment fees or operating expenses.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That is why a campaign can report 500% ROAS and still be commercially poor.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A product sells for $100. Ads cost $20 per sale, so platform ROAS is 5.0x.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            But suppose:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>product cost: $55</li>
            <li>shipping subsidy: $10</li>
            <li>payment/fulfilment: $7</li>
            <li>returns allowance: $5</li>
            <li>advertising: $20</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Only $3 remains before overhead.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            The ROAS sounds excellent because the margin is thin.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Platform attribution can amplify the illusion</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If Meta and Google both claim the same order, each platform can report strong attributed ROAS even while total business efficiency is weaker.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build targets from economics</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Know:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>gross margin</li>
            <li>contribution margin</li>
            <li>allowable CPA</li>
            <li>break-even ROAS</li>
            <li>new vs returning customer value</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Then use platform ROAS as an optimization signal inside those boundaries.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Revenue is not profit. Attributed revenue is not even necessarily unique revenue.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-calculate-break-even-roas-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate Break-Even ROAS for Ecommerce</Link></li>
            <li><Link href="/resources/break-even-cpa-explained-for-shopify-stores" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Break-Even CPA Explained for Shopify Stores</Link></li>
            <li><Link href="/resources/what-is-a-good-cpa-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good CPA for Ecommerce?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your dashboards show strong ROAS but cash flow and profit do not feel strong, contact us. We can connect advertising performance to the actual unit economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
