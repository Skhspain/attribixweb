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
  /** Plain-language name shown in the page nav and eyebrow. */
  name: string;
  /** Technical term, kept for people who know it and for search. */
  term: string;
  title: string;
  what: string;
  why: string;
  help: string;
  action: string;
  points?: { k: string; v: string }[];
  links?: { label: string; href: string }[];
  visual: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    id: "dashboard",
    name: "Your numbers in one place",
    term: "Advertising dashboard",
    title: "See your sales and ad costs side by side",
    what: "Attribix shows your Shopify sales next to what you spent on Facebook, Instagram and Google ads. You can also look at each platform on its own, down to single ads.",
    why: "Each ad platform shows its own numbers. Your store shows the real sales. Seeing them together tells you if your ads are worth the money.",
    help: "You can quickly tell if your advertising as a whole is paying off, before you dig into single ads.",
    action: "Look at this screen once a week. If you get back less than you need to make a profit, fix that first.",
    points: [
      { k: "Ad cost (ad spend)", v: "What you paid Facebook and Google for your ads." },
      { k: "Sales (revenue)", v: "The money your customers paid you, as recorded in Shopify." },
      { k: "ROAS", v: "Sales for every $1 spent on ads. $300 in sales from $100 of ads is a ROAS of 3." },
      { k: "Cost per sale (CPA)", v: "Ad cost divided by number of sales. $100 of ads and 4 sales means $25 per sale." },
      { k: "Average order (AOV)", v: "Sales divided by number of orders. How much a customer spends each time." },
    ],
    links: [{ label: "Learn more about tracking ROAS on Shopify", href: "/shopify-roas-tracking" }],
    visual: <OverviewMock />,
  },
  {
    id: "ads-review",
    name: "Which ads make money",
    term: "Ads Review",
    title: "Find the ads that pay for themselves",
    what: "Ads Review lists all your ad campaigns. For each one you see what it cost, how many sales it brought and what each sale cost you.",
    why: "Some campaigns make money and some quietly waste it. Without a clear list, it is hard to tell them apart.",
    help: "You set a goal, for example $3 back for every $1 spent. Attribix marks which campaigns beat it, so you know where your money works best.",
    action: "Slowly give more budget to campaigns that beat your goal. For the ones below it, check the ad and the offer before you switch them off.",
    links: [
      { label: "Work out your break-even goal with the free ROAS calculator", href: "/tools/roas-calculator" },
      { label: "Is a ROAS of 4 profitable?", href: "/resources/400-roas-profitable" },
    ],
    visual: <AdsReviewMock />,
  },
  {
    id: "attribution",
    name: "Who earned each sale",
    term: "Sales attribution",
    title: "See which channel really brought each sale",
    what: "Attribix notes where each visitor came from, like a Facebook ad, a Google search or an email. When they buy, it links the order to those visits.",
    why: "Many customers see more than one ad before they buy. Facebook and Google both claim the sale, so their numbers add up to more than you really sold.",
    help: "Each order is counted once, from your own Shopify data. You get a fairer view of which channel deserves your budget.",
    action: "Choose one credit rule and use it every time you compare channels. Then compare it with what Facebook and Google say.",
    points: [
      { k: "What Facebook or Google report", v: "Their own count of sales. Both can count the same order, and some count people who only saw an ad." },
      { k: "What Attribix reports", v: "Your real Shopify orders, each counted once, with credit given by the rule you choose." },
      { k: "Credit rules (attribution models)", v: "Last click, first click, equal split (linear) or more credit to recent clicks (time-decay)." },
    ],
    links: [
      { label: "Try the free attribution model explorer", href: "/tools/attribution-models" },
      { label: "Learn more about Shopify attribution", href: "/shopify-attribution" },
    ],
    visual: <AttributionMock />,
  },
  {
    id: "tracking",
    name: "Sales counted correctly",
    term: "Meta Conversions API and Google server-side tracking",
    title: "Make sure every sale you can count gets counted, once",
    what: "Your store normally tells Facebook and Google about a sale from the shopper's browser. Attribix also sends it from a server. Both reports carry the same ID, so the sale is counted once.",
    why: "Ad blockers and browser privacy settings stop some sales from being reported. Then your ads look worse than they are.",
    help: "Facebook and Google use your sales to decide who sees your ads. When they see more of your real sales, they have better information to find buyers.",
    action: "Turn it on in Attribix Settings. Then use Facebook's test tool to check that your sales are arriving.",
    points: [
      { k: "Server-side tracking", v: "Sending sales from a server instead of only from the browser. Ad blockers can't stop it." },
      { k: "Deduplication", v: "Giving both reports of a sale the same ID, so it is not counted twice." },
      { k: "Your visitors' choices still count", v: "This changes how a sale is sent, not whether you are allowed to send it. Cookie choices still apply." },
    ],
    links: [
      { label: "How the Meta Conversions API works on Shopify", href: "/meta-capi-shopify" },
      { label: "How Google Ads conversion tracking works on Shopify", href: "/google-ads-conversion-tracking-shopify" },
      { label: "How to fix sales counted twice in Facebook", href: "/resources/fix-duplicate-meta-purchases-shopify" },
    ],
    visual: <TrackingMock />,
  },
];

const MORE = [
  { t: "Orders and products", d: "See every order with where the customer came from, and which products sell best.", plan: "All plans" },
  { t: "Link builder (UTM builder)", d: "Make tagged links for your ads and emails, so Attribix knows where each visitor came from.", plan: "All plans" },
  { t: "Customer lists", d: "Download your customer list in the format Google Ads needs to reach past buyers.", plan: "All plans" },
  { t: "SEO check", d: "Checks your store for things that hurt how you show up in Google search, and lists what to fix first.", plan: "Unlimited on all plans" },
  { t: "Newsletter", d: "Send emails and automatic email series, and see how much they sell.", plan: "Limits depend on plan" },
  { t: "Lead Center", d: "Collect contact details from forms and ads, and keep track of who you followed up with.", plan: "Limits depend on plan" },
  { t: "Reviews", d: "Collect product reviews from customers and show them on your store.", plan: "Limits depend on plan" },
  { t: "Product feeds", d: "One link that lists your products for Google Shopping and Facebook shops.", plan: "Growth and Pro" },
  { t: "Visitor paths (visitor flow)", d: "See which pages visitors look at before they buy or leave.", plan: "Pro" },
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
          <p className="mt-2 text-sm text-white/50">Also known as: {f.term}</p>
          <dl className="mt-6 space-y-5 text-[15px] leading-relaxed">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">What it does</dt>
              <dd className="mt-1 text-white/80">{f.what}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Why you should care</dt>
              <dd className="mt-1 text-white/80">{f.why}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">How it helps your business</dt>
              <dd className="mt-1 text-white/80">{f.help}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">What to do next</dt>
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
            title="What Attribix does, in plain words"
            intro="Attribix shows which of your Facebook, Instagram and Google ads bring you customers, and makes sure your sales are counted correctly. Below, each part is explained in four short answers: what it does, why you should care, how it helps, and what to do next."
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
            intro="The main job of Attribix is showing which ads work. These extra tools are included too. What you get depends on your plan."
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
              Install Attribix from the Shopify App Store and connect your ad accounts. Want to see it first? Book a
              free walkthrough with our team.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrialLink location="features_bottom" />
              <DemoLink location="features_bottom">Get a free walkthrough</DemoLink>
            </div>
          </div>
        </Section>
      </main>
    </ProductPageShell>
  );
}
