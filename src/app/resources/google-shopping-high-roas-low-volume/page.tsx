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
  "headline": "Google Shopping Has High ROAS but Low Volume: Should You Scale?",
  "description": "A high ROAS at low spend is encouraging, but it does not prove the same efficiency exists at higher volume.",
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
    "@id": "https://www.attribix.app/resources/google-shopping-high-roas-low-volume"
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
      "name": "Google Shopping Has High ROAS but Low Volume",
      "item": "https://www.attribix.app/resources/google-shopping-high-roas-low-volume"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Shopping Has High ROAS but Low Volume" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Shopping Has High ROAS but Low Volume: Should You Scale?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A high ROAS at low spend is encouraging, but it does not prove the same efficiency exists at higher volume.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">First find out why volume is low</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Possible constraints include: limited search demand; low impression share; conservative bidding targets; small product range; restricted geography; low budgets; feed eligibility problems; high prices relative to competitors. Each calls for a different response.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Scaling usually lowers average efficiency</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The campaign may currently capture only the easiest conversions. As you loosen a ROAS target or increase budget, Google can enter more expensive auctions and broader demand. That can lower ROAS while increasing total profit. Suppose $2,000 spend generates $12,000 revenue: 600% ROAS. Scaling to $8,000 spend might generate $32,000: 400% ROAS. If your break-even level is 300%, the second scenario may be far more valuable despite the lower percentage.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Focus on marginal profit</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Ask what the additional spend produces, not whether the original ROAS remains unchanged. Also make sure the high ROAS is not mostly branded traffic or returning customers before assuming there is large acquisition headroom.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-shopping-products-no-impressions" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Some Shopify Products Never Get Google Shopping Impressions</Link></li>
            <li><Link href="/resources/performance-max-spending-mostly-one-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Spending Mostly on One Product: Is That a Problem?</Link></li>
            <li><Link href="/resources/google-shopping-feed-optimization" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Shopping Feed Optimization: What Actually Matters?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google Shopping is profitable but refuses to grow, contact us. We can identify the constraint and model how far efficiency can reasonably fall while scaling profitably.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
