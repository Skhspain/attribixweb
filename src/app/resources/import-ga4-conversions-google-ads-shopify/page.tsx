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
    q: "Can I run both native and GA4-imported purchase conversions?",
    a: "You can have both exist in the account, but only one should be marked as a primary conversion action feeding bidding for a given goal. Marking both as primary is the most common cause of Google Ads reporting more purchases than actually happened.",
  },
  {
    q: "Does Enhanced Conversions work with GA4-imported conversions?",
    a: "Enhanced Conversions is a feature of the native Google Ads tag. It doesn't apply the same way to a conversion that's imported from GA4, which is one practical argument for using the native path if identity matching matters to you.",
  },
  {
    q: "Which one should most Shopify stores use?",
    a: "There's no universal answer, but the native Google Ads purchase conversion (via the Google & YouTube app or a manual tag) is the more direct, purpose-built path for feeding Google Ads' own bidding. GA4 import tends to make more sense when GA4 is already your primary source of truth for cross-channel attribution and you want Google Ads decisions to line up with it.",
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
  headline: "Should You Import GA4 Purchases Into Google Ads on Shopify?",
  description: "Native conversion tracking vs GA4 imports, and why running both as primary causes double-counting.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/import-ga4-conversions-google-ads-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Import GA4 conversions", item: "https://www.attribix.app/resources/import-ga4-conversions-google-ads-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Import GA4 conversions" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should you import GA4 purchases into Google Ads on Shopify?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Google Ads can track a Shopify purchase two different ways: a
            native conversion action, or an imported GA4 conversion. They
            aren&apos;t interchangeable, and using both as your primary
            optimization signal is the fastest way to end up with
            conversion numbers that don&apos;t make sense.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Two different paths to the same event</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The native path sends a purchase conversion directly to Google
            Ads (usually via the Google &amp; YouTube Shopify app or a
            manually placed tag) built specifically to feed Google
            Ads&apos; bidding systems. The GA4 path records the purchase in
            Google Analytics first, as one event among everything else
            GA4 tracks across every channel, and then imports a version of
            it into Google Ads as a conversion action.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why this affects bidding, not just reporting</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              GA4&apos;s own attribution model decides which touchpoint
              gets credit for a purchase before that conversion is ever
              imported into Google Ads, which can differ from how
              Google Ads would have credited the same order natively.
              Enhanced Conversions, which improves identity matching using
              hashed customer data, is a feature of the native tag and
              doesn&apos;t apply the same way to an imported GA4
              conversion. If identity matching and Google Ads&apos; own
              attribution model matter to your optimization, the native
              path is generally the more direct fit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Marking both as primary is the real risk</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The most common problem isn&apos;t choosing one path over the
            other. It&apos;s having both active as primary conversion
            actions for the same goal, which counts each real purchase
            twice and inflates reported conversions. If you want GA4
            import available for reference or cross-channel analysis, set
            it as secondary rather than primary, and keep one clear
            conversion action driving bidding.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A practical way to decide</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If Google Ads is a standalone channel you optimize on its own
              terms, the native purchase conversion is usually the
              simpler, more purpose-built choice. If GA4 is already your
              cross-channel source of truth and you want Google Ads
              decisions to align with how you're measuring every other
              channel, importing from GA4 has a stronger case, as long as
              it's the only primary source, not an addition to the native
              tag.
            </p>
          </Reveal>
        </div>
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
            <li><Link href="/resources/google-ads-duplicate-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Duplicate Google Ads conversions on Shopify</Link></li>
            <li><Link href="/resources/google-ads-ga4-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads and GA4 don&apos;t match</Link></li>
            <li><Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads conversion tracking for Shopify</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure which setup you're running?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and we can check which conversion actions
            are actually feeding bidding on your account.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
