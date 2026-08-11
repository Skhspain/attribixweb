"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "Is Google Ads management mostly about bidding?",
    a: "Bidding is one part, and increasingly automated bidding does much of the mechanical work itself. The higher-value work is usually feeding that automation good inputs — clean tracking, a healthy feed, sensible account structure — and catching where it's optimizing toward the wrong thing.",
  },
  {
    q: "Do I still need someone managing Performance Max, since it's automated?",
    a: "Yes, arguably more than with manual campaign types. PMax makes fewer decisions visible to you, which means the inputs — conversion tracking accuracy, feed quality, asset groups, audience signals — matter more, not less, and someone needs to be checking them.",
  },
  {
    q: "What should reporting from a Google Ads agency actually include?",
    a: "At minimum: spend, conversions and conversion value by campaign, how those compare to actual Shopify revenue (not just what Google Ads reports), and a clear explanation of what changed and why — not just a dashboard screenshot.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Does a Google Ads Agency Actually Do?",
  description: "The actual scope of managing a Google Ads account, month to month.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/what-does-a-google-ads-agency-do" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "What a Google Ads agency does", item: "https://www.attribix.app/resources/what-does-a-google-ads-agency-do" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What a Google Ads agency does" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What does a Google Ads agency actually do?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Less bid-tweaking than people expect, more account-structure
            and data-quality work than people expect. Automated bidding
            handles a lot of the mechanical decisions now — the job is
            mostly about making sure it's optimizing toward accurate,
            meaningful signals.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Account audit and structure</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Before changing anything, a proper engagement starts by
            reviewing what's actually there — campaign structure, how
            budget is split across Search, Shopping and Performance Max,
            what conversion actions exist and which one is primary, and
            whether historical performance data is even reliable enough to
            trust.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search, Shopping and PMax strategy</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Each campaign type needs different handling. Search still
              benefits from real keyword and match-type decisions and
              ongoing search-term and negative-keyword review. Shopping and
              PMax lean much harder on feed quality and conversion data
              than on manual targeting choices. A competent agency treats
              these as genuinely different disciplines rather than
              applying one generic playbook to all three.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Merchant Center and feed oversight</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            For any store running Shopping or PMax, the product feed is as
            important as the campaign settings. That means monitoring
            disapprovals, keeping titles and images in line with what
            actually converts, and catching feed sync issues before they
            silently shrink the eligible catalog.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion tracking as ongoing work, not a setup task</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Tracking breaks — a theme update, a checkout change, a
              consent-banner update — and automated bidding degrades
              quietly when it does, because it keeps optimizing toward
              whatever signal it's still receiving, even if that signal is
              now wrong. Ongoing verification of the purchase event,
              conversion values, and Enhanced Conversions matching is
              routine work, not a one-time setup step.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Bidding, budget and reporting that connects to real revenue</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Budget pacing, bid strategy selection and target adjustments
            are part of the job, but the more useful work is reconciling
            what Google Ads reports against what Shopify actually recorded
            — so decisions get made on real business performance, not just
            a platform-reported ROAS that might already be off.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-does-a-meta-ads-agency-do" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What does a Meta Ads agency actually do?</Link></li>
            <li><Link href="/resources/how-to-choose-a-google-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to choose a Google Ads agency for ecommerce</Link></li>
            <li><Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads conversion tracking for Shopify</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want us to manage it for you?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            We manage Google Ads with the same focus on measurement,
            tracking and actual business performance described above.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" inquiryHref="/ad-management/inquiry" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
