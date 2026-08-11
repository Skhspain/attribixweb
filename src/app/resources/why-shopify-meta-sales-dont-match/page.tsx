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
    q: "Which number is correct — Meta's or Shopify's?",
    a: "Neither is wrong, and neither is the full picture. Shopify records what was actually purchased. Meta records what its attribution model credits to Meta ads within its own measurement window. They're answering different questions.",
  },
  {
    q: "Should Meta's reported sales ever equal Shopify's total sales?",
    a: "No — Meta only reports the subset of Shopify orders its model attributes to Meta ads. It was never going to equal total store revenue, which includes direct, email, organic and every other channel too.",
  },
  {
    q: "Does turning off view-through attribution fix the gap?",
    a: "It changes the gap, not necessarily improve it. Removing view-through credit usually lowers Meta's reported number and makes it look more conservative, but it doesn't make the remaining click-based number any more \"true\" — it's just a different, narrower model.",
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
  headline: "Why Shopify and Meta Ads Show Different Sales Numbers",
  description:
    "How attribution windows, click vs. view-through credit and consent limits create the gap between Meta's reported sales and Shopify orders.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/why-shopify-meta-sales-dont-match" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Why Shopify and Meta Ads Show Different Sales Numbers", item: "https://www.attribix.app/resources/why-shopify-meta-sales-dont-match" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Meta vs Shopify sales" }]} />
          <Eyebrow>Attribution</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Shopify and Meta Ads show different sales numbers
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Meta&apos;s Ads Manager and your Shopify orders page are measuring two
            different things, on two different windows, with two different
            standards of evidence. The gap between them isn&apos;t a bug — it&apos;s
            what you should expect.
          </p>
        </Reveal>
      </section>

      {/* SHOPIFY VS META */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A transaction record vs. an attribution model</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Shopify records a fact: an order was placed, for this amount, at
            this time. Meta doesn&apos;t have access to that fact directly — it
            estimates which of its ads probably caused a purchase, using its
            own attribution model, and reports revenue against that estimate.
            One is a ledger. The other is a model built on incomplete
            visibility into what happened outside Meta&apos;s own properties.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION WINDOWS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution windows count different time periods</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              Meta&apos;s default attribution setting credits a purchase to an ad
              if it happened within a set window after a click or a view —
              commonly 7 days after a click, 1 day after a view, though this
              is configurable per ad account. A customer who saw an ad on
              Monday and bought two weeks later, unprompted by anything else,
              falls outside that window and gets no credit. Shopify has no
              equivalent window — it just has the order timestamp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CLICK VS VIEW */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">View-through credit inflates the count</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Click-through attribution — someone clicked the ad, then bought —
            is the more defensible half of Meta&apos;s number. View-through
            attribution credits a purchase to an ad the customer saw but
            never clicked, based on the assumption that the impression
            influenced the decision. That assumption is unverifiable at the
            individual level. It&apos;s also the single biggest reason Meta&apos;s
            reported sales run higher than what a click-only view would show.
          </p>
        </Reveal>
      </section>

      {/* CROSS-DEVICE + DUPLICATE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Cross-device journeys and double-counted credit</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A customer scrolls Instagram on their phone, then buys on a
              laptop an hour later. Meta can sometimes bridge that with
              logged-in identity signals, sometimes can&apos;t. Separately, Meta
              and Google frequently claim the same order — a customer who saw
              a Meta ad and later searched the brand name on Google can show
              up as a conversion in both platforms&apos; reporting, each unaware
              of the other&apos;s claim. Add both platforms&apos; numbers together and
              you&apos;ll usually overstate total attributed revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONSENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consent and browser limits cut both ways</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Browser restrictions, ad blockers and declined tracking consent
            reduce what Meta can observe directly — which, on its own, would
            undercount Meta&apos;s true influence. Server-side tracking (Meta
            Conversions API) recovers some of that lost signal, but it still
            depends on the customer having consented and on enough matching
            data being sent. The undercounting pressure from tracking loss
            and the overcounting pressure from view-through credit and
            cross-platform double-claiming are pulling in opposite
            directions at the same time — which is part of why the gap
            between platforms isn&apos;t consistent from month to month.
          </p>
        </Reveal>
      </section>

      {/* WHAT TO DO */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What&apos;s actually worth checking</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Chasing an exact match between Meta and Shopify isn&apos;t a
              realistic goal — the two systems aren&apos;t measuring the same
              thing by design. What&apos;s worth checking is whether the{" "}
              <em>ratio</em> between them stays roughly stable over time. A
              sudden jump — Meta suddenly reporting 40% more or less than
              usual relative to Shopify — is a signal something changed:
              a tracking break, a new attribution setting, or a duplicate
              event issue. That&apos;s a more useful question than &quot;why don&apos;t
              these two numbers match.&quot;
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
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution software
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-attribution-models" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution models explained
              </Link>
            </li>
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-shows-sales-shopify-no-orders" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads shows sales but Shopify has no matching orders
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See both numbers side by side</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store, Meta and Google accounts to see platform-
            reported revenue next to actual Shopify orders, for your own
            data.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
