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
  "headline": "How to Turn Customer Objections Into High-Converting Ads",
  "description": "An objection is a reason a customer is interested but not yet comfortable buying.",
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
    "@id": "https://www.attribix.app/resources/how-to-turn-customer-objections-into-high-converting"
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
      "name": "How to Turn Customer Objections Into...",
      "item": "https://www.attribix.app/resources/how-to-turn-customer-objections-into-high-converting"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Turn Customer Objections Into..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Turn Customer Objections Into High-Converting Ads
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              An objection is a reason a customer is interested but not yet comfortable buying.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That makes objections valuable creative material.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Find real objections</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Sources include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>support tickets</li>
            <li>sales chats</li>
            <li>comments</li>
            <li>reviews</li>
            <li>return reasons</li>
            <li>onsite search</li>
            <li>customer interviews</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Common categories:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>price</li>
            <li>fit</li>
            <li>quality</li>
            <li>complexity</li>
            <li>delivery</li>
            <li>trust</li>
            <li>compatibility</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Answer with proof</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Objection:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “Will it fit in my small car?”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Weak ad:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “Yes, it fits!”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Better ad:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Show the product physically fitting into three common small-car boots.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t create objections people did not have</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            An ad that begins “You may be worried this is unsafe…” can introduce anxiety.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Use objections that actually appear in customer data.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Different stages need different objections</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Cold audiences may question relevance. Retargeting audiences may be stuck on price or shipping.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Turn objections into demonstrations, comparisons, testimonials and FAQs rather than just defensive copy.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/product-features-vs-customer-benefits-what-should-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Features vs Customer Benefits: What Should Ads Focus On?</Link></li>
            <li><Link href="/resources/where-should-ecommerce-brands-get-ideas-for-new-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Where Should Ecommerce Brands Get Ideas for New Ad Creatives?</Link></li>
            <li><Link href="/resources/how-to-find-new-meta-ad-angles-without-guessing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Find New Meta Ad Angles Without Guessing</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Different stages need different objections</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If customers keep asking the same questions before buying, send us an inquiry. Those questions may be some of your strongest next Meta creative ideas.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
