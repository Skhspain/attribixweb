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
  "headline": "Performance Max Is Overspending on Branded Searches: What to Do",
  "description": "If PMax reports spectacular results because it captures people already searching your brand, the campaign can look more incremental than it really is.",
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
    "@id": "https://www.attribix.app/resources/performance-max-brand-search-overspending"
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
      "name": "Performance Max Is Overspending on Branded...",
      "item": "https://www.attribix.app/resources/performance-max-brand-search-overspending"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Performance Max Is Overspending on Branded..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Performance Max Is Overspending on Branded Searches: What to Do
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            If PMax reports spectacular results because it captures people already searching your brand, the campaign can look more incremental than it really is.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Confirm the problem before changing it</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Use the brand/search insights and controls Google currently provides. Compare PMax with branded Search campaigns, Search Console and overall branded demand. A high brand share is more concerning when the business believes PMax is its main new-customer engine.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use current brand controls where appropriate</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Google has introduced and changed brand exclusion capabilities over time. Verify the live platform options before implementing exclusions. The goal is not to remove every branded conversion automatically. It is to stop brand demand from obscuring the performance question you care about.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Protect useful brand coverage separately</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If competitor ads make branded Search strategically important, run that protection intentionally. A dedicated brand campaign can make spend and attribution easier to interpret.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch total sales after the change</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If reported PMax ROAS drops but Shopify revenue remains stable, you may simply have cleaned up attribution. If total revenue drops meaningfully, the brand coverage may have been contributing more than expected.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-performance-max-stops-spending" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Performance Max Stops Spending</Link></li>
            <li><Link href="/resources/how-long-run-performance-max-before-judging" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should a New Performance Max Campaign Run Before You Judge It?</Link></li>
            <li><Link href="/resources/performance-max-spending-mostly-one-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Spending Mostly on One Product: Is That a Problem?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your PMax campaign is dominated by branded demand and you want a clearer acquisition view, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
