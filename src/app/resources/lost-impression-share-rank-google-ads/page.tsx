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
  "headline": "Lost Impression Share Due to Rank: What Should You Fix?",
  "description": "When Google reports lost impression share due to rank, your campaign was eligible for searches but did not have enough Ad Rank to win all of the impressions.",
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
    "@id": "https://www.attribix.app/resources/lost-impression-share-rank-google-ads"
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
      "name": "Lost Impression Share Due to Rank",
      "item": "https://www.attribix.app/resources/lost-impression-share-rank-google-ads"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Lost Impression Share Due to Rank" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Lost Impression Share Due to Rank: What Should You Fix?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When Google reports lost impression share due to rank, your campaign was eligible for searches but did not have enough Ad Rank to win all of the impressions. The temptation is to raise bids. Sometimes that works. It may also make the campaign more expensive without fixing the underlying reason.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ad Rank is broader than bid</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Google considers factors around bid, ad and landing-page quality, expected impact of assets and the context of the auction. The exact systems evolve, but the practical lesson remains: money is only one lever.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check relevance first</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Does the ad clearly match the search? Does the landing page deliver what the query suggests? Are product prices and offers competitive? Are assets complete and useful? Poor alignment can reduce the quality of the opportunity even before you think about bidding.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider economics before fighting for position</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Losing rank on a profitable query may justify investment. Losing rank on a query that already struggles to convert is not necessarily a problem worth solving. Higher position can create more clicks and higher CPC. The business outcome determines whether that is valuable.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use the metric to find bottlenecks</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Compare lost rank across campaigns and themes. A specific category with severe rank loss may need better ads and landing pages, while strong brand campaigns may simply need different bidding coverage.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/lost-impression-share-budget-increase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Lost Impression Share Due to Budget: Should You Increase Spend?</Link></li>
            <li><Link href="/resources/broad-match-smart-bidding-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Ecommerce Stores Use Broad Match With Smart Bidding?</Link></li>
            <li><Link href="/resources/google-ads-search-impression-share-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Search Impression Share Explained for Ecommerce</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if the number is actually good?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If profitable Google campaigns are losing visibility due to rank, send us an inquiry. We can review the ads, landing pages, bidding and economics before simply paying more.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
