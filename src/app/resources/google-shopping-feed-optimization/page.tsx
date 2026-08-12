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
  "headline": "Google Shopping Feed Optimization: What Actually Matters?",
  "description": "Feed optimization is often sold as a bag of hacks.",
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
    "@id": "https://www.attribix.app/resources/google-shopping-feed-optimization"
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
      "name": "Google Shopping Feed Optimization",
      "item": "https://www.attribix.app/resources/google-shopping-feed-optimization"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Shopping Feed Optimization" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Shopping Feed Optimization: What Actually Matters?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Feed optimization is often sold as a bag of hacks. The fundamentals are less glamorous: give Google accurate, complete product data that matches how customers search and what they see on the landing page.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Prioritize the core fields</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Depending on the product category and market, focus on: title; description; product type/category; brand; GTIN/MPN where applicable; price; sale price; availability; images; shipping. Follow current Merchant Center requirements rather than old checklists.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Titles and images influence the click</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Relevant titles help Google understand query fit. Strong images help the shopper decide whether to investigate further. Neither can rescue an uncompetitive price or weak product.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Accuracy protects both performance and approval</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Price or stock mismatches create a poor experience and can trigger disapprovals. Keep the feed synchronized with Shopify.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use custom labels strategically</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Labels can help group products by margin, bestseller status, season or business priority for campaign/reporting purposes. They should support decisions, not simply mirror every catalogue collection.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Optimize from query to profit</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              The best feed is not the one with the most attributes filled for vanity. It is the one that makes products eligible for relevant searches and helps profitable customers choose them.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-shopping-product-feed-titles" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Feed Titles: How Much Do They Matter for Google Shopping?</Link></li>
            <li><Link href="/resources/google-shopping-products-no-impressions" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Some Shopify Products Never Get Google Shopping Impressions</Link></li>
            <li><Link href="/resources/exclude-poor-performing-products-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Exclude Poor-Performing Products From Performance Max?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this checked against your own numbers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopping campaigns are underperforming and you suspect the feed is part of the problem, contact us. We can audit both Merchant Center and advertising performance.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
