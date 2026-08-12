"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "Which attribution model should I use: first-click, last-click or data-driven?",
    a: "There's no universally correct choice. Last-click is the simplest to reason about and the default most platforms ship with. Data-driven is the most balanced in theory but needs real order volume to be statistically stable. Pick one, apply it consistently, and don't compare numbers produced under different models as if they were the same metric.",
  },
  {
    q: "Why do Meta and Google always seem to use different models by default?",
    a: "Each platform ships with its own default attribution settings, tuned to how it evaluates its own campaigns; that's a business decision by each platform, not a technical constraint you're stuck with everywhere.",
  },
  {
    q: "Does a longer attribution window mean more accurate attribution?",
    a: "No. It means more revenue gets attributed to advertising, not necessarily more correctly. A longer window pulls in more delayed purchases, some of which the ad genuinely influenced and some of which would have happened regardless.",
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

const MODELS = [
  { name: "First-click", rewards: "The first touchpoint that brought the customer into your world.", weakness: "Ignores everything that happened after, including the touchpoint that actually closed the sale." },
  { name: "Last-click", rewards: "The final touchpoint before purchase.", weakness: "Rewards the closer, not the opener. A discovery ad gets zero credit if a branded search closed the sale." },
  { name: "Linear", rewards: "Every touchpoint in the journey, equally.", weakness: "Treats a passing glance the same as a deliberate return visit, spreading credit without judging which touch actually mattered." },
  { name: "Position-based", rewards: "The first and last touch most heavily, with a smaller share to the middle.", weakness: "The 40/20/40 (or similar) split is a modelling choice, not a measured fact about your customers." },
  { name: "Data-driven", rewards: "Whatever touchpoints the underlying model finds statistically associated with conversion.", weakness: "Needs enough order volume to be statistically meaningful, and the model is a black box you can't fully audit." },
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Attribution Models Explained",
  description: "What first-click, last-click, linear and data-driven attribution reward and hide, and why Meta and Google rarely land on the same model.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-attribution-models" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Shopify Attribution Models Explained", item: "https://www.attribix.app/resources/shopify-attribution-models" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Attribution models" }]} />
          <Eyebrow>Attribution</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify attribution models explained
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            An attribution model decides which touchpoint gets credit for a
            sale. There&apos;s no model that&apos;s objectively correct; each one
            answers a slightly different question, and picking one is a
            deliberate trade-off, not a technical detail.
          </p>
        </Reveal>
      </section>

      {/* WHY IT MATTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The same journey, five different answers</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Take one customer: they see a Meta ad, ignore it, see it again a
            week later, click through, browse without buying, then find the
            store again through a Google search three days after that and
            purchase. Ask five different attribution models who gets credit
            for that sale, and you get five different answers, none of them
            wrong, because none of them are describing an objective fact.
            They&apos;re describing a rule you chose to apply.
          </p>
        </Reveal>
      </section>

      {/* MODELS TABLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The five models, side by side</h2>
            <div className="space-y-3">
              {MODELS.map((m) => (
                <div key={m.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="font-semibold text-white text-sm">{m.name}</div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed"><span className="text-white/80">Rewards:</span> {m.rewards}</p>
                  <p className="mt-1 text-sm text-white/50 leading-relaxed"><span className="text-white/70">Blind spot:</span> {m.weakness}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLICK VS VIEW / WINDOWS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Click-through, view-through, and the window around them</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Underneath whichever model you pick sits two more decisions:
            whether an ad <em>view</em> (not just a click) counts as a
            touchpoint, and how long after that touchpoint a purchase still
            counts. A 7-day click / 1-day view window will produce a
            noticeably different attributed-revenue number than a 28-day
            click / 1-day view window applied to the exact same orders,
            without either being more &quot;accurate.&quot; Longer windows generally
            attribute more revenue to advertising; shorter windows attribute
            less. Neither is measuring something different about your
            customers; they&apos;re just drawing the line at a different point.
          </p>
        </Reveal>
      </section>

      {/* WHY META AND GOOGLE DIFFER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why Meta and Google rarely agree</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Meta and Google each apply their own attribution model, on
              their own window, using only the touchpoints they can see on
              their own platform. Meta doesn&apos;t know about the Google search
              that happened between the ad view and the purchase. Google
              doesn&apos;t know about the Instagram scroll. Each platform reports
              as if its own touchpoints were the whole story, because from
              where it&apos;s sitting, they&apos;re all it can observe. That&apos;s the
              root cause of most Meta-vs-Google attribution disagreements:
              not a bug in either platform, but a structural limit of
              single-platform measurement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PICKING ONE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">There&apos;s no universally &quot;right&quot; model to pick</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The honest framing is that an attribution model is a lens, not a
            measurement instrument. Last-click tends to undervalue
            top-of-funnel discovery spend. First-click tends to overvalue it.
            Data-driven models are the most balanced in theory but require
            enough conversion volume to be statistically stable, and their
            internal logic isn&apos;t fully auditable. What matters more than
            picking the &quot;correct&quot; model is picking one, being consistent
            about which one you&apos;re looking at, and not comparing numbers
            produced under different models as if they were the same
            metric.
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
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution software
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta Ads show different sales numbers
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/view-through-conversions-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                View-through conversions: should you count them?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-attribution-window-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why changing your Meta attribution window changes your ROAS
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See your orders under a consistent model</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Attribix applies one clear methodology across Meta and Google, so
            you&apos;re comparing campaigns on the same terms.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
