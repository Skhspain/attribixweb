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
  "headline": "How to Know Whether You Have a Creative Problem or an Offer Problem",
  "description": "Creative problems usually appear before or around the click.",
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
    "@id": "https://www.attribix.app/resources/how-to-know-whether-you-have-a-creative-problem-or-an"
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
      "name": "How to Know Whether You Have a Creative...",
      "item": "https://www.attribix.app/resources/how-to-know-whether-you-have-a-creative-problem-or-an"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Know Whether You Have a Creative..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Know Whether You Have a Creative Problem or an Offer Problem
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Creative problems usually appear before or around the click. Offer problems often appear after qualified interest has already been created.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That distinction is not perfect, but it is a useful diagnostic start.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Signs creative may be the problem</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>weak CTR across concepts</li>
            <li>poor video retention</li>
            <li>expensive CPC despite normal CPM</li>
            <li>customers do not understand the product</li>
            <li>better creatives materially change traffic quality</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Signs the offer may be the problem</h2>
            <div className="space-y-4 max-w-2xl">
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>relevant ads generate strong clicks</li>
              <li>visitors engage with the product</li>
              <li>Add-to-Cart remains weak</li>
              <li>search traffic shows the same behaviour</li>
              <li>conversion only becomes acceptable under deep discounts</li>
              <li>customers repeatedly object to price/shipping/value</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Landing page can sit between them</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            An ad may be strong and the offer may be good while the product page explains both poorly.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Tracking can distort diagnosis</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If Shopify sales happen but Meta reports none, neither the creative nor offer may be the issue.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Follow the funnel in order:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Impression → click → landing experience → cart → checkout → purchase.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The first point where performance breaks deserves attention.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-your-best-performing-ad-may-not-be-your-best" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Best-Performing Ad May Not Be Your Best Creative</Link></li>
            <li><Link href="/resources/why-testing-new-creatives-won-t-fix-a-weak-offer" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Testing New Creatives Won&apos;t Fix a Weak Offer</Link></li>
            <li><Link href="/resources/meta-ads-hook-rate-vs-sales-which-matters-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads Hook Rate vs Sales: Which Matters More?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your team cannot agree whether ads, website or offer are causing poor performance, send us an inquiry. We can diagnose the full funnel rather than guess.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
