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
  headline: "Should Your Free Shipping Threshold Be Above Your Current AOV?",
  description: "A threshold usually needs to sit above a meaningful portion of current orders to increase basket size, but simply adding 20% to AOV is not a formula. What order distribution and margin change.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/free-shipping-threshold-above-aov" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Threshold above AOV", item: "https://www.attribix.app/resources/free-shipping-threshold-above-aov" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Threshold above AOV" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should your free shipping threshold be above your current AOV?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Usually, a threshold needs to sit above a meaningful portion of
            current orders if its purpose is to increase basket size. But
            simply adding 20% to AOV is not a formula.
          </p>
        </Reveal>
      </section>

      {/* DISTRIBUTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at order distribution</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            An AOV of $70 might hide two groups: many $40 orders and a
            smaller number of $140 orders. Setting the threshold at $85 may
            change very different customers than the average suggests.
          </p>
        </Reveal>
      </section>

      {/* ACHIEVABLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Give customers an achievable next item</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If your cheapest add-on costs $35, telling a $72 customer they
              are &quot;$13 away&quot; from free shipping is frustrating if
              no $13 product exists.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MARGIN AND SHIPPING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Include margin and shipping</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            The additional basket contribution needs to cover the shipping
            subsidy for both newly upsold orders and customers already above
            the threshold. The calculation is covered step by step in{" "}
            <Link href="/resources/calculate-profitable-free-shipping-threshold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how to calculate a profitable free shipping threshold
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* DON'T MAKE WORSE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t make conversion worse</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A high threshold can communicate that normal shipping is
                expensive. Test product-page/cart messaging carefully.
              </p>
              <p>
                Use AOV as a starting reference, then use basket distribution
                and product prices to choose a threshold customers can
                realistically reach.
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
              <Link href="/resources/set-free-shipping-threshold-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Free shipping threshold: how should Shopify stores set it?
              </Link>
            </li>
            <li>
              <Link href="/resources/calculate-profitable-free-shipping-threshold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate a profitable free shipping threshold
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Stop copying a competitor&apos;s shipping minimum</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your current free-shipping minimum was copied from a
            competitor, send us an inquiry. We can calculate a threshold
            from your actual order economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
