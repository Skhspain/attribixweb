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
  "headline": "Google Ads Exact Match Isn't Really Exact: What Ecommerce Advertisers Should Know",
  "description": "An exact-match keyword no longer means your ad can appear only when someone types precisely the same characters.",
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
    "@id": "https://www.attribix.app/resources/google-ads-exact-match-not-exact"
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
      "name": "Google Ads Exact Match Isn't Really Exact",
      "item": "https://www.attribix.app/resources/google-ads-exact-match-not-exact"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Ads Exact Match Isn&apos;t Really Exact" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads Exact Match Isn&apos;t Really Exact: What Ecommerce Advertisers Should Know
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            An exact-match keyword no longer means your ad can appear only when someone types precisely the same characters. Google can match close variants and searches it interprets as sharing the same meaning or intent. That helps capture language variation, but it surprises advertisers who expect a literal match.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why this matters</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              You may add [leather laptop bag] and see search terms with different word order, synonyms or closely related phrasing. Some will be useful. Others may feel broader than you intended.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Exact still offers more control</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The fact that exact is not literal does not make match types meaningless. Exact generally keeps stronger guardrails than broad match, but the search terms report remains essential.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use negatives for unwanted meanings</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If Google&apos;s interpretation repeatedly includes a commercially different intent, add negatives rather than building endless exact variants.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Judge the query, not the match label</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A close variant that converts profitably is not a problem simply because it is not identical to the keyword. A technically &quot;exact&quot; query can still be poor if the underlying intent is wrong. Modern Google Ads requires more attention to meaning and conversion quality than to string matching.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/run-search-ads-with-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Run Search Ads if Performance Max Is Already Running?</Link></li>
            <li><Link href="/resources/separate-brand-traffic-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Separate Brand Traffic From Performance Max?</Link></li>
            <li><Link href="/resources/search-campaign-vs-performance-max-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads Search Campaign vs Performance Max for Ecommerce</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your exact-match campaigns are showing for searches you did not expect, contact us. We can audit the search terms and tighten the account without blocking valuable demand.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
