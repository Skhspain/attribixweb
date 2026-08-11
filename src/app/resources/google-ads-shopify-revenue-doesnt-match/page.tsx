"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "Should Google Ads revenue ever exactly equal Shopify revenue?",
    a: "No. Google Ads only reports the subset of orders its own attribution model credits to Google Ads clicks, using its own window and conversion-date logic — it was never going to equal your total Shopify revenue, which includes every channel.",
  },
  {
    q: "How do I know if it's duplication rather than one of these five mechanics?",
    a: "Duplication tends to show up as a consistent, proportional overcount — Google reporting a fixed percentage more conversions than Shopify orders, week after week. See the dedicated duplicate-conversions guide for the specific settings to check.",
  },
  {
    q: "Does Performance Max make this worse?",
    a: "Not on its own — but because PMax leans harder on conversion value for bidding than manually managed campaigns, any existing tracking error has a bigger downstream effect on where it spends.",
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

const CAUSES = [
  { title: "Conversion date vs. order date", note: "Google logs a conversion when the tag fires, near checkout. Shopify logs the order at the moment it's placed. A late-firing tag or a delayed webhook shifts which day's report each shows up in." },
  { title: "Attribution windows and models", note: "Google Ads attributes a conversion to a click within its own window, using its own model — the same structural gap covered on the Google Ads tracking page." },
  { title: "Duplicate or secondary conversion actions", note: "A Shopify app's conversion action layered on top of a manually configured Google Ads tag, both counting the same purchase." },
  { title: "Refunds, discounts, tax and shipping", note: "Google Ads conversion value doesn't automatically adjust for a refund processed after the fact. Shopify's order total, meanwhile, reflects gross, net, or tax-inclusive figures depending on which report you're reading." },
  { title: "Cross-channel overlap", note: "The same order can be credited by both Google Ads and Meta if the customer interacted with both before buying — adding the two together overstates combined attributed revenue." },
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Google Ads and Shopify Revenue Don't Match",
  description: "What actually causes the gap between Google Ads reported revenue and Shopify order revenue.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-shopify-revenue-doesnt-match" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Google Ads vs Shopify revenue", item: "https://www.attribix.app/resources/google-ads-shopify-revenue-doesnt-match" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Ads vs Shopify revenue" }]} />
          <Eyebrow>Google Ads Tracking</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Google Ads and Shopify revenue don&apos;t match
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Five separate mechanics all push Google Ads&apos; reported revenue
            away from Shopify&apos;s order total, usually at the same time and in
            different directions. Here&apos;s what&apos;s actually happening.
          </p>
        </Reveal>
      </section>

      {/* CAUSES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The five mechanics behind the gap</h2>
          <div className="space-y-3">
            {CAUSES.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="font-semibold text-white text-sm">{c.title}</div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PMAX NOTE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Performance Max makes accurate value more important, not less</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              PMax&apos;s automated bidding optimizes directly against whatever
              conversion value it&apos;s given. It doesn&apos;t add a new source of
              mismatch on its own, but because it leans on conversion value
              more heavily than manually managed Search or Shopping
              campaigns, any existing tracking error — duplicate
              conversions, stale refund data — has a larger downstream
              effect on what PMax decides to spend on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT TO CHECK */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What&apos;s actually worth checking</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Start with Google Ads&apos; own conversion action settings — confirm
            there&apos;s exactly one primary conversion action for Purchase, not
            a primary and a secondary both counting. Then check whether
            refunds are being reported back to Google Ads at all (they
            usually aren&apos;t, by default). Then compare the ratio between the
            two systems over a stable period rather than chasing an exact
            daily match, which conversion-date-vs-order-date timing alone
            makes unlikely.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/enhanced-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Enhanced Conversions for Shopify explained
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-duplicate-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Duplicate Google Ads conversions on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution software
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Compare your own Google Ads and Shopify numbers</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and Google Ads account to see the actual gap
            for your orders, not an illustrative example.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
