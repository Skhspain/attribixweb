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
  headline: "Should Shopify Stores Show Delivery Dates Before Checkout?",
  description: "Delivery timing is part of the product decision, not a detail customers should discover at checkout. Here's how to show an accurate estimate without overpromising, and why localizing it matters.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/show-delivery-date-product-page-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Delivery dates", item: "https://www.attribix.app/resources/show-delivery-date-product-page-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Delivery dates" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify stores show delivery dates before checkout?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Yes, when you can show a reasonably accurate estimate. Delivery
            timing is part of the product decision, not a detail customers
            should discover at the final checkout step.
          </p>
        </Reveal>
      </section>

      {/* BUY FOR A DATE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customers often buy for a date</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Gifts, travel products, event clothing and replacement items can
            become worthless if they arrive too late. A clear estimate
            reduces that uncertainty.
          </p>
        </Reveal>
      </section>

      {/* BE SPECIFIC */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Be specific without overpromising</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                &quot;Ships fast&quot; is vague. &quot;Estimated delivery
                Aug 14–16&quot; is useful if your fulfilment and carrier
                data can support it.
              </p>
              <p>
                Do not promise an exact date you cannot reliably meet just
                because certainty increases conversion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCALIZE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Localize when possible</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Delivery expectations differ by country, postcode, stock
            location and shipping method. A global statement can be
            misleading.
          </p>
        </Reveal>
      </section>

      {/* COST AND TIMING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Show cost and timing together</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Customers evaluate shipping as a package: how much, how long
              and whether tracking/returns are available. Hiding one part
              until checkout creates surprise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WATCH METRICS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch cancellation and support metrics too</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A delivery estimate that increases conversion but creates
            late-order complaints is not a win. The information should
            improve both purchase confidence and expectation accuracy.
          </p>
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
              <Link href="/resources/shopify-checkout-abandonment-shipping-costs" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify customers abandon checkout after seeing shipping costs
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-checkout-no-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify customers reach checkout but don&apos;t buy
              </Link>
            </li>
            <li>
              <Link href="/resources/how-many-product-images-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many product images should a Shopify product page have?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Give customers the delivery answer before they abandon checkout</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If customers abandon late in checkout because shipping time is
            unclear, contact us. We can review where delivery information
            belongs in the paid-traffic journey.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
