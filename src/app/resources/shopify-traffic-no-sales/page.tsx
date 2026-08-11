"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";
import DiagramFrame from "@/components/marketing/DiagramFrame";

const FAQ_ITEMS = [
  {
    q: "My Shopify sessions are climbing but orders aren't. Where do I actually start?",
    a: "With the funnel report, not a checklist. Open Shopify Analytics and look at sessions, product views, add-to-cart and checkout-started as a sequence, and find the single stage where the percentage drop is largest relative to the others. Everything after that is a symptom of the same cause; everything before it is probably fine.",
  },
  {
    q: "Could this actually be a tracking problem rather than a real drop in sales?",
    a: "It's worth ruling out before anything else. Check your Shopify order count and revenue directly in the admin — not an ad platform's reported conversions. If Shopify shows orders coming in at a normal rate and only your ad platform's numbers look broken, the store isn't the problem; the tracking between the platform and Shopify is.",
  },
  {
    q: "Is a 1-2% conversion rate normal, or is that the problem?",
    a: "There's no single normal number — conversion rate depends heavily on price point, category, traffic source and average order value, so a rate that's healthy for one store can be a warning sign for another. Compare your current rate against your own store's recent history and against the same traffic source over time, rather than against an industry figure.",
  },
  {
    q: "How long should I wait before deciding something is actually broken?",
    a: "Long enough to rule out normal day-to-day noise — compare like periods (this week vs. last week, not Tuesday vs. Wednesday) and check whether the drop holds across multiple days rather than reacting to a single low day.",
  },
  {
    q: "Should I check mobile and desktop separately?",
    a: "Yes. If most of your traffic is mobile, a problem that only affects mobile checkout or page load can look like a store-wide conversion problem in the blended numbers. Shopify's funnel report can usually be filtered or cross-checked by device.",
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
  headline: "Shopify Traffic but No Sales? Find Where the Funnel Is Breaking",
  description:
    "A stage-by-stage way to read your Shopify funnel — product views, add-to-cart, checkout — and find exactly where visitors are dropping off before assuming a fix.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-traffic-no-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Shopify Traffic but No Sales", item: "https://www.attribix.app/resources/shopify-traffic-no-sales" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Traffic but No Sales" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify traffic but no sales? Find where the funnel is breaking
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Traffic without sales means something between a session and a
            completed order is failing — but that could be five very
            different problems, and the fix only works if you find the right
            one. The way in is to read the funnel stage by stage, not to
            guess at a fix and hope it sticks.
          </p>
        </Reveal>
      </section>

      {/* THE FUNNEL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The funnel you're actually diagnosing</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Every Shopify order passes through the same sequence: a session
            lands on the store, a visitor views a product, some of them add
            it to cart, some of those start checkout, and some of those
            complete the purchase. Shopify's own analytics (Analytics →
            Reports → the online store conversion funnel) shows this as a
            simple set of percentages between stages. That report is the
            starting point for this whole exercise — not a generic CRO
            checklist, not a redesign, not a new app. Find the stage where
            the biggest percentage of people disappear, and you've found
            which of the problems below is actually yours.
          </p>
          <div className="mt-8">
            <DiagramFrame caption="Each arrow is a different failure mode — traffic quality, offer clarity, price/shipping shock, checkout friction.">
              <svg viewBox="0 0 640 200" className="w-full h-auto" role="img" aria-label="Funnel diagram showing sessions narrowing through product views, add to cart, checkout started, and purchase, with the width of each stage representing the percentage of visitors remaining.">
                <rect x="10" y="20" width="620" height="34" rx="8" className="fill-cyan-400/20" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
                <text x="320" y="42" textAnchor="middle" className="fill-white text-[12px] font-semibold">Sessions</text>

                <rect x="50" y="66" width="540" height="34" rx="8" className="fill-cyan-400/15" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
                <text x="320" y="88" textAnchor="middle" className="fill-white text-[12px] font-semibold">Product views</text>

                <rect x="110" y="112" width="420" height="34" rx="8" className="fill-purple-400/15" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
                <text x="320" y="134" textAnchor="middle" className="fill-white text-[12px] font-semibold">Add to cart</text>

                <rect x="170" y="158" width="300" height="34" rx="8" className="fill-amber-400/15" stroke="rgba(251,191,36,0.4)" strokeWidth="1" />
                <text x="320" y="180" textAnchor="middle" className="fill-white text-[12px] font-semibold">Checkout started → Purchase</text>
              </svg>
            </DiagramFrame>
          </div>
        </Reveal>
      </section>

      {/* TRAFFIC QUALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Sessions that never really engage</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If a large share of sessions leave without viewing a single
              product — high bounce, very few pages per session, seconds on
              site — that's a traffic quality or source-match problem, not a
              product or checkout problem. It usually means the click doesn't
              match what the visitor expected: an ad promising a discount
              that isn't visible on landing, a broad audience with no real
              interest in the category, or traffic landing on a blog post or
              collection page instead of the product the ad showed. Segment
              by source and medium and compare bounce and pages-per-session
              across channels — if one channel is bringing in a large volume
              of sessions with almost no engagement, that channel is the
              issue, not the store.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT PAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product views without add-to-cart</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If visitors are reaching product pages and reading them but not
            adding to cart, traffic quality usually isn't the issue — the
            offer or the page is. Common causes: the value proposition isn't
            clear in the first few seconds, product photography doesn't
            answer basic questions (scale, material, what's actually
            included), there's no social proof on a page where a stranger
            has no other reason to trust the brand, or a default variant is
            out of stock and the page doesn't make that obvious. Shopify's
            analytics can break view-to-cart rate down by product — if it's
            uniformly low across your catalog, look at the page template. If
            it's low on specific products only, look at those products
            individually.
          </p>
        </Reveal>
      </section>

      {/* CART TO CHECKOUT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Add-to-cart without starting checkout</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              This gap is usually about cost, not desire — the visitor wanted
              the product enough to add it, then hesitated once the real
              total became visible. Shipping cost appearing for the first
              time at the cart, unexpected taxes or duties, a longer than
              expected delivery estimate, or a discount code field that
              sends someone off to search for a coupon they never come back
              with, are the usual suspects. This stage gets a full,
              dedicated breakdown — including how to use Shopify's abandoned
              checkout data as a diagnostic tool — in{" "}
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                lots of add to carts but no purchases on Shopify
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHECKOUT TO PURCHASE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Checkout started without completing</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The narrowest and often most fixable gap: someone entered
            checkout with a card in hand, essentially, and still didn't buy.
            This is almost always mechanical rather than emotional —
            a missing payment method, a shipping or tax calculation that
            surprises them at the last screen, a currency or localization
            issue for international visitors, or friction that's specific to
            mobile checkout forms. The full breakdown of checkout-stage
            causes, separate from the earlier cart-stage ones above, is in{" "}
            <Link href="/resources/shopify-checkout-no-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Shopify customers reach checkout but don't buy
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* MOBILE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check whether it's actually a mobile problem</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Because most Shopify traffic skews mobile, a problem that only
              shows up on phones — slow page load on a heavy theme, a
              payment sheet that doesn't render correctly, buttons that are
              hard to tap accurately — can drag down the blended, all-device
              numbers enough that it looks like a store-wide issue. Before
              treating this as a general funnel problem, split the same
              funnel report by device. If the drop is concentrated on mobile
              specifically, the fix is narrower than it first appears.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACKING - LAST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Last: rule out that sales are happening but not being reported</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Check this last, not first — it's tempting to jump straight to
            "tracking is broken" because it feels less painful than "the
            store has a real problem," but for most stores the funnel
            explanation above is the actual answer. Still, it's worth
            confirming: open Shopify's own order count and revenue directly.
            If real orders are coming through at a normal rate and it's only
            an ad platform's reported conversions that look like zero, "no
            sales" actually means "sales that aren't being attributed" — a
            tracking and attribution issue, not a store or funnel one. That
            gap between Shopify's own numbers and what Meta or Google report
            is covered in{" "}
            <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              why Shopify and Meta sales numbers don't match
            </Link>
            , and how attribution models decide which channel gets credit at
            all is covered on the{" "}
            <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Shopify attribution
            </Link>{" "}
            page.
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
              <Link href="/resources/shopify-conversion-rate-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify conversion rate suddenly dropped: what to check first
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Lots of add to carts but no purchases on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-checkout-no-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify customers reach checkout but don't buy
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-sales-down-traffic-same" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify sales dropped but traffic is the same
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta sales numbers don't match
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution software
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Still can't isolate where it's breaking?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you've worked through the funnel and the ad accounts and still
            can't pin down the cause, send us an inquiry — we can look at
            the account and the store together rather than guessing at
            either one in isolation.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
