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
  headline: "How to Calculate Your Maximum Profitable CPC for Google Ads",
  description: "Your maximum CPC depends on two numbers: how much you can afford to pay for a customer and how often clicks become customers. The formula, and why conversion rate isn't fixed.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/maximum-profitable-cpc-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Maximum profitable CPC", item: "https://www.attribix.app/resources/maximum-profitable-cpc-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Maximum profitable CPC" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to calculate your maximum profitable CPC for Google Ads
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Your maximum CPC depends on two numbers: how much you can afford
            to pay for a customer and how often clicks become customers.
          </p>
        </Reveal>
      </section>

      {/* BASIC FORMULA */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Basic formula</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>Maximum CPC = allowable CPA × conversion rate</p>
            <p>
              If allowable CPA is $40 and your paid-search conversion rate is
              4%: $40 × 0.04 = $1.60 maximum average CPC at that conversion
              rate.
            </p>
            <p>
              At $2.00 CPC, expected CPA would be roughly $50 if conversion
              rate stays 4%.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CONVERSION RATE NOT FIXED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion rate is not fixed</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Branded traffic may convert at 10%; broad non-brand at 2%. They
              can therefore support very different CPCs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AUTOMATED BIDDING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Automated bidding changes the use of the number</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            You may not set individual CPCs when using Target ROAS/CPA or
            other automated strategies. The calculation is still valuable
            because it tells you whether traffic economics make sense.
          </p>
        </Reveal>
      </section>

      {/* CONTRIBUTION-BASED CPA */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use contribution-based allowable CPA</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Do not calculate from revenue alone. Product margin, shipping
              and refunds determine what a click can actually be worth.
              That's the same math covered in{" "}
              <Link href="/resources/maximum-profitable-cpa-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how to calculate your maximum profitable CPA
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEGMENT BY QUERY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment by query/product</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            One account-wide CPC ceiling is rarely useful across brand,
            non-brand, Shopping and different product margins.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/maximum-profitable-cpa-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How to calculate your maximum profitable CPA
                </Link>
              </li>
              <li>
                <Link href="/resources/good-google-ads-conversion-rate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  What is a good Google Ads conversion rate for ecommerce?
                </Link>
              </li>
              <li>
                <Link href="/resources/google-ads-cpc-suddenly-increased" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Why your Google Ads CPC suddenly increased
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out what a click can actually afford to cost</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google clicks feel expensive but you do not know what the
            business can mathematically afford, contact us. We can
            calculate CPC ceilings from conversion rate and margin.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
