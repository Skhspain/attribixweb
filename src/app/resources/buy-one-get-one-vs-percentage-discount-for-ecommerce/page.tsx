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
  "headline": "Buy One Get One vs Percentage Discount for Ecommerce",
  "description": "Buy One Get One promotions encourage unit volume.",
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "author": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.attribix.app/assets/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/buy-one-get-one-vs-percentage-discount-for-ecommerce"
  }
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.attribix.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.attribix.app/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Buy One Get One vs Percentage Discount for...",
      "item": "https://www.attribix.app/resources/buy-one-get-one-vs-percentage-discount-for-ecommerce"
    }
  ]
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Buy One Get One vs Percentage Discount for..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Buy One Get One vs Percentage Discount for Ecommerce
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Buy One Get One promotions encourage unit volume. Percentage discounts reduce the price of whatever the customer already intended to buy.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That difference affects both AOV and margin.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">BOGO can move more product</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            It works especially well when:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>products are replenishable</li>
            <li>customers can use multiples</li>
            <li>cost of goods is low relative to retail</li>
            <li>inventory needs to move</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Percentage discounts are more flexible</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A customer who only wants one product may prefer 20% off rather than being forced into two.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “Free” changes perception
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              BOGO can feel like a larger offer even when the economic discount is similar.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              But calculate the actual cost. Giving away an item with high COGS may be much more expensive than a smaller percentage discount.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch future demand</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If customers buy six months of supply during a promotion, near-term repeat purchase can decline.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A promotion changes purchase timing as well as conversion.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/percentage-discount-vs-fixed-discount-which-works" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Percentage Discount vs Fixed Discount: Which Works Better?</Link></li>
            <li><Link href="/resources/should-you-show-competitor-price-comparisons-on" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Show Competitor Price Comparisons on Product Pages?</Link></li>
            <li><Link href="/resources/do-free-gifts-convert-better-than-percentage-discounts" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Do Free Gifts Convert Better Than Percentage Discounts?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need a second opinion on the offer?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are planning a BOGO campaign and want to understand the impact on AOV, margin and repeat purchases, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
