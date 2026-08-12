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
  "headline": "LTV vs CAC for Ecommerce: What Should You Aim For?",
  "description": "LTV:CAC compares the value a customer generates over time with the cost to acquire that customer.",
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
    "@id": "https://www.attribix.app/resources/ltv-vs-cac-for-ecommerce-what-should-you-aim-for"
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
      "name": "LTV vs CAC for Ecommerce",
      "item": "https://www.attribix.app/resources/ltv-vs-cac-for-ecommerce-what-should-you-aim-for"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "LTV vs CAC for Ecommerce" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            LTV vs CAC for Ecommerce: What Should You Aim For?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              LTV:CAC compares the value a customer generates over time with the cost to acquire that customer. It is useful because first-order ROAS can make high-retention businesses look worse than they really are.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not blindly chase a universal ratio</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A common benchmark ratio may be quoted online, but the appropriate relationship depends on cash flow, payback time, margin, retention certainty and growth stage.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A business with a long payback period can run out of cash even if theoretical lifetime value is high.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use contribution LTV, not revenue LTV</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If a customer spends $500 over a lifetime but products have 30% contribution margin, the business does not have $500 available to recover acquisition cost.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Make LTV evidence-based</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Do not assume every new customer will behave like your best long-term cohort. Use actual retention by acquisition period, product and channel.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pair ratio with payback</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Two businesses can both have strong LTV:CAC. One recovers acquisition in 30 days and the other in 18 months. Their ability to scale is very different.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Use LTV:CAC to widen the view beyond first order, but keep the assumptions conservative enough to make real budget decisions.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-last-click-attribution-undervalues-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Last-Click Attribution Undervalues Meta Ads</Link></li>
            <li><Link href="/resources/how-to-calculate-cac-for-a-shopify-store" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate CAC for a Shopify Store</Link></li>
            <li><Link href="/resources/why-meta-view-through-attribution-can-overvalue-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Meta View-Through Attribution Can Overvalue Meta Ads</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if ROAS is telling the full story?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If first-order ROAS looks weak but your customers reorder frequently, send us an inquiry. We can help connect acquisition spend to actual customer value.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
