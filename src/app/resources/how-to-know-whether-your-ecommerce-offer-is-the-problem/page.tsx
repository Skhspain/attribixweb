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
  "headline": "How to Know Whether Your Ecommerce Offer Is the Problem",
  "description": "An offer problem often appears when customers understand the product, show interest and stop before committing money.",
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
    "@id": "https://www.attribix.app/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem"
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
      "name": "How to Know Whether Your Ecommerce Offer Is...",
      "item": "https://www.attribix.app/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Know Whether Your Ecommerce Offer Is..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Know Whether Your Ecommerce Offer Is the Problem
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              An offer problem often appears when customers understand the product, show interest and stop before committing money.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Signs to investigate</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>healthy ad CTR</li>
            <li>relevant search terms</li>
            <li>good landing-page engagement</li>
            <li>weak Add-to-Cart rate</li>
            <li>frequent price/shipping objections</li>
            <li>strong competitor alternatives</li>
            <li>conversion improves dramatically only during deep sales</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            None proves the offer is weak alone. Together they create a pattern.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ask what the customer receives for the total cost</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The offer is:
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product value</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>convenience</li>
            <li>confidence</li>
            <li>delivery</li>
            <li>guarantee</li>
            <li>bonuses</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            compared with:
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Price</h2>
            <div className="space-y-4 max-w-2xl">
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>shipping</li>
              <li>perceived risk</li>
              <li>effort</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch discount dependence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the product sells only at 30% off, the normal offer may not be competitive enough, or the store may have trained customers to wait.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use customer feedback</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Why did people not buy? Why did customers who bought choose you? Those answers can reveal a value issue faster than another round of ad targeting tests.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A good offer does not need to be the cheapest. It needs to make the price feel justified.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Your Ads Get Clicks but Your Offer Doesn&apos;t Convert: How to Tell</Link></li>
            <li><Link href="/resources/does-showing-savings-in-dollars-convert-better-than" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does Showing Savings in Dollars Convert Better Than Percentages?</Link></li>
            <li><Link href="/resources/should-shopify-app-costs-count-as-marketing-costs" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify App Costs Count as Marketing Costs?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the funnel reviewed properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you have changed ads repeatedly and the store still struggles to convert qualified traffic, send us an inquiry. We can review the offer alongside the campaigns.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
