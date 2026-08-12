"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Increasing Meta Ads Budget: Is the 20% Rule Real?",
  description:
    "Why the 20% rule is a useful reminder, not a law, and what actually determines whether a Meta budget increase is safe.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-20-percent-budget-rule" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "20% Budget Rule",
      item: "https://www.attribix.app/resources/meta-ads-20-percent-budget-rule",
    },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "20% Budget Rule" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Increasing Meta Ads Budget: Is the 20% Rule Real?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            You will often hear that a Meta campaign budget should never be
            increased by more than 20% at a time. It is a useful reminder
            not to make reckless changes, but it is not a law of
            advertising.
          </p>
          <p className="mt-4 text-lg text-white/65 max-w-xl leading-relaxed">
            Meta&apos;s delivery system changes over time, and campaign
            behaviour depends on far more than one percentage.
          </p>
        </Reveal>
      </section>

      {/* WHY THE RULE EXISTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why the rule exists</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Large budget changes can alter who the campaign needs to reach
            and how aggressively it enters auctions. If you double spend
            overnight, the campaign may have to move beyond the easiest
            conversion opportunities that supported the original CPA.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Smaller increases can make it easier to observe how marginal
            performance changes.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            That is good reasoning. The problem comes when marketers treat
            20% as a guaranteed safe number.
          </p>
        </Reveal>
      </section>

      {/* TOO LARGE FOR SMALL ACCOUNTS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A 20% increase can still be too large</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If a small campaign has only generated a handful of
              purchases, even a modest budget change can create
              volatility. The account may not have enough stable data to
              support confident scaling. If you are not sure how much
              purchase volume actually counts as enough, see{" "}
              <Link href="/resources/how-much-data-does-meta-ads-need" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how much data Meta ads need before you can judge performance
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* LARGER INCREASE CAN BE REASONABLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A larger increase can sometimes be perfectly reasonable</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            During a major sale, seasonal peak or proven high-demand
            period, a business may intentionally make a much larger
            change. The commercial opportunity may matter more than
            preserving a perfectly smooth learning curve.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            The right decision depends on:
          </p>
          <ul className="mt-3 space-y-1.5 text-white/60 text-sm list-disc list-inside">
            <li>Purchase volume</li>
            <li>Campaign stability</li>
            <li>Current profitability</li>
            <li>Audience/demand size</li>
            <li>Stock</li>
            <li>Cash flow</li>
            <li>Creative capacity</li>
            <li>Urgency of the opportunity</li>
          </ul>
        </Reveal>
      </section>

      {/* MEASURE WHAT HAPPENS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure what happens after the increase</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The most important question is not &ldquo;Did I obey
              20%?&rdquo; It is &ldquo;What happened to marginal
              acquisition cost after the extra spend?&rdquo;
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              If spend rises 30% and sales rise 28% while profitability
              remains healthy, the increase may be fine. If spend rises
              20% and sales barely move, respecting the rule did not make
              the scale profitable. Judging that requires looking at true
              profitability rather than a single platform-reported number.
              See{" "}
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
              . It also depends on Meta actually seeing the purchases that
              happen after the increase, which is what{" "}
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>{" "}
              is for. For a closer look at what typically happens to CPA
              and ROAS after a change like this, see{" "}
              <Link href="/resources/meta-ads-performance-changes-after-budget-increase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how Meta ads performance changes after a budget increase
              </Link>
              .
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Use gradual changes when they help you learn. Break the
              pattern when the business case justifies it. Do not mistake
              a platform heuristic for an economic law.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/meta-ads-performance-changes-after-budget-increase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Meta ads performance changes after a budget increase
              </Link>
            </li>
            <li>
              <Link href="/resources/scale-winning-meta-ad-or-duplicate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you scale a winning Meta ad or duplicate it?
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Scale spend without losing sight of profit</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want to scale Meta spend without losing sight of
            marginal CPA and profit, send us an inquiry. We can help plan
            and manage the budget increases.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
