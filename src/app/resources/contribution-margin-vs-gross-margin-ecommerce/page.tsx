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
  headline: "Contribution Margin vs Gross Margin for Ecommerce Advertising",
  description: "Gross margin usually subtracts cost of goods from revenue. Contribution margin goes further by subtracting the variable costs that rise when you make the sale. For advertising decisions, contribution is the more useful number.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/contribution-margin-vs-gross-margin-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Contribution vs gross margin", item: "https://www.attribix.app/resources/contribution-margin-vs-gross-margin-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Contribution vs gross margin" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Contribution margin vs gross margin for ecommerce advertising
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Gross margin usually subtracts cost of goods from revenue.
            Contribution margin goes further by subtracting variable costs
            that rise when you make the sale. For advertising decisions,
            contribution is often the more useful number.
          </p>
        </Reveal>
      </section>

      {/* EXAMPLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Selling price: $100</li>
              <li>COGS: $45</li>
            </ul>
            <p>Gross margin = $55 / 55%.</p>
            <p>Now subtract:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Payment fee: $3</li>
              <li>Fulfilment: $5</li>
              <li>Average shipping subsidy: $7</li>
              <li>Expected returns allowance: $5</li>
            </ul>
            <p>Contribution before ads = $35 / 35%.</p>
            <p>
              A gross-margin break-even ROAS would suggest 1.82x.
              Contribution says closer to 2.86x before advertising reaches
              zero contribution.
            </p>
          </div>
        </Reveal>
      </section>

      {/* WHICH COSTS MATTER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Decide which variable costs matter</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Not every business includes the same lines. The key is
              consistency and understanding which costs increase with the
              order.
            </p>
          </Reveal>
        </div>
      </section>

      {/* USE CONTRIBUTION FOR CPA */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use contribution for allowable CPA</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If only $35 remains before ads, paying $50 for the order is not
            first-order profitable regardless of the 55% gross margin
            headline. The same principle drives{" "}
            <Link href="/resources/maximum-profitable-cpa-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how to calculate your maximum profitable CPA
            </Link>
            .
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
                <Link href="/resources/gross-margin-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How gross margin changes your break-even ROAS
                </Link>
              </li>
              <li>
                <Link href="/resources/how-to-calculate-profit-per-order-from-paid-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How to calculate profit per order from paid ads
                </Link>
              </li>
              <li>
                <Link href="/resources/what-is-a-good-contribution-margin-after-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  What is a good contribution margin after advertising?
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Calculate a more realistic threshold</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ROAS targets are based only on gross margin and ignore
            fulfilment or shipping, contact us. We can calculate a more
            realistic contribution threshold.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
