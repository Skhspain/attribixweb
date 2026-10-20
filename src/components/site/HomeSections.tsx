"use client";

// Homepage below the hero (the hero itself is locked and lives in
// src/app/page.tsx). Copy rule: explain the result first, the technology
// second. A store owner with no marketing background must understand every
// primary sentence; technical terms appear only as secondary labels or in
// the optional "how the technology works" panel.

import Link from "next/link";
import React from "react";
import FAQList from "@/components/marketing/FAQList";
import { LOWEST_MONTHLY, PLANS, trialSummary } from "@/lib/pricing";
import { gtagEvent } from "@/lib/track";
import {
  ConnectFlow,
  CreditExample,
  DoubleCreditVisual,
  MissingSignalVisual,
  TrackingCompare,
  TwoCampaignsVisual,
} from "./EduVisuals";
import { IntegrationCards, IntegrationStrip } from "./integrations";
import PricingCards from "./PricingCards";
import ProductTour from "./ProductTour";
import { Card, Section, SectionHeader, TrialLink, btnSecondary, cx, textLink } from "./ui";

const PROBLEMS = [
  {
    t: "Your numbers don't match.",
    d: "Facebook and Google can both take credit for the same sale. That makes it hard to compare your results.",
    visual: <DoubleCreditVisual />,
  },
  {
    t: "Some sales aren't recorded.",
    d: "Tracking doesn't always work perfectly. When information is missing, your reports may not tell the full story.",
    visual: <MissingSignalVisual />,
  },
  {
    t: "You don't know where to spend more.",
    d: "If you can't understand your results, it's hard to decide which ads deserve more money.",
    visual: <TwoCampaignsVisual />,
  },
];

const CAPABILITIES = [
  {
    t: "See which ads lead to sales.",
    d: "Find out which campaigns are connected to orders in your Shopify store.",
    href: "/features#results",
    link: "How advertising results work",
  },
  {
    t: "Help your ads get the sales information they need.",
    d: "Attribix sends information about sales to Facebook and Google more reliably, so they can measure your ads better.",
    href: "/features#tracking",
    link: "How sales tracking works",
  },
  {
    t: "Know what deserves your attention.",
    d: "See how much you spend, which sales are linked to your ads, and which campaigns may need a closer look.",
    href: "/features#campaigns",
    link: "How the campaign check works",
  },
];

const STEPS = [
  { t: "Connect your Shopify store.", d: "Install Attribix from the Shopify App Store. No code to edit." },
  { t: "Connect Facebook and Google.", d: "Link the ad accounts you already use, from inside Attribix." },
  { t: "See your results together.", d: "Open your dashboard to see what you spend, your sales and which ads they came from." },
];

const starter = PLANS[0];

const HOME_FAQ = [
  {
    q: "Do I need to know anything about marketing?",
    a: "Not to get started. Attribix is made to help you understand your advertising. Some features are more useful if you already run ads on Facebook, Instagram or Google.",
  },
  {
    q: "Will Attribix create ads for me?",
    a: "No. The app helps you understand your ad results and makes your sales tracking more reliable. If you want a team to run your ads, we offer that as a separate service, called Ad Management.",
  },
  {
    q: "Does it work with the ads I already run?",
    a: "Yes. Attribix connects to your existing Facebook and Google ad accounts, so you see results from the campaigns you already have.",
  },
  {
    q: "Will Attribix increase my sales?",
    a: "It can't promise that. Attribix helps you understand your results so you can make better-informed decisions about where to spend.",
  },
  {
    q: "How long does setup take?",
    a: "There are three steps: install the app from the Shopify App Store, approve your plan, and connect your Facebook and Google ad accounts. Attribix starts following store visits from the moment it is installed, so customer journey reports fill in over the following days.",
  },
  {
    q: "Will my numbers match Facebook and Google exactly?",
    a: "No. Facebook and Google count sales their own way and can both count the same order. Attribix starts from the real orders in your store and counts each one once.",
  },
  {
    q: "Is my customers' information protected?",
    a: "Attribix respects your visitors' cookie choices through Google Consent Mode v2, and follows Shopify's rules for customer data requests and deletions. Our Privacy Policy explains what is collected and why.",
  },
  {
    q: "How does the free trial work?",
    a: `The trial starts when you install. It lasts ${trialSummary()}. You pay through your normal Shopify bill, and you can cancel by uninstalling the app.`,
  },
];

const HOME_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

