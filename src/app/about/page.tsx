"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import {
  Card,
  Check,
  DemoLink,
  ExampleLabel,
  Section,
  SectionHeader,
  TrialLink,
  btnSecondary,
  cx,
  textLink,
} from "@/components/site/ui";

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.attribix.app/about" },
  ],
};

// Illustrative only: the same week of sales as three sources report it.
const THREE_NUMBERS = [
  { source: "Facebook says", value: "48 sales", tone: "text-indigo-300" },
  { source: "Google says", value: "41 sales", tone: "text-sky-300" },
  { source: "Shopify recorded", value: "62 orders", tone: "text-white" },
];

const STATS = [
  { k: "Since 2008", v: "Stian Henriksen has worked in online advertising" },
  { k: "Since 2020", v: "The team has run Facebook and Google ads for clients" },
  { k: "About 80%", v: "Of those clients have stayed with us since" },
  { k: "Top Rated", v: "Fiverr seller level, 5.0 from 150+ reviews" },
];

const BELIEFS = [
  {
    title: "Your real orders come first",
    body: "Facebook and Google both want the credit, so their numbers rarely add up to your real sales. We start from the orders in your Shopify store.",
  },
  {
    title: "No one perfect number",
    body: "There is no single right way to decide which ad earned a sale. Attribix lets you compare different ways of giving credit, side by side.",
  },
  {
    title: "You make the call",
    body: "We count as many sales as we can and show you the facts. Then you decide where your money goes.",
  },
];

const COMPANY_DETAILS = [
  { k: "Company", v: "Attribix Ltd" },
  {
    k: "Company number",
    v: (
      <a
        href="https://find-and-update.company-information.service.gov.uk/company/17476759"
        target="_blank"
        rel="noopener noreferrer"
        className={textLink}
      >
        17476759
      </a>
    ),
  },
  { k: "Registered in", v: "England and Wales" },
  { k: "Registered office", v: "124 City Road, London, EC1V 2NX, United Kingdom" },
  {
    k: "Contact",
    v: (
      <a href="mailto:hello@attribix.app" className={textLink}>
        hello@attribix.app
      </a>
    ),
  },
];

export default function AboutPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-4 md:pt-32">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <div className="mt-6">
          <SectionHeader
            as="h1"
            eyebrow="About Attribix"
            title="We run ads for a living. So we built the tool we needed."
            intro="Attribix is made by a team that runs Facebook and Google ads for businesses. We built it to answer one simple question: which ads really bring in customers?"
          />
        </div>
      </div>

      {/* Why it exists */}
      <Section labelledBy="why-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              id="why-title"
              eyebrow="Why it exists"
              title="Three tools, three different answers."
            />
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-white/70">
              <p>
                For years we ran ads for online stores. Facebook said one number. Google said another. The
                store&apos;s real sales said a third. We couldn&apos;t tell our clients which ads truly worked.
              </p>
              <p>
                So we built Attribix. It puts your real Shopify sales next to your ads, and makes sure each sale
                is counted correctly.
              </p>
            </div>
          </div>

          <Card className="p-6 md:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white">Sales from ads, last 7 days</p>
              <ExampleLabel>Example, made-up numbers</ExampleLabel>
            </div>
            <ul className="mt-6 space-y-3">
              {THREE_NUMBERS.map((n) => (
                <li
                  key={n.source}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3.5"
                >
                  <span className="text-sm text-white/65">{n.source}</span>
                  <span className={cx("text-lg font-bold tabular-nums", n.tone)}>{n.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              The ad platforms each count differently and often miss or double-count sales. Attribix lines them
              up against the orders you actually received.
            </p>
          </Card>
        </div>
      </Section>

      {/* Track record */}
      <Section tone="band" labelledBy="record-title">
        <SectionHeader
          id="record-title"
          eyebrow="Track record"
          title="Built by people who work with advertising every day."
          intro="We have run ads for businesses including MyHeritage, London Diamonds and Roberes."
        />
        <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <Card key={s.k} className="p-5">
              <dt className="text-2xl font-extrabold tracking-tight text-white">{s.k}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/60">{s.v}</dd>
            </Card>
          ))}
        </dl>
        <p className="mt-4 text-xs text-white/45">
          Fiverr ratings are reviews of our ad management work, not of the Attribix app.
        </p>
      </Section>

      {/* What we believe */}
      <Section labelledBy="beliefs-title">
        <SectionHeader id="beliefs-title" eyebrow="What we believe" title="Facts first, then you decide." />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {BELIEFS.map((b) => (
            <Card as="li" key={b.title}>
              <Check className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-4 text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{b.body}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Two ways to work with us */}
      <Section tone="band" labelledBy="ways-title">
        <SectionHeader
          id="ways-title"
          eyebrow="Work with us"
          title="Two ways to work with us."
          intro="You can use one without the other."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card className="flex flex-col p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/45">The app</p>
            <h3 className="mt-2 text-xl font-bold text-white">Use Attribix yourself</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
              Connect your Shopify store and your Facebook and Google ad accounts, and see which ads bring in
              customers.
            </p>
            <div className="mt-6">
              <TrialLink location="about_ways" />
            </div>
          </Card>
          <Card className="flex flex-col p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/45">Agency</p>
            <h3 className="mt-2 text-xl font-bold text-white">Let our team run your ads</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
              If you would rather not run your ads yourself, we manage them for you, using the same app and the
              same real sales numbers.
            </p>
            <div className="mt-6">
              <Link href="/ad-management" className={btnSecondary}>
                See our agency service
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Company details */}
      <Section labelledBy="company-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeader
            id="company-title"
            eyebrow="Company details"
            title="Who's behind Attribix."
            intro={
              <>
                Attribix is operated by Attribix Ltd, a private limited company. More legal details are in our{" "}
                <Link href="/terms" className={textLink}>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className={textLink}>
                  Privacy Policy
                </Link>
                .
              </>
            }
          />
          <Card className="p-0">
            <dl className="divide-y divide-white/10">
              {COMPANY_DETAILS.map((d) => (
                <div key={d.k} className="grid gap-1 px-6 py-4 sm:grid-cols-[160px_1fr] sm:gap-4">
                  <dt className="text-sm text-white/50">{d.k}</dt>
                  <dd className="text-sm font-medium text-white">{d.v}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="band" labelledBy="cta-title">
        <SectionHeader
          id="cta-title"
          align="center"
          title="See it on your own store."
          intro="Install the app, connect your ad accounts, and see which of your ads bring in customers."
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <TrialLink location="about_final" />
          <DemoLink location="about_final" />
        </div>
      </Section>
    </ProductPageShell>
  );
}
