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
  "headline": "How Much of Performance Max Revenue Comes From Brand Searches?",
  "description": "There is no universal percentage.",
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
    "@id": "https://www.attribix.app/resources/performance-max-brand-revenue"
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
      "name": "How Much of Performance Max Revenue Comes...",
      "item": "https://www.attribix.app/resources/performance-max-brand-revenue"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Much of Performance Max Revenue Comes..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Much of Performance Max Revenue Comes From Brand Searches?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no universal percentage. Some PMax campaigns contain very little branded demand. Others can become heavily dependent on customers who already know the business. The important question is whether you can identify enough of that demand to interpret the campaign honestly.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why brand tends to convert so well</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              People searching your name are usually closer to purchase. They may have seen a Meta ad, received an email, visited before or bought previously. Google can still record the conversion, but the PMax campaign did not necessarily create the original interest.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use the visibility Google currently provides</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Review available search category/search term insights, brand controls, campaign reporting and any current brand exclusion options. Google changes PMax transparency over time, so use current official documentation rather than old screenshots. Also compare Google Ads with Shopify, Search Console and branded search trends.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look for tell-tale patterns</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Very high PMax ROAS, strong returning-customer volume and weak non-brand Search performance can be clues that brand demand is contributing heavily. The goal is not to calculate a perfect branded percentage from incomplete data. It is to avoid making budget decisions based on the assumption that every PMax-attributed order represents new demand.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/separate-brand-traffic-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Separate Brand Traffic From Performance Max?</Link></li>
            <li><Link href="/resources/how-to-see-what-performance-max-is-doing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Tell What Performance Max Is Actually Doing</Link></li>
            <li><Link href="/resources/google-ads-exact-match-not-exact" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Exact Match Isn&apos;t Really Exact: What Ecommerce Advertisers Should Know</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this checked against your own numbers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want a clearer view of how much PMax revenue is brand capture versus acquisition, contact us. We can review the account and cross-check the result against Shopify.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
