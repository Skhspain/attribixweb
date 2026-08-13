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
  "headline": "Should You Separate Brand Traffic From Performance Max?",
  "description": "Brand traffic can make Performance Max look more efficient than its true acquisition impact.",
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
    "@id": "https://www.attribix.app/resources/separate-brand-traffic-performance-max"
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
      "name": "Should You Separate Brand Traffic From...",
      "item": "https://www.attribix.app/resources/separate-brand-traffic-performance-max"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should You Separate Brand Traffic From..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Separate Brand Traffic From Performance Max?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Brand traffic can make Performance Max look more efficient than its true acquisition impact. A customer who already knows your store and searches the brand is very different from a customer PMax helped discover.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why separation matters</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If a large share of PMax revenue comes from branded demand, overall ROAS can look excellent while non-brand acquisition is mediocre. That does not make the campaign useless. It means the report is answering a blended question. Where Google&apos;s current controls allow it, brand exclusions or separate brand handling can help clarify performance. Always verify the current PMax controls in Google&apos;s official documentation, because these options change over time.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t remove brand blindly</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Brand traffic can still be commercially valuable, particularly if competitors bid on your name or the Shopping result is important. The objective is not &quot;brand is bad.&quot; It is transparent measurement.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare business outcomes</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If excluding brand causes PMax ROAS to drop but total Shopify revenue remains healthy, you may simply be seeing a more realistic acquisition view. If overall revenue falls materially, brand coverage may have been contributing incremental value. Separate reporting is often more important than a rigid campaign rule. Know what portion of the result is demand you created versus demand you captured.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-ads-exact-match-not-exact" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Exact Match Isn&apos;t Really Exact: What Ecommerce Advertisers Should Know</Link></li>
            <li><Link href="/resources/performance-max-brand-revenue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Much of Performance Max Revenue Comes From Brand Searches?</Link></li>
            <li><Link href="/resources/run-search-ads-with-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Run Search Ads if Performance Max Is Already Running?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Compare business outcomes</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your PMax campaign looks exceptional but you are unsure how much comes from branded searches, send us an inquiry. We can separate the reporting and evaluate the true acquisition performance.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
