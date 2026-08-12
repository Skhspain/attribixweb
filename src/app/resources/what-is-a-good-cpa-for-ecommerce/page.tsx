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
  "headline": "What Is a Good CPA for Ecommerce?",
  "description": "A good CPA is not an industry number.",
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
    "@id": "https://www.attribix.app/resources/what-is-a-good-cpa-for-ecommerce"
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
      "name": "What Is a Good CPA for Ecommerce",
      "item": "https://www.attribix.app/resources/what-is-a-good-cpa-for-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Is a Good CPA for Ecommerce" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is a Good CPA for Ecommerce?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A good CPA is not an industry number. It is a customer acquisition cost your margins and customer value can afford.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Two stores can sell products at the same price and have completely different acceptable CPAs because one has 70% gross margin and the other has 25%.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate your allowable CPA first</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Start with contribution before advertising:
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Revenue</h2>
            <div className="space-y-4 max-w-2xl">

            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">minus product cost</h2>
          <div className="space-y-4">

          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">minus fulfilment/payment/shipping subsidies</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              minus expected refunds and other variable costs.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That tells you how much room exists before the first order becomes unprofitable.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Then decide how much contribution you want to keep</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If an order leaves $50 before ads, a $50 CPA may be break-even. You might set a $30 target to retain $20 contribution. A high-retention business may deliberately accept $55 for a first-time customer if future purchases reliably recover the difference.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment the number</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              New-customer CPA and returning-customer CPA are not the same business question. Meta prospecting, branded Google and email can all produce very different acquisition costs.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Use benchmarks only as context. A “high” CPA can be excellent for a valuable customer, while a “cheap” CPA can still lose money.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/roas-vs-profit-why-high-roas-doesn-t-always-mean-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">ROAS vs Profit: Why High ROAS Doesn&apos;t Always Mean More Profit</Link></li>
            <li><Link href="/resources/break-even-cpa-explained-for-shopify-stores" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Break-Even CPA Explained for Shopify Stores</Link></li>
            <li><Link href="/resources/why-revenue-is-a-bad-metric-without-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Revenue Is a Bad Metric Without Gross Margin</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you do not know what CPA your Shopify store can actually afford, send us an inquiry. We can calculate the target from your real unit economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
