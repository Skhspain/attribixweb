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
  headline: "Should You Advertise Your Best Seller or Highest-Margin Product?",
  description: "The best seller has proven demand. The highest-margin product gives you more room to buy customers. How to classify products by role and allocate marketing accordingly.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/advertise-bestseller-or-high-margin-product" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Best seller vs high margin", item: "https://www.attribix.app/resources/advertise-bestseller-or-high-margin-product" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Best seller vs high margin" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should you advertise your best seller or highest-margin product?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The best seller has proven demand. The highest-margin product
            gives you more room to buy customers. Sometimes the same product
            is both; often it is not.
          </p>
        </Reveal>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Best sellers reduce demand risk</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            They usually have stronger reviews, conversion history and
            customer recognition. Meta and Google can learn from more
            purchase signals.
          </p>
        </Reveal>
      </section>

      {/* HIGH MARGIN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">High-margin products create acquisition room</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A slower-selling item with twice the contribution per order may
              support a higher CPA and produce more profit even at lower
              ROAS. The ceiling this sets is covered in more depth in{" "}
              <Link href="/resources/maximum-profitable-cpa-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how to calculate your maximum profitable CPA
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* CUSTOMER VALUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider customer value</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A low-margin entry product may acquire customers who later buy
            high-margin refills. A high-margin one-off product may have
            little repeat value.
          </p>
        </Reveal>
      </section>

      {/* TEST PRODUCT ROLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test product role</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Classify products as:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Acquisition</li>
                <li>Profit</li>
                <li>Retention</li>
                <li>Bundle/add-on</li>
                <li>Strategic launch</li>
              </ul>
              <p>
                Then allocate marketing with the role in mind rather than
                asking one product to maximize every metric.
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
              <Link href="/resources/scale-high-revenue-or-high-margin-products-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Revenue vs margin: which products should you scale with ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-is-a-good-contribution-margin-after-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is a good contribution margin after advertising?
              </Link>
            </li>
            <li>
              <Link href="/resources/product-bundling-vs-upselling-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Product bundling vs upselling: which is better for ecommerce?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Put margin into your campaign priorities</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ad platforms naturally push best sellers but you are
            unsure whether they are the most profitable products to scale,
            contact us. We can incorporate margin into campaign priorities.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
