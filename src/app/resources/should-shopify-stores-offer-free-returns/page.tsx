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
  "headline": "Should Shopify Stores Offer Free Returns?",
  "description": "Free returns can reduce purchase risk, particularly for products where size, fit or appearance is difficult to judge online.",
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
    "@id": "https://www.attribix.app/resources/should-shopify-stores-offer-free-returns"
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
      "name": "Should Shopify Stores Offer Free Returns",
      "item": "https://www.attribix.app/resources/should-shopify-stores-offer-free-returns"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Shopify Stores Offer Free Returns" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify Stores Offer Free Returns?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Free returns can reduce purchase risk, particularly for products where size, fit or appearance is difficult to judge online.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              They can also be extremely expensive in categories with high return rates.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Where free returns have strong value</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Fashion, footwear and certain premium products often create genuine uncertainty before the customer can physically try the item.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate the cost correctly</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>return shipping</li>
              <li>processing</li>
              <li>damaged packaging</li>
              <li>restocking</li>
              <li>unsellable inventory</li>
              <li>refunds/payment costs</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider why customers return</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If return volume is high because sizing information is poor, free returns are treating the symptom. Better photography, measurements and fit guidance may reduce both hesitation and return cost.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Offer structures can vary</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              You might provide:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>free exchanges but paid refunds</li>
              <li>free first return</li>
              <li>free returns above an order threshold</li>
              <li>free returns for loyalty members</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              Any policy should comply with relevant consumer law.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion is only half the equation</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A policy that increases orders 10% and increases return costs 30% may reduce profit.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-long-should-an-ecommerce-guarantee-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Guarantee Be?</Link></li>
            <li><Link href="/resources/do-trust-badges-still-improve-ecommerce-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Do Trust Badges Still Improve Ecommerce Conversion Rates?</Link></li>
            <li><Link href="/resources/does-a-money-back-guarantee-improve-shopify-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does a Money-Back Guarantee Improve Shopify Conversion Rate?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If return policy is a major customer objection but you cannot afford unlimited free returns, send us an inquiry. We can help evaluate the commercial trade-off.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
