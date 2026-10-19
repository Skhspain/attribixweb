"use client";

// Homepage below the hero. Copy rule for this file: a store owner with no
// marketing background must understand every sentence. Say the benefit
// first, then name the technical term (for SEO and for people who know it).

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
    t: "Facebook and Google both take credit for the same sale",
    d: "A customer clicks a Facebook ad, then a Google ad, then buys. Both say they made the sale. Add them up and it looks like you sold more than you did.",
  },
  {
    t: "Some sales never get counted",
    d: "Ad blockers and privacy settings in browsers stop some sales from being reported back to Facebook and Google. Your ads look worse than they are.",
  },
  {
    t: "Some sales get counted twice",
    d: "If your store reports a sale in two ways without matching them up, one order can show up as two. Your ads look better than they are.",
  },
  {
    t: "It is hard to know which ads make money",
    d: "Every platform shows its own numbers in its own way. It is hard to tell which ads to keep and which ones are wasting money.",
  },
];

const STEPS = [
  {
    t: "Install the app",
    d: "Add Attribix to your Shopify store from the Shopify App Store. You don't need to edit any code.",
  },
  {
    t: "Connect your ad accounts",
    d: "Connect your Facebook and Google ad accounts inside Attribix. Your ad costs and results then show up next to your real sales.",
  },
  {
    t: "See what works",
    d: "Find out which ads bring you customers. Spend more on those, and less on the ones that don't pay off.",
  },
];

const EXPLAINERS = [
  {
    t: "Count more of your sales",
    term: "Server-side tracking",
    d: "Normally your shop reports a sale from the shopper's web browser. Ad blockers can stop that. Attribix also reports each sale from a server, which blockers can't stop, so fewer sales go missing.",
    href: "/server-side-tracking-shopify",
    link: "Learn how server-side tracking works",
  },
  {
    t: "Count each sale only once",
    term: "Event deduplication",
    d: "When a sale is reported twice, both reports carry the same ID number. Facebook and Google see the matching numbers and count the sale once.",
    href: "/meta-capi-shopify",
    link: "Learn about the Meta Conversions API",
  },
  {
    t: "Decide which ad gets the credit",
    term: "Attribution",
    d: "Many customers see more than one ad before buying. Attribution is the rule for which ad gets the credit. Attribix lets you compare rules, so you can see where Facebook and Google overlap.",
    href: "/shopify-attribution",
    link: "Learn about Shopify attribution",
  },
];

const starter = PLANS[0];

