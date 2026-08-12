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
  "headline": "What Is a Good Repeat Purchase Rate for Shopify?",
  "description": "A good repeat purchase rate depends heavily on what you sell.",
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
    "@id": "https://www.attribix.app/resources/what-is-a-good-repeat-purchase-rate-for-shopify"
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
      "name": "What Is a Good Repeat Purchase Rate for Shopify",
      "item": "https://www.attribix.app/resources/what-is-a-good-repeat-purchase-rate-for-shopify"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Is a Good Repeat Purchase Rate for Shopify" }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is a Good Repeat Purchase Rate for Shopify?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A good repeat purchase rate depends heavily on what you sell.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Coffee, skincare and pet food naturally create more repeat opportunities than sofas or wedding rings. Comparing them to one universal ecommerce benchmark is not useful.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure the opportunity first</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Ask how often a satisfied customer could reasonably need the product again. If the natural replenishment cycle is 60 days, measure cohorts across enough time to give them that chance.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment by first product</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Customers acquired through different products can have very different repeat behaviour. A starter kit may create stronger retention than a discounted one-off item.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use contribution, not just order count</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Repeat orders often have lower acquisition cost, but discounts, loyalty rewards and shipping still affect profit.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare cohorts</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Track customers acquired in January, February, March and so on. Are newer cohorts repeating more or less? This is more actionable than one blended lifetime rate.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A strong repeat purchase rate is one that supports profitable LTV for the category and customer acquisition cost.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-your-shopify-store-gets-customers-but-few-repeat" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Shopify Store Gets Customers but Few Repeat Purchases</Link></li>
            <li><Link href="/resources/how-to-measure-email-profitability-instead-of-just" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Measure Email Profitability Instead of Just Revenue</Link></li>
            <li><Link href="/resources/how-to-increase-repeat-purchase-rate-without-constant" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Increase Repeat Purchase Rate Without Constant Discounts</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the flow is pulling its weight?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If paid acquisition looks expensive but your customers reorder frequently, contact us. We can help connect first-order ROAS to repeat customer value.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
