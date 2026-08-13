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
  headline: "How Much Should Ecommerce Brands Spend on Existing Customers?",
  description: "There is no fixed percentage of marketing budget that belongs to existing customers. The right investment depends on frequency, value and reach cost.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-much-spend-on-existing-customers-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Spend on existing customers", item: "https://www.attribix.app/resources/how-much-spend-on-existing-customers-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Spend on existing customers" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How much should ecommerce brands spend on existing customers?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no fixed percentage of marketing budget that belongs
            to existing customers. The right investment depends on how
            frequently customers can buy again, how valuable repeat orders
            are and how effectively you can reach them without paid media.
          </p>
        </Reveal>
      </section>

      {/* OWNED CHANNELS CHEAPER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Owned channels are usually cheaper</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Email, SMS and direct communication can often reach known
            customers without paying auction prices for every interaction.
            That does not make them free, but it can reduce the need for
            heavy paid retargeting.
          </p>
        </Reveal>
      </section>

      {/* PAID CAN STILL HELP */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Paid advertising can still help</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>Meta and Google can support:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Product launches</li>
                <li>Replenishment</li>
                <li>Cross-selling</li>
                <li>Seasonal campaigns</li>
                <li>Reactivation</li>
              </ul>
              <p>
                The question is whether those ads create incremental
                purchases or simply claim customers who would return anyway.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPARE MARGINAL RETURN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare marginal return</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If an extra $5,000 on existing-customer retargeting creates
            little change in Shopify repeat revenue, the budget may be
            better spent acquiring new customers.
          </p>
        </Reveal>
      </section>

      {/* DON'T STARVE ACQUISITION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid starving acquisition</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Retention monetizes the base you already have. New-customer
              acquisition expands that base. Budget should follow
              incremental contribution, not a predetermined split.
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
              <Link href="/resources/should-retargeting-include-existing-customers" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Retargeting Campaigns Include Existing Customers?
              </Link>
            </li>
            <li>
              <Link href="/resources/when-should-you-exclude-existing-customers-from-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When Should You Exclude Existing Customers From Meta Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-meta-ads-budget-retargeting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much of Your Meta Ads Budget Should Go to Retargeting?
              </Link>
            </li>
            <li>
              <Link href="/resources/ecommerce-retention-vs-acquisition" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Retention Can Matter More Than Improving Facebook Ads
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether the spend is truly adding value</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If a large share of your paid media is targeting customers who
            already know the brand, send us an inquiry. We can help
            determine whether the spend is truly adding value.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
