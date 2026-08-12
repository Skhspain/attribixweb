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
  "headline": "New Customers vs Returning Customers: Which Should You Optimize For?",
  "description": "A healthy ecommerce business usually needs both.",
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
    "@id": "https://www.attribix.app/resources/new-customers-vs-returning-customers-which-should-you"
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
      "name": "New Customers vs Returning Customers",
      "item": "https://www.attribix.app/resources/new-customers-vs-returning-customers-which-should-you"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "New Customers vs Returning Customers" }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            New Customers vs Returning Customers: Which Should You Optimize For?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A healthy ecommerce business usually needs both. New customers expand the base; returning customers make that acquisition more valuable.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Acquisition without retention is expensive</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If customers buy once and never return in a category where repeats should be common, you must keep paying to replace them.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Retention without acquisition eventually stalls</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A loyal base can produce strong short-term ROAS while the number of new customers quietly falls.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Set separate metrics</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            For acquisition:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>new customers</li>
            <li>new-customer CPA</li>
            <li>first-order contribution</li>
            <li>new-customer ROAS</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            For retention:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>repeat rate</li>
            <li>repeat contribution</li>
            <li>cohort LTV</li>
            <li>time to second order</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Let product category decide the balance</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A mattress store naturally relies more on new-customer acquisition than a coffee subscription. Do not force every business into a 50/50 philosophy.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The key is to know which revenue is growth and which is monetization of customers you already acquired.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-increase-repeat-purchase-rate-without-constant" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Increase Repeat Purchase Rate Without Constant Discounts</Link></li>
            <li><Link href="/resources/why-returning-customer-revenue-can-make-your-roas-look" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Returning Customer Revenue Can Make Your ROAS Look Better Than It Is</Link></li>
            <li><Link href="/resources/why-your-shopify-store-gets-customers-but-few-repeat" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Shopify Store Gets Customers but Few Repeat Purchases</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the flow is pulling its weight?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta and Google report total sales but you cannot see whether the business is acquiring enough new customers, send us an inquiry. We can separate the two views.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
