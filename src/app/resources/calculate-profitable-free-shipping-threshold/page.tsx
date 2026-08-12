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
  headline: "How to Calculate a Profitable Free Shipping Threshold",
  description: "A profitable free shipping threshold needs to generate enough additional contribution to cover the shipping cost you take on. A four-step model using AOV, margin and shipping cost.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/calculate-profitable-free-shipping-threshold" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Profitable free shipping threshold", item: "https://www.attribix.app/resources/calculate-profitable-free-shipping-threshold" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Profitable free shipping threshold" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to calculate a profitable free shipping threshold
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A profitable threshold needs to generate enough additional
            contribution to cover the shipping cost you take on.
          </p>
        </Reveal>
      </section>

      {/* STEP 1 */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 1: Know current AOV and contribution</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>Assume:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Current AOV: $60</li>
              <li>Contribution before shipping subsidy: 45%</li>
              <li>Average shipping cost: $8</li>
            </ul>
            <p>Current contribution before paid shipping is $27.</p>
          </div>
        </Reveal>
      </section>

      {/* STEP 2 */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 2: Test a threshold</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Set free shipping at $80. If customers add $20 of products
                with 45% contribution, that adds $9 contribution.
              </p>
              <p>
                The extra $9 roughly covers the $8 shipping cost, leaving a
                small improvement before considering any conversion lift.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 3: Model behaviour</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Not every customer will increase basket size. Some $80+ customers
            already existed and now receive free shipping they previously
            paid for. Include that subsidy cost.
          </p>
        </Reveal>
      </section>

      {/* STEP 4 */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 4: Test live results</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Measure:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>AOV</li>
                <li>Conversion rate</li>
                <li>Percentage of orders above threshold</li>
                <li>Shipping subsidy</li>
                <li>Contribution per visitor</li>
              </ul>
              <p>
                The threshold is profitable when the combined
                AOV/conversion lift exceeds the additional shipping cost.
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
              <Link href="/resources/set-free-shipping-threshold-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Free shipping threshold: how should Shopify stores set it?
              </Link>
            </li>
            <li>
              <Link href="/resources/free-shipping-threshold-above-aov" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should your free shipping threshold be above your current AOV?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-price-ecommerce-bundles" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to price ecommerce bundles without destroying margin
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Model a threshold against your real order data</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you&apos;d like to model a threshold against your real
            Shopify basket distribution rather than guess one, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
