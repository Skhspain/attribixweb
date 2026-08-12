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
  "headline": "How Many Keywords Should a Google Ads Campaign Have?",
  "description": "The correct number of keywords is the number needed to cover meaningful search intent without creating a structure you cannot manage.",
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
    "@id": "https://www.attribix.app/resources/how-many-keywords-google-ads-campaign"
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
      "name": "How Many Keywords Should a Google Ads...",
      "item": "https://www.attribix.app/resources/how-many-keywords-google-ads-campaign"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Many Keywords Should a Google Ads..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Many Keywords Should a Google Ads Campaign Have?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The correct number of keywords is the number needed to cover meaningful search intent without creating a structure you cannot manage. A campaign with 500 keywords is not sophisticated because it has 500 keywords. A campaign with five is not automatically simple and efficient.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Group by intent, not arbitrary counts</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Keywords that should lead to the same ad message and landing page can often live together. Queries for &quot;men&apos;s waterproof hiking boots&quot; and &quot;waterproof hiking boots for men&quot; probably do not need separate campaigns just because the wording differs. A query for &quot;hiking boot repair&quot; represents a different intent and may not belong at all.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Modern matching reduces the need for huge lists</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Close variants and broader intent matching mean advertisers no longer need every plural, word order and tiny spelling variation as a separate keyword. That makes query analysis and negative keyword management more important than keyword quantity.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Too much fragmentation hides data</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If every small keyword theme has its own campaign, budget and ad group, conversion volume becomes thin and management becomes slower.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Too little structure weakens relevance</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Putting every product category into one generic ad group makes it harder to align search, ad and landing page. Build the smallest structure that preserves meaningful differences in intent and economics.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/broad-match-smart-bidding-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Ecommerce Stores Use Broad Match With Smart Bidding?</Link></li>
            <li><Link href="/resources/negative-keywords-ecommerce-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Negative Keywords for Ecommerce: What to Look For</Link></li>
            <li><Link href="/resources/lost-impression-share-rank-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Lost Impression Share Due to Rank: What Should You Fix?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Google Ads account contains hundreds of keywords and campaigns but very little clarity, send us an inquiry. We can consolidate it around the searches that actually sell.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
