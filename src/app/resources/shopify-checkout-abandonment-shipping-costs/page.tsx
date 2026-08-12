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
  headline: "Why Shopify Customers Abandon Checkout After Seeing Shipping Costs",
  description: "When checkout abandonment jumps after shipping appears, the customer has learned something about the deal they didn't know earlier. Here's how to diagnose by basket size, geography and timing.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-checkout-abandonment-shipping-costs" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Checkout abandonment and shipping", item: "https://www.attribix.app/resources/shopify-checkout-abandonment-shipping-costs" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Checkout abandonment and shipping" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Shopify customers abandon checkout after seeing shipping costs
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When checkout abandonment jumps after shipping appears, the
            problem is often not the checkout button. The customer has
            learned something about the deal they did not know earlier.
          </p>
        </Reveal>
      </section>

      {/* PERCEIVED VALUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shipping changes perceived value</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A shopper who accepted a $60 product may reject a $12 delivery
            fee because the total now feels too high, especially if
            competitors advertise free shipping.
          </p>
        </Reveal>
      </section>

      {/* TIMING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Timing matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Showing shipping policy, threshold or likely cost earlier lets
              customers evaluate the real purchase before they invest time
              in checkout.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BASKET SIZE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Diagnose by basket size</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A flat $8 shipping fee feels very different on a $20 order and a
            $150 order. Segment abandonment by basket value. You may
            discover that low-AOV carts need a different shipping strategy.
          </p>
        </Reveal>
      </section>

      {/* GEOGRAPHY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider geography</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              International or remote-region shipping can create extreme
              checkout costs. If paid campaigns target those areas without
              clear delivery information, the ads can generate apparently
              qualified traffic that never had a viable offer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEST PROFIT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test profit, not only completion</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Free shipping can lift conversion and reduce margin.
              Thresholds, product-price adjustments or multiple delivery
              options may produce better economics.
            </p>
            <p>
              The best fix is the one that reduces surprise while keeping
              the business profitable.
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
              <Link href="/resources/unexpected-shipping-costs-cart-abandonment" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why unexpected shipping costs kill ecommerce sales
              </Link>
            </li>
            <li>
              <Link href="/resources/show-delivery-date-product-page-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores show delivery dates before checkout?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-checkout-no-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify customers reach checkout but don&apos;t buy
              </Link>
            </li>
            <li>
              <Link href="/resources/increase-shopify-average-order-value" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to increase Shopify average order value without hurting conversion rate
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Model a shipping offer around AOV and margin, not guesswork</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If shipping costs are where your Shopify funnel breaks, contact
            us. We can analyse the checkout data and model a better offer
            around AOV and margin.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
