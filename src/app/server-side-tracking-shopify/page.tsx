"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "What is server-side tracking for Shopify?",
    a: "Sending purchase and other conversion events to Meta and Google directly from a server, alongside what the browser reports — so events blocked or dropped client-side still arrive.",
  },
  {
    q: "Does server-side tracking replace the Meta Pixel?",
    a: "No. Pixel and server-side events are meant to run together, each catching what the other misses, matched by a shared event ID so the same purchase isn't counted twice.",
  },
  {
    q: "Does server-side tracking get around consent requirements?",
    a: "No. Server-side events still depend on the customer having consented to tracking and on having enough identifying data — an email or phone number, for example — to match the event. It closes a technical gap, not a legal one.",
  },
  {
    q: "Will this fix ad blockers entirely?",
    a: "It recovers a meaningful share of what ad blockers and browser restrictions remove, but some visitors decline tracking entirely and some journeys don't leave enough signal to reconstruct. Expect improvement, not completeness.",
  },
  {
    q: "How is this different from Shopify's native Meta or Google integrations?",
    a: "Shopify's native app integrations typically send a basic server-side purchase event. Attribix adds deduplication and reconciles that event against your actual order data across Meta and Google at once.",
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

export default function ServerSideTrackingPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-12 md:pt-32">
        <Reveal>
          <Eyebrow>Server-side tracking</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify server-side tracking
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A growing share of Shopify orders happen without the browser ever
            reporting them. Server-side tracking sends the same purchase
            event from your server instead, reducing the gap created by
            browser-side tracking loss.
          </p>
          <ProductCTA className="mt-9" />
        </Reveal>
      </section>

      {/* BROWSER LIMITS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Browser tracking only shows part of the picture</h2>
          <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
            <p>
              A standard Meta Pixel or Google tag fires from the customer&apos;s
              browser at checkout. That works fine until something between
              the browser and the ad platform breaks the connection —
              Safari&apos;s Intelligent Tracking Prevention trimming cookie
              lifespans, an ad blocker stripping the script outright, a
              customer closing the tab a second early, or a network request
              that just never lands.
            </p>
            <p>
              None of these are rare edge cases anymore. On iOS Safari in
              particular, a meaningful share of purchase events never reach
              the ad platform at all, which means the platform under-reports
              conversions and — because it thinks the campaign performed
              worse than it did — can end up optimising away from audiences
              that were actually converting.
            </p>
          </div>
        </Reveal>
      </section>

      {/* BROWSER VS SERVER DIAGRAM */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2">
            <div className="bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Browser tracking</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/70">Customer</div>
                <div className="pl-3 text-white/25">↓</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/70">Browser</div>
                <div className="pl-3 text-white/25">↓</div>
                <div className="rounded-lg border border-red-400/20 bg-red-400/[0.06] px-3 py-2 text-red-200/80">Blocked, delayed, or incomplete</div>
              </div>
            </div>
            <div className="bg-cyan-500/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300/70">Server-side tracking</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/70">Customer</div>
                <div className="pl-3 text-white/25">↓</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/70">Shopify / Attribix server</div>
                <div className="pl-3 text-white/25">↓</div>
                <div className="rounded-lg border border-cyan-400/25 bg-cyan-400/[0.08] px-3 py-2 text-cyan-100">Meta / Google Ads</div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/35">Simplified — illustrative, not a literal network diagram.</p>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-4">What one purchase event goes through</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {["Browser signal", "Server-side signal", "Platform-specific matching", "Duplicate prevention", "Purchase recorded"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70">{step}</span>
                  {i < arr.length - 1 && <span aria-hidden className="text-white/25">→</span>}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/35">Conceptual — the actual sequence per order depends on which events your store and ad accounts send.</p>
          </div>
        </Reveal>
      </section>

      {/* WHAT CHANGES */}
      <section className="relative py-12">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">What actually changes when events come from the server</h2>
          </Reveal>
          <div className="mt-8 space-y-8">
            <Reveal delay={60}>
              <div className="flex gap-5">
                <span className="mt-0.5 shrink-0 text-2xl font-extrabold text-white/10">01</span>
                <div>
                  <p className="font-semibold text-white text-sm">Event matching</p>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                    Each server event carries identifiers — email, phone, or an
                    internal click ID — that Meta or Google can match to a
                    known user, even without a cookie. Match quality depends
                    entirely on what identifiers are available and hashed
                    correctly; a server event with no usable identifiers
                    isn&apos;t much more useful than a dropped browser event.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex gap-5">
                <span className="mt-0.5 shrink-0 text-2xl font-extrabold text-white/10">02</span>
                <div>
                  <p className="font-semibold text-white text-sm">Duplicate prevention</p>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                    Running both a browser pixel and a server event for the
                    same purchase means the ad platform could count it twice.
                    Meta and Google handle this differently: Meta can
                    deduplicate matching browser and server events using a
                    shared event ID, while Google Ads relies on its own
                    conversion-action setup and unique transaction identifiers
                    to prevent the same purchase from being counted more than
                    once.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex gap-5">
                <span className="mt-0.5 shrink-0 text-2xl font-extrabold text-white/10">03</span>
                <div>
                  <p className="font-semibold text-white text-sm">Purchase value accuracy</p>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                    Because server events are built from Shopify order data
                    rather than the raw value the browser captured at
                    checkout, purchase values can be reconciled against
                    discount codes and currency conversion from the start —
                    and against later refunds or order updates when the
                    integration sends the corresponding adjustments.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Privacy and consent still apply</h2>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Server-side tracking is a different transport, not a way around
            consent requirements. If a customer declines tracking consent,
            that choice still has to be respected in what gets sent
            server-side — the data just travels a more reliable route once
            consent is given.
          </p>
        </Reveal>
      </section>

      {/* INTEGRATIONS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Meta and Google, from one setup</h2>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            Attribix sends server-side events to both the{" "}
            <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Meta Conversions API
            </Link>{" "}
            and{" "}
            <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Google Ads enhanced conversions
            </Link>{" "}
            from the same Shopify order data, rather than requiring a
            separate integration and a separate set of matched identifiers
            for each platform.
          </p>
        </Reveal>
      </section>

      {/* HONEST LIMITS */}
      <section className="relative py-12">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold">What this doesn&apos;t solve</h2>
            <p className="mt-4 text-white/60 leading-relaxed text-sm">
              Server-side tracking recovers events that browser tracking
              would have missed — it doesn&apos;t make tracking complete.
              Customers who decline consent are still excluded, as they
              should be. Identity matching still depends on the customer
              providing an email or phone number at checkout. And no method,
              server or browser, tells you about the ad a customer saw but
              never clicked. Treat it as a meaningful improvement to data
              quality, not a guarantee of catching every conversion.
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

      {/* RELATED READING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Related reading</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/resources/shopify-server-side-tracking-guide" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Shopify server-side tracking works (technical guide)
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
            <li>
              <Link href="/resources/ios-ad-blockers-shopify-tracking-loss" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                iOS, ad blockers and privacy: how much tracking are you losing?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Check what your current setup is missing</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your Shopify store and see which purchase events are
            currently making it to Meta and Google — and which aren&apos;t.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
        <p className="mt-6 text-sm text-white/35">
          See how this feeds into{" "}
          <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            Shopify attribution
          </Link>{" "}
          reporting, or{" "}
          <Link href="/ad-management/inquiry" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            ask about tracking and attribution setup
          </Link>
          .
        </p>
      </section>
    </ProductPageShell>
  );
}
