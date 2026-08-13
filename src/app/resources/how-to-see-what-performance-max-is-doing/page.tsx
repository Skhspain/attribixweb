"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import { LastReviewed, OfficialSources } from "@/components/marketing/ArticleTrust";

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Tell What Performance Max Is Actually Doing",
  "description": "The Channel Performance, product, asset and search-category reports Performance Max actually exposes, and how to read them against real Shopify orders.",
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
    "@id": "https://www.attribix.app/resources/how-to-see-what-performance-max-is-doing"
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
      "name": "How to Tell What Performance Max Is Doing",
      "item": "https://www.attribix.app/resources/how-to-see-what-performance-max-is-doing"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Tell What Performance Max Is Doing" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Tell What Performance Max Is Actually Doing
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Performance Max is more automated than traditional Search, and it doesn&apos;t give you keyword-level control. That&apos;s a real limitation. It isn&apos;t the same as having no visibility: Google now exposes several reports that show where a PMax campaign is actually spending and converting, and most of the &ldquo;PMax is a black box&rdquo; complaints are really about advertisers not knowing these exist yet.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Channel performance reporting</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              The Channel Performance report inside a PMax campaign breaks results down by Search, Shopping, Display, YouTube, Discover, Gmail and Maps, with clicks, cost, conversions and conversion value for each. This is the single most useful diagnostic PMax offers: if a campaign&apos;s ROAS drops, this report shows whether the change is concentrated in one channel (a Display CPM spike, a Shopping feed issue) or spread evenly, which points toward a genuine demand shift instead.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product-level and asset performance</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              For ecommerce, look at product-level performance inside the campaign: which products receive spend, clicks and conversions, whether best sellers are carrying the result, and whether low-margin products are quietly absorbing budget. Asset reporting works the same way for creative: individual images, headlines and video are rated by their measured contribution to conversions, which is enough to identify a weak asset without needing full attribution down to the individual ad.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search category and audience insights</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Search category insights group the queries triggering your ads into themes, and audience insights show which segments are engaging. Neither gives you the exact search-term list Search campaigns provide, but both are enough to catch branded demand, an unexpected query theme, or a campaign reaching the wrong market before it shows up as a ROAS problem three weeks later.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Merchant Center diagnostics</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              For Shopping-fed PMax campaigns, a meaningful share of &ldquo;PMax stopped working&rdquo; problems are actually Merchant Center problems: disapproved products, feed sync failures, price or availability mismatches. Under Products in Merchant Center, check for items flagged as needing attention before assuming the campaign itself changed. Full detail is in{" "}
              <Link href="/resources/google-merchant-center-product-disapproved" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Merchant Center product disapprovals
              </Link>
              .
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Break down time, device and geography</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Performance can differ sharply by country, device and period. A blended account number can hide a weak market or a mobile conversion problem that a segmented view would show immediately.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare against actual Shopify orders</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Every report above describes what Google Ads thinks happened. If PMax reports a large conversion increase but Shopify orders are flat, the campaign may be receiving more attribution rather than generating the same increase in actual sales. Attribix shows Google Ads&apos; reported conversions next to real Shopify orders day by day, which is the fastest way to catch that gap without a manual export.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow changes</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              When performance moves, ask what changed in the feed, inventory, budget, bidding, assets, website, conversion tracking or market demand. PMax will never provide the same query-level control as Search. The job is to combine the reports above with independent store data so you understand enough to make business decisions, not to wait for PMax to become something it isn&apos;t designed to be.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="space-y-2 border-t border-white/10 pt-6">
            <OfficialSources
              sources={[
                { label: "Channel performance reporting for Performance Max", href: "https://blog.google/products/ads-commerce/channel-performance-reporting-coming-to-performance-max/" },
              ]}
            />
            <LastReviewed date="August 12, 2026" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/performance-max-brand-revenue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Much of Performance Max Revenue Comes From Brand Searches?</Link></li>
            <li><Link href="/resources/performance-max-vs-standard-shopping" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max vs Standard Shopping: Which Is Better?</Link></li>
            <li><Link href="/resources/separate-brand-traffic-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Separate Brand Traffic From Performance Max?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If PMax is spending heavily and the headline ROAS is not giving you enough confidence, send us an inquiry. We can unpack the campaign and connect it to actual Shopify sales.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
