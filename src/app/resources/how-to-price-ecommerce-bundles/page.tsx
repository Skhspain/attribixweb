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
  headline: "How to Price Ecommerce Bundles Without Destroying Margin",
  description: "A bundle needs enough perceived value to justify buying more, but it does not automatically need a huge discount. Calculating standalone contribution, cannibalization and order contribution.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-to-price-ecommerce-bundles" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Pricing bundles", item: "https://www.attribix.app/resources/how-to-price-ecommerce-bundles" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Pricing bundles" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to price ecommerce bundles without destroying margin
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A bundle needs enough perceived value to justify buying more, but
            it does not automatically need a huge discount.
          </p>
        </Reveal>
      </section>

      {/* STANDALONE CONTRIBUTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate the standalone contribution</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Add the individual retail prices and contribution margins. This
            tells you what the business would keep if customers bought the
            same items separately.
          </p>
        </Reveal>
      </section>

      {/* REASON TO BUNDLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Decide the reason to bundle</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Value can come from:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>A modest saving</li>
                <li>Convenience</li>
                <li>Exclusive product/size</li>
                <li>Gift packaging</li>
                <li>Free shipping</li>
                <li>Bonus item</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DISCOUNT THE MARGIN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Discount the margin, not the headline</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A &quot;20% bundle saving&quot; sounds simple but can eliminate
            most profit on low-margin components. Model product cost,
            fulfilment, shipping and acquisition.
          </p>
        </Reveal>
      </section>

      {/* CANNIBALIZATION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch cannibalization</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If existing customers who would have bought two full-price
              products switch to a discounted bundle, some bundle revenue is
              not incremental.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEST ORDER CONTRIBUTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test order contribution</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            The goal is not the highest bundle adoption rate. It is a
            bigger, more profitable basket without excessive conversion
            loss.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/product-bundling-vs-upselling-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Product bundling vs upselling: which is better for ecommerce?
                </Link>
              </li>
              <li>
                <Link href="/resources/contribution-margin-vs-gross-margin-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Contribution margin vs gross margin for ecommerce advertising
                </Link>
              </li>
              <li>
                <Link href="/resources/calculate-profitable-free-shipping-threshold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How to calculate a profitable free shipping threshold
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Calculate the offer before scaling it</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are building bundles for Meta or Google campaigns, send
            us an inquiry. We can calculate the offer before scaling paid
            traffic into it.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
