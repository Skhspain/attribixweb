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
  headline: "How Currency Differences Affect Ecommerce ROAS",
  description: "ROAS can become confusing when ad spend, Shopify revenue and product costs are recorded in different currencies. How to normalize reporting so the numbers reconcile.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/currency-affects-ecommerce-roas" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Currency and ecommerce ROAS", item: "https://www.attribix.app/resources/currency-affects-ecommerce-roas" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Currency and ecommerce ROAS" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How currency differences affect ecommerce ROAS
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            ROAS can become confusing when ad spend, Shopify revenue and
            product costs are recorded in different currencies.
          </p>
        </Reveal>
      </section>

      {/* ONE REPORTING CURRENCY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use one reporting currency</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If Meta spends in GBP and Shopify sells in EUR, convert both
            into a consistent base currency before calculating
            business-level ROAS.
          </p>
        </Reveal>
      </section>

      {/* EXCHANGE RATES MOVE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Exchange rates move</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A campaign can appear slightly more or less efficient month to
              month even when customer behaviour stays similar if
              currencies move materially.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SHOPIFY MARKETS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shopify Markets adds another layer</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Customers may see local currency while your store/accounting
            records base currency. Make sure your attribution system uses
            the correct converted order value. The same principle is covered
            in{" "}
            <Link href="/resources/local-currency-vs-store-currency-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              local currency vs store currency for ecommerce ads
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* PLATFORM NUMBERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Platform numbers may not match exactly</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Meta, Google, Shopify and analytics tools can use different
              exchange-rate timing or conversion logic.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROFITABILITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Profitability matters more than nominal ROAS</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Costs such as COGS may be paid in another currency too.
              Exchange movement can therefore affect margin as well as
              reported sales.
            </p>
            <p>
              For international stores, currency normalization should be
              part of measurement rather than an afterthought.
            </p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/local-currency-vs-store-currency-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Local currency vs store currency: what should you use in ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/mer-vs-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER vs ROAS for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/ads-perform-differently-by-country-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why your ads perform well in one country and poorly in another
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">ROAS reports not reconciling across currencies?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If international revenue and ad spend sit in different
            currencies and your ROAS reports do not reconcile, send us an
            inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
