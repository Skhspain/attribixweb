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
  "headline": "How to Decide Whether an Unprofitable Campaign Is Worth Keeping",
  "description": "An unprofitable campaign can be worth keeping if it creates future customer value, assists other profitable sales or is still inside a deliberate test.",
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
    "@id": "https://www.attribix.app/resources/how-to-decide-whether-an-unprofitable-campaign-is"
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
      "name": "How to Decide Whether an Unprofitable...",
      "item": "https://www.attribix.app/resources/how-to-decide-whether-an-unprofitable-campaign-is"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Decide Whether an Unprofitable..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Decide Whether an Unprofitable Campaign Is Worth Keeping
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              An unprofitable campaign can be worth keeping if it creates future customer value, assists other profitable sales or is still inside a deliberate test. It should not be kept because “the algorithm needs more time” indefinitely.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Define why it is allowed to lose money</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Possible reasons:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>new-customer LTV recovers the loss</li>
            <li>product launch/testing</li>
            <li>strategic market entry</li>
            <li>strong assisted/incremental effect</li>
            <li>customer list growth with measurable value</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Set a limit</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Before spending, define maximum acceptable loss, testing budget or payback period. This prevents a strategic exception from becoming permanent waste.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check attribution</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A Meta campaign can look unprofitable under last click while driving branded Google demand. A retargeting campaign can look profitable while adding little incremental value. Use the measurement appropriate to the campaign&apos;s role.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Require evidence</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If future LTV justifies the campaign, show the cohort data. If assisted conversions justify it, test total business performance.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A campaign does not need immediate profit, but it needs a credible path to value.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-is-a-good-contribution-margin-after-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Contribution Margin After Advertising?</Link></li>
            <li><Link href="/resources/why-scaling-revenue-can-reduce-profit" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Scaling Revenue Can Reduce Profit</Link></li>
            <li><Link href="/resources/how-to-calculate-profit-per-order-from-paid-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate Profit per Order From Paid Ads</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if ROAS is telling the full story?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you have campaigns you “believe” are valuable but cannot prove why, send us an inquiry. We can help define the evidence and spending limit.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
