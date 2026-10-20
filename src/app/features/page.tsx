"use client";

// Product tour. Every feature maps to a real screen in the dashboard
// (src/app/analytics/*) or a feature named on the Shopify App Store listing.
// Screens are illustrative and labelled as example data. Technical terms
// live inside the optional "technical details" panel of each feature.
// The attribution simulator lives at /tools/attribution-models.

import Link from "next/link";
import React from "react";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { CampaignCompare, ConnectFlow, CreditExample, MoneyExample } from "@/components/site/EduVisuals";
import { AdsReviewMock, AttributionMock, JourneyMock, OverviewMock, TrackingMock } from "@/components/site/ProductMocks";
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
  /** Plain-language name for nav and eyebrow. */
  name: string;
  title: string;
  what: string;
  why: string;
  help: string;
  action: string;
  visual: React.ReactNode;
  example?: React.ReactNode;
  /** Optional technical layer. */
  tech: { term: string; points: { k: string; v: string }[]; links?: { label: string; href: string }[] };
};

const FEATURES: Feature[] = [
  {
    id: "results",
    name: "Advertising results",
    title: "See your ad spending and your sales side by side",
    what: "Attribix shows what you spent on Facebook, Instagram and Google ads next to the sales in your Shopify store.",
    why: "Each ad platform shows its own numbers. Your store has the real orders. Seeing them together tells you if your ads are worth the money.",
    help: "You can tell in seconds whether your advertising as a whole is bringing back more than it costs.",
    action: "Look at this screen once a week, before you look at single ads.",
    visual: <OverviewMock />,
    example: <MoneyExample />,
    tech: {
      term: "Advertising dashboard, ROAS, CPA and AOV",
      points: [
        { k: "Ad spend", v: "What you paid Facebook and Google for your ads." },
        { k: "Revenue", v: "The money your customers paid, as recorded in Shopify." },
        { k: "ROAS (return on ad spend)", v: "Sales divided by ad spend. $400 in sales from $100 of ads is a ROAS of 4." },
        { k: "CPA (cost per acquisition)", v: "Ad spend divided by number of sales. $100 of ads and 4 sales is $25 per sale." },
        { k: "AOV (average order value)", v: "Sales divided by number of orders." },
      ],
      links: [{ label: "Shopify ROAS tracking explained", href: "/shopify-roas-tracking" }],
    },
  },
  {
    id: "campaigns",
    name: "Campaign check",
    title: "Know which campaigns need attention",
    what: "Every campaign is listed with what it cost, the sales linked to it and what each sale cost you. You set a goal, and Attribix marks which campaigns beat it.",
    why: "Some campaigns bring in sales. Others quietly use up your budget. A long table makes them hard to tell apart.",
    help: "One goal turns a long list into a short list of decisions.",
    action: "Slowly give more budget to campaigns above your goal. For the ones below it, check the ad and the offer before switching them off.",
    visual: <AdsReviewMock />,
    example: <CampaignCompare />,
    tech: {
      term: "Ads Review with target ROAS",
      points: [
        { k: "Target ROAS", v: "The sales-per-$1 goal you set, for example 2.5. Base it on your profit margin, not a guess." },
        { k: "Filter by result", v: "Show only campaigns above or below your target." },
      ],
      links: [
        { label: "Work out your break-even goal with the free ROAS calculator", href: "/tools/roas-calculator" },
        { label: "Is a ROAS of 4 profitable?", href: "/resources/400-roas-profitable" },
      ],
    },
  },
  {
    id: "attribution",
    name: "Where sales come from",
    title: "Connect your ads to real Shopify orders",
    what: "Attribix notes where each visitor came from, like a Facebook ad, a Google search or an email. When they buy, it links the order to those visits and shares the credit by the rule you choose.",
    why: "Facebook and Google can both claim the same sale, so their reports add up to more than you really sold.",
    help: "Each order is counted once, from your own store data. You get a fairer view of which channel deserves your budget.",
    action: "Choose one rule for sharing credit and use it every time you compare channels.",
    visual: <AttributionMock />,
    example: <CreditExample />,
    tech: {
      term: "Shopify sales attribution and attribution models",
      points: [
        { k: "Platform-reported conversions", v: "Facebook's or Google's own count. Each uses its own time windows, and Facebook also counts some people who only saw an ad." },
        { k: "Attribix attribution", v: "Tracked Shopify orders, each counted once, credited by the model you pick." },
        { k: "Models available", v: "Last click, first click, linear (equal split) and time-decay (more credit to recent visits)." },
        { k: "Limits", v: "Attribix can only link visits it was able to see. Privacy settings and switching devices can hide some steps." },
      ],
      links: [
        { label: "Try the attribution model explorer", href: "/tools/attribution-models" },
        { label: "Shopify attribution explained", href: "/shopify-attribution" },
      ],
    },
  },
  {
    id: "tracking",
    name: "Facebook sales tracking",
    title: "Help Facebook and Instagram hear about your sales",
    what: "When someone buys, Attribix sends the sale to Meta (Facebook and Instagram) from a server, as well as from the shopper's browser. Both carry the same ID, so it is counted once.",
    why: "Ad blockers and browser privacy settings can stop the normal message. Then your ads look worse than they are.",
    help: "Meta uses your sales to decide who sees your ads. More complete sales information helps it measure and deliver your ads.",
    action: "Turn on the Meta setting in Attribix. Then use Meta's test event code to check that your sales arrive.",
    visual: <TrackingMock />,
    tech: {
      term: "Meta Conversions API (CAPI) with event deduplication",
      points: [
        { k: "Browser pixel", v: "Code in the shopper's browser that reports the sale. Can be blocked." },
        { k: "Conversions API", v: "Meta's way of receiving the sale from a server instead." },
        { k: "Deduplication", v: "Both reports share one event ID, so Meta counts the sale once." },
        { k: "Consent", v: "This changes how a sale is sent, not whether you may send it. Cookie choices still apply." },
      ],
      links: [
        { label: "Meta CAPI for Shopify", href: "/meta-capi-shopify" },
        { label: "Fix duplicate Meta purchases", href: "/resources/fix-duplicate-meta-purchases-shopify" },
      ],
    },
  },
  {
    id: "google-tracking",
    name: "Google sales tracking",
    title: "Help Google hear about your sales",
    what: "Attribix also sends your sales to Google from a server, so Google Ads can see more of the purchases its ads led to.",
    why: "Google uses sales to measure your ads and to decide where to show them, especially in automatic campaigns.",
    help: "More complete sales information gives Google better information to work with.",
    action: "Turn on the Google setting in Attribix, then compare Google's reported sales with your Shopify orders.",
    visual: (
      <Card className="p-6 md:p-8">
        <ConnectFlow />
      </Card>
    ),
    tech: {
      term: "Google Ads server-side conversion tracking",
      points: [
        { k: "Purchase conversions", v: "Sales reported to Google Ads, including from the server." },
        { k: "Matching orders", v: "Each sale carries the order ID, so the same order is not counted twice." },
      ],
      links: [
        { label: "Google Ads conversion tracking for Shopify", href: "/google-ads-conversion-tracking-shopify" },
        { label: "Why Google Ads and Shopify revenue don't match", href: "/resources/google-ads-shopify-revenue-doesnt-match" },
      ],
    },
  },
  {
    id: "journeys",
    name: "Customer journeys",
    title: "See how customers found your store",
    what: "For each order, Attribix shows the visits it saw before the purchase. For example: an Instagram ad, then a Google search, then the order.",
    why: "Most customers don't buy the first time they see an ad. The path shows which ads helped along the way.",
    help: "You can spot ads that start journeys, even if another channel gets the last click.",
    action: "Look for ads that often appear early in the path before you cut their budget.",
    visual: <JourneyMock />,
    tech: {
      term: "Customer list with touchpoint paths",
      points: [
        { k: "Path", v: "The order of visits and sources Attribix recorded before a purchase." },
        { k: "Incomplete by nature", v: "Visits on another device, or by visitors who declined cookies, may not appear." },
        { k: "Customer Match export", v: "Download customers in the format Google Ads uses to reach past buyers." },
      ],
    },
  },
];

