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
  headline: "Why Unexpected Shipping Costs Kill Ecommerce Sales",
  description: "A shopper can accept a $79 product and still abandon when checkout suddenly becomes $94. Here's why the surprise matters more than the amount, and how to diagnose shipping-driven cart abandonment.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/unexpected-shipping-costs-cart-abandonment" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Unexpected shipping costs", item: "https://www.attribix.app/resources/unexpected-shipping-costs-cart-abandonment" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Unexpected shipping costs" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why unexpected shipping costs kill ecommerce sales
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Unexpected shipping feels different from a product price because
            it appears after the customer has already invested time in the
            buying process. A shopper can accept a $79 product and still
            abandon when checkout suddenly becomes $94.
          </p>
        </Reveal>
      </section>

      {/* SURPRISE WORSE THAN AMOUNT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The surprise is often worse than the amount</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Customers may tolerate a $10 delivery charge if they know about
            it from the product page. Discovering the same fee after
            entering personal details can feel like the deal changed.
          </p>
        </Reveal>
      </section>

      {/* PAID TRAFFIC EXPENSIVE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Paid traffic makes the problem expensive</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                You may pay Meta or Google to acquire the visitor,
                successfully persuade them to add to cart and then lose the
                sale because shipping was hidden.
              </p>
              <p>
                That is why strong ad metrics and healthy cart rates can
                coexist with poor purchase performance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OPTIONS TO TEST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Options to test</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>communicate shipping early;</li>
              <li>offer a free-shipping threshold;</li>
              <li>incorporate some shipping into product price;</li>
              <li>provide economical and express choices;</li>
              <li>show delivery timing with cost.</li>
            </ul>
            <p>Each has margin implications.</p>
          </div>
        </Reveal>
      </section>

      {/* DIAGNOSE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Diagnose checkout abandonment</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Compare cart and checkout steps by country, basket value and
              device. If abandonment spikes when shipping appears, you have
              stronger evidence than a generic CRO rule.
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
              <Link href="/resources/shopify-checkout-abandonment-shipping-costs" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify customers abandon checkout after seeing shipping costs
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
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Lots of add to carts but no purchases on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Stop losing paid traffic at the shipping surprise</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify funnel looks healthy until shipping is
            calculated, send us an inquiry. We can model a shipping offer
            that improves conversion without ignoring margin.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
