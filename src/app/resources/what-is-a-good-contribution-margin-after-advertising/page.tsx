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
  "headline": "What Is a Good Contribution Margin After Advertising?",
  "description": "There is no universal “good” contribution margin after ads because businesses have very different fixed costs, growth goals and repeat-customer economics.",
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
    "@id": "https://www.attribix.app/resources/what-is-a-good-contribution-margin-after-advertising"
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
      "name": "What Is a Good Contribution Margin After...",
      "item": "https://www.attribix.app/resources/what-is-a-good-contribution-margin-after-advertising"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Is a Good Contribution Margin After..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is a Good Contribution Margin After Advertising?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              There is no universal “good” contribution margin after ads because businesses have very different fixed costs, growth goals and repeat-customer economics.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The number must support overhead and profit</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If orders leave 8% contribution after advertising but the business needs 20% of revenue to cover payroll, software, rent and other fixed costs, the model is not sustainable without strong later customer value.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Growth stage matters</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A business may intentionally run lower first-order contribution to acquire customers quickly when retention is proven. A mature cash-focused business may require higher immediate margin.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product mix matters</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            High-margin repeat products can subsidize lower-margin acquisition products. Measure cohort/customer value, not only order-level margin.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build a target from the P&L</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Work backwards:
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Revenue</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>variable product/fulfilment cost</li>
            <li>marketing</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            = contribution available for fixed cost/profit.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Then determine how much contribution the company needs at the desired sales level.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “Good” means enough to fund the business strategy with an acceptable safety margin.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-decide-whether-an-unprofitable-campaign-is" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Decide Whether an Unprofitable Campaign Is Worth Keeping</Link></li>
            <li><Link href="/resources/how-to-calculate-profit-per-order-from-paid-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate Profit per Order From Paid Ads</Link></li>
            <li><Link href="/resources/why-scaling-revenue-can-reduce-profit" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Scaling Revenue Can Reduce Profit</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If campaigns hit ROAS targets but the company-level margin still feels too thin, contact us. We can help translate marketing performance into contribution targets.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
