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
  "headline": "Why Google Ads Spend Increases Without More Sales",
  "description": "More Google spend does not automatically create proportionally more demand.",
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
    "@id": "https://www.attribix.app/resources/google-ads-spend-increases-no-more-sales"
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
      "name": "Why Google Ads Spend Increases Without More...",
      "item": "https://www.attribix.app/resources/google-ads-spend-increases-no-more-sales"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Google Ads Spend Increases Without More..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Google Ads Spend Increases Without More Sales
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            More Google spend does not automatically create proportionally more demand. When a campaign has already captured the easiest high-intent opportunities, additional budget may buy clicks from broader, more competitive or less likely customers.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check where the extra spend went</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Compare before and after: search terms; brand vs non-brand; devices; countries; Shopping products; Performance Max placements/themes where visibility is available; CPC; conversion rate. You may find the account simply expanded into weaker opportunities.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Sales can also be under-reported</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If Shopify revenue rises but Google conversions do not, check tracking and attribution before declaring the scale unsuccessful. If both Shopify and Google sales remain flat, the problem is more likely economic or conversion-related.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Diminishing returns are normal</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A campaign that generates 600% ROAS at $5,000 spend may produce 400% at $20,000. If 400% remains profitable, the business may still be better off. Judge marginal profit, not only the original ROAS.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Budget cannot create missing demand</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              For narrow products, there may simply not be enough commercially useful searches. In that case, increasing budget forces the account to broaden rather than multiply the same high-intent customers.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/negative-keywords-ecommerce-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Negative Keywords for Ecommerce: What to Look For</Link></li>
            <li><Link href="/resources/search-campaign-vs-performance-max-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Search Campaign vs Performance Max for Ecommerce</Link></li>
            <li><Link href="/resources/how-many-keywords-google-ads-campaign" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Keywords Should a Google Ads Campaign Have?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if the number is actually good?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google spend is climbing faster than sales, send us an inquiry. We can identify whether the extra budget is buying weaker demand, hitting website limits or being measured incorrectly.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
