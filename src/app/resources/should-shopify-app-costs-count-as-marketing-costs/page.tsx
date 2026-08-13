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
  "headline": "Should Shopify App Costs Count as Marketing Costs?",
  "description": "Some Shopify apps directly support customer acquisition; others support operations, support or merchandising.",
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
    "@id": "https://www.attribix.app/resources/should-shopify-app-costs-count-as-marketing-costs"
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
      "name": "Should Shopify App Costs Count as Marketing...",
      "item": "https://www.attribix.app/resources/should-shopify-app-costs-count-as-marketing-costs"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Shopify App Costs Count as Marketing..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify App Costs Count as Marketing Costs?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Some Shopify apps directly support customer acquisition; others support operations, support or merchandising. Treating every app subscription as marketing cost can be as misleading as ignoring all software.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Classify by purpose</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Examples:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>attribution/tracking tool → marketing/analytics infrastructure</li>
            <li>email platform → retention/marketing</li>
            <li>review app → conversion/customer proof</li>
            <li>inventory management → operations</li>
            <li>fulfilment app → operations</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Decide what metric needs the cost</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Daily Meta CPA does not need a share of your review-app bill. A fully loaded marketing P&L may.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid false precision</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Allocating a $200 monthly app 37% to Meta and 63% to Google rarely improves decisions. Keep a practical cost hierarchy.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Software should earn its place</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Ask whether the app saves labour, improves conversion, protects data or creates measurable value. App stacks grow quietly and can become meaningful fixed cost at scale.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Use software costs in full business profitability where relevant, but do not contaminate simple campaign metrics unnecessarily.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Know Whether Your Ecommerce Offer Is the Problem</Link></li>
            <li><Link href="/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Your Ads Get Clicks but Your Offer Doesn&apos;t Convert: How to Tell</Link></li>
            <li><Link href="/resources/how-to-find-the-real-reason-customers-buy-your-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Find the Real Reason Customers Buy Your Product</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Software should earn its place</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify marketing stack is expensive and nobody knows which tools contribute value, contact us. We can help separate acquisition infrastructure from operational overhead.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
