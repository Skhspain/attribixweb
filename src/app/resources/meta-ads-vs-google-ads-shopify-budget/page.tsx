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
    q: "Is Google always better for high-intent purchases and Meta only for discovery?",
    a: "That's the general pattern, not a rule. Meta retargeting reaches people who already viewed a product or abandoned a cart. That's near-purchase intent, not discovery. And plenty of Google Shopping impressions go to people still comparing options, well before they're ready to buy. Treat the intent-capture-vs-intent-creation framing as a starting lens, not a fixed law.",
  },
  {
    q: "Can branded search on Google really be credited to Meta?",
    a: "Some of it, yes, though never cleanly. If someone sees your product in a Meta ad, doesn't click, and later searches your brand name on Google before buying, Google Ads will report that as a Google-driven conversion. Meta gets no credit even though it likely created the demand. This is a known, structural limitation of last-click and platform-siloed reporting, not something either platform is doing wrong on purpose.",
  },
  {
    q: "What if I can only afford one channel right now?",
    a: "Start with whichever channel matches your situation: if there's already meaningful search volume for what you sell, Google captures demand that exists whether you show up or not. If your product is visual, novel, or impulse-driven with little existing search demand, Meta has more to work with. Budget alone shouldn't decide it; the factors in this article should.",
  },
  {
    q: "How much budget does each channel need before it can work?",
    a: "Enough to generate a steady flow of conversions for the platform's automated bidding to optimize against. Both Meta and Google's algorithms need a reasonably consistent weekly volume of conversion events to exit the early learning phase reliably. Below that volume, campaigns tend to behave erratically regardless of channel. See our breakdown on Shopify advertising budgets for how to reason through the actual number for your store.",
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
  headline: "Meta Ads vs Google Ads for Shopify: Where Should You Spend Your Budget?",
  description:
    "The genuine behavioral difference between Meta and Google Ads, where it blurs in real accounts, and how product type, AOV, search demand and creative capacity should decide where you start.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-vs-google-ads-shopify-budget" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Meta vs Google Ads Budget", item: "https://www.attribix.app/resources/meta-ads-vs-google-ads-shopify-budget" },
  ],
};

const FACTORS = [
  {
    factor: "Existing search demand",
    google: "Strong signal to lean Google: you're capturing intent that exists regardless of your ads.",
    meta: "Weak existing demand means Meta has more room to create attention from scratch.",
  },
  {
    factor: "Product visual appeal",
    google: "Matters less; a text ad or Shopping listing works for functional, plain products too.",
    meta: "Matters a lot: Meta is a visual, interruption-based format; unremarkable product photos underperform.",
  },
  {
    factor: "AOV and margin",
    google: "Higher AOV categories often justify higher CPCs on competitive search terms.",
    meta: "Lower AOV, higher-frequency purchases can work well with Meta's broader reach and lower typical CPCs.",
  },
  {
    factor: "Consideration cycle",
    google: "Longer research cycles suit Search, where people return to search again as they get closer to buying.",
    meta: "Short, impulse-driven cycles suit Meta's interruption model: see it, want it, buy it.",
  },
  {
    factor: "Creative production capacity",
    google: "Lower ongoing creative demand; good product data and a few solid ad variations go a long way.",
    meta: "High: Meta ad fatigue sets in faster, and it typically needs a steadier stream of new creative.",
  },
  {
    factor: "Feed quality",
    google: "Directly determines Shopping/PMax performance; a weak feed caps results regardless of budget.",
    meta: "Matters for catalog/dynamic ads, less critical for standard image and video prospecting ads.",
  },
];

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Meta vs Google Budget" }]} />
          <Eyebrow>Marketing &amp; Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads vs Google Ads for Shopify: Where Should You Spend Your Budget?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The rough rule of thumb: Google Ads generally captures purchase
            intent that already exists: someone is actively searching for
            what you sell. Meta generally creates attention that didn&apos;t
            exist a moment earlier, interrupting a scroll rather than
            answering a search. Neither description is complete on its
            own, and most stores that grow past a certain size end up
            running both. Where you start depends on your product, your
            market, and what you can produce.
          </p>
        </Reveal>
      </section>

      {/* THE BLUR */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Where the intent-capture vs intent-creation split breaks down</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The framing is useful but not literally true. Branded search on
            Google is frequently demand that Meta (or another channel)
            created first: someone saw your product in a feed, didn&apos;t
            click, and later typed your brand name into Google before
            buying. Google gets the attribution credit; Meta did real work
            that never shows up in its own reporting. In the other
            direction, Meta retargeting campaigns aren&apos;t creating
            anything; they&apos;re reaching people who already viewed a
            product page or added to cart, which is about as close to
            purchase intent as Search traffic. Both channels do both jobs
            to some degree. The framing tells you where each channel is
            strongest on average, not what it&apos;s limited to.
          </p>
        </Reveal>
      </section>

      {/* FACTOR TABLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">The factors that should actually decide it</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl mb-8">
              Instead of picking a channel on instinct, run your store
              against these six factors. Most stores lean clearly one way
              once they lay it out like this.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-white/5 text-white/80">
                    <th className="px-4 py-3 font-semibold">Factor</th>
                    <th className="px-4 py-3 font-semibold">Favors Google</th>
                    <th className="px-4 py-3 font-semibold">Favors Meta</th>
                  </tr>
                </thead>
                <tbody>
                  {FACTORS.map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="px-4 py-4 align-top font-medium text-white/85 border-t border-white/10">{row.factor}</td>
                      <td className="px-4 py-4 align-top text-white/55 border-t border-white/10">{row.google}</td>
                      <td className="px-4 py-4 align-top text-white/55 border-t border-white/10">{row.meta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUDGET LEVEL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Budget level: both channels need enough volume to work</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Regardless of which channel fits your product better on paper,
            neither one performs well underfunded. Both Meta and Google
            Ads use automated bidding that needs a reasonably steady
            weekly volume of conversion events to optimize reliably.
            Spread too thin, and campaigns spend most of their time in an
            unstable learning state rather than actually optimizing. This
            is a real mechanic of how the platforms work, not marketing
            language, and it&apos;s a legitimate reason to concentrate a
            small budget in one channel rather than splitting it evenly
            across both from day one.
          </p>
        </Reveal>
      </section>

      {/* MOST BRANDS RUN BOTH */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Most mature ecommerce brands eventually run both</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Once a store has enough volume to fund both channels
              properly, running only one starts leaving money on the
              table: either search demand nobody is capturing, or new
              customers nobody is prospecting for. The question this
              article is really answering isn&apos;t &quot;which channel
              forever,&quot; it&apos;s &quot;which channel first,&quot; while budget
              is still the binding constraint. Once it isn&apos;t, the
              conversation shifts to how to split spend well between the
              two, and eventually to when it&apos;s worth increasing spend
              on either one.
            </p>
          </Reveal>
        </div>
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
              <Link href="/resources/shopify-advertising-budget-how-much-to-spend" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much to spend on Shopify advertising
              </Link>
            </li>
            <li>
              <Link href="/resources/when-to-scale-ad-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When to scale your ad budget
              </Link>
            </li>
            <li>
              <Link href="/resources/mer-vs-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER vs ROAS for Shopify
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure which channel fits your store?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            We manage both Meta and Google Ads for Shopify stores and can
            walk through your product, margins and current traffic to
            figure out where to start.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
