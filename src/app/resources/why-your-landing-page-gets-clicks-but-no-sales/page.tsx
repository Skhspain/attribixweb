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
  "headline": "Why Your Landing Page Gets Clicks but No Sales",
  "description": "If customers clicked the ad, the ad created enough interest to earn a visit.",
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
    "@id": "https://www.attribix.app/resources/why-your-landing-page-gets-clicks-but-no-sales"
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
      "name": "Why Your Landing Page Gets Clicks but No Sales",
      "item": "https://www.attribix.app/resources/why-your-landing-page-gets-clicks-but-no-sales"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Your Landing Page Gets Clicks but No Sales" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Your Landing Page Gets Clicks but No Sales
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              If customers clicked the ad, the ad created enough interest to earn a visit. The next question is whether it earned the right visit.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check message match</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            An ad promising “50% off” that lands on a page showing full price will fail quickly. So will an ad about one use case that sends customers to a generic brand story.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check traffic quality</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A curiosity-driven hook can generate excellent CTR from people who were never realistic buyers.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Compare product engagement and time on page by creative/search source.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow the funnel</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Visits but no product interaction → page relevance/clarity.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Product interaction but no carts → product/price/offer.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Carts but no checkout → cart/shipping.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Checkout but no purchase → payment/trust/technical.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Review the first screen</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Can a customer understand what is being sold, why it matters and what it costs quickly enough?
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test mobile</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Most paid-social traffic is often mobile. A page that looks impressive on desktop can load slowly or bury the CTA on a phone.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Do not rebuild the ad simply because the page does not convert. Find where the promise stops working.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-is-a-good-landing-page-conversion-rate-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Landing Page Conversion Rate for Ecommerce?</Link></li>
            <li><Link href="/resources/when-does-an-ecommerce-brand-need-a-dedicated-landing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Does an Ecommerce Brand Need a Dedicated Landing Page?</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-landing-page-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Landing Page Be?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the funnel reviewed properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ads get the click but the landing page loses the customer, send us an inquiry. We can diagnose the ad-to-purchase journey.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
