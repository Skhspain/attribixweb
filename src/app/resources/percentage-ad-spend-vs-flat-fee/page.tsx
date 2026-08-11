"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "Is percentage of ad spend always a conflict of interest?",
    a: "Not automatically, but it introduces a real incentive that a good agency has to actively work against rather than one that doesn't exist. An agency on percentage-of-spend that recommends cutting your budget when returns are falling is acting against its own short-term fee — worth noticing, and worth asking about directly.",
  },
  {
    q: "Can a flat fee agency still be motivated to perform well?",
    a: "Yes — reputation, retention and referrals matter regardless of fee structure, and a flat-fee agency that delivers poor results loses the client just as a percentage-of-spend agency does. Fee structure shapes incentives at the margin; it doesn't remove the basic business incentive to keep clients happy.",
  },
  {
    q: "Should the fee percentage go down as spend gets larger?",
    a: "Often, yes, and many agencies build this in — a tapering rate (a higher percentage on the first tranche of spend, lower on the rest) reflects that managing $50,000/month isn't ten times the work of managing $5,000/month. If an agency's percentage doesn't taper at all, ask why.",
  },
  {
    q: "How does Attribix's ad management pricing work?",
    a: "It depends on account complexity and monthly ad spend rather than one fixed model. Send an inquiry or book a free consultation call and you'll get a straight answer for your specific account.",
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

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Percentage of Ad Spend vs Fixed Fee: How Should a Marketing Agency Charge?",
  description:
    "The incentive-alignment argument for percentage-of-spend pricing, its risk, the case for flat fees, and why complexity is the fairer thing to price against.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/percentage-ad-spend-vs-flat-fee" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Percentage of Ad Spend vs Flat Fee", item: "https://www.attribix.app/resources/percentage-ad-spend-vs-flat-fee" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Percentage vs Flat Fee" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Percentage of Ad Spend vs Fixed Fee: How Should a Marketing Agency Charge?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Neither model is objectively correct. Percentage of ad spend
            aligns an agency&apos;s revenue with your budget growing, which is
            a different thing from aligning it with your results improving.
            A flat fee removes that specific conflict but introduces a
            different one — no direct financial incentive tied to your
            account getting harder to manage well. The fairest structures,
            in practice, price against how complex the account is, not
            spend alone.
          </p>
        </Reveal>
      </section>

      {/* CASE FOR PERCENTAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The case for percentage of ad spend</h2>
          <div className="space-y-4 text-white/65 leading-relaxed text-sm">
            <p>
              The argument for percentage-of-spend pricing is straightforward:
              it scales the fee automatically as the account grows, without
              anyone having to renegotiate a flat number every time spend
              increases. It also loosely ties the agency&apos;s income to your
              growth — if your budget is expanding, presumably something is
              working, and the agency benefits alongside you.
            </p>
            <p>
              <strong className="text-white/85">The risk sits in that word &quot;loosely.&quot;</strong>{" "}
              An agency paid a percentage of spend earns more when you spend
              more — full stop. That&apos;s not the same as earning more when
              your account performs better. A store can increase ad spend
              well past the point of strong marginal returns — where each
              additional dollar spent brings back less than the one before
              it — and an agency on pure percentage-of-spend still earns
              more for recommending that increase. Most agencies won&apos;t
              push spend recklessly because it damages the relationship and
              their reputation, but the financial incentive to scale budget
              exists independently of whether scaling is actually the right
              call for your account at that moment.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CASE FOR FLAT FEE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The case for a fixed fee</h2>
            <div className="space-y-4 text-white/65 leading-relaxed text-sm max-w-2xl">
              <p>
                A flat monthly fee removes the spend-scaling incentive
                entirely. The agency earns the same whether you spend
                $5,000 or $15,000 this month, so there&apos;s no financial
                pull toward recommending more budget than the account can
                use efficiently. For budgeting purposes, it&apos;s also simply
                easier to plan around a number that doesn&apos;t move.
              </p>
              <p>
                <strong className="text-white/85">The risk runs the other direction.</strong>{" "}
                An account genuinely does get harder to manage well as it
                grows — more creative variants to test, more audiences to
                monitor, more budget decisions to make across campaign
                types. A flat fee agreed at a smaller account size doesn&apos;t
                automatically adjust as that complexity increases, which can
                leave a growing account under-resourced relative to what
                good management of it now actually requires, unless the fee
                is proactively revisited.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE REAL ANSWER: COMPLEXITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What actually deserves to set the price: complexity, not spend</h2>
          <div className="space-y-4 text-white/65 leading-relaxed text-sm">
            <p>
              Both models are really trying to approximate the same thing —
              how much genuine work managing your account well requires —
              using an imperfect proxy. Percentage of spend uses budget size
              as the proxy. Flat fee uses a fixed estimate made at signup as
              the proxy. Neither directly measures the thing that actually
              matters: how complex the account is to run.
            </p>
            <p>
              A $30,000/month account running one evergreen campaign on one
              channel can be less work than a $10,000/month account running
              five channels, a large catalogue, and frequent promotional
              changes. Spend alone doesn&apos;t capture that difference — and
              neither does a flat number picked before either side really
              knew how the account would evolve.
            </p>
            <p>
              The structures that tend to hold up best over time are the
              ones that revisit pricing against actual account complexity —
              number of channels managed, catalogue size, creative
              production volume, reporting depth expected — on a set
              schedule, rather than locking in indefinitely to whatever
              number or percentage was agreed at the start. Some agencies
              do this with a tapering percentage (lower rate as spend
              scales past certain thresholds), others with a flat fee tied
              to a defined scope that gets renegotiated if the scope
              changes. Both are reasonable if they&apos;re transparent about
              what triggers a repricing conversation.
            </p>
          </div>
        </Reveal>
      </section>

      {/* QUESTIONS TO ASK */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What to ask, regardless of which model an agency uses</h2>
            <ul className="space-y-3 text-sm text-white/65 leading-relaxed pl-1">
              <li>
                If percentage-based: does the rate taper as spend increases,
                or is it flat no matter how large the budget gets?
              </li>
              <li>
                If flat fee: under what conditions does the fee get
                revisited — added channels, catalogue growth, more
                creative volume?
              </li>
              <li>
                Either way: what specifically does the fee cover — strategy
                and management only, or also creative production, landing
                pages, and reporting depth?
              </li>
              <li>
                Is there a minimum spend or minimum fee below which the
                engagement doesn&apos;t make sense for either side?
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/ecommerce-marketing-agency-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much does an ecommerce marketing agency cost?
              </Link>
            </li>
            <li>
              <Link href="/resources/marketing-agency-vs-in-house" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Marketing agency vs in-house
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-choose-a-meta-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to choose a Meta Ads agency
              </Link>
            </li>
            <li>
              <Link href="/ad-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta and Google Ads management for Shopify stores
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want us to manage it for you?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            We manage Meta and Google Ads with the same focus on
            measurement, tracking and actual business performance described
            in this guide.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
