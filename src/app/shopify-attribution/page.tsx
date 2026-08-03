"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import DiagramFrame from "@/components/marketing/DiagramFrame";
import FAQList from "@/components/marketing/FAQList";

const JOURNEY = ["Meta ad", "Store visit", "Google search", "Email", "Shopify purchase"];

const MODELS = [
  { name: "First-click", credit: "100% to Meta ad", note: "Rewards discovery — good for measuring top-of-funnel reach, but ignores everything after." },
  { name: "Last-click", credit: "100% to email", note: "What most ad platforms default to internally — rewards the final nudge, ignores what built the intent." },
  { name: "Multi-touch", credit: "Split across Meta, Google, email", note: "Spreads credit across the path — closer to reality, but the split itself is a modelling choice, not a fact." },
];

const FAQ_ITEMS = [
  {
    q: "Does Shopify have built-in attribution?",
    a: "Shopify's own reports mostly track the last session before a purchase and lean on UTM parameters. It's a starting point, but it doesn't reconcile what Meta and Google are separately claiming for the same order.",
  },
  {
    q: "Will attribution numbers ever match Meta and Google exactly?",
    a: "No, and that's expected. Ad platforms measure inside their own walled gardens, on their own attribution windows. Attribix measures against what actually happened in Shopify — the two are answering different questions.",
  },
  {
    q: "Do I need to change my ad platform settings to use this?",
    a: "No. Attribix reads campaign and spend data from Meta and Google as they're already set up, and reconciles it against Shopify orders. It doesn't require you to change bidding or reporting settings on either platform.",
  },
];

export default function ShopifyAttributionPage() {
  return (
    <ProductPageShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-3xl px-4 pt-24 pb-14 md:pt-32">
        <Reveal>
          <Eyebrow>Shopify attribution</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify attribution software
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            One purchase can look like it belongs to Meta, Google, and email
            all at once. Attribix reconciles that against what actually shipped
            in Shopify, so campaign decisions start from one number instead of
            three competing ones.
          </p>
          <ProductCTA className="mt-9" />
        </Reveal>
      </section>

      {/* WHAT IS IT */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">What Shopify attribution actually means</h2>
          <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
            <p>
              Shopify marketing attribution is the practice of tracing a
              completed order back to the marketing that produced it — which
              ad, which campaign, and which touchpoints a customer passed
              through before they checked out. It sits on top of your store,
              not inside any single ad platform, because no single ad
              platform can see the whole journey.
            </p>
            <p>
              That distinction matters. Meta only sees what happened inside
              Meta&apos;s ecosystem. Google only sees what happened inside
              Google&apos;s. Shopify attribution software like Attribix pulls
              from both, plus your actual order data, so campaign decisions
              are based on one consistent picture instead of two competing
              ones.
            </p>
          </div>
        </Reveal>
      </section>

      {/* WHY THEY DISAGREE */}
      <section className="relative py-14">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Why Shopify, Meta and Google report different numbers
            </h2>
            <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
              <p>
                Every platform in a customer&apos;s path is willing to claim
                the sale. Meta counts a purchase if it happened within its
                attribution window after an ad interaction. Google does the
                same, on its own window and its own click definition. If a
                customer clicked a Meta ad on Monday and a Google search ad
                on Wednesday before buying on Friday, both platforms may log
                that order as theirs — and Shopify just sees one purchase,
                often labelled &ldquo;direct&rdquo; if the last visit had no
                tracking parameters at all.
              </p>
              <p>
                None of the three are lying. They&apos;re each answering a
                narrower question than &ldquo;what actually drove this
                order,&rdquo; using data limited to their own platform.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW ATTRIBIX CONNECTS CLICKS TO ORDERS */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">
            How Attribix connects clicks to real Shopify orders
          </h2>
          <p className="mt-5 text-white/65 leading-relaxed max-w-2xl">
            Attribix pairs client-side and server-side events with your
            Shopify order data, then stitches a customer&apos;s touchpoints
            into a single journey ending in a purchase — or not.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <DiagramFrame caption="A simplified customer journey — the same order, seen in full.">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {JOURNEY.map((step, i) => (
                <div key={step} className="flex items-center gap-2 md:gap-3">
                  <div
                    className={
                      "rounded-xl border px-4 py-3 text-sm text-center " +
                      (i === JOURNEY.length - 1
                        ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-200 font-medium"
                        : "border-white/10 bg-white/5 text-white/75")
                    }
                  >
                    {step}
                  </div>
                  {i < JOURNEY.length - 1 && (
                    <span aria-hidden className="text-white/25">→</span>
                  )}
                </div>
              ))}
            </div>
          </DiagramFrame>
        </Reveal>

        <Reveal delay={150} className="mt-6">
          <p className="text-sm text-white/55 leading-relaxed max-w-2xl">
            Meta claims the sale, because it saw the ad click. Google claims
            it too, because it saw the search click that came after. Attribix
            shows the full path and lets you decide how credit gets split
            between the two — which is the question that actually matters
            for next month&apos;s budget.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION MODELS */}
      <section className="relative py-14">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              One order, three different credit splits
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              Take the journey above — Meta ad, store visit, Google search,
              email, purchase. Here&apos;s how three common models would each
              credit that single order.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-7 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left text-white/40 text-xs uppercase tracking-wide">
                  <th className="py-2 pr-4 font-medium">Model</th>
                  <th className="py-2 pr-4 font-medium">Credit assigned</th>
                  <th className="py-2 font-medium">What it's good for</th>
                </tr>
              </thead>
              <tbody>
                {MODELS.map((m) => (
                  <tr key={m.name} className="border-b border-white/5 align-top">
                    <td className="py-3 pr-4 font-semibold text-white whitespace-nowrap">{m.name}</td>
                    <td className="py-3 pr-4 text-cyan-300 whitespace-nowrap">{m.credit}</td>
                    <td className="py-3 text-white/55 leading-relaxed">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-white/45">
              Attribix shows the same order set under each model side by
              side, rather than locking you into whichever one an ad
              platform defaults to internally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">What attribution can&apos;t tell you</h2>
          <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
            <p>
              Attribution reconstructs a likely path from the data available
              to it. It doesn&apos;t capture touchpoints that leave no
              trace — a customer who saw an ad but didn&apos;t click, word of
              mouth, or a browser blocking tracking entirely. Attribution
              windows are also a judgment call: a 7-day or 30-day window will
              produce different numbers for the same business.
            </p>
            <p>
              Treat attribution data as the best available reconstruction of
              what happened, not as ground truth. It&apos;s built to guide
              budget decisions with more evidence than platform-reported ROAS
              alone — not to replace judgment entirely.
            </p>
          </div>
        </Reveal>
      </section>

      {/* WHO IT'S FOR */}
      <section className="relative py-14">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">Who this is for</h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              Attribix is built for Shopify and Shopify Plus stores running
              paid ads on Meta and Google that need a single, reconciled view
              of what&apos;s driving revenue — whether ads are managed
              in-house, by an agency, or by our own{" "}
              <Link href="/managed-services" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                managed services team
              </Link>
              . If you&apos;re only spending on one channel with no
              cross-channel overlap, platform reporting alone may be enough —
              attribution earns its keep once more than one channel is in
              play.
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

      {/* FINAL CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See your real attribution numbers</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your Shopify store, Meta and Google accounts, and see
            your first reconciled report in minutes.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
