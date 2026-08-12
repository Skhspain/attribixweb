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
    q: "What counts as a good Event Match Quality score?",
    a: "Meta and most practitioners treat a score of roughly 6 to 8 as solid for a typical Shopify checkout. Scores above that are possible with more identifiers, but the realistic ceiling depends on what data your checkout actually collects, and it isn't a target every store can reach.",
  },
  {
    q: "Does a higher EMQ score mean higher ROAS?",
    a: "Not directly. EMQ measures how confidently Meta can match an event to a real account, which helps Meta's optimization use the signal you're already sending. It doesn't make the underlying purchase any more or less likely to have been caused by the ad.",
  },
  {
    q: "Is EMQ the same thing as Event Match Quality shown per-event vs. account-wide?",
    a: "Events Manager shows EMQ per event type (Purchase, AddToCart, and so on), not one single account-wide number. A drop in one event's score doesn't necessarily mean the others are affected, so check the specific event that matters to you.",
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

const PARAMETERS = [
  { name: "Hashed email", note: "Usually the single biggest contributor; most Shopify checkouts collect it by default." },
  { name: "Hashed phone number", note: "Strengthens the match meaningfully when collected at checkout." },
  { name: "External ID", note: "A stable customer or order identifier tied to your own system." },
  { name: "Click ID (fbc)", note: "Present when the customer arrived via a click on a Meta ad; absent for organic or returning-direct traffic." },
  { name: "IP address & user agent", note: "Passive technical signals sent automatically with the event." },
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meta Event Match Quality for Shopify Explained",
  description: "What Event Match Quality measures, which parameters move it, and why a higher score doesn't mean perfect attribution.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-event-match-quality-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Event Match Quality", item: "https://www.attribix.app/resources/meta-event-match-quality-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Event Match Quality" }]} />
          <Eyebrow>Meta Ads Tracking</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Event Match Quality for Shopify explained
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Event Match Quality is Meta&apos;s confidence score for how well it
            can tie a server-side event to a real Facebook or Instagram
            account. It&apos;s a useful diagnostic. It&apos;s not a scoreboard, and
            chasing a perfect number isn&apos;t the point.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT MEASURES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What the score actually measures</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Every server event you send (a purchase through the Conversions
            API, for example) includes some hashed customer parameters.
            Meta compares those against its own user data and estimates how
            confidently it can say &quot;this event belongs to this specific
            account.&quot; That confidence is what shows up as Event Match
            Quality in Events Manager, on a rough scale rather than a
            precise measurement.
          </p>
        </Reveal>
      </section>

      {/* PARAMETERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">What moves the score</h2>
            <div className="space-y-3">
              {PARAMETERS.map((p) => (
                <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="font-semibold text-white text-sm">{p.name}</div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-2xl">
              More matching parameters generally means a higher score. But a
              checkout that only ever collects an email will structurally
              never reach the same score as one that also has a phone number
              and a click ID; that&apos;s not a problem to fix, it&apos;s a ceiling
              set by what data actually exists.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT IT ISN'T */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why a perfect score isn&apos;t the goal</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A high Event Match Quality score means Meta is confident it
            matched the event to the right person. It says nothing about
            whether that person bought <em>because</em> of your ad, or
            would have bought anyway. Matching and attribution are separate
            problems: one is about identity, the other is about causation.
            EMQ only ever addresses the first one.
          </p>
        </Reveal>
      </section>

      {/* HOW TO USE IT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use it as a diagnostic, not a target</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The useful signal isn&apos;t the absolute number; it&apos;s a sudden
              drop. If EMQ falls sharply from one week to the next, that
              usually means a field stopped being sent: a checkout change
              dropped the phone number field, a theme update broke the
              click-ID capture, or a tracking app update silently reduced
              what&apos;s included in the payload. Investigate the drop. Don&apos;t
              spend time trying to inch a stable, moderate score higher for
              its own sake.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Identifiable customer data is hashed, and still governed by consent</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Email, phone and external ID (the identifiers that directly
            name a customer) are hashed before they leave your server;
            Meta never receives them in plain text. IP address and user
            agent, which Meta also uses for matching, are sent as-is, as
            Meta&apos;s own spec requires. None of this bypasses consent
            requirements: if a customer hasn&apos;t agreed to tracking, their
            event (and its matching parameters) shouldn&apos;t be sent, regardless
            of what it would do for your match rate.
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
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API
              </Link>
            </li>
            <li>
              <Link href="/resources/fix-duplicate-meta-purchases-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to fix duplicate purchases in Meta Ads
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Improve your Event Match Quality</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and Meta account to send server-side events
            with stronger matching parameters, then track the effect on
            Event Match Quality in Meta Events Manager.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
