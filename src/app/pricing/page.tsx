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

const fmtOrders = (n: number | null) => (n === null ? "No limit" : n.toLocaleString("en-US"));
const has = (x: string) => PLANS.map((p) => p.extras.some((e) => e.startsWith(x)));

const ROWS: { label: string; values: (string | boolean)[] }[] = [
  { label: "Orders counted each month", values: PLANS.map((p) => fmtOrders(p.orderLimit)) },
  { label: "How far back you can look (history)", values: PLANS.map((p) => `${p.historyDays} days`) },
  { label: "Facebook and Google ad results", values: [true, true, true] },
  { label: "Correct sale counting (server-side tracking)", values: [true, true, true] },
  { label: "Which ad earned each sale (attribution)", values: [true, true, true] },
  { label: "SEO checks", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Link builder (UTM builder)", values: [true, true, true] },
  { label: "Newsletter", values: PLANS.map((p) => p.limits.newsletter) },
  { label: "Reviews", values: PLANS.map((p) => p.limits.reviews) },
  { label: "Lead Center", values: PLANS.map((p) => p.limits.leads) },
  { label: "Product list for Google and Facebook", values: has("Product list") },
  { label: "Social media calendar and stats", values: has("Social media") },
  { label: "Visitor paths", values: has("Visitor paths") },
  { label: "Faster support", values: has("Faster support") },
  { label: "Free trial", values: PLANS.map((p) => `${p.trialDays} days`) },
];

const PRICING_FAQ: { q: string; a: string }[] = [
  {
    q: "What does \"orders counted\" mean?",
    a: "Each new order in your Shopify store counts once toward your monthly limit. If you get 250 orders in a month, Starter (up to 300) is enough.",
  },
  {
    q: "What happens if I get more orders than my plan allows?",
    a: "Your store keeps selling as normal. Attribix just stops counting new orders until the next month starts, or until you move to a bigger plan.",
  },
  {
    q: "How do I pay?",
    a: `${BILLING_NOTE} There is no separate payment form to fill in.`,
  },
  {
    q: "How long is the free trial?",
    a: `The trial lasts ${trialSummary()}. It starts when you install the app and approve the plan in Shopify. If you uninstall during the trial, you are not charged.`,
  },
  {
    q: "Can I change plans or cancel?",
    a: "Yes. You change plans through Shopify billing once your store is connected. To cancel, uninstall the app.",
  },
  {
    q: "Do all plans count sales correctly and show which ads work?",
    a: "Yes. Every plan includes server-side tracking (the more reliable way of counting sales), your Facebook and Google ad results, and attribution (which ad earned each sale). Bigger plans handle more orders, keep more history and add extra tools.",
  },
  {
    q: "Does it work with Shopify Plus?",
    a: "Yes. Attribix works the same way on Shopify Plus as on other Shopify plans.",
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
            title="Simple pricing, based on how many orders you get"
            intro="Every plan shows which ads bring you customers and makes sure your sales are counted correctly. Pick the plan that fits your number of orders each month."
          />
        </div>

        <Section className="!pt-10">
          <PricingCards location="pricing_page" />
        </Section>

        <Section tone="band" labelledBy="fit-title">
          <SectionHeader id="fit-title" eyebrow="Which plan fits" title="Not sure which plan to pick?" />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {PLANS.map((p) => (
              <li key={p.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.bestFor}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/60">
            Look at how many orders you got last month, and pick the plan that covers it. You can change plans later
            through Shopify billing.
          </p>
        </Section>

        <Section id="compare" labelledBy="compare-title">
          <SectionHeader id="compare-title" eyebrow="Compare plans" title="What you get in each plan" />
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
                      <span className="block text-xs font-normal text-white/55">${p.monthly} a month</span>
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
              Install Attribix from the Shopify App Store. Want help choosing? Book a free walkthrough, or read{" "}
              <Link href="/features" className={textLink}>
                what each part of Attribix does
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrialLink location="pricing_bottom" />
              <DemoLink location="pricing_bottom">Get a free walkthrough</DemoLink>
            </div>
          </div>
        </Section>
      </main>
    </ProductPageShell>
  );
}
