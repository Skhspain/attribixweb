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
  "headline": "How Long Should an Ecommerce Landing Page Be?",
  "description": "A landing page should be long enough to answer the questions preventing the purchase and no longer.",
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
    "@id": "https://www.attribix.app/resources/how-long-should-an-ecommerce-landing-page-be"
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
      "name": "How Long Should an Ecommerce Landing Page Be",
      "item": "https://www.attribix.app/resources/how-long-should-an-ecommerce-landing-page-be"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Long Should an Ecommerce Landing Page Be" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Long Should an Ecommerce Landing Page Be?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A landing page should be long enough to answer the questions preventing the purchase and no longer.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Simple products can be short</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If customers already understand the category and the product is inexpensive, a clear hero, proof, key benefits and purchase section may be enough.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Complex products need more explanation</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Premium, unfamiliar or technical products may need:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>demonstrations</li>
              <li>comparison</li>
              <li>specifications</li>
              <li>customer stories</li>
              <li>FAQs</li>
              <li>guarantee/returns</li>
              <li>use cases</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Length itself is rarely the real problem</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A long page can convert well when every section reduces uncertainty. A short page can feel exhausting if it is badly organized.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use hierarchy</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Customers should be able to skim. Headlines, visuals and clear sections help people find the information they need without reading every word.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch where users stop</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Scroll depth and section interaction can provide clues, but do not assume people must read the entire page to buy.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Write for the decision, not an arbitrary word count.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-is-a-good-landing-page-conversion-rate-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Landing Page Conversion Rate for Ecommerce?</Link></li>
            <li><Link href="/resources/should-your-landing-page-show-the-price-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Your Landing Page Show the Price Above the Fold?</Link></li>
            <li><Link href="/resources/why-your-landing-page-gets-clicks-but-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Landing Page Gets Clicks but No Sales</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your landing pages are either too thin or overloaded with content and you are unsure what customers actually need, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
