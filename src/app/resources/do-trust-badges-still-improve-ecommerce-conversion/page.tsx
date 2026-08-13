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
  "headline": "Do Trust Badges Still Improve Ecommerce Conversion Rates?",
  "description": "Trust badges can reassure customers when they communicate something useful.",
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
    "@id": "https://www.attribix.app/resources/do-trust-badges-still-improve-ecommerce-conversion"
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
      "name": "Do Trust Badges Still Improve Ecommerce...",
      "item": "https://www.attribix.app/resources/do-trust-badges-still-improve-ecommerce-conversion"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Do Trust Badges Still Improve Ecommerce..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Do Trust Badges Still Improve Ecommerce Conversion Rates?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Trust badges can reassure customers when they communicate something useful. They can also make a professional store look suspicious when dozens of generic shields are placed around every button.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customers recognize real signals</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Useful trust cues include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>familiar payment methods</li>
            <li>secure checkout</li>
            <li>clear returns</li>
            <li>genuine reviews</li>
            <li>recognizable certifications where valid</li>
            <li>real contact/company information</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Generic badges can backfire</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              “100% SAFE CHECKOUT GUARANTEED” in a neon shield may introduce a security concern the customer was not thinking about.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Trust comes from the whole store</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Professional design, consistent branding, clear policies, product quality and transparent contact information often matter more than adding another icon.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use badges where the question appears</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Payment logos near payment information make sense. A warranty symbol beside the warranty can help. Fifteen icons directly under Add to Cart create noise.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Trust is built through consistency, not badge quantity.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-too-many-trust-badges-can-make-a-store-look-less" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Too Many Trust Badges Can Make a Store Look Less Trustworthy</Link></li>
            <li><Link href="/resources/should-shopify-stores-offer-free-returns" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify Stores Offer Free Returns?</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-guarantee-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Guarantee Be?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Use badges where the question appears</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store relies on dozens of trust icons but still feels less credible than your competitors, contact us. We can review the full customer experience.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
