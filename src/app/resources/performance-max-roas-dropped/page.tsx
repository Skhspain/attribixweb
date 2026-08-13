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
    q: "Can Performance Max ROAS drop because of Google's own bidding experiments?",
    a: "It can move if Google Ads is running an experiment against the campaign, or after a Smart Bidding strategy re-calibrates following a goal or target change. Check the Experiments section and your change history before assuming the cause is external.",
  },
  {
    q: "How much of a ROAS swing is normal week to week?",
    a: "Some variance is expected, especially on lower-volume accounts where a handful of orders can move the average meaningfully. There's no universal threshold: the useful comparison is against your own account's typical range over several months, not a single prior week.",
  },
  {
    q: "Should I lower my target ROAS as soon as performance drops?",
    a: "Not immediately. Lowering the target changes how the algorithm bids and can take time to settle, which makes it harder to tell whether the original problem is still there. Diagnose the cause first: a tracking gap or feed issue won't be fixed by a lower target.",
  },
  {
    q: "Does pausing and restarting a PMax campaign reset the learning period?",
    a: "Pausing and resuming can trigger a new learning phase, and so can significant edits like changing bidding strategy, budget, or the conversion goal. If you're mid-diagnosis, make one change at a time so you can tell what actually moved the result.",
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
  headline: "Performance Max ROAS Suddenly Dropped: How to Diagnose It",
  description:
    "The order to check causes in when Performance Max ROAS drops suddenly: tracking, reporting lag, feed changes, competition, recent account changes, stock-outs, and brand mix shifts.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/performance-max-roas-dropped" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Performance Max ROAS Dropped", item: "https://www.attribix.app/resources/performance-max-roas-dropped" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Performance Max ROAS Dropped" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Performance Max ROAS suddenly dropped: how to diagnose it
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A sudden ROAS drop in Performance Max usually has one dominant
            cause, not seven at once. The job is ruling causes out in the
            right order instead of guessing. Check whether tracking changed,
            then whether the drop is even real or just reporting lag, then
            feed changes, competition, recent bidding or budget edits,
            stock-outs, and a shift in brand versus non-brand traffic mix.
          </p>
        </Reveal>
      </section>

      {/* TRACKING CHANGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Rule out a tracking change first</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            The same principle that applies to a PMax campaign with{" "}
            <Link href="/resources/performance-max-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              no sales at all
            </Link>{" "}
            applies here: PMax&apos;s automated bidding optimizes against
            whatever conversion value it&apos;s reported, and a tracking
            change often looks exactly like a performance drop. A theme
            update, a checkout change, an app install or removal, a consent
            banner edit, or a Google Tag Manager container change can all
            quietly break or degrade purchase tracking on the exact day
            performance appears to fall off a cliff. Check your Purchase
            conversion count against actual Shopify orders for the same
            window before looking anywhere else. See{" "}
            <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Google Ads conversion tracking for Shopify
            </Link>{" "}
            for what typically causes this.
          </p>
        </Reveal>
      </section>

      {/* REPORTING LAG */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check whether it&apos;s a real drop or a reporting delay</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Google Ads records a conversion against the date of the click,
              not the date the purchase actually completed, and conversions
              can take time to fully attribute and appear in reporting. How
              much of the most recent few days is still under-reported
              depends on your account&apos;s own conversion lag: a store
              where most purchases happen within minutes of the click will
              see the last day or two settle quickly, while longer
              consideration cycles can leave a wider recent window
              incomplete. If the &ldquo;drop&rdquo; you&apos;re seeing is
              concentrated in the most recent days, check your typical lag
              before treating it as a real trend rather than an artifact of
              how the data fills in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEED CHANGES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Feed changes</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Check Products → Needs attention in Merchant Center for a recent jump in
            disapproved or unavailable products, a broken feed sync, or a
            recent attribute or category change that could have shifted how
            products are matched to queries. A feed that quietly loses a
            batch of previously-approved products doesn&apos;t announce
            itself in Google Ads reporting. It just shows up as fewer
            conversions from a smaller eligible catalog. Full detail on
            disapproval causes is in{" "}
            <Link href="/resources/google-merchant-center-product-disapproved" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Google Merchant Center product disapprovals
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* COMPETITION / SEASONALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Increased competition or seasonality</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              More advertisers bidding into the same auctions raises CPCs
              without any change on your end, which compresses ROAS even at
              a stable conversion rate. Seasonal demand shifts do the same in
              the other direction: a category with a sharp seasonal peak
              will often show a ROAS decline right as that peak passes,
              which can look like a tracking or account problem when it&apos;s
              actually a demand curve doing what demand curves do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RECENT CHANGES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Recent budget or target ROAS changes</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Check the account&apos;s change history before assuming the cause
            is external. Raising a Target ROAS pushes the algorithm toward
            fewer, higher-confidence auctions, which can look like a
            performance drop in aggregate even though the campaign is
            behaving exactly as instructed. Cutting budget mid-flight
            disrupts pacing and can force the algorithm to re-learn spend
            patterns. Either change made shortly before the drop is a strong
            candidate for the actual cause.
          </p>
        </Reveal>
      </section>

      {/* STOCK-OUTS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Stock-outs on top-performing products</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If a handful of bestsellers drove a disproportionate share of
              conversions and they went out of stock, PMax doesn&apos;t sit
              idle. It shifts spend toward whatever else in the feed is
              still available, including products with historically weaker
              conversion rates. Nothing about tracking, bidding, or the
              account changed; the campaign&apos;s best-converting inventory
              simply stopped being sellable. Cross-check inventory levels on
              your top products against the timing of the drop.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BRAND VS NON-BRAND */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Brand vs. non-brand traffic mix shifting</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Brand search typically converts at a higher rate and lower cost
            than non-brand traffic, because the customer already knows what
            they&apos;re looking for. If brand&apos;s share of PMax traffic
            drops (from seasonality, a competitor bidding on your brand
            terms, or simply less brand demand in a given week), the
            blended ROAS falls even if non-brand performance itself hasn&apos;t
            changed at all. The Insights section in Performance Max
            surfaces some of this split; it&apos;s worth checking before
            concluding the whole campaign got worse, when it may just be
            carrying a harder mix of traffic than before.
          </p>
        </Reveal>
      </section>

      {/* MID ARTICLE PRODUCT MENTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">Confirming the timing against real revenue</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Whichever cause looks most likely, it helps to confirm exactly
              when the drop started against your actual Shopify revenue, not
              just Google Ads&apos; own reporting. The two don&apos;t always
              move in lockstep, and a drop that&apos;s sharper in Google Ads
              than in Shopify usually points back at tracking or reporting
              lag rather than a genuine sales slowdown. Attribix shows
              Google Ads&apos; reported numbers next to actual Shopify orders
              day by day, which makes that comparison quick instead of a
              manual export exercise. See{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
              .
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
              <Link href="/resources/performance-max-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Performance Max spending money but getting no sales
              </Link>
            </li>
            <li>
              <Link href="/resources/google-merchant-center-product-disapproved" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Merchant Center product disapprovals explained
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-conversions-dropped-suddenly" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversions dropped suddenly
              </Link>
            </li>
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Get your Performance Max account diagnosed</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            We&apos;ll trace the drop back to its actual cause (tracking,
            feed, bidding, or the market) against your real Shopify orders.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
