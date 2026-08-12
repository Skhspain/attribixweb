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
  "headline": "Should Your Welcome Flow Offer a Discount?",
  "description": "A welcome discount can accelerate a first purchase.",
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
    "@id": "https://www.attribix.app/resources/should-your-welcome-flow-offer-a-discount"
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
      "name": "Should Your Welcome Flow Offer a Discount",
      "item": "https://www.attribix.app/resources/should-your-welcome-flow-offer-a-discount"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Your Welcome Flow Offer a Discount" }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Your Welcome Flow Offer a Discount?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A welcome discount can accelerate a first purchase. It can also attract subscribers who care more about the coupon than the brand.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use it when the economics support it</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Calculate the first-order contribution after discount and expected acquisition cost. A 15% welcome offer may be easy to afford on a high-margin product and destructive on a low-margin one.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider what the customer needs</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If the product is unfamiliar or premium, education and proof may be more important than a price reduction. A discount cannot compensate for unclear value.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test timing</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            You can deliver the offer immediately or introduce it later after explaining the brand. The right approach depends on why people signed up.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch full-price behaviour</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If virtually every first-time customer waits for a welcome coupon, the store may be training itself into permanent discounting.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Alternatives exist</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Free shipping, a small gift or exclusive access can create signup value without reducing the product price.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-your-klaviyo-welcome-flow-isn-t-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Klaviyo Welcome Flow Isn&apos;t Converting</Link></li>
            <li><Link href="/resources/how-many-emails-should-be-in-a-shopify-welcome-flow" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Emails Should Be in a Shopify Welcome Flow?</Link></li>
            <li><Link href="/resources/how-often-should-ecommerce-brands-send-marketing-emails" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Often Should Ecommerce Brands Send Marketing Emails?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clearer read on retention?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If welcome discounts are driving first orders but hurting margin or full-price conversion, contact us. We can help evaluate the acquisition economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
