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
  headline: "Should Shopify Stores Run Meta Ads in Multiple Countries?",
  description: "Adding countries to Meta can grow your audience or quietly hurt margin. What to check before expanding, and when to separate markets instead of combining them.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-multiple-countries-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Meta Ads in multiple countries", item: "https://www.attribix.app/resources/meta-ads-multiple-countries-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Meta Ads in multiple countries" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify stores run Meta Ads in multiple countries?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Yes, but only when the business can actually serve those countries
            competitively. Adding more countries to Meta can increase
            audience size and create new demand. It can also introduce
            higher shipping costs, weaker conversion rates, different
            customer expectations and more complex reporting.
          </p>
        </Reveal>
      </section>

      {/* COMMERCIAL BASICS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check the commercial basics first</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Before launching a new country, review:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Shipping cost</li>
              <li>Delivery time</li>
              <li>Duties/taxes</li>
              <li>Local currency</li>
              <li>Returns</li>
              <li>Payment methods</li>
              <li>Product demand</li>
              <li>Customer support</li>
            </ul>
            <p>
              A campaign can have excellent ad metrics and still fail
              because the post-click offer is poor for that market.
            </p>
          </div>
        </Reveal>
      </section>

      {/* DON'T ASSUME */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t assume countries behave the same</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A creative that works in the UK may perform very differently
              in Germany, Spain or the US. CPM, AOV, competition and
              conversion rate can all change.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEPARATE MARKETS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate markets when the economics differ</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              If one country has 60% margin after shipping and another has
              35%, combining them under one target can hide weak
              profitability.
            </p>
            <p>
              You may want separate budgets, landing pages or campaigns
              when markets behave materially differently. That's a
              structural question covered in more depth in{" "}
              <Link href="/resources/one-meta-campaign-multiple-countries-vs-separate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                one Meta campaign for multiple countries or separate campaigns
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>

      {/* EXPAND DELIBERATELY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Expand deliberately</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Start with countries where the product, logistics and demand
              make sense. Use enough budget to get a real read, then
              evaluate Shopify conversion and contribution, not just Meta
              ROAS.
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
              <Link href="/resources/one-meta-campaign-multiple-countries-vs-separate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                One Meta campaign for multiple countries or separate campaigns?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-choose-which-country-to-expand-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to choose which country to expand ecommerce ads into next
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-ready-for-international-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When is a Shopify store ready to advertise internationally?
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure which markets deserve budget first?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are ready to expand Meta Ads into new countries but are
            unsure which markets deserve budget first, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
