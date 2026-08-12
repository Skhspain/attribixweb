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
  headline: "Should You Use Sticky Add-to-Cart Buttons on Shopify?",
  description: "When a sticky Add-to-Cart bar helps a long Shopify product page, when it becomes intrusive, and why you should watch the whole funnel rather than just button clicks.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/sticky-add-to-cart-shopify-conversion" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Sticky add-to-cart", item: "https://www.attribix.app/resources/sticky-add-to-cart-shopify-conversion" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Sticky add-to-cart" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should you use sticky add-to-cart buttons on Shopify?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A sticky Add-to-Cart button solves a simple problem: customers
            can decide to buy while reading lower on the page without
            scrolling all the way back to the purchase area. That can be
            useful on long mobile product pages. It can also become another
            intrusive bar fighting for screen space.
          </p>
        </Reveal>
      </section>

      {/* WHEN IT HELPS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When it helps</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Sticky purchase controls are most useful when:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>the page is long;</li>
              <li>important proof sits below the first screen;</li>
              <li>mobile users scroll deeply;</li>
              <li>variants can be selected without confusion;</li>
              <li>the sticky element keeps the next action visible.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* WHEN IT HURTS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When it hurts</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A sticky bar can cover content, clash with chat widgets, cookie
              notices or browser controls, and create accidental clicks. It
              can also confuse customers if the product requires a size or
              variant selection that is not reflected clearly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WATCH THE FUNNEL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch the funnel, not only button clicks</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              More Add-to-Cart events are not automatically better. If sticky
              controls increase carts but checkout completion falls, you may
              simply be creating more low-intent cart actions.
            </p>
            <p>Measure:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>product view → cart;</li>
              <li>cart → checkout;</li>
              <li>checkout → purchase;</li>
              <li>total conversion rate.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* KEEP IT SIMPLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep it simple</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The sticky element should usually reinforce the existing
              purchase action, not introduce a second competing design
              system.
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
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Lots of add to carts but no purchases on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-checkout-no-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify customers reach checkout but don&apos;t buy
              </Link>
            </li>
            <li>
              <Link href="/resources/how-many-product-images-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many product images should a Shopify product page have?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-traffic-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify traffic but no sales? Find where the funnel is breaking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Turn scroll depth into a purchase decision, not a distraction</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify product pages are long and mobile users struggle
            to reach the purchase action, send us an inquiry. We can review
            whether a sticky CTA would help the actual funnel.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
