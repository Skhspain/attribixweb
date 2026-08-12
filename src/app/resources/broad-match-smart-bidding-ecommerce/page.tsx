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
  "headline": "Should Ecommerce Stores Use Broad Match With Smart Bidding?",
  "description": "Broad match with automated bidding can discover valuable searches you would never build manually.",
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
    "@id": "https://www.attribix.app/resources/broad-match-smart-bidding-ecommerce"
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
      "name": "Should Ecommerce Stores Use Broad Match With...",
      "item": "https://www.attribix.app/resources/broad-match-smart-bidding-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Ecommerce Stores Use Broad Match With..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Ecommerce Stores Use Broad Match With Smart Bidding?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Broad match with automated bidding can discover valuable searches you would never build manually. It can also spend aggressively into weak intent when the conversion signals are poor. The combination is powerful because Google has freedom on two dimensions: which related query to enter and how much that opportunity is worth.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Strong inputs matter</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Broad match becomes more credible when the account has: accurate purchase tracking; meaningful conversion volume; sensible conversion values; clear geographic targeting; strong negative keyword hygiene; useful landing pages. If purchase tracking counts add-to-carts or duplicate sales, automation can optimize confidently toward the wrong outcome.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search terms still matter</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Automation does not remove the need for human review. Look for irrelevant themes, low-quality informational traffic and terms that should become negatives. At the same time, do not block every query that looks unfamiliar. Some of the value of broad match is discovery.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test against the alternative</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              The relevant question is not whether broad match is theoretically good. It is whether it improves profitable conversion volume versus your existing phrase/exact strategy. Use enough time and conversion data to judge it fairly, and keep brand/non-brand interpretation clear.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/lost-impression-share-rank-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Lost Impression Share Due to Rank: What Should You Fix?</Link></li>
            <li><Link href="/resources/how-many-keywords-google-ads-campaign" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Keywords Should a Google Ads Campaign Have?</Link></li>
            <li><Link href="/resources/lost-impression-share-budget-increase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Lost Impression Share Due to Budget: Should You Increase Spend?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this checked against your own numbers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If broad match is expanding your Google campaigns but you are unsure whether the extra traffic is genuinely valuable, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
