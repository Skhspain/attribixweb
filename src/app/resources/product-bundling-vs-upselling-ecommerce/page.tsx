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
  headline: "Product Bundling vs Upselling: Which Is Better for Ecommerce?",
  description: "Bundling packages products before the decision. Upselling asks the customer to increase the order after choosing something. Both can raise AOV, but they create different buying experiences.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/product-bundling-vs-upselling-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Bundling vs upselling", item: "https://www.attribix.app/resources/product-bundling-vs-upselling-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Bundling vs upselling" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Product bundling vs upselling: which is better for ecommerce?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Bundling packages products before the decision. Upselling asks
            the customer to increase the order after choosing something.
            Both can raise AOV, but they create different buying experiences.
          </p>
        </Reveal>
      </section>

      {/* BUNDLES REDUCE DECISION WORK */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Bundles reduce decision work</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A &quot;Complete Starter Kit&quot; can be easier than choosing
            four accessories individually. It works best when the products
            naturally belong together.
          </p>
        </Reveal>
      </section>

      {/* UPSELLS PRESERVE FLEXIBILITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Upsells preserve flexibility</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A customer can choose the base product first, then add premium
              versions, accessories or quantity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BUNDLES SUPPORT CREATIVE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Bundles can support ad creative</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A strong bundle creates a clear offer for Meta and a specific
            landing page. Upsells may be invisible until after the ad click.
          </p>
        </Reveal>
      </section>

      {/* WATCH MARGIN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch margin and conversion</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A large bundle can increase AOV and reduce purchase rate
                because the entry price becomes too high. An aggressive
                upsell sequence can add friction.
              </p>
              <p>
                Measure contribution per visitor rather than choosing the
                tactic with the biggest average basket.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/how-to-price-ecommerce-bundles" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to price ecommerce bundles without destroying margin
              </Link>
            </li>
            <li>
              <Link href="/resources/set-free-shipping-threshold-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Free shipping threshold: how should Shopify stores set it?
              </Link>
            </li>
            <li>
              <Link href="/resources/advertise-bestseller-or-high-margin-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you advertise your best seller or highest-margin product?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Test the economics before scaling either offer</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want higher AOV but are unsure whether to redesign the
            offer or add post-click upsells, contact us. We can test the
            economics of both.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
