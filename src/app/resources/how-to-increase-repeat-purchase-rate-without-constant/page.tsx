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
  "headline": "How to Increase Repeat Purchase Rate Without Constant Discounts",
  "description": "Discounts can create a second order quickly, but a retention strategy built entirely on cheaper prices becomes difficult to sustain.",
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
    "@id": "https://www.attribix.app/resources/how-to-increase-repeat-purchase-rate-without-constant"
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
      "name": "How to Increase Repeat Purchase Rate Without...",
      "item": "https://www.attribix.app/resources/how-to-increase-repeat-purchase-rate-without-constant"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Increase Repeat Purchase Rate Without..." }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Increase Repeat Purchase Rate Without Constant Discounts
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Discounts can create a second order quickly, but a retention strategy built entirely on cheaper prices becomes difficult to sustain.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Give customers a reason to need you again</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            For replenishable products, make timing easy with reminders or subscriptions. For durable products, use complementary items, accessories or new use cases.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Improve the first experience</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Fast delivery, accurate expectations, helpful packaging and responsive support are retention marketing. A customer disappointed by the first order is expensive to win back.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Personalize around what they bought</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A customer who purchased running shoes should not receive the same follow-up as someone who bought a winter jacket. Relevant recommendations feel like service rather than promotion.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use loyalty carefully</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Rewards can reinforce repeat behaviour without giving every customer a blanket percentage discount. The value must be easy to understand.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Track cohorts</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Measure whether newer customers are repeating more often at 30/60/90/180 days. That tells you whether retention is improving, rather than relying on attributed email revenue.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/new-customers-vs-returning-customers-which-should-you" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">New Customers vs Returning Customers: Which Should You Optimize For?</Link></li>
            <li><Link href="/resources/why-your-shopify-store-gets-customers-but-few-repeat" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Shopify Store Gets Customers but Few Repeat Purchases</Link></li>
            <li><Link href="/resources/what-is-a-good-repeat-purchase-rate-for-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Repeat Purchase Rate for Shopify?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clearer read on retention?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your acquisition economics depend on repeat purchases but retention is driven mainly by discounting, contact us. We can help connect customer value to marketing decisions.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
