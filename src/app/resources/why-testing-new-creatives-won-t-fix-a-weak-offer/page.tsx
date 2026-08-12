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
  "headline": "Why Testing New Creatives Won't Fix a Weak Offer",
  "description": "Creative determines how the product is presented.",
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
    "@id": "https://www.attribix.app/resources/why-testing-new-creatives-won-t-fix-a-weak-offer"
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
      "name": "Why Testing New Creatives Won't Fix a Weak Offer",
      "item": "https://www.attribix.app/resources/why-testing-new-creatives-won-t-fix-a-weak-offer"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Testing New Creatives Won't Fix a Weak Offer" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Testing New Creatives Won&apos;t Fix a Weak Offer
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Creative determines how the product is presented. It cannot permanently overcome an offer customers do not find worthwhile.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Great creative can increase interest</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A strong ad can:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>earn attention</li>
            <li>explain the problem</li>
            <li>demonstrate the product</li>
            <li>build desire</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            But the customer still eventually sees:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>price</li>
            <li>shipping</li>
            <li>reviews</li>
            <li>competitors</li>
            <li>guarantee</li>
            <li>checkout</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch post-click behaviour</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If new creatives repeatedly improve CTR while Add-to-Cart and purchase remain weak, producing more ads may simply generate more expensive evidence that the offer needs work.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Offers are broader than discounts</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Improving the offer might mean:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>better bundle</li>
            <li>more compelling guarantee</li>
            <li>clearer delivery</li>
            <li>stronger product proof</li>
            <li>improved product itself</li>
            <li>more suitable price</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Advertising cannot manufacture economics</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If a customer can get an equivalent product delivered faster for half the price, creative needs an extremely strong reason to justify the difference.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The best campaign cannot scale indefinitely against a weak customer proposition.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-many-ad-angles-should-you-test-before-changing-the" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Ad Angles Should You Test Before Changing the Offer?</Link></li>
            <li><Link href="/resources/how-to-know-whether-you-have-a-creative-problem-or-an" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Know Whether You Have a Creative Problem or an Offer Problem</Link></li>
            <li><Link href="/resources/how-to-create-different-ad-angles-for-the-same-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Create Different Ad Angles for the Same Product</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the offer is the problem?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If every new creative creates more clicks but not more customers, send us an inquiry. We can review the offer before more budget goes into production.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
