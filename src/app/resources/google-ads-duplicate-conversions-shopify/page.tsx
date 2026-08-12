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
    q: "How do I know if it's duplication versus just a reporting difference?",
    a: "Check whether the gap holds a stable multiple (roughly 2x, consistently, tied to a specific setting like two primary actions both live) versus a gap that fluctuates with refunds, dates or attribution windows. A stable multiple points at duplication. A fluctuating one points at ordinary mismatch.",
  },
  {
    q: "Should I mark a duplicate conversion action as Secondary instead of deleting it?",
    a: "Usually yes, at least initially. Secondary actions still collect data and don't affect bidding or the headline Conversions total, so you keep the history without it double-counting. Deleting an action outright can also break historical reporting for that action.",
  },
  {
    q: "Does duplication affect conversion value as well as count?",
    a: "Yes: if the count is inflated, the aggregate value is too, even when each individual order's value is correct. Worth checking both together rather than assuming a correct-looking value means the count is also fine.",
  },
  {
    q: "Can Performance Max make duplication worse?",
    a: "Not directly, but because PMax's automated bidding optimizes hard against whatever conversion value and count it's given, an inflated conversion signal from duplication has a bigger downstream effect on PMax's spend decisions than it would on a manually managed campaign.",
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
  headline: "Duplicate Google Ads Conversions on Shopify",
  description: "The specific mechanics (multiple primary actions, overlapping tags, per-click counting, missing transaction IDs) that cause Google Ads to count one Shopify order more than once.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-duplicate-conversions-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Duplicate Google Ads conversions", item: "https://www.attribix.app/resources/google-ads-duplicate-conversions-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Duplicate conversions" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Duplicate Google Ads conversions on Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Duplication happens when more than one tracking path counts the
            same Shopify order as a separate conversion: two conversion
            actions both marked primary, two implementations both firing, or
            a counting setting that logs every page load instead of one per
            order. The orders themselves are real. Google Ads is just
            recording each of them more than once, which inflates conversion
            count and revenue together even though nothing shipped that
            didn&apos;t actually sell.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT LOOKS LIKE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What duplication actually looks like</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The tell is a stable multiple, not a fuzzy gap. If Google Ads
            reports conversions running at roughly twice (or three times)
            Shopify&apos;s order count for the same channel and date range,
            consistently, that&apos;s a strong signal something is structurally
            counting each order more than once. A gap that moves around
            depending on the week, or that shrinks and grows with refund
            activity, is a different problem: ordinary attribution and
            reporting mismatch, not duplication. More on that distinction
            below.
          </p>
        </Reveal>
      </section>

      {/* MULTIPLE PRIMARY ACTIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Multiple &quot;Primary&quot; conversion actions counted together</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Every conversion action set to Primary status contributes to
              the headline Conversions column and to automated bidding:
              Google Ads sums them. If a native Purchase conversion action
              and a separately imported GA4 purchase event are both marked
              Primary, and both are logging the same orders, Google Ads is
              literally adding two records of one sale. This is the single
              most common cause of duplication on Shopify accounts, because
              it&apos;s easy to enable GA4 import without checking whether the
              existing native action is still Primary too.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO IMPLEMENTATIONS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The Google &amp; YouTube app and a separate GTM setup, both live</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Shopify&apos;s built-in Google &amp; YouTube channel integration
            deploys its own conversion tag automatically. If a store also has
            a manually configured Google Tag Manager container in the theme
            (often left over from before the app was installed, or added
            later without checking what was already there), both fire
            independently on the same order. Neither implementation knows
            the other exists, so neither suppresses the duplicate. This
            usually traces back to an incomplete migration: someone installed
            the app but never removed the old manual snippet, or vice versa.
          </p>
        </Reveal>
      </section>

      {/* EVERY VS ONE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The &quot;every&quot; vs &quot;one&quot; counting setting</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A conversion action can be configured to count every conversion
              or one conversion per click/interaction. For a purchase action,
              you almost always want one per order. If it&apos;s set to count
              every occurrence instead, a single order that re-renders its
              confirmation page (a browser back-and-forward, a manual
              refresh, a webhook retry that re-fires the event) gets logged
              as multiple separate conversions from what was actually one
              sale. Worth checking this setting directly on the Purchase
              action rather than assuming the default is right for your
              setup.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRANSACTION ID */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Missing or non-unique transaction IDs</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Google Ads relies on the transaction ID passed with a purchase
            event to recognize a repeat firing as the same order rather than
            a new one. If that ID is missing, or a static placeholder value
            gets reused across every order instead of the actual Shopify
            order ID, Google loses the ability to deduplicate: a page
            reload or retry that would otherwise be recognized and ignored
            instead counts as a fresh conversion. This compounds with the
            &quot;every&quot; setting above: correct transaction IDs are what makes
            &quot;one per order&quot; enforceable in the first place.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBIX MENTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Attribix sends Shopify order data to Google Ads with a
              consistent transaction ID per order and shows that alongside
              what Google Ads actually recorded, which makes a stable 2x-type
              gap visible immediately instead of surfacing weeks later in a
              spend review. See the mechanics on the{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>{" "}
              page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NOT DUPLICATION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What this isn&apos;t: ordinary attribution difference</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A Google Ads conversion count that&apos;s close to but not identical
            to Shopify&apos;s order count, and moves around week to week, is a
            different topic entirely. Conversion-date-vs-order-date timing,
            attribution windows, refunds, and cross-channel overlap with Meta
            all produce that kind of variance without any technical
            duplication happening. That mismatch pattern is covered in{" "}
            <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              why Google Ads and Shopify revenue don&apos;t match
            </Link>
            . The quickest way to tell the two apart: duplication produces a
            consistent multiple tied to a specific setting; ordinary mismatch
            produces a variable gap tied to timing and refund activity.
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
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads and Shopify revenue don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-not-tracking-shopify-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads not tracking Shopify purchases: step-by-step
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-conversion-value-wrong-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion value is wrong on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">When the settings check out and the gap stays</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            This covers the settings worth checking yourself. When
            duplication persists after checking them, or the cause turns out
            to be layered across multiple tools, that&apos;s account-level
            investigation: send us the details and we&apos;ll dig in.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
