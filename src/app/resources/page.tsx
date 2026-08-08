"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";

const CATEGORIES = [
  "Attribution",
  "Meta Ads Tracking",
  "Google Ads Tracking",
  "Server-Side Tracking",
  "Measurement",
  "Shopify",
];

const CORE_GUIDES = [
  {
    title: "Shopify Attribution Software",
    desc: "How to connect Meta and Google Ads clicks to real Shopify orders — first-click, last-click and multi-touch models explained.",
    category: "Attribution",
    href: "/shopify-attribution",
  },
  {
    title: "Shopify Server-Side Tracking",
    desc: "Why browser tracking misses a growing share of orders, how server-side tracking works, and what it still can't solve.",
    category: "Server-Side Tracking",
    href: "/server-side-tracking-shopify",
  },
  {
    title: "Meta CAPI for Shopify",
    desc: "How the Conversions API works alongside the Pixel — event matching, deduplication, and Event Match Quality.",
    category: "Meta Ads Tracking",
    href: "/meta-capi-shopify",
  },
  {
    title: "Google Ads Conversion Tracking for Shopify",
    desc: "Why Google Ads and Shopify rarely agree on revenue, and how enhanced conversions and Consent Mode fit in.",
    category: "Google Ads Tracking",
    href: "/google-ads-conversion-tracking-shopify",
  },
  {
    title: "Shopify ROAS Tracking",
    desc: "Why adding Meta ROAS to Google ROAS overstates performance, and how blended ROAS and MER differ.",
    category: "Measurement",
    href: "/shopify-roas-tracking",
  },
];

const GUIDES = [
  {
    title: "How Shopify Server-Side Tracking Works",
    desc: "A technical guide — architecture, Meta and Google deduplication, consent, testing and common implementation mistakes.",
    category: "Server-Side Tracking",
    href: "/resources/shopify-server-side-tracking-guide",
  },
  {
    title: "Why Shopify and Meta Ads Show Different Sales Numbers",
    desc: "Attribution windows, view-through credit and consent limits explain most of the gap.",
    category: "Attribution",
    href: "/resources/why-shopify-meta-sales-dont-match",
  },
  {
    title: "Shopify Attribution Models Explained",
    desc: "First-click, last-click, linear, position-based and data-driven — what each one rewards and hides.",
    category: "Attribution",
    href: "/resources/shopify-attribution-models",
  },
  {
    title: "Meta Pixel vs Conversions API for Shopify",
    desc: "What the Pixel sees, what CAPI recovers, and how to run both without double-counting.",
    category: "Meta Ads Tracking",
    href: "/resources/meta-pixel-vs-capi-shopify",
  },
  {
    title: "Meta Event Match Quality for Shopify Explained",
    desc: "What EMQ measures, what moves it, and why a higher score isn't the same as better attribution.",
    category: "Meta Ads Tracking",
    href: "/resources/meta-event-match-quality-shopify",
  },
  {
    title: "How to Fix Duplicate Purchases in Meta Ads for Shopify",
    desc: "The usual causes, and a step-by-step way to diagnose which one you have.",
    category: "Meta Ads Tracking",
    href: "/resources/fix-duplicate-meta-purchases-shopify",
  },
  {
    title: "Why Google Ads and Shopify Revenue Don't Match",
    desc: "Conversion date vs. order date, duplicate conversion actions, refunds, and cross-channel overlap.",
    category: "Google Ads Tracking",
    href: "/resources/google-ads-shopify-revenue-doesnt-match",
  },
  {
    title: "Enhanced Conversions for Shopify Explained",
    desc: "What Enhanced Conversions recover, what they don't fix, and how they relate to server-side tracking.",
    category: "Google Ads Tracking",
    href: "/resources/enhanced-conversions-shopify",
  },
  {
    title: "How to Calculate True ROAS on Shopify",
    desc: "Platform ROAS vs. blended ROAS vs. true ROAS, and what actually separates them.",
    category: "Measurement",
    href: "/resources/true-roas-shopify",
  },
  {
    title: "MER vs ROAS for Shopify",
    desc: "ROAS depends on attribution; MER doesn't. When each one is the right tool.",
    category: "Measurement",
    href: "/resources/mer-vs-roas-shopify",
  },
];

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
  ],
};

export default function ResourcesPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-8 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <Eyebrow>Resources</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify attribution &amp; tracking resources
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Guides on Shopify attribution, server-side tracking, Meta CAPI and
            Google Ads conversion tracking — written for people who run the
            ads, not generic explainers.
          </p>
        </Reveal>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-3xl px-4 pb-8">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CORE GUIDES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-2">Start here</h2>
          <p className="text-sm text-white/60 mb-8 max-w-2xl">
            These five guides cover the core of how attribution and tracking
            actually work for Shopify stores running Meta and Google Ads.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {CORE_GUIDES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08] hover:border-white/20"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                  {g.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{g.desc}</p>
                <span className="mt-4 inline-block text-xs text-white/50 group-hover:text-white/80">
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* GUIDES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-2">Guides</h2>
          <p className="text-sm text-white/60 mb-8 max-w-2xl">
            Deeper, more specific guides on individual tracking and
            measurement problems.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {GUIDES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08] hover:border-white/20"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                  {g.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{g.desc}</p>
                <span className="mt-4 inline-block text-xs text-white/50 group-hover:text-white/80">
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
