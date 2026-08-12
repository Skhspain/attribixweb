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
  headline: "Meta Ads Campaign Budget vs Ad Set Budget: Which Should You Use?",
  description:
    "Campaign-level and ad-set-level budgeting answer a simple question: who gets to decide where the money goes. Neither is automatically superior.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/campaign-budget-vs-ad-set-budget-meta" },
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
      name: "Campaign vs Ad Set Budget",
      item: "https://www.attribix.app/resources/campaign-budget-vs-ad-set-budget-meta",
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
              { label: "Campaign vs Ad Set Budget" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Campaign Budget vs Ad Set Budget: Which Should You Use?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Campaign-level and ad-set-level budgeting answer a simple
            question: who gets to decide where the money goes?
          </p>
          <p className="mt-4 text-lg text-white/65 max-w-xl leading-relaxed">
            With campaign budget, Meta has more freedom to allocate spend
            across eligible ad sets. With ad set budgets, you reserve a
            specific amount for each segment.
          </p>
          <p className="mt-4 text-lg text-white/65 max-w-xl leading-relaxed">
            Neither is automatically superior.
          </p>
        </Reveal>
      </section>

      {/* CBO */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Campaign budget works well when efficiency matters most</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If several ad sets are trying to achieve the same business
            goal, allowing Meta to move budget toward the strongest
            opportunities can reduce manual management.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            It can also prevent the classic problem of forcing equal
            spend into one strong and one weak audience simply because
            both were given the same daily budget.
          </p>
        </Reveal>
      </section>

      {/* ABO */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ad set budgets are useful when control is the point</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Sometimes you need a specific test or business allocation.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Examples: $500 must be spent in the UK and $500 in the US;
              each product category needs a minimum test budget; a new
              customer segment needs guaranteed delivery; a controlled
              experiment needs more even exposure.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              In those cases, campaign-level optimization can answer a
              different question from the one you intended to test.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CALLING IT A TEST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Be careful when calling budget allocation a test</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If Meta sends 90% of spend to Ad Set A and 10% to Ad Set B, A
            may look like the obvious winner. But you did not give both
            groups equal opportunity. That can be fine for an efficiency
            campaign and poor for a controlled comparison. Reading that
            comparison correctly also depends on Meta actually seeing the
            purchases each ad set produced. See{" "}
            <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Meta CAPI for Shopify
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* CHOOSE BASED ON THE JOB */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Choose based on the job</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Ask: Are we trying to maximize results with the available
              budget? Campaign-level allocation may make sense.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Are we trying to guarantee spend or learn something about
              separate groups? Ad set budgets may be more appropriate. And
              whichever structure you choose, changing the total budget is
              its own decision. See{" "}
              <Link href="/resources/meta-ads-20-percent-budget-rule" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                whether the 20% budget rule is real
              </Link>
              .
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The mistake is choosing a structure because a tutorial says
              CBO or ABO &ldquo;works better&rdquo; without defining what
              better means. Judging either structure honestly also means
              looking at true profitability, not just what one ad set
              reports. See{" "}
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
              .
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
              <Link href="/resources/meta-ads-20-percent-budget-rule" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Increasing Meta ads budget: is the 20% rule real?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Pick a structure that matches the goal</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account has too many campaigns, budgets and
            audience splits to manage clearly, contact us. We can
            simplify the structure around the business objective.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
