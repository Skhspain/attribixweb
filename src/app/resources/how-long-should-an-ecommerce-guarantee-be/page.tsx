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
  "headline": "How Long Should an Ecommerce Guarantee Be?",
  "description": "There is no conversion rule saying 30 days is always worse than 60 or 90.",
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
    "@id": "https://www.attribix.app/resources/how-long-should-an-ecommerce-guarantee-be"
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
      "name": "How Long Should an Ecommerce Guarantee Be",
      "item": "https://www.attribix.app/resources/how-long-should-an-ecommerce-guarantee-be"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Long Should an Ecommerce Guarantee Be" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Long Should an Ecommerce Guarantee Be?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              There is no conversion rule saying 30 days is always worse than 60 or 90.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The appropriate guarantee period should give customers enough time to evaluate the product while remaining operationally and financially sensible.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the product</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A customer can evaluate a T-shirt almost immediately. A skincare product or training product may require more time before the promised experience can reasonably be assessed.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Longer can reduce risk</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A 60-day guarantee can feel more confident than 14 days, especially when competitors offer shorter periods.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Longer doesn&apos;t necessarily mean more returns</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Some businesses find that customers feel less urgency to return when the deadline is generous, but do not assume this applies universally.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Be clear about when the clock starts</h2>
            <div className="space-y-4 max-w-2xl">

            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Order date? Delivery date? First use?</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Make the rule understandable.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Legal return rights are separate</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Consumer laws may grant rights beyond your voluntary guarantee and vary by market. A marketing guarantee should not be written as if it replaces legal obligations.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Choose a period based on product use, customer confidence and real return economics.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-shopify-stores-offer-free-returns" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify Stores Offer Free Returns?</Link></li>
            <li><Link href="/resources/does-a-money-back-guarantee-improve-shopify-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does a Money-Back Guarantee Improve Shopify Conversion Rate?</Link></li>
            <li><Link href="/resources/do-trust-badges-still-improve-ecommerce-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Do Trust Badges Still Improve Ecommerce Conversion Rates?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the offer is the problem?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your guarantee exists mostly in fine print and does little to support conversion, contact us. We can help communicate it more clearly.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
