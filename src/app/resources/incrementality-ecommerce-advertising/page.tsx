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
  headline: "What Is Incrementality in Ecommerce Advertising?",
  description:
    "Incrementality asks a harder question than attribution: how many sales happened because of the advertising that would not have happened otherwise.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/incrementality-ecommerce-advertising" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Incrementality explained", item: "https://www.attribix.app/resources/incrementality-ecommerce-advertising" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Incrementality explained" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What is incrementality in ecommerce advertising?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Incrementality asks a harder question than attribution: how many
            sales happened because of the advertising that would not have
            happened otherwise? Attribution asks which interaction gets
            credit. Incrementality tries to estimate causation.
          </p>
        </Reveal>
      </section>

      {/* WHY IT MATTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why the distinction matters</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              Suppose Meta retargeting reports 1,000 purchases. If 800 of
              those customers would have bought anyway, the campaign&apos;s
              incremental contribution is much smaller than the attributed
              number.
            </p>
            <p>
              The reverse can happen too. A Meta ad may introduce a customer
              who later buys through Google, causing last-click reporting to
              undervalue Meta&apos;s incremental role.
            </p>
          </div>
        </Reveal>
      </section>

      {/* HOW MEASURED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">How incrementality is measured</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Depending on scale and platform capabilities, approaches can include:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>holdout groups;</li>
                <li>geographic tests;</li>
                <li>conversion-lift studies;</li>
                <li>controlled budget changes;</li>
                <li>causal modelling.</li>
              </ul>
              <p>
                None is perfect, and smaller advertisers may not have enough
                volume for sophisticated tests.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use attribution for operations, incrementality for bigger decisions</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              Platforms need attribution signals to optimize campaigns.
              Businesses need a broader view when deciding whether an
              entire channel or program deserves budget.
            </p>
            <p>
              Incrementality does not replace attribution. It answers a
              different question, one explored further in{" "}
              <Link href="/resources/attribution-vs-incrementality" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                attribution vs incrementality
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/attribution-vs-incrementality" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Attribution vs incrementality: what&apos;s the difference?
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-branded-search-over-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does Google Ads over-attribute branded searches?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-retargeting-taking-credit-for-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta retargeting is taking credit for too many sales
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out what advertising actually adds</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your platforms claim lots of revenue but you are unsure how
            much advertising actually adds to total Shopify sales, send us
            an inquiry. We can help frame the right measurement approach.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
