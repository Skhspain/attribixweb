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
  "headline": "Why Last-Click Attribution Undervalues Meta Ads",
  "description": "Meta often introduces customers before they are ready to buy.",
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
    "@id": "https://www.attribix.app/resources/why-last-click-attribution-undervalues-meta-ads"
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
      "name": "Why Last-Click Attribution Undervalues Meta Ads",
      "item": "https://www.attribix.app/resources/why-last-click-attribution-undervalues-meta-ads"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Last-Click Attribution Undervalues Meta Ads" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Last-Click Attribution Undervalues Meta Ads
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Meta often introduces customers before they are ready to buy. Last-click attribution gives all credit to the final measurable source, which can make discovery channels look less valuable than they are.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A typical journey</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A shopper sees a Meta video on Monday.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Clicks a product page on Wednesday.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Searches the brand on Google Friday.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Buys through branded Search.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Last-click reporting may credit Google completely. Yet Meta may have created the initial demand.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">This does not mean Meta deserves 100% credit either</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Platform attribution can swing too far in the opposite direction by claiming sales after impressions or clicks that were only one part of the journey.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare multiple views</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Use:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>Shopify order data</li>
            <li>platform attribution</li>
            <li>GA4/channel paths where useful</li>
            <li>new-customer trends</li>
            <li>controlled tests or geographic holdouts when possible</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            The goal is not to find a magical attribution model that proves Meta is valuable. It is to understand how channels interact.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Last-click is simple and useful for some questions. It is weak when you use it to evaluate channels whose main job happens early in the customer journey.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/ltv-vs-cac-for-ecommerce-what-should-you-aim-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">LTV vs CAC for Ecommerce: What Should You Aim For?</Link></li>
            <li><Link href="/resources/why-meta-view-through-attribution-can-overvalue-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Meta View-Through Attribution Can Overvalue Meta Ads</Link></li>
            <li><Link href="/resources/how-to-calculate-cac-for-a-shopify-store" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate CAC for a Shopify Store</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If branded Google looks great while Meta appears weak under last-click reporting, contact us or explore Attribix&apos;s cross-platform attribution approach.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
