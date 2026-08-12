"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const NOT_INCLUDED = [
  "Guaranteed results: no honest agency promises a specific ROAS, growth rate or sales number, because too much sits outside the agency's control (your product, pricing, site conversion rate, market conditions).",
  "Full creative production by default: most agencies direct creative strategy and give feedback on what's converting, but actual filming, editing or design is commonly a separate scope or the client's responsibility.",
  "Fixing your website or product pages: an agency can flag that a landing page is hurting conversion, but rebuilding it is usually outside a Meta Ads management scope unless specifically agreed.",
  "Managing channels outside Meta: a Meta-focused agency may not touch Google Ads, email or SEO unless that's explicitly part of the engagement.",
];

const FAQ_ITEMS = [
  {
    q: "Does a Meta Ads agency write the ad copy and design the creative?",
    a: "Usually they direct it: briefs, angles to test, feedback on performance. But actual production (filming, editing, graphic design) is commonly separate, either handled by the client or billed as an add-on. Confirm this specifically; it varies a lot between agencies.",
  },
  {
    q: "How often should a Meta Ads agency be testing new creative?",
    a: "There's no universal cadence, but a stalled creative queue (the same handful of ads running unchanged for months) is a sign testing has slowed down, regardless of what an agency claims its process is. Ask what's currently in testing when you're evaluating one.",
  },
  {
    q: "Does a Meta Ads agency need access to my Shopify store?",
    a: "For tracking setup, yes: at minimum read access to order data, and often admin access to install or verify server-side tracking. A competent agency will explain exactly what access it needs and why, rather than asking for broad admin rights without justification.",
  },
  {
    q: "Is a Meta Ads agency the same as a Meta Ads consultant?",
    a: "Not necessarily. A consultant typically advises and hands recommendations back to your team to implement; an agency typically implements and manages the account directly. Some individuals and small teams blur this line, so it's worth clarifying which one you're actually hiring.",
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
  headline: "What Does a Meta Ads Agency Actually Do?",
  description:
    "A real breakdown of Meta Ads agency work: account audits, strategy, creative testing, audience targeting, budget pacing, conversion tracking and reporting.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/what-does-a-meta-ads-agency-do" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "What Does a Meta Ads Agency Do", item: "https://www.attribix.app/resources/what-does-a-meta-ads-agency-do" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What a Meta Ads Agency Does" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Does a Meta Ads Agency Actually Do?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A Meta Ads agency does a lot more than launch campaigns and
            check Ads Manager once a week. The real work is an account
            audit, an account structure built around your catalogue, a
            running creative testing process, audience strategy, budget
            pacing, conversion tracking that's actually correct, and
            reporting that ties back to real revenue, not just platform
            ROAS. Here&apos;s what each of those actually involves.
          </p>
        </Reveal>
      </section>

      {/* ACCOUNT AUDIT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Account audit, before anything changes</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Before touching a live account, a competent agency reviews what&apos;s
            already there: campaign structure, historical spend and
            performance, existing creative, audience overlap, and whether
            tracking is actually reporting correctly. This matters most
            when taking over an account someone else built, where the
            audit is often what surfaces the real problem: sometimes it&apos;s
            weak creative, but just as often it&apos;s broken tracking making a
            healthy account look worse than it is, or the reverse.
          </p>
        </Reveal>
      </section>

      {/* STRATEGY & STRUCTURE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Strategy and account structure</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Campaign and ad set structure should reflect your catalogue,
              margins and customer journey, not a generic template copied
              across every client. This includes decisions like how
              prospecting and retargeting are split, whether campaigns are
              organized by product category or by objective, and how much
              budget consolidation makes sense for Meta&apos;s algorithm to
              have enough data to optimize well, without creating so few
              campaigns that testing becomes hard to isolate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CREATIVE STRATEGY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative strategy and testing cadence</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Meta ad performance degrades as creative gets stale. The same
            ad shown to the same audience for weeks eventually stops
            converting as well, regardless of how good it once was. A
            running testing queue (new angles, formats and hooks entering
            rotation on a regular cadence, with clear criteria for what
            gets scaled and what gets cut) is core to the job, not an
            optional extra. Whether the agency produces that creative
            itself or directs a client&apos;s creator relationship, this
            strategic direction is the agency&apos;s responsibility either way.
          </p>
        </Reveal>
      </section>

      {/* AUDIENCE / TARGETING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Audience and targeting approach</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Meta&apos;s targeting has shifted heavily toward algorithmic,
              broad, and Advantage+ audiences over the last few years, away
              from the granular interest-stacking that used to define
              account management. Part of the job now is knowing when
              broader, signal-driven targeting genuinely outperforms manual
              audience building, and when specific exclusions or retargeting
              windows still need manual control, and testing that,
              rather than assuming either approach automatically works
              better.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BUDGET MANAGEMENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Budget management and pacing</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Moving spend between campaigns and audiences based on what&apos;s
            actually converting, on a set review schedule rather than
            reactive day-to-day tinkering that doesn&apos;t give the algorithm
            time to learn. This also covers pacing around promotional
            periods, monitoring for delivery issues or learning-phase
            resets caused by too-frequent budget changes, and deciding when
            scaling spend is actually supported by the data versus when it
            would just be spending into diminishing returns.
          </p>
        </Reveal>
      </section>

      {/* LANDING PAGE INPUT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Landing page input</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              An ad can do everything right and still convert poorly if it
              sends traffic to a product or collection page that doesn&apos;t
              match the ad&apos;s promise, loads slowly, or has a confusing
              checkout path. Agencies typically flag these issues and
              suggest specific changes, sometimes even build a
              dedicated landing page for a campaign, but actually
              implementing site changes is usually a client or developer
              responsibility unless it&apos;s explicitly part of the scope.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONVERSION TRACKING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion tracking setup</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              This is the part that separates agencies that understand
              measurement from agencies that only understand campaign
              structure. It covers the{" "}
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Conversions API
              </Link>{" "}
              running alongside the browser Pixel (see{" "}
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Pixel vs CAPI
              </Link>{" "}
              for how the two work together), with correct event
              deduplication so purchases aren&apos;t double-counted, and{" "}
              <Link href="/resources/meta-event-match-quality-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Event Match Quality
              </Link>{" "}
              monitored as a signal of how well events are matching to real
              Meta users, not treated as a vanity score to maximize for its
              own sake.
            </p>
            <p>
              An agency that can&apos;t explain what CAPI does, why
              deduplication matters, or what EMQ measures is optimizing a
              campaign structure on top of numbers it doesn&apos;t actually
              understand, which is a real risk regardless of how good the
              creative testing process looks on paper.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ATTRIBUTION / REPORTING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution and reporting</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Regular reporting that explains what changed and why, not
              just a screenshot of Ads Manager&apos;s dashboard. Good reporting
              checks Meta&apos;s reported numbers against{" "}
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                actual Shopify orders
              </Link>
              , since Meta&apos;s attribution window and reporting logic
              routinely differ from what actually shipped. If a report is
              only ever Meta&apos;s own numbers restated, that&apos;s worth
              questioning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROFITABILITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Optimizing for profitability, not just ROAS</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A high platform-reported ROAS number can still coexist with a
            business that isn&apos;t making money on its ad spend once real
            margins, discounting, and returns are accounted for. Agencies
            that only chase the ROAS number in Ads Manager can end up
            optimizing toward a metric that doesn&apos;t reflect actual
            profitability. The more useful conversation is about what
            spend level and channel mix actually grows the business
            profitably, which requires looking past the platform&apos;s own
            reported number, not just requesting a higher one.
          </p>
        </Reveal>
      </section>

      {/* NOT INCLUDED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What a Meta Ads agency usually doesn&apos;t do</h2>
            <p className="text-white/55 text-sm mb-6 max-w-2xl">
              Worth naming plainly, since overpromising here is common
              across the industry.
            </p>
            <ul className="space-y-3 text-sm text-white/60 leading-relaxed pl-1 max-w-2xl">
              {NOT_INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
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
              <Link href="/resources/how-to-choose-a-meta-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to choose a Meta Ads agency for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/resources/what-does-a-google-ads-agency-do" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What does a Google Ads agency actually do?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/ad-management/meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads management for Shopify stores
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
