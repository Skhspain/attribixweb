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
  "headline": "How Many CTAs Should an Ecommerce Landing Page Have?",
  "description": "A landing page can have several CTA buttons without having several competing goals.",
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
    "@id": "https://www.attribix.app/resources/how-many-ctas-should-an-ecommerce-landing-page-have"
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
      "name": "How Many CTAs Should an Ecommerce Landing...",
      "item": "https://www.attribix.app/resources/how-many-ctas-should-an-ecommerce-landing-page-have"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Many CTAs Should an Ecommerce Landing..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Many CTAs Should an Ecommerce Landing Page Have?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A landing page can have several CTA buttons without having several competing goals.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The distinction matters.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Repeat one primary action</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A long product page might use “Add to Cart” near the top, after key proof and near the bottom. Those are multiple buttons serving one decision.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid competing objectives</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              “Buy now,” “Book a call,” “Download our guide,” “Join our newsletter” and “Follow Instagram” all on the same focused landing page can dilute the path.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Place CTAs after decision points</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A customer who just read the guarantee or comparison may be ready to act. Giving them a CTA there prevents unnecessary scrolling.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not force a button after every paragraph</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Excessive CTAs make the page feel aggressive and reduce visual hierarchy.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              One primary conversion goal, repeated at sensible points, is usually more important than the raw number of buttons.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/product-page-vs-advertorial-which-works-better-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Page vs Advertorial: Which Works Better for Meta Ads?</Link></li>
            <li><Link href="/resources/what-should-the-first-screen-of-an-ecommerce-landing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should the First Screen of an Ecommerce Landing Page Say?</Link></li>
            <li><Link href="/resources/what-is-an-advertorial-landing-page-and-when-should" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is an Advertorial Landing Page and When Should Ecommerce Brands Use One?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your landing pages contain several competing actions and paid traffic does not know where to go next, contact us. We can simplify the conversion path.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
