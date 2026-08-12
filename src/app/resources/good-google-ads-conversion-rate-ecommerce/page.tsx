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
  "headline": "What Is a Good Google Ads Conversion Rate for Ecommerce?",
  "description": "A \"good\" Google Ads conversion rate is the rate that produces profitable customers at the traffic cost you are paying.",
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
    "@id": "https://www.attribix.app/resources/good-google-ads-conversion-rate-ecommerce"
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
      "name": "What Is a Good Google Ads Conversion Rate...",
      "item": "https://www.attribix.app/resources/good-google-ads-conversion-rate-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Is a Good Google Ads Conversion Rate..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is a Good Google Ads Conversion Rate for Ecommerce?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A &quot;good&quot; Google Ads conversion rate is the rate that produces profitable customers at the traffic cost you are paying. Industry benchmark articles can be useful for context, but they become dangerous when they are treated as targets.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion rate depends on the query</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Branded search may convert dramatically better than generic non-brand search. Shopping traffic can behave differently from Search. A customer searching your exact product SKU is not comparable with someone searching a broad category.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product economics change what good means</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A store with $30 AOV and thin margins may need a much higher conversion rate than a store with $800 AOV and strong contribution margin. The useful relationship is: CPA = CPC ÷ conversion rate. If clicks cost $2 and the store converts 4%, CPA is roughly $50. Whether that is good depends on what a customer is worth.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Diagnose changes against your own baseline</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Your historical conversion rate segmented by campaign, market, device and new/returning customer is often more useful than a generic benchmark. If a campaign falls from 5% to 2.5% while traffic and product are similar, investigate. If another campaign converts at 1.5% but remains highly profitable due to AOV, it may be fine. Use benchmarks to ask questions, not to declare success or failure.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/good-google-ads-ctr-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Google Ads CTR for Ecommerce?</Link></li>
            <li><Link href="/resources/google-ads-cpc-suddenly-increased" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Google Ads CPC Suddenly Increased</Link></li>
            <li><Link href="/resources/google-ads-search-impression-share-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Search Impression Share Explained for Ecommerce</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want to know whether your Google conversion rate is commercially healthy for your actual margins and CPC, contact us. We can analyse it in context.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