function TechDetails() {
  return (
    <details className="group mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 open:bg-white/[0.05]">
      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white marker:content-none">
        Want to know how the technology works?
        <span aria-hidden className="text-white/45 transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="mt-4 grid gap-5 text-sm leading-relaxed text-white/70 md:grid-cols-2">
        <div>
          <h3 className="font-semibold text-white">Browser events (the pixel)</h3>
          <p className="mt-1">
            A small piece of code on your store, called a pixel, tells Facebook and Google when someone buys. It runs in
            the shopper&apos;s web browser, so ad blockers and privacy settings can stop it.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Server-side tracking</h3>
          <p className="mt-1">
            The same sale is also sent from a server, which ad blockers can&apos;t reach. For Facebook and Instagram this
            uses the Meta Conversions API. For Google it uses Google&apos;s server-side conversion tracking.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Deduplication</h3>
          <p className="mt-1">
            Both copies of a sale carry the same event ID. Facebook and Google see the match and count the sale once.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Consent</h3>
          <p className="mt-1">
            Server-side tracking changes how a sale is sent, not whether you may send it. Attribix follows your
            visitors&apos; cookie choices through Google Consent Mode v2.
          </p>
        </div>
      </div>
      <Link href="/server-side-tracking-shopify" className={cx("mt-4 inline-flex min-h-[44px] items-center text-sm", textLink)}>
        Read the full guide to server-side tracking for Shopify
      </Link>
    </details>
  );
}

