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
  headline: "Product Bundles vs Discounts: Which Increase AOV?",
  description: "A discount makes one purchase cheaper. A bundle can make a larger purchase feel more valuable. Here's why bundles often have better AOV potential, and how to compare contribution margin between the two.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/product-bundles-vs-discounts-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Bundles vs discounts", item: "https://www.attribix.app/resources/product-bundles-vs-discounts-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Bundles vs discounts" }]} />
          <Eyebrow>Creative &amp; Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Product bundles vs discounts: which increase AOV?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A discount makes one purchase cheaper. A bundle can make a
            larger purchase feel more valuable. That is why bundles often
            have better AOV potential, but only when the products genuinely
            belong together.
          </p>
        </Reveal>
      </section>

      {/* GOOD BUNDLES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Good bundles solve a bigger job</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A skincare routine, camera starter kit or three-month supply
            feels coherent. Randomly pairing slow-moving stock with a
            bestseller can feel like inventory clearance.
          </p>
        </Reveal>
      </section>

      {/* CONTRIBUTION MARGIN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare contribution margin</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                A 15% storewide discount reduces margin on every qualifying
                order. A bundle discount may increase units per order
                enough to offset the lower unit margin.
              </p>
              <p>Calculate:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>bundle AOV;</li>
                <li>product cost;</li>
                <li>fulfilment/shipping changes;</li>
                <li>discount cost;</li>
                <li>conversion rate;</li>
                <li>contribution profit per visitor.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUE OBVIOUS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Make the value obvious</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Show what the products would cost separately and why buying
            together makes sense. Do not force customers to do the
            arithmetic.
          </p>
        </Reveal>
      </section>

      {/* WATCH BASE PRODUCT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch whether bundles hurt the base product</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                If a complicated bundle makes the primary offer harder to
                understand, total conversion may fall even while bundle AOV
                rises.
              </p>
              <p>
                The best offer increases the value of the basket without
                making the buying decision harder.
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
              <Link href="/resources/increase-shopify-average-order-value" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to increase Shopify average order value without hurting conversion rate
              </Link>
            </li>
            <li>
              <Link href="/resources/discount-code-box-checkout-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is your Shopify discount code box hurting conversion rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/why-revenue-is-a-bad-metric-without-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why revenue is a bad metric without gross margin
              </Link>
            </li>
            <li>
              <Link href="/resources/cart-drawer-vs-cart-page-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify cart drawer vs cart page: which converts better?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Model bundles around margin, not just AOV</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want to raise Shopify AOV without relying on deeper
            sitewide discounts, send us an inquiry. We can model bundles
            around margin and conversion.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
