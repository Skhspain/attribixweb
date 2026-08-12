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
  "headline": "How to Find New Meta Ad Angles Without Guessing",
  "description": "The best ad angles usually already exist in customer language.",
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
    "@id": "https://www.attribix.app/resources/how-to-find-new-meta-ad-angles-without-guessing"
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
      "name": "How to Find New Meta Ad Angles Without Guessing",
      "item": "https://www.attribix.app/resources/how-to-find-new-meta-ad-angles-without-guessing"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Find New Meta Ad Angles Without Guessing" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Find New Meta Ad Angles Without Guessing
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              The best ad angles usually already exist in customer language. You do not need to invent them in a brainstorming room.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with reviews</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Look for repeated phrases around:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>why customers bought</li>
            <li>what surprised them</li>
            <li>what problem disappeared</li>
            <li>what alternatives they tried</li>
            <li>what nearly stopped them buying</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Read support conversations</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Pre-purchase questions reveal objections. Post-purchase messages reveal what customers value after using the product.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search communities</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Reddit, forums, YouTube comments and category-specific groups show how customers describe the problem before they know your brand.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Review search terms</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Google queries can reveal demand language that becomes Meta creative.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Study winning ads</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Do not only ask which video won. Ask what idea it sold.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Maybe the winner focused on convenience while all losing creatives focused on product quality.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Turn insights into hypotheses</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Instead of “Let&apos;s make another UGC video,” say:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “We believe customers care most about avoiding X, so we will build three executions around that problem.”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Now the creative test can teach you something.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/where-should-ecommerce-brands-get-ideas-for-new-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Where Should Ecommerce Brands Get Ideas for New Ad Creatives?</Link></li>
            <li><Link href="/resources/how-to-turn-customer-objections-into-high-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Turn Customer Objections Into High-Converting Ads</Link></li>
            <li><Link href="/resources/product-features-vs-customer-benefits-what-should-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Features vs Customer Benefits: What Should Ads Focus On?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the offer is the problem?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta team constantly needs “more creatives” but struggles to find new ideas, contact us. We can build angles from actual customer data.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
