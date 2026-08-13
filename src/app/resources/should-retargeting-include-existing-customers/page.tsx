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
  headline: "Should Retargeting Campaigns Include Existing Customers?",
  description: "Sometimes. The answer depends on what the campaign is selling.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/should-retargeting-include-existing-customers" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Retargeting existing customers", item: "https://www.attribix.app/resources/should-retargeting-include-existing-customers" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Retargeting existing customers" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should retargeting campaigns include existing customers?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Sometimes. The answer depends on what the campaign is selling.
          </p>
        </Reveal>
      </section>

      {/* EXCLUDE WHEN IRRELEVANT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Exclude when the purchase makes the ad irrelevant</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Showing a &quot;Buy your first mattress&quot; ad to someone who
            purchased yesterday wastes money and creates a poor experience.
            Use recent-purchaser exclusions where the product has a long
            replacement cycle.
          </p>
        </Reveal>
      </section>

      {/* INCLUDE WHEN REPEAT MAKES SENSE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Include when repeat purchase makes sense</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Consumables, fashion, accessories and product launches can
              create legitimate reasons to advertise to past customers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEPARATE REPORTING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate the reporting</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Existing customers are likely to convert more easily than new
            prospects. Mixing both groups can make CPA/ROAS look stronger
            and hide acquisition performance.
          </p>
        </Reveal>
      </section>

      {/* MATCH CREATIVE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the creative</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A customer should not receive the same &quot;Who are
              we?&quot; introduction as someone who has never purchased. Use
              loyalty, new products, complementary items or replenishment
              messages instead. The decision should follow customer
              relevance, not a blanket &quot;always exclude
              purchasers&quot; rule.
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
              <Link href="/resources/when-should-you-exclude-existing-customers-from-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When Should You Exclude Existing Customers From Meta Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-retarget-website-visitors-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should You Retarget Website Visitors on Meta Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-meta-ads-budget-retargeting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much of Your Meta Ads Budget Should Go to Retargeting?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-spend-on-existing-customers-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much Should Ecommerce Brands Spend on Existing Customers?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know which group is driving results</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your retargeting campaigns blend new and existing customers
            and you cannot tell which group is driving results, send us an
            inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
