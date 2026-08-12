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
  headline: "Collection Page vs Product Page for Google Shopping Traffic",
  description: "Why Google Shopping clicks should almost always land on the matching product page, when a collection page makes sense instead, and why Merchant Center consistency matters.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/collection-page-vs-product-page-google-shopping" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Collection vs product page", item: "https://www.attribix.app/resources/collection-page-vs-product-page-google-shopping" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Collection vs product page" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Collection page vs product page for Google Shopping traffic
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Google Shopping traffic is normally product-specific. A shopper
            sees an image, title and price for a particular item before
            clicking. That creates an expectation that the landing page will
            show the same product immediately.
          </p>
        </Reveal>
      </section>

      {/* PRODUCT PAGES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product pages usually make the most sense</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              The customer already selected an item from the Shopping
              result. Sending them to a collection forces them to find it
              again.
            </p>
            <p>The product page should confirm:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>same product;</li>
              <li>same price;</li>
              <li>same variant where appropriate;</li>
              <li>stock;</li>
              <li>delivery;</li>
              <li>clear Add to Cart.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* COLLECTION PAGES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Collection pages are useful for broader Search intent</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A search such as &ldquo;men&apos;s waterproof jackets&rdquo;
              may deserve a category page when several products match. That
              is different from a Shopping click on a specific jacket.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WAYS TO EXPLORE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Give customers ways to explore</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>A product page can still show:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>related products;</li>
              <li>alternative colours;</li>
              <li>similar styles;</li>
              <li>recently viewed products.</li>
            </ul>
            <p>
              The customer gets the exact promised product first and can
              browse afterwards.
            </p>
          </div>
        </Reveal>
      </section>

      {/* MERCHANT CENTER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Merchant Center consistency matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Shopping destinations should match the product data submitted
              to Google. Unexpected redirects or mismatched product
              information can hurt both experience and feed health.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/google-shopping-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Shopping getting clicks but no sales
              </Link>
            </li>
            <li>
              <Link href="/resources/google-merchant-center-product-disapproved" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Merchant Center products disapproved: what it means for sales
              </Link>
            </li>
            <li>
              <Link href="/resources/different-landing-pages-meta-and-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you create different landing pages for Meta and Google Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/paid-ads-traffic-to-homepage-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why sending all paid traffic to your homepage is usually a mistake
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Send Shopping clicks to a page that confirms the product</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google Shopping gets clicks but your product landing pages
            fail to convert, send us an inquiry. We can review the feed,
            landing experience and campaign together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
