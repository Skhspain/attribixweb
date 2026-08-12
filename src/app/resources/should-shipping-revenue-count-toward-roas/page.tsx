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
  "headline": "Should Shipping Revenue Count Toward ROAS?",
  "description": "Whether shipping charged to the customer belongs in ROAS depends on what you want the revenue figure to represent.",
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
    "@id": "https://www.attribix.app/resources/should-shipping-revenue-count-toward-roas"
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
      "name": "Should Shipping Revenue Count Toward ROAS",
      "item": "https://www.attribix.app/resources/should-shipping-revenue-count-toward-roas"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Shipping Revenue Count Toward ROAS" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shipping Revenue Count Toward ROAS?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Whether shipping charged to the customer belongs in ROAS depends on what you want the revenue figure to represent. The most important thing is consistency.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Gross order value can include shipping</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the advertising platform receives the Shopify order total including shipping, platform ROAS may use that value.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">But shipping is not product margin</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A $10 shipping charge may simply reimburse an $8 carrier cost. Counting the $10 as valuable revenue without the cost can make profitability look slightly better than it is.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">For contribution analysis, separate it</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Use:
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product revenue</h2>
            <div className="space-y-4 max-w-2xl">
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>shipping collected</li>
              <li>product cost</li>
              <li>actual shipping cost/subsidy</li>
              <li>payment/fulfilment</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              = contribution before ads.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep channel comparisons aligned</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Do not send shipping-inclusive values to one platform and shipping-exclusive values to another if you expect ROAS to be comparable.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            For platform optimization, consistent purchase value is useful. For profit, treat shipping revenue together with shipping cost rather than as free margin.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-refunds-affect-your-true-advertising-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Refunds Affect Your True Advertising ROAS</Link></li>
            <li><Link href="/resources/should-tax-be-included-in-ecommerce-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Tax Be Included in Ecommerce ROAS?</Link></li>
            <li><Link href="/resources/how-discounts-change-your-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Discounts Change Your Break-Even ROAS</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if ROAS is telling the full story?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta, Google and Shopify are using different definitions of purchase value, send us an inquiry. We can standardize the measurement.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
