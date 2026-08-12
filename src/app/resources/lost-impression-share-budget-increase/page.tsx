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
  "headline": "Lost Impression Share Due to Budget: Should You Increase Spend?",
  "description": "\"Limited by budget\" can feel like Google is telling you to spend more.",
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
    "@id": "https://www.attribix.app/resources/lost-impression-share-budget-increase"
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
      "name": "Lost Impression Share Due to Budget",
      "item": "https://www.attribix.app/resources/lost-impression-share-budget-increase"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Lost Impression Share Due to Budget" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Lost Impression Share Due to Budget: Should You Increase Spend?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            &quot;Limited by budget&quot; can feel like Google is telling you to spend more. It is really telling you that your current budget is preventing the campaign from entering all eligible auctions. Whether you should increase spend is a business decision.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">First ask whether the campaign is profitable</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If the campaign already performs below your acceptable CPA or ROAS, buying more of the same opportunity is unlikely to solve the problem. If it is strongly profitable, lost impression share may indicate room to scale.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Then ask about marginal efficiency</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The next $1,000 may not perform like the previous $1,000. More budget can move you into additional auctions, times of day or users with lower expected value. Increase in controlled steps and observe what happens to incremental sales and contribution margin.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check whether the budget is allocated well</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A campaign can be budget-limited while another campaign in the account wastes spend. Before increasing total marketing cost, ask whether you can reallocate budget from weaker activity. Also make sure the profitable result is not mostly branded traffic. A brand campaign limited by budget is a different situation from a scalable non-brand campaign.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not chase 100% share</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              You rarely need to capture every eligible impression. The objective is to capture profitable demand.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-ads-search-impression-share-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Search Impression Share Explained for Ecommerce</Link></li>
            <li><Link href="/resources/lost-impression-share-rank-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Lost Impression Share Due to Rank: What Should You Fix?</Link></li>
            <li><Link href="/resources/google-ads-cpc-suddenly-increased" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Google Ads CPC Suddenly Increased</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google says your campaigns are budget-limited and you want to know whether increasing spend will actually produce profitable sales, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