const HOME_FAQ = [
  {
    q: "Will Attribix show the same numbers as Facebook or Google?",
    a: "No, and that is the point. Facebook and Google count sales their own way, and both can count the same order. Attribix starts from the orders in your Shopify store and counts each one once. The difference shows you how much extra credit the platforms may be taking.",
  },
  {
    q: "Do I need to remove my Facebook pixel or Google tag?",
    a: "No. Keep them. Attribix works alongside them and adds a second, more reliable way of reporting each sale.",
  },
  {
    q: "Will Attribix catch every single sale?",
    a: "No tool can. Attribix reduces the number of sales that go missing, but some will still be missed. For example, when a shopper says no to cookies, or looks on their phone and buys on a laptop.",
  },
  {
    q: "Which online stores does it work with?",
    a: "Shopify stores, including Shopify Plus. Attribix is a Shopify app.",
  },
  {
    q: "How does the free trial work?",
    a: `Install Attribix from the Shopify App Store and the trial starts. It lasts ${trialSummary()}. You pay through your normal Shopify bill. To cancel, uninstall the app.`,
  },
  {
    q: "What about my customers' privacy?",
    a: "Attribix respects your visitors' cookie choices through Google Consent Mode v2. It also follows Shopify's rules for customer data requests and deletions. Our Privacy Policy has the details.",
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

      {/* Plain-language summary + integrations, directly under the hero */}
      <div className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="max-w-3xl text-lg leading-relaxed text-white md:text-xl">
            <span className="font-semibold">In plain words:</span> Attribix shows you which of your Facebook,
            Instagram and Google ads bring you customers, and makes sure your sales are counted correctly.
          </p>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <IntegrationStrip />
            <p className="text-sm text-white/60">
              Shopify app · From ${LOWEST_MONTHLY}/month · {starter.trialDays}-day free trial
            </p>
          </div>
        </div>
      </div>

      {/* 2. Problem */}
      <Section labelledBy="problem-title">
        <SectionHeader
          id="problem-title"
          eyebrow="The problem"
          title="Your ad numbers don't match your sales"
          intro="Facebook says one thing. Google says another. Your Shopify store says something else. Here is why."
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

      {/* 2b. A simple example */}
      <Section tone="band" labelledBy="example-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              id="example-title"
              eyebrow="A simple example"
              title="Is your advertising paying off?"
              intro="Say you spend $100 on Facebook ads in a week, and those ads lead to $500 in sales."
            />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              That means every $1 you spent on ads brought back $5 in sales. Marketers call this{" "}
              <strong className="text-white">ROAS</strong>, short for &quot;return on ad spend&quot;. Attribix puts your
              ad costs and your sales side by side, so you can see this number for every ad.
            </p>
          </div>
          <Card className="p-6 md:p-8">
            <dl className="grid grid-cols-3 gap-4 text-center">
              <div>
                <dt className="text-xs text-white/55">You spend</dt>
                <dd className="mt-1 text-2xl font-bold text-white">$100</dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">You sell</dt>
                <dd className="mt-1 text-2xl font-bold text-white">$500</dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">ROAS</dt>
                <dd className="mt-1 text-2xl font-bold text-cyan-300">5x</dd>
              </div>
            </dl>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/65">
              <li>
                <span className="font-semibold text-white/85">Ads are not your only cost.</span> You also pay for
                products, shipping and fees. $500 in sales can still leave little profit.
              </li>
              <li>
                <span className="font-semibold text-white/85">The $500 depends on who gets the credit.</span> If the
                customer also clicked a Google ad, part of that sale may belong to Google.
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/45">Example numbers, not a customer result.</p>
          </Card>
        </div>
      </Section>

      {/* 3. How it works */}
      <Section id="how-it-works" labelledBy="how-title">
        <SectionHeader id="how-title" eyebrow="How it works" title="Three steps to get started" />
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
      <Section id="product" tone="band" labelledBy="product-title">
        <SectionHeader
          id="product-title"
          eyebrow="Inside Attribix"
          title="What you see in the app"
          intro="Four screens, shown here with example numbers. Pick a tab to see what each screen tells you."
        />
        <div className="mt-10">
          <ProductTour />
        </div>
      </Section>

      {/* 5. Why tracking matters */}
      <Section labelledBy="tracking-title">
        <SectionHeader
          id="tracking-title"
          eyebrow="Why correct counting matters"
          title="Facebook and Google learn from the sales you report"
          intro="They use your sales to decide who sees your ads. If sales go missing, or get counted twice, they learn the wrong lesson. And your reports stop matching reality."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {EXPLAINERS.map((e) => (
            <Card as="li" key={e.t} className="flex flex-col">
              <h3 className="text-base font-semibold text-white">{e.t}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-cyan-200/70">{e.term}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{e.d}</p>
              <Link href={e.href} className={cx("mt-3 inline-flex min-h-[44px] items-center text-sm", textLink)}>
                {e.link}
              </Link>
            </Card>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/55">
          No tool can count every sale. Some shoppers say no to cookies. Others look on one device and buy on another.
          The goal is numbers that are closer to your real sales, and steady enough to make decisions with.
        </p>
      </Section>

      {/* 6. Integrations */}
      <Section id="integrations" tone="band" labelledBy="integrations-title">
        <SectionHeader
          id="integrations-title"
          eyebrow="Integrations"
          title="Works with your store and your ad accounts"
          intro="Attribix connects to three places and brings their numbers together."
        />
        <div className="mt-10">
          <IntegrationCards />
        </div>
      </Section>

      {/* 7. Credibility */}
      <Section labelledBy="team-title">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeader id="team-title" eyebrow="Who builds it" title="Made by people who run ads every day" />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              Attribix is made by the team behind bevit, an agency that runs Facebook and Google ads for businesses.
              Stian Henriksen has worked in online advertising since 2008. The agency has run ads for clients since
              2020, including MyHeritage, London Diamonds and Roberes.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
              We built Attribix because we needed it ourselves, to see which of our clients&apos; ads really worked.
            </p>
            <Link href="/about" className={cx("mt-5 inline-flex min-h-[44px] items-center text-sm", textLink)}>
              More about the team
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {[
              { k: "Since 2008", v: "Working in online advertising" },
              { k: "Since 2020", v: "Running ads for clients" },
              { k: "5.0 on Fiverr", v: "Agency rating as a Top Rated seller" },
              { k: "Facebook and Google", v: "The ad platforms we use every day" },
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
      <Section id="pricing" tone="band" labelledBy="pricing-title">
        <SectionHeader
          id="pricing-title"
          eyebrow="Pricing"
          title="Pick a plan based on how many orders you get"
          intro="Every plan counts your sales and shows which ads work. Bigger plans handle more orders, keep your history longer, and add extra marketing tools."
        />
        <div className="mt-12">
          <PricingCards compact location="home_pricing" />
        </div>
        <div className="mt-6 text-center">
          <Link href="/pricing" className={cx("inline-flex min-h-[44px] items-center text-sm", textLink)}>
            Compare all plans
          </Link>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeader id="faq-title" eyebrow="Questions" title="What store owners ask us first" />
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
            Try it on your own store for free
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Install Attribix and connect your ad accounts. Then compare what Facebook and Google say with what your
            store really sold. Not for you? Uninstall the app to cancel.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TrialLink location="home_final" />
            <DemoLink location="home_final" className={btnSecondary}>
              Get a free walkthrough
            </DemoLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 rounded-2xl border border-white/10 px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">Rather have someone run your ads for you?</span> Our team can
            manage your Facebook and Google ads.
          </p>
          <Link href="/ad-management" className={cx("inline-flex min-h-[44px] shrink-0 items-center text-sm", textLink)}>
            See Ad Management
          </Link>
        </div>
      </Section>
    </div>
  );
}
