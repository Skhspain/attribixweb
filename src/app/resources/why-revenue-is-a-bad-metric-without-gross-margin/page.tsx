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
  "headline": "Why Revenue Is a Bad Metric Without Gross Margin",
  "description": "Revenue tells you how much customers paid.",
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "author": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.attribix.app/assets/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/why-revenue-is-a-bad-metric-without-gross-margin"
  }
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.attribix.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.attribix.app/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Why Revenue Is a Bad Metric Without Gross Margin",
      "item": "https://www.attribix.app/resources/why-revenue-is-a-bad-metric-without-gross-margin"
    }
  ]
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Revenue Is a Bad Metric Without Gross Margin" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Revenue Is a Bad Metric Without Gross Margin
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Revenue tells you how much customers paid. It says nothing about how much value the business kept.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That is why “we generated $1 million from ads” can be impressive or disastrous depending on product cost and acquisition expense.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare two products</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Product A sells for $100 with $70 gross profit.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Product B sells for $100 with $25 gross profit.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A $30 acquisition cost leaves Product A substantial room and pushes Product B below first-order profitability before other variable costs.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            The revenue is identical. The advertising opportunity is not.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Catalogue mix can distort growth</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A campaign can increase total sales by shifting spend toward low-margin bestsellers. ROAS and revenue rise while contribution profit stagnates.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That is why product-level margin should inform Google Shopping/PMax structure and Meta product priorities where possible.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use contribution margin for decisions</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Gross margin is a strong starting point, but include payment, fulfilment, shipping subsidy and returns when they materially vary per order.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Revenue is a useful scale measure. Margin tells you how much of that scale is available to pay for marketing and the rest of the business.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/roas-vs-profit-why-high-roas-doesn-t-always-mean-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">ROAS vs Profit: Why High ROAS Doesn&apos;t Always Mean More Profit</Link></li>
            <li><Link href="/resources/what-is-a-good-cpa-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good CPA for Ecommerce?</Link></li>
            <li><Link href="/resources/new-customer-roas-vs-total-roas-which-matters-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">New Customer ROAS vs Total ROAS: Which Matters More?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your advertising reports are revenue-heavy but product margins vary substantially, send us an inquiry. We can help connect campaign decisions to contribution profit.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
