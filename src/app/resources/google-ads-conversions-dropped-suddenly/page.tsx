"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const SIGNALS = [
  {
    signal: "Google Ads conversions down, Shopify revenue steady",
    read: "Likely tracking. If the store is still selling at roughly the same rate but Google Ads has stopped seeing it, the orders are happening and Google Ads simply isn't being told about them.",
  },
  {
    signal: "Google Ads conversions down, Shopify revenue also down",
    read: "More likely a real performance problem. When both numbers move together, the tracking layer probably isn't the issue — something changed in traffic, demand, or the auction itself.",
  },
  {
    signal: "Clicks down",
    read: "Points at budget, bids, or competition — a capped daily budget, a bid strategy that pulled back, or a competitor bidding more aggressively for the same terms.",
  },
  {
    signal: "Impressions down",
    read: "Usually budget pacing (the campaign exhausts its daily budget early and stops showing) or a policy or disapproval issue limiting which ads are even eligible to enter the auction.",
  },
  {
    signal: "Clicks and impressions steady, conversion rate down",
    read: "Points away from tracking entirely — a landing page problem, a pricing or offer change, an inventory or stock issue, or new checkout friction.",
  },
  {
    signal: "A site deployment or theme change happened recently",
    read: "Check whether the conversion tag survived it. Theme migrations, app updates, and checkout changes can silently drop a snippet without any error appearing anywhere.",
  },
  {
    signal: "A consent banner change happened recently",
    read: "Check whether Consent Mode configuration shifted — a banner update that changed default consent state can suppress reported conversions without any actual drop in sales.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How fast should I react to a conversion drop?",
    a: "Give it a full day or two before treating a single day's dip as meaningful — conversion reporting has a natural lag as late-arriving conversions settle in. A drop that's still there after 48–72 hours, and holds across a comparable period (same day of week, similar traffic), is worth investigating properly.",
  },
  {
    q: "Can a Google Ads policy issue cause a conversion drop without any warning?",
    a: "It can show up before you'd notice a formal notification in some cases, though Google does typically flag disapprovals in the account. Check the Policy Manager and individual ad/asset status alongside impression and click trends if impressions dropped sharply.",
  },
  {
    q: "Does a drop in one campaign always mean the same thing as an account-wide drop?",
    a: "No. A single-campaign drop is more likely campaign-specific — budget, bids, a paused asset, a landing page for that campaign specifically. An account-wide drop across every campaign at once points more toward something structural: a tag, a shared conversion action, or a site-wide change.",
  },
  {
    q: "Is it normal for Google Ads conversions to fluctuate day to day?",
    a: "Yes, and normal day-to-day noise shouldn't be confused with a sudden drop. The distinction is scale and persistence — a single flat or low day is usually noise; a sustained multi-day drop that breaks from the recent trend is the pattern worth diagnosing.",
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
  headline: "Google Ads Conversions Suddenly Dropped: Performance or Tracking?",
  description: "How to tell whether a sudden Google Ads conversion drop is a real sales problem or a tracking problem, using signals Google Ads doesn't control.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-conversions-dropped-suddenly" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Google Ads conversions dropped", item: "https://www.attribix.app/resources/google-ads-conversions-dropped-suddenly" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Conversions dropped suddenly" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads conversions suddenly dropped. Performance or tracking?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A conversion count that falls off a cliff has two very different
            possible causes, and Ads Manager alone can&apos;t tell you which one
            you&apos;re looking at. The fastest way to find out is to check a
            number Google Ads doesn&apos;t control — Shopify&apos;s own order
            count — and then read the rest of the signals from there.
          </p>
        </Reveal>
      </section>

      {/* START WITH SHOPIFY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with the number Google Ads doesn&apos;t control</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Before touching a single setting in Ads Manager, pull Shopify&apos;s
            order count and revenue for the same window the drop appeared
            in. Google Ads reports what it observed through its own tag or
            integration — if that layer breaks, the platform has no way to
            know it, and it will confidently report a drop that never
            happened in the store. Shopify&apos;s order ledger doesn&apos;t depend
            on Google Ads&apos; tracking at all, which is exactly why it&apos;s the
            fastest way to split a tracking problem from a real one.
          </p>
        </Reveal>
      </section>

      {/* SIGNAL TABLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Reading the signal combination</h2>
            <p className="text-white/60 leading-relaxed text-sm mb-6 max-w-2xl">
              A single metric rarely tells the whole story on its own. What
              narrows the cause is which metrics moved together and which
              stayed flat.
            </p>
            <div className="space-y-3">
              {SIGNALS.map((s) => (
                <div key={s.signal} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="font-semibold text-white text-sm">{s.signal}</div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.read}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLICKS/IMPRESSIONS DEEPER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">If clicks or impressions moved, tracking probably isn&apos;t the story</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A tracking failure changes whether Google Ads hears about a
            conversion — it doesn&apos;t change how many people saw or clicked
            the ad. If impressions or clicks dropped alongside conversions,
            the more likely explanation lives upstream of tracking
            entirely: a budget cap hit earlier in the day, a bid strategy
            that pulled back after a Target ROAS or Target CPA recalculation,
            a competitor entering the auction more aggressively, or, for an
            impression drop specifically, a policy or disapproval issue
            limiting which of your ads are even eligible to show. None of
            these are fixed by touching the conversion tag.
          </p>
        </Reveal>
      </section>

      {/* WHAT CHANGED RECENTLY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4 grid gap-10 sm:grid-cols-2">
          <Reveal>
            <h3 className="font-semibold text-white">A recent deployment or theme change</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Theme updates, app installs or removals, and checkout
              extensibility changes can all silently drop a conversion
              snippet without throwing an error anywhere visible. If the
              timing of the drop lines up with a site change — even one
              that looks unrelated, like a checkout app swap — verify the
              tag is still firing on a live test order before looking
              anywhere else.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="font-semibold text-white">A recent consent banner change</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              If a consent management update changed default consent
              state, or changed how ad_storage consent gets requested and
              recorded, Consent Mode can suppress reported conversions
              even though the underlying sales kept happening — Google
              Ads models some of the gap back in, but not all of it, and
              not instantly. See{" "}
              <Link href="/resources/google-consent-mode-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Consent Mode for Shopify
              </Link>{" "}
              for how that mechanism works in more depth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT TRACKING FAILURE ACTUALLY LOOKS LIKE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What a broken tag looks like from inside Ads Manager</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A tracking failure tends to produce a specific shape: a sharp,
            near-vertical drop rather than a gradual decline, conversions
            near zero rather than just lower, and — critically — no
            corresponding movement in clicks or impressions, because
            whatever broke sits after the click, not before it. A real
            performance problem usually looks messier: a decline that
            tracks with clicks, or a conversion rate that degrades over
            days rather than falling off a cliff in one. If what you&apos;re
            seeing is the sharp, isolated version, tracking is the
            better first guess. Comparing Google Ads&apos; reported numbers
            against Shopify&apos;s side by side, the way{" "}
            <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Attribix&apos;s Google Ads tracking
            </Link>{" "}
            does, makes this pattern visible in one place instead of two
            separate dashboards you have to hold in your head at once.
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
              <Link href="/resources/google-ads-not-tracking-shopify-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads not tracking Shopify purchases
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads clicks but no sales
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-ga4-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads and GA4 don&apos;t match
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Still can&apos;t tell which one it is</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Once the cause narrows to a tag, a conversion action, or an
            account-level setting, fixing it usually needs access to the
            account itself. Send an inquiry and we&apos;ll help pin it down.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
