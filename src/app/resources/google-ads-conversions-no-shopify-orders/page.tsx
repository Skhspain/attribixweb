"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const CAUSES = [
  {
    title: "The conversion isn't actually a Purchase",
    note: "The \"Conversions\" total in Google Ads is a rollup across every enabled conversion action, not just Purchase. A lead form submission, a phone call click, an add-to-cart event, or even a generic page-view goal mislabeled as a conversion can all sit inside that same total without producing a Shopify order, because they were never supposed to.",
  },
  {
    title: "An imported GA4 event isn't measuring what you think",
    note: "If Google Ads is importing a GA4 conversion, check what GA4 event it's actually attached to. A GA4 event named something purchase-adjacent (begin_checkout, add_payment_info, or a custom event) can get imported as a conversion action without being the completed-purchase event itself.",
  },
  {
    title: "Historical or backfilled conversions from before a change",
    note: "Google Ads can attribute a conversion using data collected before a store migration, a domain change, or a conversion action reconfiguration. What's showing up today can reflect a click and a conversion window that both predate the current setup.",
  },
  {
    title: "The conversion action points at the wrong store or domain",
    note: "A conversion action created for a staging site, a previous Shopify domain, or a since-abandoned custom checkout can keep firing if it was never removed, recording activity that has nothing to do with the store currently taking orders.",
  },
  {
    title: "Date range confusion in the interface",
    note: "Google Ads' conversion date and Shopify's order date aren't guaranteed to fall on the same calendar day, and comparing two reports pulled with different date ranges, or comparing \"by conversion date\" to \"by conversion time\", can make matched activity look mismatched when it isn't.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Is Google Ads fabricating conversions that never happened?",
    a: "Almost never. What looks like a fake conversion is nearly always a labeling or configuration issue: the conversion action counting something other than a completed Shopify purchase, or pointing at data that doesn't reflect the current store setup. Treat it as a diagnosis problem, not evidence of platform-level fraud.",
  },
  {
    q: "How do I check which conversion action produced a specific conversion?",
    a: "In Google Ads, break the conversions report down by conversion action rather than looking at the account-wide total. Each action shows its own count and its source (website tag, app, or imported), which is usually enough to spot one that shouldn't be counted as a sale.",
  },
  {
    q: "Could this be the same issue as duplicate conversions?",
    a: "It can be related but isn't the same problem. Duplicate conversions mean a real order is being counted more than once. Conversions with no matching order usually mean a conversion action is counting something that was never a Shopify purchase in the first place. See how duplicates specifically happen for the adjacent case.",
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
  headline: "Google Ads Says I Have Conversions but Shopify Has No Orders",
  description: "Why Google Ads can report conversions that don't correspond to a Shopify order, and how to identify which conversion action is actually firing.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-conversions-no-shopify-orders" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Conversions with no orders", item: "https://www.attribix.app/resources/google-ads-conversions-no-shopify-orders" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Conversions with no orders" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads says I have conversions. Shopify says I have no orders.
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            This is almost always a configuration or labeling issue, not a
            fake or fraudulent conversion. Somewhere in the account, a
            conversion action is counting something that isn&apos;t a
            completed Shopify purchase. The fix is finding out which one
            and what it&apos;s actually measuring.
          </p>
        </Reveal>
      </section>

      {/* IDENTIFY THE ACTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">First, find out which conversion action is firing</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The headline &quot;Conversions&quot; number in Google Ads reporting is a
            sum across every conversion action enabled in the account. It
            isn&apos;t automatically a purchase count. It&apos;s whatever
            combination of actions someone set up, sometimes including
            actions added for a specific campaign and never revisited. Break
            the conversions report down by individual conversion action
            before assuming the whole total represents sales. That single
            step resolves this more often than any tag-level troubleshooting.
          </p>
        </Reveal>
      </section>

      {/* CAUSES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">What&apos;s usually behind it</h2>
            <div className="space-y-3">
              {CAUSES.map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="font-semibold text-white text-sm">{c.title}</div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{c.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FRAMING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why &quot;false conversion&quot; is the wrong frame</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            It&apos;s tempting to call a conversion with no matching order
            &quot;false,&quot; but that implies Google Ads invented an event that
            didn&apos;t happen. In nearly every case, something real did
            happen: a lead form was filled out, a checkout was started, a
            call was placed, and the conversion action is faithfully
            reporting it. The mismatch isn&apos;t fabrication, it&apos;s that the
            conversion action isn&apos;t scoped to &quot;completed Shopify
            purchase&quot; the way whoever&apos;s reading the report assumes it is.
            Once the action is identified correctly, the numbers usually
            stop looking mysterious.
          </p>
        </Reveal>
      </section>

      {/* SAME PROBLEM DIFFERENT PLATFORM */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The same pattern shows up on Meta too</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              This isn&apos;t a Google Ads-specific quirk. Meta accounts run
              into the equivalent problem when a Pixel or CAPI event fires
              for something other than a genuine completed order. See{" "}
              <Link href="/resources/meta-ads-shows-sales-shopify-no-orders" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads shows sales but Shopify has no orders
              </Link>{" "}
              for the same diagnosis applied to that platform. If you&apos;re
              managing both, it&apos;s worth checking both the same way.
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
              <Link href="/resources/google-ads-duplicate-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads duplicate conversions on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-shows-sales-shopify-no-orders" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads shows sales but Shopify has no orders
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads and Shopify revenue don&apos;t match
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Need help auditing the conversion actions themselves</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Sorting out which conversion action is actually counting sales
            usually means going through account-level configuration. Send
            an inquiry and we&apos;ll help identify what&apos;s actually firing.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
