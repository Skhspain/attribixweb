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
  "headline": "How to Use Customer Reviews to Create Better Meta Ads",
  "description": "Reviews are useful creative research because customers describe the product after experiencing it, often in language the brand would never write.",
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
    "@id": "https://www.attribix.app/resources/how-to-use-customer-reviews-to-create-better-meta-ads"
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
      "name": "How to Use Customer Reviews to Create Better...",
      "item": "https://www.attribix.app/resources/how-to-use-customer-reviews-to-create-better-meta-ads"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Use Customer Reviews to Create Better..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Use Customer Reviews to Create Better Meta Ads
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Reviews are useful creative research because customers describe the product after experiencing it, often in language the brand would never write.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look for repeated themes</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If dozens of customers independently mention:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “Finally fits in my small kitchen”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            that can be a stronger creative angle than the internal messaging around “innovative compact engineering.”
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use genuine language</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              You can quote a customer accurately with permission and according to applicable platform rules, or use the underlying insight to create original copy.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Do not invent testimonials.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build several creative forms</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            One useful review can become:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>static quote</li>
            <li>UGC script</li>
            <li>problem/solution video</li>
            <li>product demonstration</li>
            <li>objection-handling ad</li>
            <li>landing-page proof</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use negative reviews too</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A recurring complaint can reveal who the product is not for or which expectation needs clarification in the ad.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match review to audience</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A parent review and a professional-user review can sell the same product for different reasons.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Customer reviews are not merely proof. They are a library of customer language.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-scaling-revenue-can-reduce-profit" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Scaling Revenue Can Reduce Profit</Link></li>
            <li><Link href="/resources/how-to-decide-whether-an-unprofitable-campaign-is" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Decide Whether an Unprofitable Campaign Is Worth Keeping</Link></li>
            <li><Link href="/resources/what-is-a-good-contribution-margin-after-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Contribution Margin After Advertising?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you have hundreds of reviews but your Meta ads still sound like generic brand copy, contact us. We can help turn customer language into better creative angles.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
