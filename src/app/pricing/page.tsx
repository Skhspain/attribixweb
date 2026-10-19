"use client";

import Link from "next/link";
import React from "react";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import FAQList from "@/components/marketing/FAQList";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import PricingCards from "@/components/site/PricingCards";
import { Check, DemoLink, Section, SectionHeader, TrialLink, textLink } from "@/components/site/ui";
import { BILLING_NOTE, PLANS, trialSummary } from "@/lib/pricing";
import { gtagEvent } from "@/lib/track";

const ROWS: { label: string; values: (string | boolean)[] }[] = [
  { label: "Tracked orders per month", values: PLANS.map((p) => p.limits.orders.replace(" / month", "").replace(" tracked orders", "")) },
  { label: "Analytics history", values: PLANS.map((p) => p.limits.history.replace(" of analytics history", "")) },
  { label: "Meta and Google Ads data", values: [true, true, true] },
  { label: "Server-side tracking and attribution", values: [true, true, true] },
  { label: "SEO audits", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "UTM builder", values: [true, true, true] },
  { label: "Newsletter", values: PLANS.map((p) => p.limits.newsletter) },
  { label: "Reviews", values: PLANS.map((p) => p.limits.reviews.replace(" reviews", "")) },
  { label: "Lead Center", values: PLANS.map((p) => p.limits.leads.replace(" leads", "")) },
  { label: "Google and Meta product feed", values: PLANS.map((p) => p.extras.includes("Google and Meta product feed")) },
  { label: "Social calendar and analytics", values: PLANS.map((p) => p.extras.includes("Social calendar and analytics")) },
  { label: "Visitor flow analysis", values: PLANS.map((p) => p.extras.includes("Visitor flow analysis")) },
  { label: "Priority support", values: PLANS.map((p) => p.extras.includes("Priority support")) },
  { label: "Free trial", values: PLANS.map((p) => `${p.trialDays} days`) },
];

const PRICING_FAQ: { q: string; a: string }[] = [
  {
    q: "What counts as a tracked order?",
    a: "Each new Shopify order that reaches Attribix through your store's order webhook counts once toward your plan's monthly limit, matched by order ID.",
  },
  {
    q: "What happens if I go over my order limit?",
    a: "Attribix stops recording additional orders for the rest of that billing period, until it resets or you upgrade. Your store keeps taking orders as normal; only further tracking pauses.",
  },
  {
    q: "How does billing work?",
    a: `${BILLING_NOTE} There is no separate payment form: the charge appears on your Shopify bill.`,
  },
  {
    q: "How long is the free trial?",
    a: `The trial is ${trialSummary()}. It starts when you install and approve the plan in Shopify. Uninstall during the trial and you are not charged.`,
  },
  {
    q: "Can I switch plans or cancel?",
    a: "Yes. Plan changes are handled through Shopify billing once your store is connected, and you can cancel by uninstalling the app.",
  },
  {
    q: "Do all plans include server-side tracking?",
    a: "Yes. Every plan includes server-side tracking, Meta and Google Ads data and attribution. Plans differ in order volume, history length and the additional marketing tools.",
  },
  {
    q: "Is Shopify Plus supported?",
    a: "Yes. Attribix uses Shopify's standard app and webhook APIs, so it works the same way on Shopify Plus.",
  },
];

const PRICING_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function Cell({ v }: { v: string | boolean }) {
  if (v === true)
    return (
      <span className="inline-flex justify-center">
        <Check className="text-cyan-300" />
        <span className="sr-only">Included</span>
      </span>
    );
  if (v === false)
    return (
      <span className="text-white/30">
        <span aria-hidden>–</span>
        <span className="sr-only">Not included</span>
      </span>
    );
  return <span>{v}</span>;
}

export default function PricingPage() {
  React.useEffect(() => {
    gtagEvent("pricing_view", { cta_location: "pricing_page" });
  }, []);

  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_FAQ_JSON_LD) }} />
      <main>
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-4 md:pt-32">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <SectionHeader
            as="h1"
            align="center"
            title="Simple pricing based on order volume"
            intro="Every plan includes tracking, attribution and Meta and Google Ads data. Choose by how many orders your store takes each month."
          />
        </div>

        <Section className="!pt-10">
          <PricingCards location="pricing_page" />
        </Section>

        <Section tone="band" labelledBy="fit-title">
          <SectionHeader id="fit-title" eyebrow="Which plan fits" title="Pick by monthly orders" />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {PLANS.map((p) => (
              <li key={p.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.bestFor}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/60">
            Not sure? Start on the plan that covers last month&apos;s order count. You can change plans later through
            Shopify billing.
          </p>
        </Section>

        <Section id="compare" labelledBy="compare-title">
          <SectionHeader id="compare-title" eyebrow="Compare plans" title="Everything in each plan" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Plan comparison</caption>
              <thead className="bg-white/[0.05]">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold text-white/70">
                    Feature
                  </th>
                  {PLANS.map((p) => (
                    <th key={p.id} scope="col" className="px-4 py-3 text-center font-semibold text-white">
                      {p.name}
                      <span className="block text-xs font-normal text-white/55">${p.monthly} / month</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-t border-white/10">
                    <th scope="row" className="px-4 py-3 font-medium text-white/80">
                      {r.label}
                    </th>
                    {r.values.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-center text-white/75">
                        <Cell v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-white/50">{BILLING_NOTE}</p>
        </Section>

        <Section tone="band" labelledBy="pricing-faq-title">
          <div className="mx-auto max-w-3xl">
            <SectionHeader id="pricing-faq-title" title="Pricing questions" />
            <div className="mt-8">
              <FAQList items={PRICING_FAQ} />
            </div>
          </div>
        </Section>

        <Section labelledBy="pricing-cta-title">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="pricing-cta-title" className="text-3xl font-extrabold tracking-tight text-white">
              Start with a free trial
            </h2>
            <p className="mt-4 text-white/70">
              Install from the Shopify App Store. Want help choosing a plan? Book a short demo, or read{" "}
              <Link href="/features" className={textLink}>
                what each feature does
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrialLink location="pricing_bottom" />
              <DemoLink location="pricing_bottom" />
            </div>
          </div>
        </Section>
      </main>
    </ProductPageShell>
  );
}
