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
  "headline": "How to Create Different Ad Angles for the Same Product",
  "description": "One product can solve several customer problems.",
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
    "@id": "https://www.attribix.app/resources/how-to-create-different-ad-angles-for-the-same-product"
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
      "name": "How to Create Different Ad Angles for the...",
      "item": "https://www.attribix.app/resources/how-to-create-different-ad-angles-for-the-same-product"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Create Different Ad Angles for the..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Create Different Ad Angles for the Same Product
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              One product can solve several customer problems. Those problems are your creative angles.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Example: insulated bottle
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Potential angles:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>keeps drinks cold</li>
              <li>leak-proof bag protection</li>
              <li>easy cleaning</li>
              <li>environmentally reusable</li>
              <li>gym use</li>
              <li>office use</li>
              <li>travel</li>
              <li>design/style</li>
              <li>durability</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              The product did not change. The reason to care did.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build angles from evidence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Use:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>reviews</li>
            <li>use cases</li>
            <li>support questions</li>
            <li>search terms</li>
            <li>competitor weaknesses</li>
            <li>product features</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">One ad should not sell every angle</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Trying to explain eight benefits in 20 seconds usually creates a weak ad.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Give one idea enough room to be memorable.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test broad concepts first</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If “leak-proof” clearly outperforms “temperature retention,” you have learned something useful about customer motivation.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Then test several executions of the leak-proof concept.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            The goal is a portfolio of proven selling ideas, not one “perfect” ad.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-ecommerce-ads-focus-on-pain-points-or-desired" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Ecommerce Ads Focus on Pain Points or Desired Outcomes?</Link></li>
            <li><Link href="/resources/how-many-ad-angles-should-you-test-before-changing-the" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Ad Angles Should You Test Before Changing the Offer?</Link></li>
            <li><Link href="/resources/why-testing-new-creatives-won-t-fix-a-weak-offer" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Testing New Creatives Won&apos;t Fix a Weak Offer</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your product has been advertised the same way for months, send us an inquiry. We can help build a larger creative-angle library.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
