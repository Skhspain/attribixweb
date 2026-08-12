"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";
import DiagramFrame from "@/components/marketing/DiagramFrame";

const MISTAKES = [
  { title: "No link between browser and server events", note: "Without Meta's shared event ID or a consistent transaction/order ID in Google's conversion setup, the platform has no way to know the browser and server events are the same order, so it counts the purchase twice." },
  { title: "Server events sent regardless of consent", note: "The server-side path is built to fire unconditionally, ignoring the same consent choice the browser-side tracking respects." },
  { title: "Only email as a matching parameter", note: "Works, but leaves match quality lower than it needs to be: phone number and order/customer IDs strengthen it meaningfully." },
  { title: "Testing with one order and calling it done", note: "A single successful test order doesn't reveal timing issues, webhook retries, or edge cases like partial refunds and edited orders." },
  { title: "Treating the server event as automatically more accurate", note: "Server-side tracking recovers events the browser missed. It doesn't independently verify that the browser event it's paired with was correct." },
];

const FAQ_ITEMS = [
  {
    q: "Does server-side tracking replace browser-side tracking entirely?",
    a: "No. The two are meant to run together: server-side recovers what the browser missed, and browser-side still contributes signals (like on-site behavior) the server path doesn't have.",
  },
  {
    q: "Does this require a developer, or can it run through an app?",
    a: "Both approaches exist. Shopify apps can wire up server-side events through Shopify's webhook system without custom code; a developer-built integration gives more control over exactly what data is sent and when.",
  },
  {
    q: "How do I know if it's actually working?",
    a: "Check the ad platform's own event testing tools (Meta's Test Events, Google's Tag Assistant or diagnostics) against real test orders, and watch for the platform's deduplication indicator confirming the browser and server events were matched as a pair.",
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
  headline: "How Shopify Server-Side Tracking Works: Architecture, Consent & Testing",
  description: "A technical guide to Shopify server-side tracking: browser vs server events, Meta and Google deduplication, consent, testing and common implementation mistakes.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-server-side-tracking-guide" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Server-Side Tracking Guide", item: "https://www.attribix.app/resources/shopify-server-side-tracking-guide" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Server-side tracking guide" }]} />
          <Eyebrow>Server-Side Tracking · Technical guide</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Shopify server-side tracking works
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Server-side tracking sends conversion events to Meta and Google
            directly from your backend instead of relying only on the
            customer&apos;s browser. Here&apos;s how the pieces fit together, what it
            actually fixes, and where implementations typically go wrong.
          </p>
          <p className="mt-4 text-sm text-white/40 leading-relaxed">
            Looking for Attribix&apos;s Shopify server-side tracking solution?{" "}
            <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              See how it works →
            </Link>
          </p>
        </Reveal>
      </section>

      {/* WHY IT EXISTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why browser-only tracking isn&apos;t enough anymore</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Browser-based tracking depends on a chain of things going right:
            the page has to load fully, a script has to execute, a cookie
            has to persist, and no ad blocker or browser privacy feature can
            interrupt it. Safari&apos;s Intelligent Tracking Prevention shortens
            cookie lifespans. Ad blockers stop pixel requests before they
            fire. A customer who closes the tab a second early loses the
            event entirely. None of this is rare: on iOS traffic
            especially, it&apos;s the default condition, not an edge case.
          </p>
        </Reveal>
      </section>

      {/* ARCHITECTURE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The basic event architecture</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl mb-4">
              A server-side setup for Shopify generally follows the same
              shape regardless of platform:
            </p>
            <ol className="space-y-3 text-sm text-white/65 leading-relaxed list-decimal list-inside">
              <li>An order or checkout event fires on Shopify&apos;s side, typically a webhook (order creation, checkout completion).</li>
              <li>That event is enriched with customer matching data (hashed email, phone, or an external/order ID) and any browser-side identifiers (like Meta&apos;s click ID) that were captured earlier in the session.</li>
              <li>The enriched event is sent server-to-server to Meta&apos;s Conversions API and/or Google&apos;s server-side conversion endpoint.</li>
              <li>The platform matches and deduplicates the server event against its browser-side counterpart using its own method: a shared event ID for Meta, or a unique transaction/order ID tied to the conversion action for Google Ads.</li>
            </ol>

            <div className="mt-8">
              <DiagramFrame caption="Two independent paths for the same event. Meta and Google each handle matching and duplicate prevention their own way.">
                <svg viewBox="0 0 600 220" className="w-full h-auto" role="img" aria-label="Diagram showing Shopify checkout feeding both a browser tracking path and a server tracking path, with the browser path vulnerable to ad blockers and cookie loss while the server path goes directly to Meta and Google, each applying its own platform-specific matching and deduplication.">
                  <rect x="235" y="10" width="130" height="46" rx="10" className="fill-white/5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <text x="300" y="38" textAnchor="middle" className="fill-white text-[13px] font-semibold">Shopify checkout</text>

                  <line x1="300" y1="56" x2="150" y2="90" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" />
                  <line x1="300" y1="56" x2="450" y2="90" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" />

                  <rect x="60" y="90" width="180" height="50" rx="10" className="fill-cyan-400/5" stroke="rgba(56,189,248,0.35)" strokeWidth="1" />
                  <text x="150" y="112" textAnchor="middle" className="fill-white text-[12px] font-semibold">Browser (Pixel)</text>
                  <text x="150" y="128" textAnchor="middle" className="fill-white/50 text-[10px]">blocked by ad blockers, ITP, closed tabs</text>

                  <rect x="360" y="90" width="180" height="50" rx="10" className="fill-fuchsia-400/5" stroke="rgba(168,85,247,0.35)" strokeWidth="1" />
                  <text x="450" y="112" textAnchor="middle" className="fill-white text-[12px] font-semibold">Server (webhook)</text>
                  <text x="450" y="128" textAnchor="middle" className="fill-white/50 text-[10px]">independent of the customer&apos;s browser</text>

                  <line x1="150" y1="140" x2="150" y2="168" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" />
                  <line x1="450" y1="140" x2="450" y2="168" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" />

                  <rect x="90" y="168" width="420" height="42" rx="10" className="fill-emerald-400/10" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
                  <text x="300" y="194" textAnchor="middle" className="fill-white text-[12px] font-semibold">
                    Platform-specific matching and deduplication → Purchase recorded
                  </text>
                </svg>
              </DiagramFrame>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FIRST PARTY DATA */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why first-party data is the foundation</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Server-side tracking is only as good as the customer data behind
            it. A Shopify checkout that reliably collects email, and ideally
            phone number, gives the ad platforms enough to match an event
            to a real account with reasonable confidence. A checkout that
            collects less gives server-side tracking less to work with,
            regardless of how well the technical integration is built.
            First-party data quality is the ceiling; the integration is what
            reaches it.
          </p>
        </Reveal>
      </section>

      {/* DEDUP + CONSENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Deduplication and consent are not optional extras</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Two things separate a working server-side setup from a broken
              one that just adds noise. First, duplicate prevention: without
              a consistent link between the browser and server paths (a
              shared event ID for Meta, a unique transaction ID tied to the
              right conversion action for Google Ads), every order gets
              counted twice. Second, consent: a server-side event must
              respect the same tracking consent decision as the browser
              event it pairs with. Server-side isn&apos;t a way to track a
              customer who declined tracking, it&apos;s a more reliable way to
              track a customer who agreed to it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Common implementation mistakes</h2>
          <div className="space-y-3">
            {MISTAKES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="font-semibold text-white text-sm">{m.title}</div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TESTING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Testing it properly</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Place a handful of real test orders across different
              conditions: desktop and mobile, with and without an ad
              blocker, with a fresh session and a returning one. Check each
              platform&apos;s event-testing tool for whether the server event
              arrived, whether it deduplicated correctly against the browser
              event, and what match quality it received. Then keep watching
              for the first week of real traffic. Synthetic test orders
              rarely surface every edge case (partial refunds, edited
              orders, guest checkout without a phone number) that real
              customers will.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What to realistically expect</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Server-side tracking recovers a meaningful share of the orders
            browser-only tracking was missing. It doesn&apos;t produce complete
            tracking. Customers who decline consent stay excluded, as they
            should. Guest checkouts with minimal data still get weaker
            matches than accounts with phone and order history. And no
            method, server or browser, tells you about the customer who saw
            an ad and never clicked. Treat it as meaningfully closing a real
            gap, not as solving tracking outright.
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
              <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify server-side tracking
              </Link>
            </li>
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See what your current setup is missing</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your Shopify store and see which purchase events are
            currently making it to Meta and Google, and which aren&apos;t.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
