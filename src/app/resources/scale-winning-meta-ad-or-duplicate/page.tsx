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
  headline: "Should You Scale a Winning Meta Ad or Duplicate It?",
  description:
    "Increasing budget and duplicating a campaign aren't interchangeable. When to raise spend on a winner, when duplication makes sense, and what scaling actually requires.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/scale-winning-meta-ad-or-duplicate",
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Scale or Duplicate",
      item: "https://www.attribix.app/resources/scale-winning-meta-ad-or-duplicate",
    },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Scale or Duplicate" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Scale a Winning Meta Ad or Duplicate It?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When a Meta ad starts producing profitable sales, the instinct
            is often to protect it. That leads to a common question: should
            you increase the existing budget or duplicate the winner into a
            new campaign? Duplication can feel safer because the original
            stays untouched. It can also create unnecessary fragmentation.
          </p>
        </Reveal>
      </section>

      {/* INCREASE BUDGET */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Increasing budget keeps the history in one place</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If a campaign is stable and has room to spend, raising budget is
            the simplest path. You keep the same structure, conversion
            history and creative setup. The risk is that more budget changes
            delivery. Meta has to find additional opportunities, and those
            additional impressions may be more expensive or convert less
            efficiently. That is normal. Scaling usually means evaluating
            marginal performance, not expecting the original CPA to remain
            perfectly unchanged.
          </p>
        </Reveal>
      </section>

      {/* DUPLICATING DOES NOT CLONE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Duplicating does not clone performance</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A duplicate is a new delivery instance. It may enter different
              auctions, reach overlapping people and perform differently
              from the campaign you copied. Duplicating a $100-a-day
              campaign ten times does not create ten identical $100-a-day
              winners. In some cases it simply creates internal competition
              and makes reporting harder to understand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHEN SEPARATE STRUCTURES MAKE SENSE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When separate structures can make sense</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Duplication or a separate campaign can be useful if you are
            intentionally testing something different:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>A new country</li>
            <li>A different product group</li>
            <li>A different customer segment</li>
            <li>A separate budget or bidding strategy</li>
            <li>A controlled test that needs isolation</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            That is different from duplicating solely because you are afraid
            to touch a winner.
          </p>
        </Reveal>
      </section>

      {/* SCALE THE BUSINESS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Scale the business, not the screenshot</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Before increasing spend, make sure the fundamentals can absorb
              it:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
              <li>Stock</li>
              <li>Cash flow</li>
              <li>Creative supply</li>
              <li>Website conversion rate</li>
              <li>Fulfilment capacity</li>
              <li>Target CPA and contribution margin</li>
            </ul>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              A campaign can be profitable at $200 a day and unprofitable at
              $2,000. That does not mean the scaling method failed. It means
              the market gives you progressively more expensive
              opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/should-you-pause-meta-ad-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you pause a Meta ad that has no sales?
              </Link>
            </li>
            <li>
              <Link href="/resources/campaign-budget-vs-ad-set-budget-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Campaign budget vs ad set budget on Meta
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-performance-changes-after-budget-increase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Meta Ads performance changes after a budget increase
              </Link>
            </li>
            <li>
              <Link href="/ad-management/meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads management
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Ready to scale but not sure how aggressively?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you have profitable Meta campaigns but are unsure how
            aggressively to scale them, contact us. We can model the
            economics and manage the expansion around actual business
            performance.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
