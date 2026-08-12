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
    q: "Is there a minimum budget below which ads don't work at all?",
    a: "There's no fixed number, but there's a real mechanic behind the question: automated bidding on both Meta and Google needs a certain volume of conversions per week to optimize reliably. Below that, campaigns can stay stuck in a longer, less efficient learning phase. The budget needed to reach that volume depends entirely on your CPA, which depends on your numbers, not a generic rule.",
  },
  {
    q: "Should I set budget as a percentage of revenue?",
    a: "It's a reasonable planning shortcut once you're established, but it's backwards as a starting point: it tells you nothing about whether that spend can actually generate profitable orders at your margin and target CPA. Build the number from unit economics first, then sanity-check it against a percentage of revenue.",
  },
  {
    q: "What if my allowable CPA is lower than what the market is actually charging?",
    a: "That's a real signal worth listening to: it can mean your margin or AOV can't currently support acquiring customers profitably through paid ads at competitive costs, which is a pricing or product economics question before it's a media-buying question.",
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
  headline: "How Much Should a Shopify Store Spend on Meta and Google Ads?",
  description: "Building an ad budget from your own numbers, not an industry rule of thumb.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-advertising-budget-how-much-to-spend" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "How much to spend on ads", item: "https://www.attribix.app/resources/shopify-advertising-budget-how-much-to-spend" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How much to spend on ads" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How much should a Shopify store spend on Meta and Google Ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There's no honest universal number here. Anyone giving you one
            is guessing. What you can actually build is a number specific
            to your store, starting from margin and average order value
            rather than a industry rule of thumb.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start from what you can afford to pay for a customer</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Your average order value and gross margin set a ceiling on
            what you can spend to acquire a customer and still be
            profitable on that order. If your margin per order is $30, an
            allowable CPA above that (before accounting for repeat
            purchases) isn't sustainable on a single-order basis, even if
            it looks fine on a ROAS report.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Work backwards from a revenue goal</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Say a store wants an extra $20,000 in monthly revenue from
              paid ads. With a $60 AOV, that's roughly 333 orders. If
              current conversion rate from ad traffic runs around 2%,
              that's about 16,650 sessions needed. If a reasonable CPC for
              that traffic sits around $1.20, that points to a budget in
              the region of $20,000 to reach the required traffic volume,
              a very different number than what a generic percentage-of-revenue
              rule would suggest, and one that&apos;s actually
              derived from this store&apos;s own funnel. This is
              illustrative: your own conversion rate and CPC will move
              the real number meaningfully.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Enough volume for the algorithm to actually learn</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Both Meta and Google's automated bidding need a meaningful
            number of conversions flowing through each week to optimize
            reliably. A budget spread too thin across too many campaigns
            can leave each one individually under that threshold, which
            shows up as inconsistent, noisy performance that never quite
            settles, not because the offer is wrong, but because the
            system never got enough signal to learn from.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A second scenario, same goal, different budget</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Take the same $20,000 revenue goal on a store with a $150 AOV
              instead of $60. That's about 133 orders needed rather than
              333, fewer sessions required at the same conversion rate,
              which can mean a meaningfully smaller budget reaches the same
              revenue goal. AOV and margin change the required spend more
              than most people expect, which is exactly why a flat
              industry number doesn&apos;t transfer well between stores.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A calculator would help here</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The inputs above (AOV, margin, target CPA, current conversion
            rate, and a revenue goal) are exactly the kind of thing a
            simple calculator can turn into a specific number instead of a
            manual spreadsheet exercise. That's a natural next step we
            haven't built yet, but the reasoning here is the same logic
            it would run on.
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
            <li><Link href="/resources/when-to-scale-ad-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Your ads are profitable: when should you increase budget?</Link></li>
            <li><Link href="/resources/meta-ads-vs-google-ads-shopify-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads vs Google Ads: where to spend your budget</Link></li>
            <li><Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify ROAS tracking</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want help working out the number?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and we can build a realistic budget from
            your actual AOV, margin and goals.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
