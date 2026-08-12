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
  "headline": "ROAS vs Profit: Why High ROAS Doesn't Always Mean More Profit",
  "description": "ROAS measures revenue returned for each unit of ad spend.",
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
    "@id": "https://www.attribix.app/resources/roas-vs-profit-why-high-roas-doesn-t-always-mean-more"
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
      "name": "ROAS vs Profit",
      "item": "https://www.attribix.app/resources/roas-vs-profit-why-high-roas-doesn-t-always-mean-more"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "ROAS vs Profit" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            ROAS vs Profit: Why High ROAS Doesn&apos;t Always Mean More Profit
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              ROAS measures revenue returned for each unit of ad spend. Profit measures what remains after costs. They are related, but they are not the same.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Scale can make lower ROAS more profitable</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Campaign A spends $2,000 at 800% ROAS and produces $16,000 revenue. Campaign B spends $20,000 at 450% ROAS and produces $90,000 revenue.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            If both are comfortably above the business&apos;s break-even level, Campaign B may generate far more contribution profit despite the lower ROAS.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Margin changes everything</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A 400% ROAS can be excellent on a 70%-margin product and terrible on a 20%-margin product.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">ROAS can reward underspending</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The easiest conversions often come first. Keeping budgets artificially low can preserve a beautiful percentage while leaving profitable customer demand untouched.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use a hierarchy of metrics</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Campaign ROAS helps with optimization. Contribution profit helps decide whether scale creates value. Cash flow, inventory and LTV help decide how aggressively to grow.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Do not ask “What is the highest ROAS we can get?” Ask “What spend level produces the most acceptable profit at our growth target?”
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-revenue-is-a-bad-metric-without-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Revenue Is a Bad Metric Without Gross Margin</Link></li>
            <li><Link href="/resources/what-is-a-good-cpa-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good CPA for Ecommerce?</Link></li>
            <li><Link href="/resources/break-even-cpa-explained-for-shopify-stores" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Break-Even CPA Explained for Shopify Stores</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if ROAS is telling the full story?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your team celebrates ROAS but struggles to connect it to actual profit, contact us. We can set marketing targets around the economics that matter.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
