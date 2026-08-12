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
  "headline": "Why Performance Max Stops Spending",
  "description": "When Performance Max suddenly spends less, do not start by increasing the budget.",
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
    "@id": "https://www.attribix.app/resources/why-performance-max-stops-spending"
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
      "name": "Why Performance Max Stops Spending",
      "item": "https://www.attribix.app/resources/why-performance-max-stops-spending"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Performance Max Stops Spending" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Performance Max Stops Spending
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When Performance Max suddenly spends less, do not start by increasing the budget. A campaign cannot spend budget if eligibility, bidding or available demand is constraining delivery.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check for recent changes</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Look at: bid/ROAS target changes; budget changes; conversion goal changes; feed disapprovals; stock; website outages; country settings; account or policy issues. A very aggressive target ROAS can make the campaign unwilling to enter enough auctions to spend the budget.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Review Merchant Center</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              For ecommerce PMax, product eligibility is fundamental. A sudden wave of disapprovals or availability problems can remove much of the inventory the campaign normally uses.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Demand can fluctuate</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Seasonality and search demand matter. A campaign selling ski accessories may naturally spend differently in August and December even with identical settings.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check conversion tracking</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If Google suddenly stops seeing purchases, automated bidding may become more conservative or learn from the wrong signal. Compare the change with Shopify orders.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid random edits</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If you raise budgets, loosen targets, change assets and restructure products at the same time, you may restart spend without understanding what fixed it. Find the constraint first.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/performance-max-spending-mostly-one-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Spending Mostly on One Product: Is That a Problem?</Link></li>
            <li><Link href="/resources/performance-max-brand-search-overspending" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Is Overspending on Branded Searches: What to Do</Link></li>
            <li><Link href="/resources/google-shopping-high-roas-low-volume" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Shopping Has High ROAS but Low Volume: Should You Scale?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this checked against your own numbers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If PMax suddenly stopped spending and the reason is not obvious, contact us. We can audit bidding, feed, tracking and campaign eligibility before making unnecessary changes.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
