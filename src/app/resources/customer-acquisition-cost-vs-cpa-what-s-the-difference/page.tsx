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
  "headline": "Customer Acquisition Cost vs CPA: What's the Difference?",
  "description": "CPA and CAC are often used interchangeably, but they can describe different scopes.",
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
    "@id": "https://www.attribix.app/resources/customer-acquisition-cost-vs-cpa-what-s-the-difference"
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
      "name": "Customer Acquisition Cost vs CPA",
      "item": "https://www.attribix.app/resources/customer-acquisition-cost-vs-cpa-what-s-the-difference"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Customer Acquisition Cost vs CPA" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Customer Acquisition Cost vs CPA: What&apos;s the Difference?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              CPA and CAC are often used interchangeably, but they can describe different scopes.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CPA is usually campaign/action-specific</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            In advertising, CPA often means the cost per recorded acquisition or conversion:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Ad spend ÷ conversions.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            If Meta spends $10,000 and reports 250 purchases, platform CPA is $40.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CAC can include more of the acquisition system</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Customer Acquisition Cost is often calculated as total customer-acquisition expense divided by new customers. Depending on the business, that can include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>ad spend</li>
              <li>agency cost</li>
              <li>creative production</li>
              <li>sales staff</li>
              <li>marketing software</li>
              <li>other acquisition expenses</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Returning customers create another difference</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Platform CPA may include purchases from existing customers. CAC normally focuses on acquiring new customers.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Define the metric before using it</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A $40 Meta CPA and a $70 company CAC can both be correct because they measure different things.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Consistency matters more than arguing over terminology. Document what costs and customer types are included.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/new-customer-roas-vs-total-roas-which-matters-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">New Customer ROAS vs Total ROAS: Which Matters More?</Link></li>
            <li><Link href="/resources/how-to-calculate-cac-for-a-shopify-store" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate CAC for a Shopify Store</Link></li>
            <li><Link href="/resources/ltv-vs-cac-for-ecommerce-what-should-you-aim-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">LTV vs CAC for Ecommerce: What Should You Aim For?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your team uses CPA and CAC interchangeably and nobody can reconcile the numbers, send us an inquiry. We can build a clearer acquisition reporting framework.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
