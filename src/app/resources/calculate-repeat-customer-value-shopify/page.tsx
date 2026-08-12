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
  headline: "How to Calculate Repeat Customer Value for a Shopify Store",
  description: "Repeat customer value should be based on the contribution customers generate after their first purchase, not just the revenue they spend.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/calculate-repeat-customer-value-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Repeat customer value", item: "https://www.attribix.app/resources/calculate-repeat-customer-value-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Repeat customer value" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to calculate repeat customer value for a Shopify store
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Repeat customer value should be based on the contribution
            customers generate after their first purchase, not just the
            revenue they spend.
          </p>
        </Reveal>
      </section>

      {/* START WITH COHORTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with cohorts</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Take customers acquired in a defined month and track their later orders. For example:</p>
            <p>1,000 new customers acquired in January.</p>
            <p>Within 12 months they generate $120,000 additional revenue.</p>
            <p>Average repeat revenue = $120 per acquired customer.</p>
          </div>
        </Reveal>
      </section>

      {/* CONVERT REVENUE TO CONTRIBUTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Convert revenue to contribution</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>If repeat orders carry 45% contribution after product and variable costs:</p>
              <p>$120 × 45% = $54 expected repeat contribution per original customer.</p>
              <p>
                That $54 can inform how much more you might rationally
                spend on acquisition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACCOUNT FOR TIME */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Account for time</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            $54 earned within three months is more useful for scaling than
            $54 earned over four years.
          </p>
        </Reveal>
      </section>

      {/* SEGMENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>Repeat value can vary by:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>First product</li>
                <li>Country</li>
                <li>Acquisition channel</li>
                <li>Discount</li>
                <li>Subscription status</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AVOID SURVIVOR BIAS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid survivor bias</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Do not calculate value only from customers who returned. Include
            all originally acquired customers in the cohort denominator.
            This produces an expected repeat value you can actually use for
            acquisition decisions.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/repeat-purchase-rate-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why High Repeat Purchase Rate Changes Your Break-Even ROAS
              </Link>
            </li>
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
              <Link href="/resources/how-much-should-ecommerce-spend-to-acquire-customer" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much Should Ecommerce Brands Spend to Acquire a New Customer?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Put repeat value into your marketing targets</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store has repeat customers but you are not using
            that value in marketing targets, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
