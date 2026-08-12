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
  "headline": "Should Ecommerce Landing Pages Have Navigation?",
  "description": "Removing navigation can keep users focused on the offer.",
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
    "@id": "https://www.attribix.app/resources/should-ecommerce-landing-pages-have-navigation"
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
      "name": "Should Ecommerce Landing Pages Have Navigation",
      "item": "https://www.attribix.app/resources/should-ecommerce-landing-pages-have-navigation"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Ecommerce Landing Pages Have Navigation" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Ecommerce Landing Pages Have Navigation?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Removing navigation can keep users focused on the offer. Keeping navigation can increase trust and let customers explore the brand. The right choice depends on the page and traffic.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">No navigation can work for focused campaigns</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A dedicated promotion or one-product funnel may benefit from reducing unrelated exits.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ecommerce customers often want reassurance</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              They may want to check:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>reviews</li>
              <li>About</li>
              <li>shipping</li>
              <li>returns</li>
              <li>other products</li>
              <li>contact information</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              A page that traps them can feel less trustworthy.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Mobile makes this more sensitive</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A full navigation bar can consume valuable space. A compact menu can preserve access without distracting from the CTA.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test actual outcomes</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Removing navigation may increase immediate conversion and reduce average order value if customers stop exploring complementary products. It can also increase bounce if the page lacks trust.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Do not treat “remove all navigation” as a CRO law. Decide whether exploration helps or hurts this specific buying journey.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-your-landing-page-show-the-price-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Your Landing Page Show the Price Above the Fold?</Link></li>
            <li><Link href="/resources/does-removing-navigation-improve-landing-page" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does Removing Navigation Improve Landing Page Conversion Rate?</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-landing-page-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Landing Page Be?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your paid landing pages feel distracting or overly restrictive, send us an inquiry. We can review the page around the intent of the campaign.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
