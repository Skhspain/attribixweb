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
  "headline": "Percentage Discount vs Fixed Discount: Which Works Better?",
  "description": "“20% off” and “$20 off” can represent the same economic value on a $100 order and feel different to the customer.",
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
    "@id": "https://www.attribix.app/resources/percentage-discount-vs-fixed-discount-which-works"
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
      "name": "Percentage Discount vs Fixed Discount",
      "item": "https://www.attribix.app/resources/percentage-discount-vs-fixed-discount-which-works"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Percentage Discount vs Fixed Discount" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Percentage Discount vs Fixed Discount: Which Works Better?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              “20% off” and “$20 off” can represent the same economic value on a $100 order and feel different to the customer.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Fixed amounts are concrete</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            “Save $25” communicates the exact value immediately.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            This can feel particularly meaningful on lower-priced products where the dollar amount looks substantial.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Percentages scale with basket size</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A 20% discount costs the business more as AOV rises. That can help encourage bigger orders and reduce margin more heavily on those same orders.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the framing honestly</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Do not manipulate the comparison by making one offer economically much larger.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            For a $50 item:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            20% off = $10.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            $20 off is twice as expensive.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            If $20 wins, you may have tested discount depth rather than discount format.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider minimum spend</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A fixed $20 discount above $100 can help AOV while protecting smaller orders.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure margin</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The psychologically strongest offer is not automatically the financially strongest offer.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/buy-one-get-one-vs-percentage-discount-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Buy One Get One vs Percentage Discount for Ecommerce</Link></li>
            <li><Link href="/resources/do-free-gifts-convert-better-than-percentage-discounts" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Do Free Gifts Convert Better Than Percentage Discounts?</Link></li>
            <li><Link href="/resources/should-you-show-competitor-price-comparisons-on" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Show Competitor Price Comparisons on Product Pages?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you run frequent promotions but are not sure which discount structure produces the best profit, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
