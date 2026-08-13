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
  "headline": "Should Your Landing Page Show the Price Above the Fold?",
  "description": "For normal ecommerce products, hiding the price usually adds unnecessary friction.",
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
    "@id": "https://www.attribix.app/resources/should-your-landing-page-show-the-price-above-the-fold"
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
      "name": "Should Your Landing Page Show the Price...",
      "item": "https://www.attribix.app/resources/should-your-landing-page-show-the-price-above-the-fold"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Your Landing Page Show the Price..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Your Landing Page Show the Price Above the Fold?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              For normal ecommerce products, hiding the price usually adds unnecessary friction. Customers eventually need to know it, and many want that information immediately.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Price is part of product qualification</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A visitor expecting a $50 product should not have to scroll through seven sections before discovering it costs $700.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Showing price can reduce low-intent engagement while improving the quality of the remaining visitors.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Premium products may need context</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If the product is unfamiliar and expensive, a short value explanation can help the price make sense. But that does not necessarily require hiding it entirely.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the ad</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the ad already showed the price, the page should confirm it quickly. If the ad sells a special bundle or promotion, the exact offer should appear clearly.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test commercial outcomes</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A page hiding price might produce longer time on site because visitors are hunting for the number. That is not better engagement.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Clarity usually beats manufactured curiosity in ecommerce.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-ecommerce-landing-pages-have-navigation" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Ecommerce Landing Pages Have Navigation?</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-landing-page-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Landing Page Be?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the funnel reviewed properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your paid traffic clicks but disappears when it finally finds the price, contact us. We can review whether the ad and page are qualifying customers consistently.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
