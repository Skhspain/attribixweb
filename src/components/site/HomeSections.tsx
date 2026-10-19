"use client";

import Link from "next/link";
import React from "react";
import FAQList from "@/components/marketing/FAQList";
import { LOWEST_MONTHLY, PLANS, trialSummary } from "@/lib/pricing";
import { gtagEvent } from "@/lib/track";
import { IntegrationCards, IntegrationStrip } from "./integrations";
import PricingCards from "./PricingCards";
import ProductTour from "./ProductTour";
import { Card, DemoLink, Section, SectionHeader, TrialLink, btnSecondary, cx, textLink } from "./ui";

const PROBLEMS = [
  {
    t: "Meta and Google both claim the same sale",
    d: "Each platform credits itself when a buyer clicked its ad, so their totals add up to more than Shopify actually sold.",
  },
  {
    t: "Some purchases never reach the platforms",
    d: "Ad blockers, Safari privacy limits and consent choices stop part of the browser pixel data from arriving.",
  },
  {
    t: "Duplicate events inflate results",
    d: "When the pixel and a server event both fire without a shared ID, one order can be counted twice.",
  },
  {
    t: "Platform ROAS is not store ROAS",
    d: "A campaign can look profitable in Ads Manager while total ad spend is not paying back in Shopify.",
  },
];

const STEPS = [
  {
    t: "Install and connect",
    d: "Install Attribix from the Shopify App Store, then connect your Meta and Google Ads accounts. No theme code to edit.",
  },
  {
    t: "See spend next to real orders",
    d: "Shopify orders, ad spend, ROAS and campaign results appear in one dashboard, with attribution by channel.",
  },
  {
    t: "Decide where budget goes",
    d: "Compare campaigns against your target ROAS and use consistent attribution when you scale or cut spend.",
  },
];

const EXPLAINERS = [
  {
    t: "Server-side tracking",
    d: "Your store sends each purchase to Meta and Google directly from a server, in addition to the browser pixel. Purchases the browser misses can still be reported.",
    href: "/server-side-tracking-shopify",
    link: "How server-side tracking works",
  },
  {
    t: "Deduplication",
    d: "The browser and server copies of a purchase share one event ID, so each platform counts the order once instead of twice.",
    href: "/meta-capi-shopify",
    link: "Meta Conversions API explained",
  },
  {
    t: "Attribution",
    d: "Attribution decides which channel gets credit for an order. Comparing models shows where Meta and Google overlap, instead of trusting either one alone.",
    href: "/shopify-attribution",
    link: "Shopify attribution explained",
  },
];

const starter = PLANS[0];

const HOME_FAQ = [
  {
    q: "Will Attribix numbers match Meta Ads Manager exactly?",
    a: "No, and they should not. Ads Manager counts conversions using Meta's own attribution windows, including some view-through conversions. Attribix starts from the orders recorded in Shopify. The difference between the two is useful: it shows how much each platform may be over-crediting itself.",
  },
  {
    q: "Does it replace the Meta Pixel or Google tag?",
    a: "No. Attribix works alongside them. Browser events still fire, and Attribix adds server-side purchase events with a shared event ID so the platforms can deduplicate them.",
  },
  {
    q: "Can it recover every lost conversion?",
    a: "No tool can. Server-side sending reduces losses from ad blockers and browser limits, but visitors who decline consent, switch devices or never click an ad will still leave gaps.",
  },
  {
    q: "Which stores does it work with?",
    a: "Shopify stores, including Shopify Plus. Attribix is installed as a Shopify app.",
  },
  {
    q: "How does the free trial work?",
    a: `Install from the Shopify App Store and the trial starts automatically: ${trialSummary()}. Billing runs through your Shopify invoice, and you can cancel by uninstalling the app.`,
  },
  {
    q: "How is visitor privacy handled?",
    a: "Attribix supports Google Consent Mode v2 and implements the customer data request and deletion webhooks Shopify requires of every app. See the Privacy Policy for details.",
  },
];

