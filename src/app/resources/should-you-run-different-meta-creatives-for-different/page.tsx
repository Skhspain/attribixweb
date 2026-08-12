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
  "headline": "Should You Run Different Meta Creatives for Different Countries?",
  "description": "If customer motivations, language or offers differ, country-specific creatives can improve performance.",
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
    "@id": "https://www.attribix.app/resources/should-you-run-different-meta-creatives-for-different"
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
      "name": "Should You Run Different Meta Creatives for...",
      "item": "https://www.attribix.app/resources/should-you-run-different-meta-creatives-for-different"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should You Run Different Meta Creatives for..." }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Run Different Meta Creatives for Different Countries?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              If customer motivations, language or offers differ, country-specific creatives can improve performance.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              If markets behave similarly, producing unique assets for every country can waste resources.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Strong reasons to localize</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>different language</li>
            <li>local currency/price</li>
            <li>different shipping offer</li>
            <li>country-specific customer proof</li>
            <li>cultural differences</li>
            <li>seasonal differences</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Generic product demonstrations can travel well</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Some visual ads communicate the value with very little language and can work across several markets.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid fake localization</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Changing a UK flag to a German flag while keeping every other message identical is not a serious creative strategy.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use performance to prioritize production</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Start with markets that generate enough spend to justify local creative. A country receiving $300 a month does not need a full dedicated production team.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep the winning idea</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Localization does not require reinventing the entire campaign. A proven customer problem can be adapted with local language, examples and offer.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-choose-which-country-to-expand-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Choose Which Country to Expand Ecommerce Ads Into Next</Link></li>
            <li><Link href="/resources/when-is-a-shopify-store-ready-to-advertise" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Is a Shopify Store Ready to Advertise Internationally?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the market is ready?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are scaling Meta internationally and creative production is becoming difficult to manage, send us an inquiry. We can help prioritize the markets where localization is likely to matter.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
