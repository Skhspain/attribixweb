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
  "headline": "Do Free Gifts Convert Better Than Percentage Discounts?",
  "description": "A free gift can create higher perceived value than an equivalent discount, especially when the gift feels relevant and desirable.",
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
    "@id": "https://www.attribix.app/resources/do-free-gifts-convert-better-than-percentage-discounts"
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
      "name": "Do Free Gifts Convert Better Than Percentage...",
      "item": "https://www.attribix.app/resources/do-free-gifts-convert-better-than-percentage-discounts"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Do Free Gifts Convert Better Than Percentage..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Do Free Gifts Convert Better Than Percentage Discounts?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A free gift can create higher perceived value than an equivalent discount, especially when the gift feels relevant and desirable.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              It can also become an expensive piece of unwanted inventory placed into every order.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why gifts can work</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A percentage discount says:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “Pay less for the same purchase.”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A gift says:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “Get more for your purchase.”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            That can preserve the perceived price of the main product.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The gift must matter</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              An irrelevant low-quality accessory can reduce brand perception rather than increase value.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate real cost</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A product with $20 retail value may cost you only $5 to produce, making the perceived value much larger than a $5 discount.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>product cost</li>
            <li>picking/packing</li>
            <li>additional shipping weight</li>
            <li>inventory implications</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use thresholds if useful</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              “Free gift with orders over $100” can help AOV while controlling cost.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test contribution per visitor</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Conversion rate and AOV both matter. The best offer is the one creating more contribution profit, not the one with the biggest promotional headline.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/percentage-discount-vs-fixed-discount-which-works" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Percentage Discount vs Fixed Discount: Which Works Better?</Link></li>
            <li><Link href="/resources/buy-one-get-one-vs-percentage-discount-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Buy One Get One vs Percentage Discount for Ecommerce</Link></li>
            <li><Link href="/resources/should-you-show-competitor-price-comparisons-on" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Show Competitor Price Comparisons on Product Pages?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the offer is the problem?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are deciding between discounts and gifts for your next campaign, contact us. We can compare the offers against margin and customer behaviour.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
