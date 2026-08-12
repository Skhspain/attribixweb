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
  headline: "Does Free Shipping Increase Customer Retention?",
  description: "Free shipping can contribute to retention because it makes repeat purchases easier to justify. But it is rarely the main reason a customer becomes loyal.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/free-shipping-customer-retention-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Free shipping and retention", item: "https://www.attribix.app/resources/free-shipping-customer-retention-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Free shipping and retention" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does free shipping increase customer retention?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Free shipping can contribute to retention because it makes
            repeat purchases easier to justify. But it is rarely the main
            reason a customer becomes loyal. Product satisfaction,
            convenience and trust matter more.
          </p>
        </Reveal>
      </section>

      {/* REMEMBERED FRICTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shipping creates remembered friction</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A customer who loved a $35 product but paid $12 shipping may
            hesitate before reordering. Removing or reducing that friction
            can improve repeat behaviour.
          </p>
        </Reveal>
      </section>

      {/* ECONOMICS STILL APPLY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The economics still apply</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                Offering free shipping to every returning customer can
                reduce contribution dramatically, particularly on small
                baskets. Options include:
              </p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Free shipping threshold</li>
                <li>Loyalty-tier shipping</li>
                <li>Subscription shipping</li>
                <li>Limited-time returning-customer offer</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MEASURE CUSTOMER VALUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure customer value</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If free shipping increases repeat purchase rate and AOV enough
            to cover the cost, it can be a strong retention tool.
          </p>
        </Reveal>
      </section>

      {/* DON'T HIDE PROBLEM */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not use it to hide a fulfilment problem</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Free shipping that takes three weeks may still create a bad
              customer experience. Cost and speed both matter. Shipping
              policy can support retention, but the product must earn the
              second purchase first.
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
              <Link href="/resources/loyalty-program-vs-discounts-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Loyalty Program vs Discounts: Which Drives More Repeat Purchases?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Lots of Add to Carts but No Purchases on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/ecommerce-retention-vs-acquisition" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Retention Can Matter More Than Improving Facebook Ads
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-spend-on-existing-customers-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much Should Ecommerce Brands Spend on Existing Customers?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Model the offer across the customer lifetime</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If shipping cost appears to be limiting both first-order
            conversion and repeat sales, contact us. We can model the offer
            across the full customer lifetime.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
