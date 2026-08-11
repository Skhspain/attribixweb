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
  { title: "Budget allocation", desc: "Spend moved between campaigns and audiences based on what's converting, reviewed on a set schedule rather than ad hoc." },
  { title: "Tracking and attribution review", desc: "Meta Pixel and Conversions API checked as part of the engagement, not left to drift once it's set up." },
  { title: "Reporting", desc: "Reporting against Shopify revenue, with the reasoning behind budget moves — not just a screenshot of Ads Manager." },
];

const OPERATIONS = [
  { label: "Account ownership", desc: "You own the Meta ad account and Business Manager. We work inside it as a partner, not as the account owner." },
  { label: "Access required", desc: "Admin access to your Meta Business Manager and read access to Shopify order data. No login-sharing outside Meta's own partner access tools." },
  { label: "Onboarding", desc: "Account and tracking review first, then a written plan before any budget changes go live — typically the first one to two weeks." },
  { label: "Communication", desc: "A standing check-in call, plus messaging for anything time-sensitive in between." },
  { label: "Reporting frequency", desc: "Monthly written reporting as standard; more frequent updates during active testing periods or launches." },
  { label: "What you provide", desc: "Product feed access, brand and creative assets or an existing creator relationship, and someone who can approve budget and creative decisions." },
  { label: "Contract terms", desc: "Month-to-month engagement. No fixed-term lock-in unless a longer period is specifically agreed for a particular project." },
  { label: "What determines price", desc: "Account complexity and monthly ad spend, not a flat rate — confirmed after the initial review, before anything is agreed." },
];

const FAQ_ITEMS = [
  {
    q: "What's the minimum ad spend to work with you?",
    a: "Stores spending less can still advertise successfully, but smaller budgets usually limit how many audiences, creatives and campaign approaches can be tested at the same time. We'll tell you honestly if your current budget is likely to limit what we can learn quickly.",
  },
  {
    q: "Do you produce ad creative, or do we need our own?",
    a: "We direct creative — briefs, angles, and feedback on what's converting — but production (filming, editing, design) is typically a client responsibility or handled by a creator you already work with. We can advise on this during onboarding, but it's not included by default.",
  },
  {
    q: "How long before we see results?",
    a: "In our experience, most accounts need three to four weeks of stable spend before the data is reliable enough to make real optimisation decisions. We'll tell you honestly if something looks off before that point.",
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

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ad management", item: "https://www.attribix.app/ad-management" },
    { "@type": "ListItem", position: 2, name: "Meta Ads management", item: "https://www.attribix.app/ad-management/meta-ads" },
  ],
};

export default function MetaAdsManagementPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-4">
        <Breadcrumbs items={[{ label: "Ad management", href: "/ad-management" }, { label: "Meta Ads management" }]} />
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

      {/* HOW THE ENGAGEMENT WORKS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">Who owns what, and how it runs</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {OPERATIONS.map((op, i) => (
              <Reveal key={op.label} delay={i * 40}>
                <div>
                  <p className="text-sm font-semibold text-white">{op.label}</p>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{op.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKING TIE-IN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Reporting starts from Shopify, not Ads Manager</h2>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            Budget decisions are checked against your actual{" "}
            <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Shopify attribution
            </Link>{" "}
            data, not just the ROAS Meta reports for itself. That relies on{" "}
            <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              server-side tracking
            </Link>{" "}
            and a correctly configured{" "}
            <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Meta Conversions API
            </Link>{" "}
            being in place from the start — which we check as part of onboarding, not as an afterthought.
          </p>
        </Reveal>
      </section>

      {/* RELATED READING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Diagnosing a problem yourself first?</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads getting clicks but no sales? Diagnose it first</Link></li>
            <li><Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads ROAS dropped suddenly? Ads, website or tracking</Link></li>
            <li><Link href="/resources/what-does-a-meta-ads-agency-do" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What does a Meta Ads agency actually do?</Link></li>
            <li><Link href="/resources/how-to-choose-a-meta-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to choose a Meta Ads agency for ecommerce</Link></li>
          </ul>
        </Reveal>
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
          <p className="mt-6 text-sm text-white/35">
            Need tracking fixed first?{" "}
            <Link href="/ad-management/inquiry" className="text-white/60 underline underline-offset-4 hover:text-white">
              Ask about tracking and attribution setup
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
