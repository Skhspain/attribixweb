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
  "headline": "Performance Max vs Meta Ads for New Product Launches",
  "description": "A new product with no search demand behaves very differently from a new product in an established category.",
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
    "@id": "https://www.attribix.app/resources/performance-max-vs-meta-ads-new-product-launch"
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
      "name": "Performance Max vs Meta Ads for New Product...",
      "item": "https://www.attribix.app/resources/performance-max-vs-meta-ads-new-product-launch"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Performance Max vs Meta Ads for New Product..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Performance Max vs Meta Ads for New Product Launches
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A new product with no search demand behaves very differently from a new product in an established category. That distinction often determines whether Meta or Google has the easier job at launch.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Meta can create discovery</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Meta reaches people based on predicted interests and behaviour before they search for the exact product. Visually interesting or problem-solving products can therefore build demand even when nobody knows the product name yet.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Google captures expressed demand</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If customers already search for the category, PMax and Shopping can place the new product in front of people actively comparing options. For a genuinely novel product, Google may have little exact demand to capture until customers understand what to search for.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product feeds need history too</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              New SKUs may receive little PMax delivery if established products have stronger conversion data. You may need a controlled structure to give the launch enough exposure to learn.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use both when the journey supports it</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Meta can introduce the product; Google can capture later category or brand searches. That means platform attribution may overlap. Judge the launch by total Shopify sales, new-customer growth and contribution margin, not which platform claims the final click.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/performance-max-learning-period-avoid-changing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Learning Period: What Should You Avoid Changing?</Link></li>
            <li><Link href="/resources/google-shopping-wrong-price" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Google Shopping Shows the Wrong Price</Link></li>
            <li><Link href="/resources/how-long-run-performance-max-before-judging" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should a New Performance Max Campaign Run Before You Judge It?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this checked against your own numbers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are launching a new ecommerce product and deciding how to split Meta and Google budget, contact us. We can build the launch around actual demand behaviour.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
