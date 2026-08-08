"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";

const CAUSES = [
  { title: "Pixel and CAPI without a shared event ID", note: "Both fire for the same order, Meta has no way to know they're the same event, and counts two purchases." },
  { title: "More than one tracking app installed", note: "A Shopify tracking or analytics app and a separately configured Pixel snippet can both fire a purchase event for the same order." },
  { title: "Theme code alongside an app", note: "A Pixel snippet added directly to the theme, left in place after installing a tracking app that also fires purchase events." },
  { title: "A tag manager plus a native integration", note: "Google Tag Manager or a similar tool firing a purchase tag while Shopify's native Meta channel integration also fires its own event." },
];

const STEPS = [
  "Open Events Manager and check the Purchase event's deduplication status — Meta flags events it couldn't match as browser and server pairs.",
  "List every place a Purchase event could be firing: theme code, tracking apps, Shopify's native Meta/Facebook channel, and any tag manager container.",
  "Confirm each source sends the same event_id for a given order — usually the Shopify order ID or checkout token, consistently formatted across every source.",
  "Disable or remove any source that's redundant. You need exactly one browser path and one server path per order, not two of either.",
  "Watch Events Manager for a week, not a day — some duplication only shows up under real traffic patterns, not a single test order.",
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Fix Duplicate Purchases in Meta Ads for Shopify",
  description: "Diagnosing and fixing duplicate purchase events in Meta Ads Manager for Shopify stores.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/fix-duplicate-meta-purchases-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Fix duplicate Meta purchases", item: "https://www.attribix.app/resources/fix-duplicate-meta-purchases-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Fix duplicate purchases" }]} />
          <Eyebrow>Meta Ads Tracking</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to fix duplicate purchases in Meta Ads for Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            If Ads Manager shows more purchases than Shopify&apos;s order count,
            the same sale is almost certainly being reported twice. It&apos;s
            usually one of a small number of causes, and it&apos;s usually
            fixable in an afternoon.
          </p>
        </Reveal>
      </section>

      {/* HOW TO SPOT IT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">How to confirm it&apos;s actually duplication</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Compare Ads Manager&apos;s reported purchase count against Shopify&apos;s
            order count for the same date range and, if possible, the same
            attributed customers. A gap that roughly tracks with order
            volume — say, consistently 15-20% higher — points to systematic
            duplication rather than a one-off glitch. A gap that spikes on
            specific days is more likely tied to a deploy, app update, or
            theme change on that date.
          </p>
        </Reveal>
      </section>

      {/* CAUSES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The usual causes</h2>
            <div className="space-y-3">
              {CAUSES.map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="font-semibold text-white text-sm">{c.title}</div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{c.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Diagnosis, step by step</h2>
          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <p className="text-sm text-white/65 leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why this is worth fixing quickly</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Duplicate purchases don&apos;t just distort your reporting — they
              distort Meta&apos;s automated bidding, which optimizes toward
              whatever conversion signal it&apos;s receiving. If that signal is
              inflated, budget gets pushed toward audiences and placements
              that look artificially efficient. Fixing deduplication is one
              of the few tracking issues that directly changes how your
              budget gets spent, not just how it gets reported.
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
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-event-match-quality-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Event Match Quality explained
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Check your account for duplicate events</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and Meta account to see duplicate rates
            against your actual Shopify orders.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
