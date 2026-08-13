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
  "headline": "How to Find the Real Reason Customers Buy Your Product",
  "description": "The reason a company thinks customers buy is not always the reason customers give.",
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
    "@id": "https://www.attribix.app/resources/how-to-find-the-real-reason-customers-buy-your-product"
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
      "name": "How to Find the Real Reason Customers Buy...",
      "item": "https://www.attribix.app/resources/how-to-find-the-real-reason-customers-buy-your-product"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Find the Real Reason Customers Buy..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Find the Real Reason Customers Buy Your Product
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              The reason a company thinks customers buy is not always the reason customers give.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A brand may sell a backpack as “premium sustainable design” while customers repeatedly buy because it fits under a specific airline seat.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That difference matters for advertising.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ask recent customers</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Useful questions:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>What made you start looking for a product like this?</li>
            <li>What alternatives did you consider?</li>
            <li>What almost stopped you buying?</li>
            <li>What was most important when choosing?</li>
            <li>What surprised you after using it?</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Avoid leading questions such as “Did you buy because of our quality?”
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Read reviews and support messages</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Repeated customer language often reveals the real motivation without formal interviews.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare ad winners</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If convenience-led ads repeatedly outperform sustainability-led ads, customers are giving you another signal.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at search terms</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              What problem are Google users trying to solve before reaching the store?
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The strongest marketing usually reflects the reason customers already care rather than forcing them to care about the company&apos;s favourite feature.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-shopify-app-costs-count-as-marketing-costs" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify App Costs Count as Marketing Costs?</Link></li>
            <li><Link href="/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Know Whether Your Ecommerce Offer Is the Problem</Link></li>
            <li><Link href="/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Your Ads Get Clicks but Your Offer Doesn&apos;t Convert: How to Tell</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Look at search terms</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your advertising feels generic because you are not sure what actually motivates your customers, send us an inquiry. We can turn customer evidence into clearer positioning.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
