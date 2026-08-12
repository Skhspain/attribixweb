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
  "headline": "Why Returning Customer Revenue Can Make Your ROAS Look Better Than It Is",
  "description": "Returning customers often convert at a lower marketing cost because they already know and trust the brand.",
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
    "@id": "https://www.attribix.app/resources/why-returning-customer-revenue-can-make-your-roas-look"
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
      "name": "Why Returning Customer Revenue Can Make Your...",
      "item": "https://www.attribix.app/resources/why-returning-customer-revenue-can-make-your-roas-look"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Returning Customer Revenue Can Make Your..." }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Returning Customer Revenue Can Make Your ROAS Look Better Than It Is
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Returning customers often convert at a lower marketing cost because they already know and trust the brand. If ad platforms claim those orders, total ROAS can look stronger than the economics of acquiring new customers.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Meta spends $10,000 and reports $60,000 revenue: 600% ROAS.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            If $35,000 of that revenue comes from repeat buyers who were likely to return anyway, the headline number tells you little about acquisition efficiency.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why platforms still claim it</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A returning customer can click an ad before reordering. Under the platform&apos;s attribution model, the conversion legitimately belongs in the report.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate new and returning revenue</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Use Shopify customer data to compare:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>total ROAS</li>
            <li>new-customer ROAS</li>
            <li>new-customer CPA</li>
            <li>repeat revenue</li>
            <li>blended marketing efficiency</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not dismiss repeat marketing</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Ads to existing customers can still create incremental value, especially for launches or replenishment. The point is measurement clarity, not excluding them from all campaigns.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A business can have excellent total ROAS and weak new-customer growth at the same time.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/new-customers-vs-returning-customers-which-should-you" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">New Customers vs Returning Customers: Which Should You Optimize For?</Link></li>
            <li><Link href="/resources/how-to-increase-repeat-purchase-rate-without-constant" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Increase Repeat Purchase Rate Without Constant Discounts</Link></li>
            <li><Link href="/resources/why-your-shopify-store-gets-customers-but-few-repeat" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Shopify Store Gets Customers but Few Repeat Purchases</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this measured properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ROAS looks strong but customer growth feels slow, contact us. We can help separate returning-customer revenue from acquisition performance.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
