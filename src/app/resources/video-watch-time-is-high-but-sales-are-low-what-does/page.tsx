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
  "headline": "Video Watch Time Is High but Sales Are Low: What Does That Tell You?",
  "description": "High watch time proves people were willing to watch.",
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
    "@id": "https://www.attribix.app/resources/video-watch-time-is-high-but-sales-are-low-what-does"
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
      "name": "Video Watch Time Is High but Sales Are Low",
      "item": "https://www.attribix.app/resources/video-watch-time-is-high-but-sales-are-low-what-does"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Video Watch Time Is High but Sales Are Low" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Video Watch Time Is High but Sales Are Low: What Does That Tell You?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              High watch time proves people were willing to watch. It does not prove they were likely to buy.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The content may be entertaining</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            An unusual story, satisfying demonstration or funny creator can hold attention while the product remains secondary.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The selling message may arrive too late</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If viewers stay for ten seconds but the product and value are explained at second 25, much of the audience never reaches the commercial argument.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check click behaviour</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            High watch time + low CTR suggests the video holds attention without creating enough desire to visit.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            High watch time + good CTR + no purchases moves the problem further down the funnel.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check audience quality</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Broad entertainment appeal can pull the campaign toward cheap video watchers who are less likely to become customers, depending on campaign objective and delivery.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use watch time to edit, not declare victory</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Find the moments where retention drops. Make sure product, proof and reason to buy appear early enough.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            The ad should be interesting because the product is relevant, not merely interesting beside the product.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/ecommerce-creative-testing-system" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Build an Ecommerce Creative Testing System That Produces Useful Learnings</Link></li>
            <li><Link href="/resources/meta-ads-hook-rate-vs-sales-which-matters-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads Hook Rate vs Sales: Which Matters More?</Link></li>
            <li><Link href="/resources/why-your-best-performing-ad-may-not-be-your-best" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Best-Performing Ad May Not Be Your Best Creative</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta videos get strong viewing metrics but little Shopify revenue, contact us. We can diagnose whether the problem is the message or what happens after the click.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
