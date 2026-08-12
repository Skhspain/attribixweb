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
  "headline": "Should Creative Production Costs Be Included in CAC?",
  "description": "If creative production exists primarily to acquire customers, it belongs somewhere in the cost of acquisition.",
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
    "@id": "https://www.attribix.app/resources/should-creative-production-costs-be-included-in-cac"
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
      "name": "Should Creative Production Costs Be Included...",
      "item": "https://www.attribix.app/resources/should-creative-production-costs-be-included-in-cac"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Creative Production Costs Be Included..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Creative Production Costs Be Included in CAC?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              If creative production exists primarily to acquire customers, it belongs somewhere in the cost of acquisition. Whether you include it in your daily channel CPA is a separate reporting choice.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep campaign CPA simple</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Ads Manager CPA normally uses media spend only. That makes campaign comparison easy.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use fully loaded CAC for business economics</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Monthly acquisition costs might include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>paid media</li>
              <li>agency/management</li>
              <li>UGC creators</li>
              <li>photographers/editors</li>
              <li>creative software</li>
              <li>internal acquisition staff</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              Divide appropriate acquisition costs by new customers to understand the real system cost.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Allocate shared creative sensibly</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A photoshoot may support Meta, Google, email and the website. Do not pretend every dollar belongs to one channel if the asset is reused broadly.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative investment can improve scale</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Higher creative cost is not automatically bad. Spending $20,000 on production can be excellent if it unlocks $500,000 of profitable media. Measure the return on the creative system, not only its expense.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-tax-be-included-in-ecommerce-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Tax Be Included in Ecommerce ROAS?</Link></li>
            <li><Link href="/resources/why-revenue-based-roas-can-hide-an-unprofitable" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Revenue-Based ROAS Can Hide an Unprofitable Business</Link></li>
            <li><Link href="/resources/should-shipping-revenue-count-toward-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shipping Revenue Count Toward ROAS?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if ROAS is telling the full story?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your new-customer CAC excludes a substantial creative operation, send us an inquiry. We can help separate media CPA from fully loaded acquisition cost.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
