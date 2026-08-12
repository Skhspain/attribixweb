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
  headline: "Meta Ads Cost Per Purchase Increasing: What to Check",
  description:
    "A rising cost per purchase tells you the economics changed, not where. How to split CPA into CPC, conversion rate and tracking to find the cause.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-cost-per-purchase-increasing" },
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
      name: "CPA Increasing",
      item: "https://www.attribix.app/resources/meta-ads-cost-per-purchase-increasing",
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
              { label: "CPA Increasing" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Cost Per Purchase Increasing: What to Check
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A rising cost per purchase tells you the economics changed. It
            does not tell you where.
          </p>
          <p className="mt-4 text-lg text-white/65 max-w-xl leading-relaxed">
            CPA is the result of several moving parts: the cost of getting
            traffic, the quality of that traffic, the store&apos;s
            conversion rate and the accuracy of your purchase measurement.
          </p>
        </Reveal>
      </section>

      {/* SPLIT CPA */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Split CPA into two questions</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A simplified ecommerce relationship is:
          </p>
          <p className="mt-4 text-white/80 leading-relaxed text-sm font-mono">
            Cost per purchase ≈ cost per click ÷ purchase conversion rate
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            That immediately gives you somewhere to look.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            If CPC increased while conversion rate stayed stable, auction
            or creative efficiency may be the main issue.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            If CPC stayed stable but the Shopify conversion rate fell, the
            website, offer, traffic mix or checkout deserves more
            attention.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            If both stayed roughly stable but Meta suddenly reports fewer
            purchases, investigate tracking and attribution. See{" "}
            <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Meta CAPI for Shopify
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* CPM AND CTR */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check CPM and CTR separately</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              CPC can rise because: CPM increased; CTR declined; both
              happened.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Those are different problems.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Higher CPM may reflect competition, geography, seasonality
              or audience constraints. See{" "}
              <Link href="/resources/why-is-meta-ads-cpm-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Meta ads CPM is so high
              </Link>
              . Lower CTR may indicate creative fatigue or weaker
              relevance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LOOK AT SHOPIFY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at Shopify, not just Ads Manager</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If Meta CPA rises 50% but Shopify order volume and total
            revenue remain healthy, do not assume marketing performance
            collapsed. Cross-channel attribution can move, especially if
            customers are interacting with Google, email or direct visits
            before purchasing. See{" "}
            <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              why Shopify and Meta ads show different sales numbers
            </Link>
            .
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Conversely, if both Meta-reported purchases and Shopify sales
            are falling, the decline is more likely to be real.
          </p>
        </Reveal>
      </section>

      {/* CHECK RECENT CHANGES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check recent changes</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Ask what changed before CPA moved:
            </p>
            <ul className="mt-3 space-y-1.5 text-white/60 text-sm list-disc list-inside">
              <li>Budget increase</li>
              <li>New market</li>
              <li>Promotion ended</li>
              <li>Product price changed</li>
              <li>Creative concentration</li>
              <li>Landing-page deployment</li>
              <li>Shipping cost</li>
              <li>Tracking implementation</li>
            </ul>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              CPA is an outcome. Diagnose the variables underneath it
              before deciding which lever to pull.
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
              <Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta ads ROAS dropped suddenly? Ads, website or tracking
              </Link>
            </li>
            <li>
              <Link href="/resources/why-is-meta-ads-cpm-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why is your Meta ads CPM so high?
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta ads show different sales numbers
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out what&apos;s actually driving CPA up</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta CPA is climbing and you cannot identify why, send
            us an inquiry. We can review the campaign, store funnel and
            measurement together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
