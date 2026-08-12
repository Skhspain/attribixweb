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
  headline: "Why Returning Customers Convert Better Than New Visitors",
  description: "Returning customers already solved several problems that slow a first purchase. Here's why that distorts channel ROAS, and how to segment new-customer and repeat-customer performance separately.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/returning-customers-convert-better-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Returning customer conversion", item: "https://www.attribix.app/resources/returning-customers-convert-better-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Returning customer conversion" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why returning customers convert better than new visitors
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Returning customers already solved several problems that slow a
            first purchase. They know the brand, understand the product
            quality and have fewer reasons to worry about delivery or
            payment.
          </p>
        </Reveal>
      </section>

      {/* TRUST ESTABLISHED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Trust is already established</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A first-time visitor has to answer: Is this store legitimate?
            Will the product match the photos? What happens if I return it?
            A repeat buyer has real experience.
          </p>
        </Reveal>
      </section>

      {/* FAMILIARITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Familiarity shortens the journey</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Existing customers may search your brand directly, click email
              or respond to retargeting. That makes their sessions look
              unusually efficient compared with cold acquisition.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DISTORT ROAS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">This can distort channel ROAS</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If Meta or Google receives credit for many returning-customer
            purchases, platform ROAS can look stronger without representing
            new customer acquisition.
          </p>
        </Reveal>
      </section>

      {/* SEGMENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment the business</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>Track:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>new-customer conversion rate;</li>
                <li>repeat conversion rate;</li>
                <li>new-customer CPA;</li>
                <li>repeat purchase frequency;</li>
                <li>revenue by customer type.</li>
              </ul>
              <p>
                Improving retention is valuable, but do not use
                returning-customer efficiency as the benchmark you expect
                cold prospecting to match.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/new-customer-roas-vs-total-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                New customer ROAS vs total ROAS: which matters more?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-retargeting-taking-credit-for-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta retargeting is taking credit for too many sales
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-new-customer-acquisition-measurement" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads new customer acquisition: how should you measure it?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Separate acquisition performance from retention performance</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ad platforms report strong ROAS but you do not know how
            much comes from repeat customers, send us an inquiry. We can
            separate acquisition from retention.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
