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
  headline: "Revenue vs Margin: Which Products Should You Scale With Ads?",
  description: "Revenue tells you which products sell a lot. Margin tells you how much room those sales create for advertising and the business. What to check before scaling spend into a SKU.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/scale-high-revenue-or-high-margin-products-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Revenue vs margin scaling", item: "https://www.attribix.app/resources/scale-high-revenue-or-high-margin-products-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Revenue vs margin scaling" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Revenue vs margin: which products should you scale with ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Revenue tells you which products sell a lot. Margin tells you
            how much room those sales create for advertising and the
            business.
          </p>
        </Reveal>
      </section>

      {/* WEAK SCALE CANDIDATE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A high-revenue SKU can be a weak scale candidate</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A $1 million product line at 15% contribution may leave less
            profit than a $500,000 line at 50%.
          </p>
        </Reveal>
      </section>

      {/* MARGINAL CONTRIBUTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Advertising should consider marginal contribution</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>For each product or category, know:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Price</li>
                <li>Gross/contribution margin</li>
                <li>Conversion rate</li>
                <li>AOV/bundle effects</li>
                <li>Repeat purchase value</li>
                <li>Allowable CPA</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEMAND STILL MATTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search demand still matters</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A product can be incredibly profitable per unit and have almost
            no scalable market. Margin sets the ceiling you can pay; demand
            determines how much opportunity exists.
          </p>
        </Reveal>
      </section>

      {/* VALUE-BASED STRUCTURE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use value-based structure</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Google product groups and Meta creative/budget priorities can
                reflect business economics where practical. Do not rely only
                on platform revenue values if products differ materially in
                margin.
              </p>
              <p>
                Scale the products that create the best combination of
                demand, conversion and contribution, not the largest revenue
                number in isolation.
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
              <Link href="/resources/advertise-bestseller-or-high-margin-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you advertise your best seller or highest-margin product?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-is-a-good-contribution-margin-after-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is a good contribution margin after advertising?
              </Link>
            </li>
            <li>
              <Link href="/resources/when-to-scale-ad-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Your ads are profitable: when should you increase the budget?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Realign campaign priorities around contribution</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your highest-spend products are not your highest-profit
            products, send us an inquiry. We can help realign campaign
            priorities around contribution.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
