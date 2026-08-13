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
  "headline": "What Should the First Screen of an Ecommerce Landing Page Say?",
  "description": "The first screen should confirm the visitor came to the right place and give them a reason to keep going.",
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
    "@id": "https://www.attribix.app/resources/what-should-the-first-screen-of-an-ecommerce-landing"
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
      "name": "What Should the First Screen of an Ecommerce...",
      "item": "https://www.attribix.app/resources/what-should-the-first-screen-of-an-ecommerce-landing"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Should the First Screen of an Ecommerce..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Should the First Screen of an Ecommerce Landing Page Say?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              The first screen should confirm the visitor came to the right place and give them a reason to keep going.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              It does not need to tell the entire brand story.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Answer four questions quickly</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Where practical, the opening should make clear:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>What is this?</li>
            <li>Why should I care?</li>
            <li>What does it look like?</li>
            <li>What can I do next?</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Price or offer may also deserve immediate visibility.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Continue the ad</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If the ad says “The suitcase that fits under an airline seat,” the landing page should not open with “Designed for life&apos;s journeys.”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Continue the specific promise.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid vague brand language</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            “Elevate your everyday” can apply to shoes, coffee, software or furniture. A first-time visitor should not need to decode the copy.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use proof carefully</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Ratings, customer count or publication mentions can support the hero if they are genuine and do not crowd the main message.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Design for mobile</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The first phone screen often has far less room than the desktop mockup. Prioritize product, value and action.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-ecommerce-landing-pages-have-navigation" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Ecommerce Landing Pages Have Navigation?</Link></li>
            <li><Link href="/resources/how-many-ctas-should-an-ecommerce-landing-page-have" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many CTAs Should an Ecommerce Landing Page Have?</Link></li>
            <li><Link href="/resources/product-page-vs-advertorial-which-works-better-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Page vs Advertorial: Which Works Better for Meta Ads?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the funnel reviewed properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your landing page looks beautiful but a new visitor cannot explain the offer after five seconds, send us an inquiry. We can help sharpen the ad-to-page message.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
