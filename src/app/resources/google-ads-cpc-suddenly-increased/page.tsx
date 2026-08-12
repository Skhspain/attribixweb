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
  "headline": "Why Your Google Ads CPC Suddenly Increased",
  "description": "A sudden CPC increase is an auction symptom.",
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
    "@id": "https://www.attribix.app/resources/google-ads-cpc-suddenly-increased"
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
      "name": "Why Your Google Ads CPC Suddenly Increased",
      "item": "https://www.attribix.app/resources/google-ads-cpc-suddenly-increased"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Your Google Ads CPC Suddenly Increased" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Your Google Ads CPC Suddenly Increased
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A sudden CPC increase is an auction symptom. The reason can be competition, query mix, bidding, quality or your campaign becoming willing to enter more expensive auctions.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with what changed</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Compare the period before and after the increase: search terms; campaign type; device; geography; impression share; bidding strategy; competitor activity; conversion value settings. If the account started matching broader, more expensive commercial searches, the CPC increase may be expected.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Higher CPC is not automatically bad</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If CPC rises 30% and conversion rate doubles, CPA improves. Conversely, cheaper clicks can be worthless if they come from weak intent. Always connect traffic cost to customer economics.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Quality and competition both matter</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Ads and landing pages that poorly match the search can require more expensive auctions to win useful positions. Seasonal events can also push many advertisers into the same demand at once.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Smart bidding can intentionally pay more</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Automated bidding may increase bids for users or queries it predicts are more valuable. A higher average CPC can therefore coexist with better conversion value. The right response is not to cap CPC reflexively. Determine whether the cost per profitable customer got worse.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/good-google-ads-ctr-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Google Ads CTR for Ecommerce?</Link></li>
            <li><Link href="/resources/google-ads-search-impression-share-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Search Impression Share Explained for Ecommerce</Link></li>
            <li><Link href="/resources/good-google-ads-conversion-rate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Google Ads Conversion Rate for Ecommerce?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this checked against your own numbers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google clicks have become more expensive and you are not sure whether the account is paying for better opportunities or simply losing efficiency, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