const HOME_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

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

      {/* Integrations and plain facts, directly under the hero */}
      <div className="border-y border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <IntegrationStrip />
          <p className="text-sm text-white/60">
            Shopify app · From ${LOWEST_MONTHLY}/month · {starter.trialDays}-day free trial
          </p>
        </div>
      </div>

      {/* 2. Problem */}
      <Section labelledBy="problem-title">
        <SectionHeader
          id="problem-title"
          eyebrow="The problem"
          title="Your ad platforms and Shopify rarely agree"
          intro="Meta and Google each report conversions their own way. That makes it hard to tell which campaigns are actually producing sales."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {PROBLEMS.map((p) => (
            <Card as="li" key={p.t}>
              <h3 className="text-base font-semibold text-white">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.d}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* 3. How it works */}
      <Section id="how-it-works" tone="band" labelledBy="how-title">
        <SectionHeader
          id="how-title"
          eyebrow="How it works"
          title="Three steps from install to clearer decisions"
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
      </Section>

      {/* 4. Product walkthrough */}
      <Section id="product" labelledBy="product-title">
        <SectionHeader
          id="product-title"
          eyebrow="Inside Attribix"
          title="What you see after connecting your store"
          intro="Four screens from the dashboard, shown with sample data. Select a tab to see what each one does and how to use it."
        />
        <div className="mt-10">
          <ProductTour />
        </div>
      </Section>

      {/* 5. Why tracking matters */}
      <Section tone="band" labelledBy="tracking-title">
        <SectionHeader
          id="tracking-title"
          eyebrow="Why better tracking matters"
          title="Ad platforms optimise on the data they receive"
          intro="If purchases go missing or get counted twice, Meta and Google learn from the wrong signals and your reports drift away from Shopify. Three ideas explain most of it."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {EXPLAINERS.map((e) => (
            <Card as="li" key={e.t} className="flex flex-col">
              <h3 className="text-base font-semibold text-white">{e.t}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{e.d}</p>
              <Link href={e.href} className={cx("mt-3 inline-flex min-h-[44px] items-center text-sm", textLink)}>
                {e.link}
              </Link>
            </Card>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/55">
          No tool measures every sale. Consent choices, cross-device journeys and offline influence still leave
          gaps. The goal is reporting that is closer to Shopify and consistent enough to make decisions on.
        </p>
      </Section>

      {/* 6. Integrations */}
      <Section id="integrations" labelledBy="integrations-title">
        <SectionHeader
          id="integrations-title"
          eyebrow="Integrations"
          title="Connects the three systems that decide your ad results"
        />
        <div className="mt-10">
          <IntegrationCards />
        </div>
      </Section>

      {/* 7. Credibility */}
      <Section tone="band" labelledBy="team-title">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              id="team-title"
              eyebrow="Who builds it"
              title="Built by a team that runs Meta and Google Ads every day"
            />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              Attribix comes from the team behind bevit, a Meta and Google Ads agency. Stian Henriksen has worked in
              digital advertising since 2008, and the agency has managed client accounts since 2020, including work for
              MyHeritage, London Diamonds and Roberes. We built the tracking because we needed it to run those accounts
              properly.
            </p>
            <Link href="/about" className={cx("mt-5 inline-flex min-h-[44px] items-center text-sm", textLink)}>
              More about the team
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {[
              { k: "Since 2008", v: "Digital advertising experience" },
              { k: "Since 2020", v: "Managing client ad accounts" },
              { k: "5.0 on Fiverr", v: "Agency rating, Top Rated seller" },
              { k: "Meta and Google", v: "The platforms we manage daily" },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <dt className="text-lg font-bold text-white">{x.k}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-white/60">{x.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 8. Pricing */}
      <Section id="pricing" labelledBy="pricing-title">
        <SectionHeader
          id="pricing-title"
          eyebrow="Pricing"
          title="One price per store, based on order volume"
          intro="Every plan includes the full tracking and attribution features. Higher plans add order volume, longer history and more marketing tools."
        />
        <div className="mt-12">
          <PricingCards compact location="home_pricing" />
        </div>
        <div className="mt-6 text-center">
          <Link href="/pricing" className={cx("inline-flex min-h-[44px] items-center text-sm", textLink)}>
            Compare plans in detail
          </Link>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section tone="band" labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeader id="faq-title" eyebrow="FAQ" title="Questions merchants ask first" />
            <Link href="/faq" className={cx("mt-5 inline-flex min-h-[44px] items-center text-sm", textLink)}>
              See all questions
            </Link>
          </div>
          <FAQList items={HOME_FAQ} />
        </div>
      </Section>

      {/* 10. Final CTA */}
      <Section labelledBy="final-cta-title">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-indigo-500/10 px-6 py-12 text-center md:px-12">
          <h2 id="final-cta-title" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            See your own numbers during the trial
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Install Attribix, connect Meta and Google, and compare what the platforms report with what your store
            actually sold. Cancel any time by uninstalling the app.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TrialLink location="home_final" />
            <DemoLink location="home_final" className={btnSecondary}>
              Book a demo
            </DemoLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 rounded-2xl border border-white/10 px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">Prefer to have your ads run for you?</span> The same team offers
            Meta and Google Ads management.
          </p>
          <Link href="/ad-management" className={cx("inline-flex min-h-[44px] shrink-0 items-center text-sm", textLink)}>
            See Ad Management
          </Link>
        </div>
      </Section>
    </div>
  );
}
