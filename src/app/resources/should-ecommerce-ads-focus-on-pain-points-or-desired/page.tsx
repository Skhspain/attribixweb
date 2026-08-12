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
  "headline": "Should Ecommerce Ads Focus on Pain Points or Desired Outcomes?",
  "description": "Some products are bought to escape a problem.",
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
    "@id": "https://www.attribix.app/resources/should-ecommerce-ads-focus-on-pain-points-or-desired"
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
      "name": "Should Ecommerce Ads Focus on Pain Points or...",
      "item": "https://www.attribix.app/resources/should-ecommerce-ads-focus-on-pain-points-or-desired"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Ecommerce Ads Focus on Pain Points or..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Ecommerce Ads Focus on Pain Points or Desired Outcomes?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Some products are bought to escape a problem. Others are bought to achieve something desirable. Many involve both.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pain works when the problem is already felt</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Examples:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>uncomfortable shoes</li>
            <li>poor sleep</li>
            <li>messy storage</li>
            <li>slow workflow</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Calling out the problem can make the ad immediately relevant.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Outcomes work when aspiration is stronger</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Fashion, luxury, home design and hobby products may sell better through identity and desired experience than negative pain.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid exaggerating suffering</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Turning a minor inconvenience into a dramatic emotional crisis makes advertising feel manipulative.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the two sides</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Same product:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Pain angle: “Stop digging through your suitcase every morning.”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Outcome angle: “Open your suitcase and see everything organized.”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Both sell organization from different motivations.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customer research should decide</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Reviews and interviews reveal whether customers talk more about escaping frustration or achieving a result.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Use the emotional frame that matches how customers naturally understand the purchase.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-create-different-ad-angles-for-the-same-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Create Different Ad Angles for the Same Product</Link></li>
            <li><Link href="/resources/product-features-vs-customer-benefits-what-should-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Features vs Customer Benefits: What Should Ads Focus On?</Link></li>
            <li><Link href="/resources/how-many-ad-angles-should-you-test-before-changing-the" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Ad Angles Should You Test Before Changing the Offer?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the offer is the problem?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If every ad uses the same emotional angle and creative performance has stalled, contact us. We can build tests around different real customer motivations.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
