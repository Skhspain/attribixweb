"use client";

// Product walkthrough. Every feature here maps to a real screen in the
// dashboard (src/app/analytics/*) or a feature named on the Shopify App
// Store listing. Visuals are illustrative and labelled as sample data.
// The attribution simulator that used to live here is now
// /tools/attribution-models.

import Link from "next/link";
import React from "react";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { AdsReviewMock, AttributionMock, OverviewMock, TrackingMock } from "@/components/site/ProductMocks";
import { IntegrationStrip } from "@/components/site/integrations";
import {
  Card,
  DemoLink,
  Eyebrow,
  Section,
  SectionHeader,
  TrialLink,
  btnSecondary,
  cx,
  textLink,
} from "@/components/site/ui";

type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  what: string;
  why: string;
  action: string;
  points?: { k: string; v: string }[];
  links?: { label: string; href: string }[];
  visual: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    id: "dashboard",
    eyebrow: "Advertising dashboard",
    title: "Spend, revenue and ROAS on one screen",
    what: "The Overview combines Shopify revenue and orders with ad spend from Meta and Google. Dedicated Meta Ads and Google Ads views break results down by campaign, ad set and ad.",
    why: "Each ad platform shows its own version of results. Seeing spend next to actual store revenue tells you whether advertising is paying back overall.",
    action: "Start each review here. If store-level ROAS is below what your margins need, fix that before tuning single campaigns.",
    points: [
      { k: "Ad spend", v: "What you paid Meta and Google in the period." },
      { k: "Revenue", v: "Order value recorded in Shopify." },
      { k: "ROAS", v: "Revenue divided by ad spend. 3.0x means $3 back for every $1 spent." },
      { k: "CPA", v: "Cost per acquisition: spend divided by purchases." },
      { k: "AOV", v: "Average order value: revenue divided by orders." },
    ],
    links: [{ label: "Shopify ROAS tracking explained", href: "/shopify-roas-tracking" }],
    visual: <OverviewMock />,
  },
  {
    id: "ads-review",
    eyebrow: "Ads Review",
    title: "Find the campaigns that pay for themselves",
    what: "Ads Review lists campaigns with spend, purchases, cost per acquisition and ROAS, and lets you set a target ROAS. Campaigns are marked above or below that target and can be filtered by it.",
    why: "A single target based on your margins turns a long table into a short list of decisions.",
    action: "Increase budget gradually on campaigns above target. Check tracking, offer and creative on the ones below it before cutting them.",
    links: [
      { label: "Free break-even ROAS calculator", href: "/tools/roas-calculator" },
      { label: "Is a 4x ROAS profitable?", href: "/resources/400-roas-profitable" },
    ],
    visual: <AdsReviewMock />,
  },
  {
    id: "attribution",
    eyebrow: "Sales attribution",
    title: "Connect ad activity to Shopify orders",
    what: "Attribix records visits with their source and UTM parameters and links them to the Shopify orders that follow. The Attribution view splits that revenue by channel under last-click, first-click, linear or time-decay models.",
    why: "Meta and Google each count a sale when their ad was involved, so both can claim the same order. Attribution based on your own orders counts each order once.",
    action: "Choose the model that matches how you buy media and use it consistently. Compare it with what each platform reports to see how much they overlap.",
    points: [
      { k: "Platform-reported conversions", v: "What Meta or Google count, using their own windows, including some view-through conversions." },
      { k: "Attribix attribution", v: "Tracked Shopify orders, credited by the model you choose. Each order is counted once." },
    ],
    links: [
      { label: "Try the attribution model explorer", href: "/tools/attribution-models" },
      { label: "Shopify attribution explained", href: "/shopify-attribution" },
    ],
    visual: <AttributionMock />,
  },
  {
    id: "tracking",
    eyebrow: "Meta Conversions API and Google conversions",
    title: "Send purchases from the server, counted once",
    what: "Alongside the browser pixel, Attribix sends purchase events to Meta through the Conversions API and to Google from the server. Both copies of an event share one event ID so the platform can deduplicate them.",
    why: "Ad blockers, Safari limits and short cookie lifetimes stop some browser events from arriving. Meta and Google optimise delivery on the conversions they receive, so missing events weaken campaigns.",
    action: "Turn on server-side sending in Settings. Use Meta's test event code to confirm events arrive, then check deduplication in Events Manager.",
    points: [
      { k: "Server-side events", v: "Sent from a server, so browser blocking does not stop them." },
      { k: "Deduplication", v: "A shared event ID tells the platform the browser and server events are the same purchase." },
      { k: "Consent", v: "Server-side sending changes how events travel, not whether you may send them. Consent rules still apply." },
    ],
    links: [
      { label: "Meta CAPI for Shopify", href: "/meta-capi-shopify" },
      { label: "Google Ads conversion tracking for Shopify", href: "/google-ads-conversion-tracking-shopify" },
      { label: "Fix duplicate Meta purchases", href: "/resources/fix-duplicate-meta-purchases-shopify" },
    ],
    visual: <TrackingMock />,
  },
];

