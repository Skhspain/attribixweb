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
  "headline": "Why Google Shopping Shows the Wrong Price",
  "description": "When a Shopping ad shows a different price from Shopify, treat it as both a conversion problem and a feed-quality problem.",
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
    "@id": "https://www.attribix.app/resources/google-shopping-wrong-price"
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
      "name": "Why Google Shopping Shows the Wrong Price",
      "item": "https://www.attribix.app/resources/google-shopping-wrong-price"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Google Shopping Shows the Wrong Price" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Google Shopping Shows the Wrong Price
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When a Shopping ad shows a different price from Shopify, treat it as both a conversion problem and a feed-quality problem.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Common causes</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Feed updates lag behind Shopify; sale price is configured incorrectly; currency or market pricing differs; structured data on the product page conflicts with the feed; variants have different prices; Merchant Center crawls a different price from the landing page.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why it hurts performance</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A shopper who clicks a $79 ad and finds a $99 product page is likely to leave. Repeated mismatches can also create Merchant Center warnings or disapprovals.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check the exact variant and market</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Price issues often look inconsistent because the product has multiple variants or Shopify Markets applies country-specific pricing. Make sure you are comparing the same product, currency and destination country.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Fix the source, not the symptom</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Do not manually patch Merchant Center repeatedly if the Shopify feed integration continues sending the wrong value. Find where the mismatch originates and ensure feed and landing-page data stay synchronized. Use current Merchant Center diagnostics to confirm the final status.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/performance-max-vs-meta-ads-new-product-launch" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max vs Meta Ads for New Product Launches</Link></li>
            <li><Link href="/resources/merchant-center-feed-issues-hurt-performance" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Merchant Center Feed Issues That Quietly Hurt Performance</Link></li>
            <li><Link href="/resources/performance-max-learning-period-avoid-changing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Learning Period: What Should You Avoid Changing?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Shopping prices keep drifting away from Shopify, contact us. We can trace the feed, market and campaign configuration.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
