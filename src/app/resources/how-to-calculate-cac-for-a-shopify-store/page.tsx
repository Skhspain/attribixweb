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
  "headline": "How to Calculate CAC for a Shopify Store",
  "description": "A practical CAC calculation answers: how much did we spend to acquire each new customer?",
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
    "@id": "https://www.attribix.app/resources/how-to-calculate-cac-for-a-shopify-store"
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
      "name": "How to Calculate CAC for a Shopify Store",
      "item": "https://www.attribix.app/resources/how-to-calculate-cac-for-a-shopify-store"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Calculate CAC for a Shopify Store" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Calculate CAC for a Shopify Store
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A practical CAC calculation answers: how much did we spend to acquire each new customer?
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Basic formula</h2>
          <div className="space-y-4">

          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customer Acquisition Cost = acquisition costs ÷ new customers acquired</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If you spend $30,000 on acquisition during a month and acquire 600 first-time customers, CAC is $50.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Decide which costs belong in the numerator</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A narrow paid-media CAC might include only advertising. A fully loaded CAC might include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>Meta/Google spend</li>
            <li>agency fees</li>
            <li>creative production</li>
            <li>marketing payroll</li>
            <li>acquisition software</li>
            <li>sales commissions where relevant</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Use the version that matches the business question and label it clearly.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use new customers, not orders</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If 800 orders came from 600 new customers and 200 returning customers, dividing by all 800 understates new-customer acquisition cost.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare CAC with contribution and LTV</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            CAC is not good or bad in isolation. A $100 CAC can be excellent for a customer who generates $500 lifetime contribution and terrible for one who produces $70.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Track CAC over time and by channel where attribution allows, but keep a blended company view too.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/customer-acquisition-cost-vs-cpa-what-s-the-difference" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Customer Acquisition Cost vs CPA: What&apos;s the Difference?</Link></li>
            <li><Link href="/resources/ltv-vs-cac-for-ecommerce-what-should-you-aim-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">LTV vs CAC for Ecommerce: What Should You Aim For?</Link></li>
            <li><Link href="/resources/why-last-click-attribution-undervalues-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Last-Click Attribution Undervalues Meta Ads</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you know your ad CPA but not your true new-customer CAC, contact us. We can connect Shopify customer data with marketing cost.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
