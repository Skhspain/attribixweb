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
    q: "Which number should I report to my boss or client — Google Ads or GA4?",
    a: "Report Google Ads conversions when you're talking about what the ad platform is optimizing toward and bidding against. Report GA4 when you're talking about total site performance across every channel, not just Google Ads. Using one to “correct” the other treats them as the same measurement, which they aren't.",
  },
  {
    q: "Can I make Google Ads and GA4 match exactly?",
    a: "No, and configuration changes won't get you there. Different attribution windows, different attribution models, and different consent-modeling behavior mean the two systems are structurally built to produce different totals, even when both are tracking correctly.",
  },
  {
    q: "Should I import GA4 conversions into Google Ads to fix the mismatch?",
    a: "That changes what Google Ads optimizes against, not whether the two dashboards agree — GA4's own reporting still runs its own attribution model regardless of what you import. It's a real decision with tradeoffs, covered separately.",
  },
  {
    q: "Is a big gap between Google Ads and GA4 a sign something's broken?",
    a: "Not by itself. A stable gap that holds its shape week over week is usually just the two models disagreeing the way they're built to. A gap that suddenly widens or narrows is worth investigating — that's a tracking or consent change, not model disagreement.",
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
  headline: "Google Ads and GA4 Don't Match: Which Numbers Should You Trust?",
  description: "Why Google Ads and GA4 report different conversion counts for the same Shopify store, and which number to use for what decision.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-ga4-dont-match" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Google Ads vs GA4", item: "https://www.attribix.app/resources/google-ads-ga4-dont-match" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Ads vs GA4" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads and GA4 don&apos;t match. Which one is right?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Neither is wrong. Google Ads counts conversions using its own
            attribution model on its own ad clicks. GA4 counts conversions
            using a different model across every channel that sent you
            traffic, not just Google Ads. They&apos;re answering different
            questions, so a gap between them isn&apos;t a bug to chase down —
            it&apos;s the expected result of two systems built to measure
            differently.
          </p>
        </Reveal>
      </section>

      {/* TWO DEFINITIONS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Two systems, two definitions of &quot;conversion&quot;</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A Google Ads conversion is scoped to Google Ads: it counts a
            purchase (or lead, or signup) that Google&apos;s own model credits
            to an ad click or view within that campaign&apos;s attribution
            window. GA4 doesn&apos;t work from clicks at all — it works from
            sessions, stitched together from whatever traffic source
            initiated them, and its purchase event fires the same way
            regardless of whether the customer arrived from a Google ad, an
            email link, organic search, or typed the URL directly. Compare
            Google Ads&apos; number to GA4&apos;s total conversions and you&apos;re
            comparing a Google-Ads-only figure to an all-channels figure —
            they were never going to line up.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION MODELS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Different attribution models, different credit</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Google Ads conversion tracking uses its own data-driven
              attribution model by default, applied only across a
              customer&apos;s interactions with Google Ads — search clicks,
              Shopping clicks, PMax touchpoints. GA4 runs its own
              data-driven model across the full channel mix it can see:
              paid, organic, social, email, direct. Even on an order that
              genuinely came from a Google Ads click, the two models can
              split credit differently if other channels touched the same
              customer journey. Google Ads has no visibility into the
              email click that happened two days earlier; GA4 does, and its
              model accounts for it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONVERSION DATE HANDLING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion date isn&apos;t the same date in both systems</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Google Ads generally logs a conversion against the date of the
            interaction (the click), then applies a lag for when the
            conversion actually happened — so a purchase completed three
            days after the click can still show up on the click&apos;s date
            once the report settles. GA4 logs a purchase event against the
            session in which it occurred. Pull both reports on the same
            calendar day, especially a recent one still settling, and
            you&apos;re looking at numbers built on different date logic, not
            a discrepancy in what actually happened.
          </p>
        </Reveal>
      </section>

      {/* CONSENT MODELING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consent modeling doesn&apos;t work identically either</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              When a customer declines cookie consent, both Google Ads and
              GA4 can statistically model conversions to fill the gap
              instead of just dropping the data — but they model against
              different consent signals (ad_storage for Google Ads,
              analytics_storage for GA4) and run separate modeling logic
              tuned to each product. A store with a meaningful share of
              consent-declined traffic can see Google Ads and GA4 diverge
              further than usual simply because each platform is filling
              in its own gaps differently, not because either one is
              measuring incorrectly. See{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>{" "}
              for how Consent Mode factors into the Google Ads side
              specifically.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CROSS-DEVICE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Cross-device journeys get stitched differently</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Google Ads can connect a click on one device to a purchase on
            another when the customer is signed into a Google account
            across both — that&apos;s Google&apos;s own identity graph, invisible
            to anyone outside the platform. GA4 stitches cross-device
            behavior through Google Signals or a configured User-ID, which
            depends on your own site sending that signal and on the
            customer being logged in or otherwise identifiable to GA4
            specifically. A phone-to-desktop purchase can get credited by
            one system and missed by the other, and there&apos;s no setting
            that reconciles the two identity graphs into one.
          </p>
        </Reveal>
      </section>

      {/* THREE QUESTIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Three systems, three different questions</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Google Ads answers &quot;how many conversions is this ad
              spend credited with, by my own model, within my own
              window?&quot; GA4 answers &quot;how many purchase events happened in
              a session, attributed across every channel I can see?&quot;
              Shopify answers a third question entirely: &quot;how many
              orders were actually placed, for how much, net of refunds?&quot;
              None of the three is lying. They&apos;re measuring different
              things, and the gap between any two of them is the size of
              that difference, not an error. The same logic applies to the
              Google Ads vs. Shopify comparison specifically — see{" "}
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Google Ads and Shopify revenue don&apos;t match
              </Link>{" "}
              for the mechanics on that side, and{" "}
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                ROAS tracking for Shopify
              </Link>{" "}
              for a fourth number — net ROAS — that&apos;s deliberately built
              to sit closer to Shopify&apos;s ledger than either ad platform&apos;s
              native reporting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT TO ACTUALLY CHECK */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What&apos;s worth checking vs. what isn&apos;t</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Don&apos;t spend time trying to force Google Ads and GA4 to the
            same total — structurally, they won&apos;t get there. Instead,
            track whether the ratio between them holds steady week to week.
            A stable ratio means both are measuring consistently, even if
            they disagree on the absolute number. A ratio that suddenly
            shifts — GA4 conversions holding flat while Google Ads drops,
            or the reverse — points at something that changed in one
            system specifically: a tag, a consent setting, or an import
            configuration, not a change in customer behavior.
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
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads and Shopify revenue don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/resources/import-ga4-conversions-google-ads-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you import GA4 purchases into Google Ads?
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure which number your account should be optimizing on</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Diagnosing a Google Ads vs. GA4 gap usually starts with a look
            inside both accounts. If the cause turns out to be a
            configuration issue that needs account-level access to fix,
            send an inquiry and we&apos;ll take it from there.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
