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
  "headline": "Why Too Many Trust Badges Can Make a Store Look Less Trustworthy",
  "description": "Trust signals work best when they feel natural.",
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
    "@id": "https://www.attribix.app/resources/why-too-many-trust-badges-can-make-a-store-look-less"
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
      "name": "Why Too Many Trust Badges Can Make a Store...",
      "item": "https://www.attribix.app/resources/why-too-many-trust-badges-can-make-a-store-look-less"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Too Many Trust Badges Can Make a Store..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Too Many Trust Badges Can Make a Store Look Less Trustworthy
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Trust signals work best when they feel natural. When a store repeatedly insists that it is “secure,” “trusted,” “verified,” “guaranteed” and “100% safe,” customers can begin asking why so much reassurance is necessary.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Visual clutter reduces confidence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Product pages need hierarchy. Large badge rows compete with:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>price</li>
            <li>product benefits</li>
            <li>reviews</li>
            <li>Add to Cart</li>
            <li>shipping</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            The result can look like a low-quality dropshipping template.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Some badges mean nothing</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A custom image saying “Premium Quality Guarantee” is only a marketing claim unless there is a clear guarantee behind it.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build trust through evidence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Use:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>real customer reviews</li>
            <li>clear business details</li>
            <li>professional support</li>
            <li>transparent policies</li>
            <li>secure payment methods</li>
            <li>accurate delivery</li>
            <li>consistent brand presentation</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep only signals that answer real concerns</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If customers worry about returns, explain returns. If payment security is a concern, show recognized payment methods.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Do not decorate the page with every reassurance you can find.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/do-trust-badges-still-improve-ecommerce-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Do Trust Badges Still Improve Ecommerce Conversion Rates?</Link></li>
            <li><Link href="/resources/should-shopify-stores-offer-free-returns" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify Stores Offer Free Returns?</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-guarantee-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Guarantee Be?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the offer is the problem?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your product pages feel overloaded with conversion widgets and trust badges, send us an inquiry. We can help simplify them without removing the reassurance customers need.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
