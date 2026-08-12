"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const MODELS = [
  {
    title: "Flat monthly retainer",
    desc: "A fixed fee regardless of how much you spend on ads. Predictable for budgeting, and it doesn't create any incentive for the agency to push your spend higher than it should be. The trade-off: if your account genuinely grows more complex over time, a flat number agreed months ago may no longer reflect the actual work involved, unless it's revisited.",
  },
  {
    title: "Percentage of ad spend",
    desc: "The fee scales with how much you spend, commonly somewhere in the high single digits to mid-teens as a percentage, though this varies a lot by agency and account size. It aligns the agency's revenue with your spend growing, which isn't quite the same as aligning it with your results improving. Worth reading closely if you're comparing this against flat fees.",
  },
  {
    title: "Hourly",
    desc: "Less common for ongoing management, more common for audits, one-off projects, or consulting engagements. Transparent in theory, but hard to budget against if scope isn't tightly defined up front.",
  },
  {
    title: "Hybrid retainer + performance",
    desc: "A lower base retainer plus a bonus or performance component tied to results: often revenue, ROAS, or a specific KPI hit. Can align incentives well, but only if the performance metric is one you'd actually stand behind (platform-reported ROAS is a common but flawed choice; see the note on measurement below).",
  },
  {
    title: "One-time setup or onboarding fee",
    desc: "A separate charge for the initial work (account audit, tracking review, campaign structure rebuild) before ongoing management fees start. Reasonable if it reflects real upfront work; worth asking exactly what's included.",
  },
  {
    title: "Creative or landing-page fees as add-ons",
    desc: "Many agencies scope creative direction into management fees but charge separately for actual production: photography, video editing, landing page builds. If creative or dedicated landing pages matter to your strategy, confirm what's included versus billed extra before signing anything.",
  },
];

const FACTORS = [
  { label: "Account complexity", desc: "A single-channel account with a handful of evergreen campaigns costs less to manage well than a catalogue with hundreds of SKUs, multiple markets, or frequent promotional changes." },
  { label: "Number of channels", desc: "Meta only, Google only, or both together (and increasingly TikTok or other platforms); each channel adds management time, even where some efficiency comes from shared learnings across them." },
  { label: "Creative production needs", desc: "Agencies that write briefs and analyze results cost less than agencies also producing video, photography or UGC-style content in volume." },
  { label: "Spend level", desc: "Higher spend generally means more testing, more budget decisions, and more reporting depth expected. That's the logic behind percentage-of-spend pricing, even though spend alone isn't a perfect proxy for effort." },
  { label: "Reporting and analytics depth", desc: "Monthly PDF reporting is cheaper to deliver than a live dashboard tied to real order data, deeper attribution modeling, or bespoke reporting cadence." },
  { label: "Market", desc: "Agency rates vary by region and by how competitive the local agency market is, the same way any professional service does." },
];

const FAQ_ITEMS = [
  {
    q: "Is a cheaper agency ever the better choice?",
    a: "Sometimes. If your account is genuinely simple (one channel, one market, a small catalogue), a lower-cost agency or freelancer scoped to that simplicity can be entirely appropriate. The risk is a cheap agency spreading one person across too many accounts to give any of them real attention, which shows up as generic, template-driven work rather than strategy specific to your store.",
  },
  {
    q: "Do agencies charge for onboarding or setup separately from monthly management?",
    a: "Often, yes: a one-time fee for the initial account audit, tracking review and campaign rebuild, separate from the ongoing monthly fee. Ask what's included in each so you're not surprised by a second invoice.",
  },
  {
    q: "Should I pay for creative production separately from management?",
    a: "It's common, and not automatically a bad sign. What matters is knowing upfront whether your monthly fee covers creative strategy only, or strategy plus actual production. Those are very different scopes of work priced very differently.",
  },
  {
    q: "How much does Attribix's ad management cost?",
    a: "It depends on account complexity and monthly ad spend, not a flat published rate. Send an inquiry or book a free consultation call and you'll get a straight answer based on your actual account.",
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
  headline: "How Much Does an Ecommerce Marketing Agency Cost?",
  description:
    "The pricing models ecommerce marketing agencies use and what actually moves the price up or down, without inventing a fake industry-average number.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ecommerce-marketing-agency-cost" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Ecommerce Marketing Agency Cost", item: "https://www.attribix.app/resources/ecommerce-marketing-agency-cost" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Agency Cost" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Much Does an Ecommerce Marketing Agency Cost?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There&apos;s no single honest number here. Cost depends on which
            pricing model an agency uses and how complex your account is,
            and any site that hands you one flat industry-average figure is
            simplifying past the point of being useful. What follows is the
            actual range of pricing structures in use, and the specific
            things that push a quote up or down.
          </p>
        </Reveal>
      </section>

      {/* PRICING MODELS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">The pricing models you&apos;ll actually run into</h2>
          <p className="text-white/55 text-sm mb-8 max-w-xl">
            Most agencies use one of these, or a combination. None is
            inherently the &quot;correct&quot; model; each has a genuine trade-off.
          </p>
        </Reveal>
        <div className="divide-y divide-white/10 border-t border-white/10">
          {MODELS.map((m, i) => (
            <Reveal key={m.title} delay={i * 40}>
              <div className="grid gap-1.5 py-5 sm:grid-cols-[240px_1fr] sm:gap-8">
                <p className="font-semibold text-sm text-white">{m.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-sm text-white/55 leading-relaxed max-w-2xl">
            The two dominant models, flat fee and percentage of ad spend,
            get compared in more depth, including the specific incentive
            problems each one creates, in{" "}
            <Link href="/resources/percentage-ad-spend-vs-flat-fee" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              percentage of ad spend vs fixed fee
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* FACTORS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">What actually moves the price</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {FACTORS.map((f, i) => (
              <Reveal key={f.label} delay={i * 40}>
                <div>
                  <p className="text-sm font-semibold text-white">{f.label}</p>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING RANGE - explicitly not a stat */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A rough way to calibrate, not a researched figure</h2>
          <div className="space-y-4 text-white/65 leading-relaxed text-sm">
            <p>
              We&apos;re not going to hand you a specific &quot;average agency
              cost&quot; number. Nobody publishing one has actually surveyed a
              representative sample of agencies, and most of those figures
              circulating online trace back to nothing more than another
              blog post doing the same thing.
            </p>
            <p>
              What&apos;s reasonable to say, based on how these pricing models
              generally work rather than any specific data source: a small,
              single-channel account on a flat retainer tends to sit at the
              lower end of what agencies charge for ongoing management, a
              multi-channel account with meaningful creative production
              needs sits meaningfully higher, and percentage-of-spend
              pricing scales roughly in proportion to your monthly budget
              regardless of account size. Treat any of these as a starting
              point for a conversation, not a number to hold an agency to
              before they&apos;ve actually looked at your account.
            </p>
            <p>
              The only reliable way to get an actual number for your
              situation is to have a specific agency review your account and
              quote against what they&apos;d actually be doing. That&apos;s why
              we don&apos;t publish a flat management rate either.{" "}
              <Link href="/ad-management/inquiry" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Send an inquiry
              </Link>{" "}
              and you&apos;ll get pricing based on your account, not a rate card.
            </p>
          </div>
        </Reveal>
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
              <Link href="/resources/percentage-ad-spend-vs-flat-fee" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Percentage of ad spend vs fixed fee
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
