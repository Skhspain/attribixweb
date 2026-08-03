"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import FAQList from "@/components/marketing/FAQList";

const INCLUDED = [
  { title: "Account structure and strategy", desc: "Campaign and ad set structure built around your catalogue and margins, not a generic template." },
  { title: "Creative testing", desc: "A running test queue across formats and angles, with clear criteria for what gets scaled and what gets cut." },
  { title: "Audience testing", desc: "Prospecting and retargeting audiences tested against each other, not assumed to work from day one." },
  { title: "Catalogue and dynamic ads", desc: "Product catalogue kept in sync so dynamic ads show current pricing and availability." },
  { title: "Tracking and attribution", desc: "Meta Pixel and Conversions API set up and monitored as part of the engagement, not left to drift." },
  { title: "Reporting", desc: "Monthly reporting against Shopify revenue, with the reasoning behind budget moves — not just a screenshot of Ads Manager." },
];

const FAQ_ITEMS = [
  {
    q: "What's the minimum ad spend to work with you?",
    a: "We generally work with stores spending $3,000 or more per month on Meta and Google combined. Below that, there's usually not enough budget for testing to produce a reliable read.",
  },
  {
    q: "Do you produce ad creative, or do we need our own?",
    a: "We direct creative — briefs, angles, and feedback on what's converting — but production is typically a client responsibility or handled by a creator you already work with. We can advise on this during onboarding.",
  },
  {
    q: "How long before we see results?",
    a: "Most accounts need three to four weeks of stable spend before the data is reliable enough to make real optimisation decisions. We'll tell you honestly if something looks off before that point.",
  },
];

export default function MetaAdsManagementPage() {
  return (
    <ProductPageShell>
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-4">
        <Breadcrumbs items={[{ label: "Managed services", href: "/managed-services" }, { label: "Meta Ads management" }]} />
      </section>

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pb-12">
        <Reveal>
          <Eyebrow>Meta Ads management</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads management for Shopify stores
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Full management of your Meta account — strategy, creative
            direction, audience testing and day-to-day optimisation —
            reported against real Shopify revenue instead of Ads Manager&apos;s
            own numbers.
          </p>
          <ManagedServicesCTA className="mt-9" />
        </Reveal>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">What&apos;s included</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
          {INCLUDED.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <div className="grid gap-1.5 py-5 sm:grid-cols-[240px_1fr] sm:gap-8">
                <p className="font-semibold text-sm text-white">{item.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRACKING TIE-IN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold">Reporting starts from Shopify, not Ads Manager</h2>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Budget decisions are checked against your actual Shopify orders
              through Attribix, not just against the ROAS Meta reports for
              itself. See the reasoning behind that on the{" "}
              <Link href="/managed-services" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                managed services overview
              </Link>
              , or read about{" "}
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how Meta tracking works
              </Link>{" "}
              on Shopify in more depth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-7">Questions specific to Meta Ads management</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Talk to us about your Meta account</h2>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
