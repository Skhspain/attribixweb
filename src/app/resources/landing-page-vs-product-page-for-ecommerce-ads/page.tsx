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
  "headline": "Landing Page vs Product Page for Ecommerce Ads",
  "description": "A product page is built to sell the product in the context of the store.",
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
    "@id": "https://www.attribix.app/resources/landing-page-vs-product-page-for-ecommerce-ads"
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
      "name": "Landing Page vs Product Page for Ecommerce Ads",
      "item": "https://www.attribix.app/resources/landing-page-vs-product-page-for-ecommerce-ads"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Landing Page vs Product Page for Ecommerce Ads" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Landing Page vs Product Page for Ecommerce Ads
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A product page is built to sell the product in the context of the store. A dedicated landing page is built to continue one specific campaign message.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Neither is inherently better.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product page advantages</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>already maintained</li>
            <li>real navigation and reviews</li>
            <li>variant/inventory integration</li>
            <li>consistent shopping experience</li>
            <li>useful for returning or high-intent visitors</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Landing page advantages</h2>
            <div className="space-y-4 max-w-2xl">
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>message can match the ad exactly</li>
              <li>fewer distractions</li>
              <li>angle-specific proof</li>
              <li>longer explanation</li>
              <li>custom offer</li>
              <li>easier controlled testing</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The risk of landing pages</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Some brands build ad pages so aggressively optimized that they feel disconnected from the store. Customers click into navigation and encounter different pricing, messaging or design, which reduces trust.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The risk of product pages</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A standard page may try to serve every customer and explain none of the campaign-specific motivation particularly well.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Use dedicated pages when the campaign needs a different sales argument. Keep the normal product page when it already does the job.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/when-does-an-ecommerce-brand-need-a-dedicated-landing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Does an Ecommerce Brand Need a Dedicated Landing Page?</Link></li>
            <li><Link href="/resources/should-meta-ads-send-traffic-to-a-product-page-or" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Meta Ads Send Traffic to a Product Page or Landing Page?</Link></li>
            <li><Link href="/resources/why-your-landing-page-gets-clicks-but-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Landing Page Gets Clicks but No Sales</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are paying for qualified traffic but the destination page feels generic compared with the ad, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
