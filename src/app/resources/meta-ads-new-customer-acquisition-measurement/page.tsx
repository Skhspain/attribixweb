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
  headline: "Meta Ads New Customer Acquisition: How Should You Measure It?",
  description:
    "Platform ROAS can look strong while a campaign mostly reaches existing customers. How to separate new-customer acquisition from total attributed revenue using Shopify's own customer data.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/meta-ads-new-customer-acquisition-measurement",
  },
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
      name: "New Customer Acquisition Measurement",
      item: "https://www.attribix.app/resources/meta-ads-new-customer-acquisition-measurement",
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
              { label: "New Customer Acquisition" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads New Customer Acquisition: How Should You Measure It?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Platform ROAS can look strong while a campaign mostly reaches
            people who already know and buy from you. That is why ecommerce
            brands should separate the question &ldquo;Did Meta get credit
            for revenue?&rdquo; from &ldquo;Did Meta help us acquire new
            customers?&rdquo;
          </p>
        </Reveal>
      </section>

      {/* CUSTOMER STATUS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with customer status in Shopify</h2>
          <p className="text-white/60 leading-relaxed text-sm mb-4">
            Shopify is usually a better place to determine whether an order
            came from a first-time or returning customer. Use that
            distinction to calculate metrics such as:
          </p>
          <ul className="space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>New-customer CPA</li>
            <li>New-customer revenue</li>
            <li>New-customer ROAS</li>
            <li>First-order contribution margin</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm mt-4">
            Meta&apos;s platform reporting can still be useful for
            optimization, but it should not be the only source for deciding
            whether{" "}
            <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              acquisition
            </Link>{" "}
            is expanding the customer base.
          </p>
        </Reveal>
      </section>

      {/* RETARGETING INFLATE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Retargeting can inflate the picture</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A returning customer who clicks a Meta ad before reordering may
              be attributed to the campaign. That revenue is real, but it is
              not the same business achievement as acquiring a completely
              new buyer, one of several reasons{" "}
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify and Meta sales numbers don&apos;t match
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* NEW CUSTOMER ROAS LOWER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">New customer ROAS may be lower and still be better</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Suppose total{" "}
            <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              ROAS
            </Link>{" "}
            is 600% because many repeat buyers convert cheaply. A
            prospecting campaign acquiring new customers at 300% ROAS could
            be strategically more valuable if those buyers have strong
            repeat purchase behaviour. This is where lifetime value matters.
            First-order profitability and long-term customer value should be
            evaluated separately.
          </p>
        </Reveal>
      </section>

      {/* MEASURE THE RIGHT QUESTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure the question you are trying to answer</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If the goal is monthly cash flow, total contribution may
              matter most. If the goal is growth, new-customer acquisition
              becomes critical. A single ROAS number cannot answer both.
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
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta sales numbers don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-lead-ads-vs-website-conversions" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Lead Ads vs website conversions for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution software
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure how much revenue is genuinely new customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta reports strong revenue but you do not know how much of
            it comes from genuinely new customers, contact us. We can help
            connect ad performance to Shopify customer data and acquisition
            economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
