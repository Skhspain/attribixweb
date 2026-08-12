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
  "headline": "How to Calculate Break-Even ROAS for Ecommerce",
  "description": "Break-even ROAS tells you the revenue-to-ad-spend ratio at which the order has no contribution left after the costs you choose to include.",
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
    "@id": "https://www.attribix.app/resources/how-to-calculate-break-even-roas-for-ecommerce"
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
      "name": "How to Calculate Break-Even ROAS for Ecommerce",
      "item": "https://www.attribix.app/resources/how-to-calculate-break-even-roas-for-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Calculate Break-Even ROAS for Ecommerce" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Calculate Break-Even ROAS for Ecommerce
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Break-even ROAS tells you the revenue-to-ad-spend ratio at which the order has no contribution left after the costs you choose to include.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A simple starting point uses gross margin.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Basic formula</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If gross margin before advertising is 40%, you keep $0.40 from every $1 of revenue before ad cost.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            The simple break-even ROAS is:
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">1 ÷ gross margin</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              For 40% margin:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              1 ÷ 0.40 = 2.5x = 250%.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              At 250% ROAS, $100 of ad spend generates $250 revenue. Forty percent of $250 is $100, exactly covering the advertising.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Real businesses have more costs</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            For a more useful target, account for costs such as:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>payment fees</li>
            <li>fulfilment</li>
            <li>shipping subsidy</li>
            <li>returns/refunds</li>
            <li>discounts</li>
            <li>variable customer service cost</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Use contribution margin after those costs rather than headline gross margin.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Break-even is not a growth target</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Running permanently at true break-even leaves nothing for overhead or profit unless future customer value justifies it. Most businesses need a target ROAS safely above break-even.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">New customer LTV can change the calculation</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If customers reliably reorder profitably, you may intentionally accept a lower first-order ROAS. Make that a deliberate customer-acquisition decision, not an excuse for weak campaigns.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/break-even-cpa-explained-for-shopify-stores" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Break-Even CPA Explained for Shopify Stores</Link></li>
            <li><Link href="/resources/why-platform-roas-can-look-great-while-your-business" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Platform ROAS Can Look Great While Your Business Loses Money</Link></li>
            <li><Link href="/resources/what-is-a-good-cpa-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good CPA for Ecommerce?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if ROAS is telling the full story?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want help setting ROAS targets from your actual margins instead of a generic benchmark, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
