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
  "headline": "New Customer ROAS vs Total ROAS: Which Matters More?",
  "description": "Total ROAS tells you how efficiently ad spend is associated with all reported revenue.",
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
    "@id": "https://www.attribix.app/resources/new-customer-roas-vs-total-roas-which-matters-more"
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
      "name": "New Customer ROAS vs Total ROAS",
      "item": "https://www.attribix.app/resources/new-customer-roas-vs-total-roas-which-matters-more"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "New Customer ROAS vs Total ROAS" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            New Customer ROAS vs Total ROAS: Which Matters More?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Total ROAS tells you how efficiently ad spend is associated with all reported revenue. New-customer ROAS focuses on revenue from customers buying for the first time.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Both matter, but they answer different questions.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Total ROAS is useful for cash-generation efficiency</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If campaigns profitably drive repeat orders, that revenue is real. Ignoring it completely would understate the commercial contribution of marketing.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">New-customer ROAS is more useful for acquisition</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A store cannot grow indefinitely by repeatedly selling to the same customer base. If total ROAS is 600% but new-customer ROAS is 180%, the account may be far less efficient at expanding demand than the headline suggests.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Retention changes the acceptable number</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A subscription or high-repeat store can accept lower first-order new-customer ROAS when future contribution is reliable. A one-time-purchase business has less room.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Report both where possible</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Track:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>total revenue</li>
              <li>new-customer revenue</li>
              <li>new customers</li>
              <li>new-customer CPA</li>
              <li>total ROAS</li>
              <li>new-customer ROAS</li>
              <li>repeat purchase value</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              No single number should replace the others.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/customer-acquisition-cost-vs-cpa-what-s-the-difference" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Customer Acquisition Cost vs CPA: What&apos;s the Difference?</Link></li>
            <li><Link href="/resources/why-revenue-is-a-bad-metric-without-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Revenue Is a Bad Metric Without Gross Margin</Link></li>
            <li><Link href="/resources/how-to-calculate-cac-for-a-shopify-store" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate CAC for a Shopify Store</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if ROAS is telling the full story?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your platform ROAS is strong but you do not know whether ads are actually acquiring enough new customers, contact us. We can separate acquisition from repeat revenue.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
