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
  "headline": "Google Ads Search Impression Share Explained for Ecommerce",
  "description": "Search impression share estimates how often your ads appeared compared with the number of times Google believed they were eligible to appear.",
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
    "@id": "https://www.attribix.app/resources/google-ads-search-impression-share-explained"
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
      "name": "Google Ads Search Impression Share Explained...",
      "item": "https://www.attribix.app/resources/google-ads-search-impression-share-explained"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Ads Search Impression Share Explained..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads Search Impression Share Explained for Ecommerce
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Search impression share estimates how often your ads appeared compared with the number of times Google believed they were eligible to appear. It is useful, but only if you remember one thing: appearing more often is not the same as making more money.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What a low impression share can mean</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              You may be missing eligible auctions because of: budget limits; Ad Rank; bids or bidding strategy; relevance and quality; targeting settings; the amount of demand available. Google also reports lost impression share due to budget or rank in relevant campaign types, which helps narrow the diagnosis.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">High impression share is not always the goal</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Suppose a generic keyword has 20% impression share and generates profitable sales. Pushing toward 90% may require buying progressively more expensive or weaker traffic. For a branded campaign, high coverage can be much more important because competitors may otherwise occupy the top position when someone searches your name.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use impression share with economics</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Ask: Are profitable campaigns losing share due to budget? Are we missing valuable searches because Ad Rank is weak? Does incremental spend remain profitable? Is the campaign already capturing most of the commercially relevant demand? Search impression share is best used to understand available headroom, not as a score you need to maximize.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-ads-cpc-suddenly-increased" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Google Ads CPC Suddenly Increased</Link></li>
            <li><Link href="/resources/lost-impression-share-budget-increase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Lost Impression Share Due to Budget: Should You Increase Spend?</Link></li>
            <li><Link href="/resources/good-google-ads-ctr-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Google Ads CTR for Ecommerce?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Google account is losing impression share and you are unsure whether increasing budget would actually create profitable growth, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