const MORE = [
  { t: "Newsletter", d: "Send emails and automatic email series, and see what they sell.", plan: "Limits depend on plan" },
  { t: "Lead Center", d: "Collect contact details from forms and ads, and track who you followed up with.", plan: "Limits depend on plan" },
  { t: "Reviews", d: "Collect product reviews and show them on your store.", plan: "Limits depend on plan" },
  { t: "SEO check", d: "Find what hurts how your store shows up in Google search, in order of priority.", plan: "Unlimited on all plans" },
  { t: "Product feeds", d: "One link that lists your products for Google Shopping and Facebook shops.", plan: "Growth and Pro" },
  { t: "Social media calendar", d: "Plan social posts and see how they perform.", plan: "Growth and Pro" },
  { t: "Link builder", d: "Make tagged links (UTM links) so Attribix knows where visitors came from.", plan: "All plans" },
  { t: "Visitor paths", d: "See which pages visitors look at before they buy or leave.", plan: "Pro" },
];

function FeatureBlock({ f, flip }: { f: Feature; flip: boolean }) {
  return (
    <section id={f.id} aria-labelledby={`${f.id}-title`} className="scroll-mt-24 border-t border-white/10 py-16 md:py-20">
      <div className={cx("grid items-start gap-10 lg:grid-cols-2 lg:gap-14", flip && "lg:[&>*:first-child]:order-2")}>
        <div>
          <Eyebrow className="mb-3">{f.name}</Eyebrow>
          <h2 id={`${f.id}-title`} className="text-3xl font-extrabold tracking-tight text-white">
            {f.title}
          </h2>
          <dl className="mt-6 space-y-5 text-[15px] leading-relaxed">
            {[
              { k: "What it does", v: f.what },
              { k: "Why you should care", v: f.why },
              { k: "How it helps your business", v: f.help },
              { k: "What to do next", v: f.action },
            ].map((x) => (
              <div key={x.k}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">{x.k}</dt>
                <dd className="mt-1 text-white/80">{x.v}</dd>
              </div>
            ))}
          </dl>

          <details className="group mt-6 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 open:bg-white/[0.05]">
            <summary className="flex min-h-[40px] cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-white marker:content-none">
              <span>
                Technical details <span className="font-normal text-white/50">({f.tech.term})</span>
              </span>
              <span aria-hidden className="text-white/45 transition-transform group-open:rotate-45">+</span>
            </summary>
            <dl className="mt-3 space-y-3">
              {f.tech.points.map((p) => (
                <div key={p.k}>
                  <dt className="text-sm font-semibold text-white/90">{p.k}</dt>
                  <dd className="text-sm leading-relaxed text-white/65">{p.v}</dd>
                </div>
              ))}
            </dl>
            {f.tech.links && (
              <ul className="mt-3 space-y-1 text-sm">
                {f.tech.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={cx("inline-flex min-h-[32px] items-center", textLink)}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </details>
        </div>
        <div className="min-w-0 space-y-6">
          {f.visual}
          {f.example}
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
            title="Everything you need to understand your advertising."
            intro="See what's working, understand where your customers come from, and keep better track of your sales."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrialLink location="features_top" />
            <Link href="/pricing" className={btnSecondary}>
              View pricing
            </Link>
          </div>

          <nav aria-label="On this page" className="mt-12">
            <ul className="flex flex-wrap gap-2 text-sm">
              {[...FEATURES.map((f) => ({ id: f.id, label: f.name })), { id: "more", label: "Extra tools" }].map((x) => (
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
            title="Extra tools for your store"
            intro="The main job of Attribix is showing which ads work and keeping your sales tracking reliable. These extra tools come with it. What you get depends on your plan."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {MORE.map((m) => (
              <li key={m.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="text-sm font-semibold text-white">{m.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{m.d}</p>
                <p className="mt-2 text-xs font-medium text-cyan-200/80">{m.plan}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/60">
            See exactly what each plan includes on the{" "}
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
              Install Attribix from the Shopify App Store and connect your ad accounts. Want to see it first? Book a free
              walkthrough with our team.
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
