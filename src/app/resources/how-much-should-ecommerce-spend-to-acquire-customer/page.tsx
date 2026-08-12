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
  headline: "How Much Should Ecommerce Brands Spend to Acquire a New Customer?",
  description: "The amount you can afford to spend on a new customer should come from the customer's expected contribution value, not an industry benchmark.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-much-should-ecommerce-spend-to-acquire-customer" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Acquisition cost target", item: "https://www.attribix.app/resources/how-much-should-ecommerce-spend-to-acquire-customer" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Acquisition cost target" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How much should ecommerce brands spend to acquire a new customer?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The amount you can afford to spend on a new customer should come
            from the customer&apos;s expected contribution value, not an
            industry benchmark.
          </p>
        </Reveal>
      </section>

      {/* FIRST ORDER ECONOMICS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with first-order economics</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Suppose:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Product revenue: $120</li>
              <li>Product and variable costs: $65</li>
              <li>Contribution before marketing = $55</li>
            </ul>
            <p>
              If you want $20 first-order contribution, your allowable
              acquisition cost is roughly $35.
            </p>
          </div>
        </Reveal>
      </section>

      {/* REPEAT VALUE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Then consider repeat value</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If customers reliably generate another $80 contribution over
              the next year, you may choose to spend more than $35 to
              acquire them. The important word is reliably. Do not fund
              aggressive acquisition using an optimistic LTV projection that
              has not appeared in real cohorts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASH FLOW */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Cash flow matters</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A customer worth $300 over three years is not the same as one
            worth $300 within 60 days. Fast payback supports much faster
            scaling. That topic is covered in{" "}
            <Link href="/resources/cac-payback-period-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              CAC payback period for ecommerce
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* SEGMENT QUALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment customer quality</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Customers acquired through deep discounts may have a lower
              future value than full-price customers. Channel, country and
              first product can all affect LTV. Set acquisition targets from
              actual contribution, retention and cash-flow needs.
              &quot;Our competitors pay $80&quot; is not an economic model.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/first-order-profit-vs-lifetime-value-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                First-Order Profit vs Lifetime Value: Which Should Drive Ad Spend?
              </Link>
            </li>
            <li>
              <Link href="/resources/cac-payback-period-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What Is CAC Payback Period in Ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/calculate-repeat-customer-value-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to Calculate Repeat Customer Value for a Shopify Store
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-advertising-budget-how-much-to-spend" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much Should a Shopify Store Spend on Meta and Google Ads?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Build an acquisition target from your own numbers</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want to know exactly what your business can afford to pay
            for a new Shopify customer, contact us. We can build the
            acquisition target from your numbers.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
