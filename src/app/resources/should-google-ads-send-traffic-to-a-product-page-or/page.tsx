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
  "headline": "Should Google Ads Send Traffic to a Product Page or Collection Page?",
  "description": "The search query should usually decide.",
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
    "@id": "https://www.attribix.app/resources/should-google-ads-send-traffic-to-a-product-page-or"
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
      "name": "Should Google Ads Send Traffic to a Product...",
      "item": "https://www.attribix.app/resources/should-google-ads-send-traffic-to-a-product-page-or"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Google Ads Send Traffic to a Product..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Google Ads Send Traffic to a Product Page or Collection Page?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              The search query should usually decide.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A customer searching for a specific product expects a specific product. A customer searching a broad category may want to compare several options.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Specific intent → product page</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Queries containing model, exact product, size or specific feature usually benefit from landing directly on the closest matching item.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Broad category intent → collection page</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Someone searching “women&apos;s waterproof hiking boots” may appreciate several relevant products rather than being forced onto one arbitrary SKU.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shopping is naturally product-specific</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Google Shopping/PMax product clicks normally land on the product associated with the feed. That page needs to fulfil the exact price and product promise shown in the ad.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid generic homepages</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Sending high-intent Search users to a homepage forces them to repeat the search on your site.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check internal filtering</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A collection page with 200 unrelated products and poor filters can perform worse than a focused landing page.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Search intent → relevant page → clear product choice. Keep the path as short as possible.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/when-should-you-exclude-existing-customers-from-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Should You Exclude Existing Customers From Meta Ads?</Link></li>
            <li><Link href="/resources/what-should-be-included-in-a-google-ads-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Included in a Google Ads Management Service?</Link></li>
            <li><Link href="/resources/what-should-be-included-in-a-meta-ads-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Included in a Meta Ads Management Service?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google traffic is relevant but Shopify conversion remains weak, contact us. We can review whether the landing pages match the actual searches you are paying for.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
