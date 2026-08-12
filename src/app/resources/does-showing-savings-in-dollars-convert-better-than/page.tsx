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
  "headline": "Does Showing Savings in Dollars Convert Better Than Percentages?",
  "description": "Sometimes the dollar saving feels larger.",
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
    "@id": "https://www.attribix.app/resources/does-showing-savings-in-dollars-convert-better-than"
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
      "name": "Does Showing Savings in Dollars Convert...",
      "item": "https://www.attribix.app/resources/does-showing-savings-in-dollars-convert-better-than"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Does Showing Savings in Dollars Convert..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does Showing Savings in Dollars Convert Better Than Percentages?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Sometimes the dollar saving feels larger. Sometimes the percentage does. The product price determines much of the psychology.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            On a $50 product:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            20% off = $10.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “20% off” may look stronger than “Save $10.”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            On a $1,000 product:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            20% off = $200.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “Save $200” can feel very concrete.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Show both when clarity helps</h2>
            <div className="space-y-4 max-w-2xl">

            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">$1,000</h2>
          <div className="space-y-4">

          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">$800</h2>
            <div className="space-y-4 max-w-2xl">

            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Save $200 (20%)</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            gives the customer all of the information without making them calculate.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid fake anchor prices</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A crossed-out “regular price” should be a genuine reference price under applicable pricing laws. Artificially inflating the comparison price destroys trust and can create legal problems.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test with equal economics</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            As with any discount framing test, keep the actual offer constant. Otherwise you learn which discount is larger, not which presentation works better.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Clear value usually beats clever pricing tricks.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Your Ads Get Clicks but Your Offer Doesn&apos;t Convert: How to Tell</Link></li>
            <li><Link href="/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Know Whether Your Ecommerce Offer Is the Problem</Link></li>
            <li><Link href="/resources/quiz-funnel-vs-product-page-which-converts-better" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Quiz Funnel vs Product Page: Which Converts Better?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your promotions are getting clicks but discount presentation feels confusing or inconsistent, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
