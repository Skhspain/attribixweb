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
  "headline": "Should You Exclude Poor-Performing Products From Performance Max?",
  "description": "Sometimes.",
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
    "@id": "https://www.attribix.app/resources/exclude-poor-performing-products-performance-max"
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
      "name": "Should You Exclude Poor-Performing Products...",
      "item": "https://www.attribix.app/resources/exclude-poor-performing-products-performance-max"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should You Exclude Poor-Performing Products..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Exclude Poor-Performing Products From Performance Max?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Sometimes. But &quot;no sales&quot; is not enough information to decide.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with opportunity</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A product that received 30 impressions and no clicks has barely been tested. A product that spent $800 with 400 clicks and zero purchases has much stronger evidence against it.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Diagnose before excluding</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Check: product title and feed relevance; price; shipping; product-page conversion; stock; query intent; margin; tracking. The campaign may be exposing a merchandising problem rather than an advertising problem.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider strategic value</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A low-selling product may have high margin, strong repeat purchase or an important role in introducing customers to the brand. Conversely, a high-revenue product with terrible margin may deserve less budget than the ROAS suggests.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Exclusion is budget allocation</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Removing weak products can concentrate spend on proven opportunities, but excessive pruning can make the campaign dependent on a tiny catalogue and prevent discovery. Use enough data, understand the economics and keep room for controlled testing.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/best-sellers-vs-low-sellers-google-shopping-structure" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Best Sellers vs Low Sellers: How Should You Structure Google Shopping?</Link></li>
            <li><Link href="/resources/google-shopping-product-feed-titles" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Feed Titles: How Much Do They Matter for Google Shopping?</Link></li>
            <li><Link href="/resources/when-to-split-performance-max-campaigns" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Should You Split Products Into Multiple PMax Campaigns?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are unsure which PMax products are wasting spend and which simply need a better feed or landing page, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
