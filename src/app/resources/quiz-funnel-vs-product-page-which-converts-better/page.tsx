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
  "headline": "Quiz Funnel vs Product Page: Which Converts Better?",
  "description": "A quiz can improve conversion when the customer genuinely needs help choosing.",
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
    "@id": "https://www.attribix.app/resources/quiz-funnel-vs-product-page-which-converts-better"
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
      "name": "Quiz Funnel vs Product Page",
      "item": "https://www.attribix.app/resources/quiz-funnel-vs-product-page-which-converts-better"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Quiz Funnel vs Product Page" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Quiz Funnel vs Product Page: Which Converts Better?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A quiz can improve conversion when the customer genuinely needs help choosing. It creates unnecessary friction when the correct product is already obvious.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Quizzes work well for complex choice</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Useful categories include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>skincare routines</li>
            <li>supplements where compliant and appropriate</li>
            <li>sizing</li>
            <li>beauty shades</li>
            <li>personalized bundles</li>
            <li>large catalogues</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            The quiz reduces decision complexity.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product pages work for obvious purchases</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If you sell one primary product in three colours, asking six questions before showing it can feel like a marketing trick.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The quiz should change the recommendation</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If every answer leads to the same product, customers quickly realize the personalization is fake.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Data can improve marketing</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Quiz responses can reveal customer problems, preferences and language that inform creative and segmentation, subject to consent and privacy requirements.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch funnel completion</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Track:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            quiz start → quiz complete → recommendation view → cart → purchase.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A high quiz completion rate is not success if few people buy.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-is-an-advertorial-landing-page-and-when-should" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is an Advertorial Landing Page and When Should Ecommerce Brands Use One?</Link></li>
            <li><Link href="/resources/product-page-vs-advertorial-which-works-better-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Page vs Advertorial: Which Works Better for Meta Ads?</Link></li>
            <li><Link href="/resources/how-many-ctas-should-an-ecommerce-landing-page-have" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many CTAs Should an Ecommerce Landing Page Have?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If customers struggle to choose between products and paid traffic drops before Add to Cart, send us an inquiry. We can assess whether a product finder or simpler page would solve the problem.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
