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
  headline: "Should Shopify Stores Bid on Their Own Brand Name?",
  description: "Why branded search ROAS can look fantastic without creating much new demand.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/should-you-bid-on-your-brand-name-google-ads" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Bidding on your brand name", item: "https://www.attribix.app/resources/should-you-bid-on-your-brand-name-google-ads" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Bidding on your brand" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify stores bid on their own brand name?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Paying Google for clicks from people already searching your
            brand can feel absurd. Sometimes it is unnecessary. Sometimes
            it is one of the cheapest ways to protect and control a
            valuable search result.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why brands run branded search</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A brand campaign can protect the top ad position from
            competitors, control messaging during promotions, send users
            to the most relevant page, capture high-intent searches
            cheaply, and separate branded demand from non-brand
            acquisition.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The attribution problem</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Branded search usually converts very well because the
              customer already knows you. That means it can make Google
              Ads ROAS look fantastic without necessarily creating much
              new demand. If someone saw a Meta ad, later searched your
              brand and clicked the Google ad, Google may get credit for a
              sale influenced earlier elsewhere.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test incrementality, not ego</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Ask what happens when brand ads are reduced or paused in a
            controlled way. Do organic clicks replace most of the paid
            clicks? Do competitors occupy the space? Does total revenue
            change? The answer varies by brand strength, competitor
            behaviour and SERP layout.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate reporting</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Even if brand campaigns are worthwhile, report them
              separately from non-brand acquisition. A blended Google ROAS
              dominated by branded traffic can hide weak prospecting
              performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-brand-campaign-taking-credit-organic-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is your Google Ads brand campaign taking credit for organic sales?</Link></li>
            <li><Link href="/resources/google-ads-brand-vs-non-brand-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How much budget should go to brand vs non-brand Google Ads?</Link></li>
            <li><Link href="/resources/competitor-keywords-google-ads-worth-it" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Are competitor keywords worth bidding on in Google Ads?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure how much of your ROAS is branded search?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry. We can separate demand capture from
            genuine acquisition.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
