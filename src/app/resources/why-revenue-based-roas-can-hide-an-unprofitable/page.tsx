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
  "headline": "Why Revenue-Based ROAS Can Hide an Unprofitable Business",
  "description": "Revenue-based ROAS treats every dollar of sales as equally valuable.",
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
    "@id": "https://www.attribix.app/resources/why-revenue-based-roas-can-hide-an-unprofitable"
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
      "name": "Why Revenue-Based ROAS Can Hide an...",
      "item": "https://www.attribix.app/resources/why-revenue-based-roas-can-hide-an-unprofitable"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Revenue-Based ROAS Can Hide an..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Revenue-Based ROAS Can Hide an Unprofitable Business
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Revenue-based ROAS treats every dollar of sales as equally valuable. Real ecommerce products rarely work that way.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Different products create different contribution</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Product A: $100 revenue, $70 contribution before ads.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Product B: $100 revenue, $20 contribution.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A campaign producing 400% ROAS on Product B may be worse than 250% on Product A.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Discounts and returns change retained value</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Platform revenue is usually recorded at purchase. Deep discounts, refunds and shipping subsidies can reduce what the business ultimately keeps.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Existing customers can inflate efficiency</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Returning-customer orders can appear in platform revenue despite much of the demand already existing.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Add a contribution view</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Track platform ROAS for optimization, but add:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>contribution after ads</li>
              <li>new customer CPA</li>
              <li>margin by product</li>
              <li>refund-adjusted revenue</li>
              <li>blended marketing efficiency</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              The purpose is not to abandon ROAS. It is to stop treating it as the final profit metric.
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
            <li><Link href="/resources/should-creative-production-costs-be-included-in-cac" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Creative Production Costs Be Included in CAC?</Link></li>
            <li><Link href="/resources/how-to-calculate-profit-per-order-from-paid-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate Profit per Order From Paid Ads</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your revenue and ROAS are growing faster than actual profit, send us an inquiry. We can help identify where the economics diverge.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
