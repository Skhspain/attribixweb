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
  "headline": "Product Page vs Advertorial: Which Works Better for Meta Ads?",
  "description": "A product page assumes the customer is ready to evaluate the product.",
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
    "@id": "https://www.attribix.app/resources/product-page-vs-advertorial-which-works-better-for"
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
      "name": "Product Page vs Advertorial",
      "item": "https://www.attribix.app/resources/product-page-vs-advertorial-which-works-better-for"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Product Page vs Advertorial" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Product Page vs Advertorial: Which Works Better for Meta Ads?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A product page assumes the customer is ready to evaluate the product. An advertorial spends more time educating, framing the problem and building the case before presenting the purchase.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That can be useful for some Meta traffic, especially when the product is unfamiliar.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Advertorials work when education matters</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            They can explain:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>why the problem exists</li>
            <li>why common alternatives fail</li>
            <li>how the product works</li>
            <li>customer experience</li>
            <li>evidence or mechanism</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product pages work when intent is already strong</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If someone immediately understands the product and wants to compare price, variants and reviews, making them read a long story can slow the purchase.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid fake journalism</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            An advertorial should not pretend to be an independent news article if it is brand-created advertising. Transparency matters for trust and platform compliance.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match awareness</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Cold traffic may benefit from more education. Retargeting or branded traffic usually needs less.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the full funnel</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Advertorials often reduce the number of people reaching the product page but can improve the quality of those who do.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Measure purchase CPA, not only advertorial click-through.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-many-ctas-should-an-ecommerce-landing-page-have" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many CTAs Should an Ecommerce Landing Page Have?</Link></li>
            <li><Link href="/resources/what-is-an-advertorial-landing-page-and-when-should" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is an Advertorial Landing Page and When Should Ecommerce Brands Use One?</Link></li>
            <li><Link href="/resources/what-should-the-first-screen-of-an-ecommerce-landing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should the First Screen of an Ecommerce Landing Page Say?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta traffic needs more explanation than your standard Shopify page provides, send us an inquiry. We can help decide whether an educational pre-sell page makes sense.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
