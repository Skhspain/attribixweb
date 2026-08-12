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
  "headline": "Should Tax Be Included in Ecommerce ROAS?",
  "description": "Tax collected from the customer is usually money the business collects on behalf of a tax authority rather than economic revenue it gets to keep.",
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
    "@id": "https://www.attribix.app/resources/should-tax-be-included-in-ecommerce-roas"
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
      "name": "Should Tax Be Included in Ecommerce ROAS",
      "item": "https://www.attribix.app/resources/should-tax-be-included-in-ecommerce-roas"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Tax Be Included in Ecommerce ROAS" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Tax Be Included in Ecommerce ROAS?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Tax collected from the customer is usually money the business collects on behalf of a tax authority rather than economic revenue it gets to keep. For profitability analysis, excluding tax often produces a cleaner view.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Platform conversion values may differ</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Depending on your Shopify integration and configuration, Meta or Google purchase values may include or exclude taxes. That can create ROAS discrepancies even when conversion counts match.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consistency matters most for optimization</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If Google receives tax-inclusive order value while Meta receives tax-exclusive value, comparing platform ROAS directly becomes harder.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">For contribution, use net economics</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A useful profit model starts with revenue the business actually retains, then subtracts product and other variable costs. Tax liabilities should not be treated as margin.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">International stores need extra care</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              VAT/sales-tax treatment differs by market and accounting setup. Use your accounting definitions and current legal guidance for financial reporting.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The marketing team should document exactly what “revenue” means in every dashboard before debating ROAS differences.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-shipping-revenue-count-toward-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shipping Revenue Count Toward ROAS?</Link></li>
            <li><Link href="/resources/should-creative-production-costs-be-included-in-cac" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Creative Production Costs Be Included in CAC?</Link></li>
            <li><Link href="/resources/how-refunds-affect-your-true-advertising-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Refunds Affect Your True Advertising ROAS</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify, Meta and Google revenue figures differ because of tax, shipping or discount handling, contact us. We can help normalize the measurement.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
