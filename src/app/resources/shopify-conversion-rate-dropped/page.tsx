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
    q: "How much of a drop is actually worth investigating?",
    a: "Day-to-day conversion rate is noisy, especially on lower-traffic stores. A single bad day usually isn't worth chasing. A drop that holds for several days, or one that starts on a clear date and doesn't recover, is worth working through.",
  },
  {
    q: "Could this just be a smaller sample size?",
    a: "Yes. If overall traffic also dropped, your conversion rate can swing more than usual just from having fewer visits to average over. Check the volume of sessions before reading too much into a rate change alone.",
  },
  {
    q: "Should I check tracking before anything else?",
    a: "It's worth ruling out early, because it's quick to check and it's the one cause that doesn't actually mean anything is wrong with the store. If Shopify's own order count is fine and only a reporting number looks off, you're not chasing a real conversion problem.",
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
  headline: "Shopify Conversion Rate Suddenly Dropped: What to Check First",
  description: "How to find what actually changed before you start guessing at fixes.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-conversion-rate-dropped" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Shopify conversion rate dropped", item: "https://www.attribix.app/resources/shopify-conversion-rate-dropped" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Conversion rate dropped" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify conversion rate suddenly dropped: what to check first
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A conversion rate that falls off a cliff almost always has a
            specific trigger. Before you touch the theme, the offer or the
            ads, find the date it started and work backwards from what
            actually changed that day.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Find the exact day, not the week</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Pull daily conversion rate for the last few weeks rather than
            comparing this week to last week as a single number. A gradual
            decline points to something ongoing: seasonality, rising ad
            costs bringing in colder traffic, competitor pricing. A sharp
            step down on one specific day points to a change that happened
            on that day, which is a much shorter list of suspects to check.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Traffic mix can move the rate without the store changing</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If a new channel, campaign or influencer post brought in a
              wave of colder, lower-intent visitors, your blended
              conversion rate falls even though nothing on the site
              changed and your existing traffic still converts the same
              way it always did. Break conversion rate down by traffic
              source before assuming the store itself got worse. If the
              rate held steady within each channel but the mix shifted
              toward lower-converting sources, that's a media problem, not
              a store problem.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Something changed on the site or in the catalog</h2>
          <p className="text-white/60 leading-relaxed text-sm mb-4">
            Cross-reference the drop date against anything that touched the
            store around that time:
          </p>
          <ul className="space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>A theme update or a new app installed, even one that seems unrelated to checkout.</li>
            <li>A best-seller going out of stock, redirecting demand to lower-converting alternatives.</li>
            <li>A price increase, or a promotion or discount code expiring.</li>
            <li>A shipping rate or delivery estimate change.</li>
            <li>A checkout or payment provider change.</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Shopify app changes are worth checking specifically because
            they're easy to forget you made: a review widget, an upsell
            app or a page-speed tool can quietly slow down or interfere
            with a page without an obvious visual break.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Rule out a reporting change before a real one</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A conversion rate is a ratio of orders to sessions. Either
              side of that ratio can move for reasons that have nothing to
              do with buyer behavior. A tracking or consent-banner change
              can undercount sessions or orders in Shopify&apos;s own
              reporting; a bot-traffic spike can inflate the session
              denominator. Check Shopify&apos;s actual order count first.
              If orders are flat but the rate looks lower, the problem is
              probably in how sessions are being counted, not in whether
              people are buying.
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
            <li><Link href="/resources/shopify-traffic-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify traffic but no sales: find where the funnel is breaking</Link></li>
            <li><Link href="/resources/shopify-sales-down-traffic-same" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Sales dropped but traffic is the same</Link></li>
            <li><Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads ROAS dropped suddenly</Link></li>
            <li><Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify attribution software</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Still can&apos;t find the cause?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you&apos;ve worked through this and still can&apos;t isolate
            what changed, send us an inquiry. We can look at the account
            and the store together rather than guessing at either one in
            isolation.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
