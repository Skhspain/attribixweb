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
  "headline": "What Is a Good Google Ads CTR for Ecommerce?",
  "description": "CTR tells you how often an impression becomes a click.",
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
    "@id": "https://www.attribix.app/resources/good-google-ads-ctr-ecommerce"
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
      "name": "What Is a Good Google Ads CTR for Ecommerce",
      "item": "https://www.attribix.app/resources/good-google-ads-ctr-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Is a Good Google Ads CTR for Ecommerce" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is a Good Google Ads CTR for Ecommerce?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            CTR tells you how often an impression becomes a click. It does not tell you whether that click becomes a customer. That distinction matters because advertisers can improve CTR by making an ad more tempting without making it more commercially relevant.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CTR varies by campaign type and intent</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Brand search commonly produces much higher CTR than broad non-brand queries. Shopping ads behave differently from text search. Mobile and desktop can differ. Position on the page matters too. A single &quot;good ecommerce CTR&quot; therefore hides more than it explains.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use CTR diagnostically</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If impressions remain similar but CTR falls sharply, consider: weaker ad relevance; competitor changes; less attractive offers; broader query matching; ad position; creative/asset changes. If CTR rises but conversion rate collapses, you may simply be attracting more low-quality clicks.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Profit beats click-through rate</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Two ads can illustrate the point: Ad A has 8% CTR, 1% purchase rate. Ad B has 4% CTR, 4% purchase rate. Ad A wins the CTR screenshot. Ad B may win the business. Use CTR to understand relevance and ad effectiveness, then follow the customer into Shopify.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/good-google-ads-conversion-rate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Google Ads Conversion Rate for Ecommerce?</Link></li>
            <li><Link href="/resources/google-ads-cpc-suddenly-increased" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Google Ads CPC Suddenly Increased</Link></li>
            <li><Link href="/resources/google-ads-search-impression-share-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Search Impression Share Explained for Ecommerce</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if the number is actually good?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Google Ads CTR looks healthy but sales do not, send us an inquiry. We can identify whether the issue is query quality, landing page conversion or tracking.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
