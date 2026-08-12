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
  "headline": "How to Measure Email Profitability Instead of Just Revenue",
  "description": "Attributed email revenue is easy to celebrate.",
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
    "@id": "https://www.attribix.app/resources/how-to-measure-email-profitability-instead-of-just"
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
      "name": "How to Measure Email Profitability Instead...",
      "item": "https://www.attribix.app/resources/how-to-measure-email-profitability-instead-of-just"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Measure Email Profitability Instead..." }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Measure Email Profitability Instead of Just Revenue
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Attributed email revenue is easy to celebrate. Profit is harder because discounts, product margins and channel overlap matter.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with attributed orders, then add economics</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            For each campaign or flow, consider:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>revenue</li>
            <li>product cost</li>
            <li>discount cost</li>
            <li>shipping subsidy</li>
            <li>payment/fulfilment</li>
            <li>email/SMS platform cost</li>
            <li>refunds</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            The remaining contribution tells you more than revenue alone.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Discount campaigns can deceive</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A 25%-off campaign may generate twice the revenue of a full-price message and less contribution profit.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution overlap remains</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The email platform may claim orders also attributed to Meta or Google. Profit calculations should use actual Shopify order economics and avoid summing duplicated channel revenue.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider incremental lift</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Where possible, compare holdouts or different send strategies. A campaign can be profitable on attributed orders and still have low incremental effect because many recipients would have bought anyway.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Use email revenue to manage the program; use contribution and incremental evidence to decide how valuable the program is to the business.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/good-email-click-rate-but-no-sales-what-to-check" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Good Email Click Rate but No Sales: What to Check</Link></li>
            <li><Link href="/resources/what-is-a-good-repeat-purchase-rate-for-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Repeat Purchase Rate for Shopify?</Link></li>
            <li><Link href="/resources/why-your-shopify-store-gets-customers-but-few-repeat" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Shopify Store Gets Customers but Few Repeat Purchases</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clearer read on retention?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If email revenue looks impressive but you cannot tell how much profit it creates, send us an inquiry. We can help reconcile channel attribution with Shopify economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
