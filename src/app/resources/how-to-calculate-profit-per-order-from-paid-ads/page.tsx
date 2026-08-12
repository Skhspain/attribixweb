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
  "headline": "How to Calculate Profit per Order From Paid Ads",
  "description": "Profit per paid order starts with the order value and subtracts the costs that order creates.",
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
    "@id": "https://www.attribix.app/resources/how-to-calculate-profit-per-order-from-paid-ads"
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
      "name": "How to Calculate Profit per Order From Paid Ads",
      "item": "https://www.attribix.app/resources/how-to-calculate-profit-per-order-from-paid-ads"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Calculate Profit per Order From Paid Ads" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Calculate Profit per Order From Paid Ads
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Profit per paid order starts with the order value and subtracts the costs that order creates.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A practical contribution formula</h2>
          <div className="space-y-4">

          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Order revenue</h2>
            <div className="space-y-4 max-w-2xl">
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>COGS</li>
              <li>payment fees</li>
              <li>fulfilment</li>
              <li>shipping subsidy</li>
              <li>expected return/refund cost</li>
              <li>acquisition cost</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              = contribution after advertising.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Revenue: $120
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            COGS: $50
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Fees/fulfilment/shipping: $15
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Ad CPA: $35
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Contribution after ads = $20.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use order-level or cohort averages</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Exact product costs can vary by basket. For strategic decisions, average contribution by product group/customer cohort may be enough.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Include discounts correctly</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Use the actual net selling price, not MSRP. A discounted order has less revenue available to pay the same product cost.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Refunds matter</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If 10% of similar orders refund, incorporate an expected allowance or use net cohort profit later.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              This calculation makes CPA meaningful: you can see what each acquired order actually leaves behind.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/profit-roas-vs-revenue-roas-which-should-you-use" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Profit ROAS vs Revenue ROAS: Which Should You Use?</Link></li>
            <li><Link href="/resources/what-is-a-good-contribution-margin-after-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Contribution Margin After Advertising?</Link></li>
            <li><Link href="/resources/why-revenue-based-roas-can-hide-an-unprofitable" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Revenue-Based ROAS Can Hide an Unprofitable Business</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you know order revenue and CPA but not what each paid order contributes after variable costs, send us an inquiry. We can build the calculation around Shopify data.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