const MORE = [
  { t: "Orders and products", d: "Every order with its source, campaign and country, plus revenue and units sold by product.", plan: "All plans" },
  { t: "UTM builder", d: "Build consistently tagged links so campaigns show up correctly in attribution.", plan: "All plans" },
  { t: "Customer lists", d: "Export customers as a CSV formatted for Google Ads Customer Match.", plan: "All plans" },
  { t: "SEO audit", d: "Scans your store and lists fixes in priority order.", plan: "Unlimited on all plans" },
  { t: "Newsletter", d: "Email campaigns and automated flows with revenue tracking.", plan: "Limits vary by plan" },
  { t: "Lead Center", d: "Capture leads from forms and ads and track their status.", plan: "Limits vary by plan" },
  { t: "Reviews", d: "Collect product reviews and show them in a customisable widget.", plan: "Limits vary by plan" },
  { t: "Product feeds", d: "One feed URL for Google Merchant Center and Meta product catalogues.", plan: "Growth and Pro" },
  { t: "Visitor flow analysis", d: "See how visitors move through the store before buying or leaving.", plan: "Pro" },
];

function FeatureBlock({ f, flip }: { f: Feature; flip: boolean }) {
  return (
    <section id={f.id} aria-labelledby={`${f.id}-title`} className="scroll-mt-24 border-t border-white/10 py-16 md:py-20">
      <div className={cx("grid items-start gap-10 lg:grid-cols-2 lg:gap-14", flip && "lg:[&>*:first-child]:order-2")}>
        <div>
          <Eyebrow className="mb-3">{f.eyebrow}</Eyebrow>
          <h2 id={`${f.id}-title`} className="text-3xl font-extrabold tracking-tight text-white">
            {f.title}
          </h2>
          <dl className="mt-6 space-y-5 text-[15px] leading-relaxed">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">What it does</dt>
              <dd className="mt-1 text-white/80">{f.what}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Why it matters</dt>
              <dd className="mt-1 text-white/80">{f.why}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">What to do with it</dt>
              <dd className="mt-1 text-white/80">{f.action}</dd>
            </div>
          </dl>
          {f.links && (
            <ul className="mt-6 space-y-2 text-sm">
              {f.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={textLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="min-w-0">
          {f.visual}
          {f.points && (
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {f.points.map((p) => (
                <div key={p.k} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <dt className="text-sm font-semibold text-white">{p.k}</dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-white/65">{p.v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <ProductPageShell>
      <main>
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-12 md:pt-32">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features" }]} />
          <SectionHeader
            as="h1"
            eyebrow="Features"
            title="What Attribix does for your Shopify store"
            intro="Attribix connects Shopify with Meta and Google Ads, improves how purchases are sent back to the platforms, and shows which campaigns are connected to real orders. Here is each part, what it is for, and how to use it."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrialLink location="features_top" />
            <Link href="/pricing" className={btnSecondary}>
              View pricing
            </Link>
          </div>

          <nav aria-label="On this page" className="mt-12">
            <ul className="flex flex-wrap gap-2 text-sm">
              {[...FEATURES.map((f) => ({ id: f.id, label: f.eyebrow })), { id: "more", label: "Marketing tools" }].map((x) => (
                <li key={x.id}>
                  <a
                    href={`#${x.id}`}
                    className="inline-flex min-h-[40px] items-center rounded-full border border-white/15 bg-white/5 px-4 text-white/75 hover:bg-white/10 hover:text-white"
                  >
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <IntegrationStrip className="mt-10" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          {FEATURES.map((f, i) => (
            <FeatureBlock key={f.id} f={f} flip={i % 2 === 1} />
          ))}
        </div>

        <Section id="more" tone="band" labelledBy="more-title">
          <SectionHeader
            id="more-title"
            eyebrow="Also included"
            title="Marketing tools on the same store data"
            intro="Attribution and tracking are the core of Attribix. These tools use the same connected store data. Availability and limits depend on your plan."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MORE.map((m) => (
              <Card as="li" key={m.t} className="flex flex-col">
                <h3 className="text-base font-semibold text-white">{m.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{m.d}</p>
                <p className="mt-4 text-xs font-medium text-cyan-200/80">{m.plan}</p>
              </Card>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/60">
            Exact limits for each plan are on the{" "}
            <Link href="/pricing#compare" className={textLink}>
              pricing page
            </Link>
            .
          </p>
        </Section>

        <Section labelledBy="features-cta-title">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-indigo-500/10 px-6 py-12 text-center md:px-12">
            <h2 id="features-cta-title" className="text-3xl font-extrabold tracking-tight text-white">
              Try it on your own store
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Install from the Shopify App Store and connect Meta and Google. If you would rather see it first, book a
              short walkthrough.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrialLink location="features_bottom" />
              <DemoLink location="features_bottom" />
            </div>
          </div>
        </Section>
      </main>
    </ProductPageShell>
  );
}
