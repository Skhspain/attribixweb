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
  headline: "First-Order Profit vs Lifetime Value: Which Should Drive Ad Spend?",
  description: "First-order profit protects cash. Lifetime value can justify growth. The right balance depends on how predictable your repeat customer behaviour is.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/first-order-profit-vs-lifetime-value-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "First-order profit vs LTV", item: "https://www.attribix.app/resources/first-order-profit-vs-lifetime-value-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "First-order profit vs LTV" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            First-order profit vs lifetime value: which should drive ad spend?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            First-order profit protects cash. Lifetime value can justify
            growth. The right balance depends on how predictable your
            repeat customer behaviour is.
          </p>
        </Reveal>
      </section>

      {/* FIRST ORDER SAFER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">First-order profitability is safer</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If every new customer contributes profit immediately, the
            business can recycle cash into advertising with less financial
            risk. This matters especially for businesses with limited
            capital or unpredictable retention.
          </p>
        </Reveal>
      </section>

      {/* LTV CAN JUSTIFY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">LTV can justify lower first-order efficiency</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A subscription brand or replenishable product may know that a
              new customer acquired at a first-order loss becomes highly
              profitable after several repeat purchases. That can support a
              higher allowable CAC.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IMAGINARY LTV */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The danger is imaginary LTV</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A business can convince itself that bad acquisition is
            acceptable because &quot;customers will come back.&quot; If
            cohorts do not actually repeat at the required rate, LTV becomes
            an excuse rather than a strategy.
          </p>
        </Reveal>
      </section>

      {/* COHORT EVIDENCE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use cohort evidence</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>Track:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>First-order contribution</li>
                <li>Repeat contribution by month</li>
                <li>Payback period</li>
                <li>Retention by acquisition source</li>
                <li>Churn/refunds</li>
              </ul>
              <p>
                Use LTV to expand spend only when historical customer
                behaviour supports the assumption.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/how-much-should-ecommerce-spend-to-acquire-customer" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much Should Ecommerce Brands Spend to Acquire a New Customer?
              </Link>
            </li>
            <li>
              <Link href="/resources/lose-money-first-order-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When Is It Okay to Lose Money on the First Shopify Order?
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
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know how much future value you can safely count on</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your advertising is near break-even on the first order and
            you are unsure how much future customer value you can safely
            count on, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
