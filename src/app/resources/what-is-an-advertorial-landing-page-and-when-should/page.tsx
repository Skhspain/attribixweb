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
  "headline": "What Is an Advertorial Landing Page and When Should Ecommerce Brands Use One?",
  "description": "An advertorial is a sales-oriented educational page written in an article-like format.",
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
    "@id": "https://www.attribix.app/resources/what-is-an-advertorial-landing-page-and-when-should"
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
      "name": "What Is an Advertorial Landing Page and When...",
      "item": "https://www.attribix.app/resources/what-is-an-advertorial-landing-page-and-when-should"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Is an Advertorial Landing Page and When..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is an Advertorial Landing Page and When Should Ecommerce Brands Use One?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              An advertorial is a sales-oriented educational page written in an article-like format. It sits between an ad and the direct product offer.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Its job is to make the customer understand why the product deserves consideration before asking for the purchase.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Good use cases</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Advertorials can help when:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>the product solves an unfamiliar problem</li>
            <li>customers need education</li>
            <li>the price needs context</li>
            <li>common alternatives need comparison</li>
            <li>the product mechanism is important</li>
            <li>cold traffic has low awareness</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Poor use cases</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A familiar low-cost product may not need a 1,500-word explanation. Extra steps can reduce conversion.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep it honest</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Do not disguise brand advertising as independent journalism or fabricate experts, customer stories or “news” coverage.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Connect smoothly to the product</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Pricing, claims and offer should remain consistent when the customer moves to the purchase page.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure incremental value</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the advertorial increases total CPA because too few readers proceed, the educational layer may not be justified.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/product-page-vs-advertorial-which-works-better-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Page vs Advertorial: Which Works Better for Meta Ads?</Link></li>
            <li><Link href="/resources/quiz-funnel-vs-product-page-which-converts-better" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Quiz Funnel vs Product Page: Which Converts Better?</Link></li>
            <li><Link href="/resources/how-many-ctas-should-an-ecommerce-landing-page-have" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many CTAs Should an Ecommerce Landing Page Have?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Measure incremental value</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are considering advertorials for Meta traffic but do not want to create gimmicky sales pages, contact us. We can help structure the education around real customer objections.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