export default function HomeSections() {
  React.useEffect(() => {
    const el = document.getElementById("pricing");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gtagEvent("pricing_view", { cta_location: "home" });
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_JSON_LD) }} />

      {/* 1b. Plain-language summary directly under the (locked) hero */}
      <div className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
            Your ads. Your sales. One clear picture.
          </p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-white md:text-xl">
            You pay for ads on Facebook, Instagram and Google. Attribix shows which ads bring in customers, makes your
            sales tracking more reliable, and puts your results in one easy place.
          </p>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <IntegrationStrip />
            <p className="text-sm text-white/60">
              Made for Shopify stores · From ${LOWEST_MONTHLY}/month · {starter.trialDays}-day free trial
            </p>
          </div>
        </div>
      </div>

      {/* 2. The problem */}
      <Section labelledBy="problem-title">
        <SectionHeader
          id="problem-title"
          eyebrow="The problem"
          title="You're spending money on ads. But what's actually working?"
          intro="Your store shows one set of numbers. Facebook shows another. Google shows something different. It can be hard to know what to trust."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <Card as="li" key={p.t} className="flex flex-col">
              <div className="min-h-[96px]">{p.visual}</div>
              <h3 className="mt-5 text-lg font-semibold text-white">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.d}</p>
            </Card>
          ))}
        </ul>
        <p className="mt-8 text-lg font-semibold text-white">Attribix helps you put the pieces together.</p>
      </Section>

      {/* 3. What Attribix does */}
      <Section tone="band" labelledBy="does-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeader
            id="does-title"
            eyebrow="What Attribix does"
            title="One place to understand your advertising."
            intro="Attribix brings together information from your store and your ad accounts, so you can see what's happening without jumping between platforms."
          />
          <Card className="p-6 md:p-8">
            <ConnectFlow />
          </Card>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <Card as="li" key={c.t} className="flex flex-col">
              <h3 className="text-lg font-semibold text-white">{c.t}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{c.d}</p>
              <Link href={c.href} className={cx("mt-3 inline-flex min-h-[44px] items-center text-sm", textLink)}>
                {c.link}
              </Link>
            </Card>
          ))}
        </ul>
      </Section>

      {/* 4. How it works */}
      <Section id="how-it-works" labelledBy="how-title">
        <SectionHeader
          id="how-title"
          eyebrow="How it works"
          title="Getting started is simple."
          intro="Connect your store, connect your ad accounts, and start bringing your information together."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.t} className="border-t-2 border-cyan-300/40 pt-5">
              <span className="text-xs font-semibold text-cyan-300">Step {i + 1}</span>
              <h3 className="mt-1 text-lg font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/55">
          Good to know: Attribix follows store visits from the moment it is installed, so reports about how customers
          found you fill in over the following days.
        </p>
        <div className="mt-6">
          <TrialLink location="home_how">Get started</TrialLink>
        </div>
      </Section>

      {/* 5. The product */}
      <Section id="product" tone="band" labelledBy="product-title">
        <SectionHeader
          id="product-title"
          eyebrow="Inside Attribix"
          title="See what matters. Understand what it means."
          intro="Four screens from the app, shown with example numbers. Pick a tab to see what each one tells you."
        />
        <div className="mt-10">
          <ProductTour />
        </div>
      </Section>

      {/* 6. Tracking without jargon */}
      <Section labelledBy="tracking-title">
        <SectionHeader
          id="tracking-title"
          eyebrow="Sales tracking"
          title="When someone buys, your ads should know about it."
          intro="Facebook and Google use information about sales to measure your ads and decide who sees them. Some of that information can get lost. Attribix helps make it more reliable."
        />
        <div className="mt-10">
          <TrackingCompare />
        </div>
        <TechDetails />
      </Section>

      {/* 7. Real-world example */}
      <Section tone="band" labelledBy="example-title">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              id="example-title"
              eyebrow="A real-world example"
              title="Why your advertising numbers can be confusing."
              intro="A customer sees your ad on Instagram. Two days later, they search for your store on Google. Then they buy something for $100."
            />
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Facebook may count that sale. Google may count it too. But your store received one $100 order. Attribix
              helps you compare how credit for the sale is shared, instead of adding different reports together.
            </p>
            <Link href="/tools/attribution-models" className={cx("mt-6", btnSecondary)}>
              Explore how sales are counted
            </Link>
          </div>
          <CreditExample />
        </div>
      </Section>

      {/* 8. Integrations */}
      <Section id="integrations" labelledBy="integrations-title">
        <SectionHeader
          id="integrations-title"
          eyebrow="Integrations"
          title="Works with the tools you already use."
          intro="Connect your Shopify store and your ad accounts without rebuilding your website."
        />
        <div className="mt-10">
          <IntegrationCards />
        </div>
      </Section>

      {/* 9. Credibility */}
      <Section tone="band" labelledBy="team-title">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              id="team-title"
              eyebrow="Who builds it"
              title="Built by people who work with advertising every day."
              intro="Attribix grew out of years of running ads for businesses, and the measuring problems that came with it."
            />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              It is made by the team behind bevit, an agency that runs Facebook and Google ads. Stian Henriksen has
              worked in online advertising since 2008. The agency has run ads for clients since 2020, including
              MyHeritage, London Diamonds and Roberes.
            </p>
            <Link href="/about" className={cx("mt-5 inline-flex min-h-[44px] items-center text-sm", textLink)}>
              More about the team
            </Link>
          </div>
          <div>
            <dl className="grid grid-cols-2 gap-4">
              {[
                { k: "Since 2008", v: "Working in online advertising" },
                { k: "Since 2020", v: "Running ads for clients" },
                { k: "5.0 on Fiverr", v: "From 150+ reviews of our agency work" },
                { k: "Top Rated", v: "Fiverr seller level for the agency" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <dt className="text-lg font-bold text-white">{x.k}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-white/60">{x.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-white/45">
              Fiverr ratings are reviews of our ad management work, not of the Attribix app.
            </p>
          </div>
        </div>
      </Section>

      {/* 10. Pricing preview */}
      <Section id="pricing" labelledBy="pricing-title">
        <SectionHeader
          id="pricing-title"
          eyebrow="Pricing"
          title="Choose the plan that fits your store."
          intro="Every plan shows which ads bring in sales and keeps your tracking more reliable. Bigger plans handle more orders and add extra tools."
        />
        <div className="mt-12">
          <PricingCards compact location="home_pricing" />
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/pricing" className={btnSecondary}>
            Compare plans
          </Link>
        </div>
      </Section>

      {/* 11. FAQ */}
      <Section tone="band" labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeader id="faq-title" eyebrow="Questions" title="Questions? Here are the simple answers." />
            <Link href="/faq" className={cx("mt-5 inline-flex min-h-[44px] items-center text-sm", textLink)}>
              See all questions
            </Link>
          </div>
          <FAQList items={HOME_FAQ} />
        </div>
      </Section>

      {/* 12. Final CTA */}
      <Section labelledBy="final-cta-title">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-indigo-500/10 px-6 py-12 text-center md:px-12">
          <h2 id="final-cta-title" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ready to understand your advertising?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Connect your Shopify store and see your advertising information in one clearer place.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TrialLink location="home_final" />
            <Link href="/pricing" className={btnSecondary}>
              See pricing
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 rounded-2xl border border-white/10 px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">Want someone to run your ads for you?</span> Our team manages
            Facebook, Instagram and Google ads as a separate service.
          </p>
          <Link href="/ad-management" className={cx("inline-flex min-h-[44px] shrink-0 items-center text-sm", textLink)}>
            See Ad Management
          </Link>
        </div>
      </Section>
    </div>
  );
}
