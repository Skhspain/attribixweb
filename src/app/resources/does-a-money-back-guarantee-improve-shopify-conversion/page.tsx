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
  "headline": "Does a Money-Back Guarantee Improve Shopify Conversion Rate?",
  "description": "A money-back guarantee can reduce the perceived risk of trying an unfamiliar product.",
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
    "@id": "https://www.attribix.app/resources/does-a-money-back-guarantee-improve-shopify-conversion"
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
      "name": "Does a Money-Back Guarantee Improve Shopify...",
      "item": "https://www.attribix.app/resources/does-a-money-back-guarantee-improve-shopify-conversion"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Does a Money-Back Guarantee Improve Shopify..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does a Money-Back Guarantee Improve Shopify Conversion Rate?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A money-back guarantee can reduce the perceived risk of trying an unfamiliar product. Its value depends on whether the customer actually believes the guarantee will be honoured.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Guarantees remove hesitation</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A shopper may think:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “What if it doesn&apos;t fit?”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “What if it does not work for me?”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “What if the quality is poor?”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A clear guarantee answers part of that concern.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Details matter</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              “100% satisfaction guaranteed” sounds good and tells the customer very little.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Explain:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>how long they have</li>
              <li>what qualifies</li>
              <li>who pays return shipping</li>
              <li>how refunds work</li>
              <li>exclusions</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Strong guarantees can signal confidence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A business willing to stand behind its product can appear more trustworthy, particularly when customer reviews support the promise.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate return risk</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A more generous guarantee may increase orders and returns. Compare contribution after refund/return cost.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not make claims you won&apos;t honour</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A guarantee that becomes difficult once the customer requests it will damage reviews and repeat purchase far more than the initial conversion lift is worth.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-you-show-competitor-price-comparisons-on" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Show Competitor Price Comparisons on Product Pages?</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-guarantee-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Guarantee Be?</Link></li>
            <li><Link href="/resources/should-shopify-stores-offer-free-returns" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify Stores Offer Free Returns?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need a second opinion on the offer?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If purchase hesitation is high and your return/guarantee policy is buried or unclear, send us an inquiry. We can review how risk is communicated.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
