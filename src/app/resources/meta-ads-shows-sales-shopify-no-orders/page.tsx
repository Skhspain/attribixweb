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
    q: "Is Meta just making up conversions?",
    a: "No. Meta reports what its tracking told it happened, based on whatever event configuration is live on your store. When that configuration is off — wrong event name, a leftover test Pixel, a reporting date range that doesn't line up — the number Meta shows is real from its side, it's just not counting what you think it's counting.",
  },
  {
    q: "Could someone be committing ad fraud against my account?",
    a: "It's extremely rare for this specific pattern. Click fraud and fake engagement exist, but they don't typically produce a Purchase event with no corresponding order — that requires something on your own site or Pixel setup to fire the event, which points at configuration rather than an outside actor.",
  },
  {
    q: "How is this different from Meta and Shopify revenue just not matching?",
    a: "Numbers that are simply different — Meta says $8,000, Shopify says $6,500 — usually come down to attribution windows and overlapping channels, which we cover in our guide to why Shopify and Meta sales don't match. This article is about a sharper case: Meta shows purchases for a period where Shopify shows zero orders at all, which points at a specific configuration problem rather than normal attribution variance.",
  },
  {
    q: "What if I've checked everything on this list and still can't find it?",
    a: "At that point it's worth getting a second set of eyes on the actual Events Manager configuration and Shopify order data side by side — some of these issues (a duplicated Pixel across two ad accounts, for instance) are easier to spot from inside the accounts than from a checklist.",
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
  headline: "Meta Ads Says I Have Sales but Shopify Shows No Orders",
  description:
    "Meta reporting purchases that Shopify shows zero orders for is almost always a measurement configuration issue, not phantom sales. Here's the order to check things in.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/meta-ads-shows-sales-shopify-no-orders",
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Meta Shows Sales, Shopify Shows None",
      item: "https://www.attribix.app/resources/meta-ads-shows-sales-shopify-no-orders",
    },
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
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Meta Shows Sales, Shopify Shows None" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Says I Have Sales but Shopify Shows No Orders
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            This is a sharper problem than Meta and Shopify simply disagreeing
            on revenue. If Ads Manager shows Purchase events for a period
            where Shopify shows zero orders, that&apos;s almost always a
            measurement configuration issue, not evidence of fake or stolen
            sales. Work through the checks below in order — the cause is
            usually one of a short, specific list.
          </p>
        </Reveal>
      </section>

      {/* CHECK 1 */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">1. Confirm it&apos;s actually the Purchase event</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Open Events Manager and look at exactly which event is being
            counted as a &ldquo;sale&rdquo; in the report you&apos;re
            reading. It&apos;s common to have a custom conversion or a
            differently-named event (sometimes left over from an old setup
            or a previous agency) that&apos;s reporting under a column
            labeled &ldquo;Purchases&rdquo; in a custom report, without
            actually being Meta&apos;s standard Purchase event tied to real
            order value. Click into the individual events and check what
            they&apos;re actually firing on, not just what the report column
            is called.
          </p>
        </Reveal>
      </section>

      {/* CHECK 2 */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">2. Look for a duplicate or test Pixel still live</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Stores that have gone through a rebuild, a new agency, or a
              platform migration sometimes end up with more than one Pixel
              installed — an old one still embedded in a legacy theme
              section, or a test Pixel from development that never got
              removed. If a test Pixel fires on a staging or duplicate
              version of the store, or a leftover Pixel fires on pages that
              don&apos;t actually process real orders, it can report
              purchases that have nothing to do with the live store&apos;s
              Shopify order data.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHECK 3 */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">3. Check for backfilled or historical attribution</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If you recently enabled the Conversions API, reconnected the
            Pixel, or fixed a broken integration, Meta can sometimes
            attribute a batch of older, real orders back into the current
            reporting window depending on how the events were timestamped
            and sent. This can look like new sales appearing out of nowhere.
            Cross-check the order IDs or timestamps in the event data
            against Shopify&apos;s actual order dates before assuming the
            sales are fabricated.
          </p>
        </Reveal>
      </section>

      {/* CHECK 4 */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">4. Check the date ranges actually match</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Meta Ads Manager and Shopify use different default attribution
              windows and time zones. Ads Manager may be crediting a
              purchase to the date the ad was clicked rather than the date
              the order happened, while Shopify records the order on the
              date it was placed. A purchase that&apos;s a day or two apart
              between the two systems isn&apos;t missing — it&apos;s sitting
              in a different bucket. Widen the Shopify date range by a few
              days on each side before concluding the order genuinely
              doesn&apos;t exist.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHECK 5 */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">5. Check for multiple domains or stores sharing one Pixel</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If the same Meta Pixel ID is installed on more than one domain —
            a staging site, a regional storefront, a wholesale site, or an
            old domain that still resolves — purchases from any of those can
            land in the same ad account&apos;s reporting. From inside Ads
            Manager this looks like one number. From inside a single
            Shopify store, it can look like sales that don&apos;t exist,
            because they happened on a different store entirely.
          </p>
        </Reveal>
      </section>

      {/* CHECK 6 */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">6. Check for an external or third-party checkout</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If the Pixel or CAPI event fires from a page that isn&apos;t
              actually Shopify&apos;s checkout — a landing page builder, a
              separate funnel tool, an upsell app with its own hosted
              checkout, or a payment link sent manually — the purchase can
              be real, but it never creates a Shopify order at all, because
              the transaction didn&apos;t route through Shopify. This is
              worth ruling out on stores running third-party funnel or
              upsell tools alongside the main Shopify checkout.
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
              <Link href="/resources/fix-duplicate-meta-purchases-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to fix duplicate purchases in Meta Ads
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta sales numbers don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads ROAS dropped suddenly: ads, website, or tracking?
              </Link>
            </li>
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Still not sure what&apos;s causing it?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta, Google and Shopify are telling you different things,
            send us an inquiry — we can review the setup and help determine
            whether it&apos;s advertising performance, your website,
            tracking, or attribution.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
