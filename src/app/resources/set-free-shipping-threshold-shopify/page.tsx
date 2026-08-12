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
  headline: "Free Shipping Threshold: How Should Shopify Stores Set It?",
  description: "A useful free-shipping threshold encourages a larger basket without making the goal feel unreachable. Starting from AOV, margin and shipping cost instead of guessing a round number.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/set-free-shipping-threshold-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Free shipping threshold", item: "https://www.attribix.app/resources/set-free-shipping-threshold-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Free shipping threshold" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Free shipping threshold: how should Shopify stores set it?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A useful free-shipping threshold encourages a larger basket
            without making the goal feel unreachable.
          </p>
        </Reveal>
      </section>

      {/* AOV */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with current AOV</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              If AOV is $62, a threshold at $65 may give customers little
              reason to add meaningful value. A threshold at $150 may feel
              irrelevant.
            </p>
            <p>
              A common starting hypothesis is modestly above current AOV, but
              economics decide the exact number.
            </p>
          </div>
        </Reveal>
      </section>

      {/* MARGIN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate margin on the larger basket</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Suppose moving an order from $60 to $80 adds $10 contribution
                after product cost, while shipping costs $7. The threshold
                can pay for itself. The full worked calculation is in{" "}
                <Link href="/resources/calculate-profitable-free-shipping-threshold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  how to calculate a profitable free shipping threshold
                </Link>
                .
              </p>
              <p>
                If the extra item has very low margin or shipping becomes
                much more expensive with weight, the calculation changes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISIBLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Make it visible</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Show progress in cart: &quot;$12 away from free shipping.&quot;
            The customer should not discover the threshold only during
            checkout.
          </p>
        </Reveal>
      </section>

      {/* SEGMENT MARKETS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment markets</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                International shipping costs can make one global threshold
                impossible. Use market-specific rules where appropriate.
              </p>
              <p>
                The threshold should increase contribution per order, not
                merely AOV.
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
              <Link href="/resources/calculate-profitable-free-shipping-threshold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate a profitable free shipping threshold
              </Link>
            </li>
            <li>
              <Link href="/resources/free-shipping-threshold-above-aov" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should your free shipping threshold be above your current AOV?
              </Link>
            </li>
            <li>
              <Link href="/resources/product-bundling-vs-upselling-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Product bundling vs upselling: which is better for ecommerce?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Build a threshold from your real numbers, not a guess</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want a free-shipping threshold built from your actual
            AOV, margin and shipping cost, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
