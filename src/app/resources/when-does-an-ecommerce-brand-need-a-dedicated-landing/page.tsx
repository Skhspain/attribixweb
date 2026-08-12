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
  "headline": "When Does an Ecommerce Brand Need a Dedicated Landing Page?",
  "description": "Build a dedicated landing page when the existing website cannot continue the campaign's message clearly enough.",
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
    "@id": "https://www.attribix.app/resources/when-does-an-ecommerce-brand-need-a-dedicated-landing"
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
      "name": "When Does an Ecommerce Brand Need a...",
      "item": "https://www.attribix.app/resources/when-does-an-ecommerce-brand-need-a-dedicated-landing"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "When Does an Ecommerce Brand Need a..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When Does an Ecommerce Brand Need a Dedicated Landing Page?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Build a dedicated landing page when the existing website cannot continue the campaign&apos;s message clearly enough.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Strong reasons include</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>a specific audience/use case</li>
            <li>a bundle available only in the campaign</li>
            <li>a product requiring education</li>
            <li>a comparison angle</li>
            <li>a lead-generation offer</li>
            <li>a new product launch</li>
            <li>a campaign targeting one objection</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Weak reason</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              “We heard landing pages convert better” is not enough. Duplicating a perfectly good product page into a page builder adds maintenance and can fragment SEO/tracking.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider traffic volume</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A dedicated page takes design, copy and testing effort. A campaign receiving 100 visits per month may not generate enough evidence to justify complex page experimentation.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep measurement consistent</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Purchase events, UTMs, consent and attribution should work identically on dedicated pages. Do not create a conversion test and accidentally change tracking at the same time.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A landing page should solve a communication problem, not exist because landing pages are fashionable.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-your-landing-page-gets-clicks-but-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Landing Page Gets Clicks but No Sales</Link></li>
            <li><Link href="/resources/landing-page-vs-product-page-for-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Landing Page vs Product Page for Ecommerce Ads</Link></li>
            <li><Link href="/resources/what-is-a-good-landing-page-conversion-rate-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Landing Page Conversion Rate for Ecommerce?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If a campaign has strong ad engagement but the existing Shopify page does not continue the story, contact us. We can determine whether a dedicated page is justified.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
