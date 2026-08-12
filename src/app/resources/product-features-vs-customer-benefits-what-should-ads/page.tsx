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
  "headline": "Product Features vs Customer Benefits: What Should Ads Focus On?",
  "description": "Features explain what the product has.",
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
    "@id": "https://www.attribix.app/resources/product-features-vs-customer-benefits-what-should-ads"
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
      "name": "Product Features vs Customer Benefits",
      "item": "https://www.attribix.app/resources/product-features-vs-customer-benefits-what-should-ads"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Product Features vs Customer Benefits" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Product Features vs Customer Benefits: What Should Ads Focus On?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Features explain what the product has. Benefits explain what those features change for the customer.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Good advertising often needs both.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Feature without benefit</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            “10,000mAh battery.”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Useful to someone who understands the specification. Meaningless to someone who doesn&apos;t.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Benefit without proof</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              “Never worry about your phone dying again.”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Compelling, but vague without explaining why.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Combine them</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            “10,000mAh capacity gives you roughly X additional charges under stated test conditions.”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Now the feature supports the outcome.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Different customers care about different depth</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Technical buyers may actively compare specifications. Lifestyle buyers may care mainly about the practical outcome.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Demonstration can communicate both</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Showing a jacket staying dry in heavy rain demonstrates the waterproof feature and the customer benefit at the same time.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Use features as evidence. Use benefits as the reason to care.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-turn-customer-objections-into-high-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Turn Customer Objections Into High-Converting Ads</Link></li>
            <li><Link href="/resources/should-ecommerce-ads-focus-on-pain-points-or-desired" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Ecommerce Ads Focus on Pain Points or Desired Outcomes?</Link></li>
            <li><Link href="/resources/how-to-create-different-ad-angles-for-the-same-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Create Different Ad Angles for the Same Product</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ads list product specifications but struggle to explain why customers should want them, contact us. We can help turn features into stronger selling angles.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
