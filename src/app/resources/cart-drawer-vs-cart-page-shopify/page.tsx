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
  headline: "Shopify Cart Drawer vs Cart Page: Which Converts Better?",
  description: "A cart drawer keeps the shopper browsing. A full cart page gives more room for shipping messaging, bundles and upsells. How to decide which converts better for your Shopify store.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/cart-drawer-vs-cart-page-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Cart drawer vs cart page", item: "https://www.attribix.app/resources/cart-drawer-vs-cart-page-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Cart drawer vs cart page" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify cart drawer vs cart page: which converts better?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A cart drawer keeps the shopper on the product or collection
            page. A full cart page creates a dedicated step before checkout.
            Either can convert well when it helps the customer understand
            the order and move forward.
          </p>
        </Reveal>
      </section>

      {/* DRAWERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Cart drawers preserve shopping flow</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            They are useful for stores where customers often add multiple
            products. The customer can confirm the item, see the basket and
            continue browsing without a page change.
          </p>
        </Reveal>
      </section>

      {/* FULL CART PAGES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Full cart pages give more room</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>A dedicated page can handle:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>shipping threshold messaging;</li>
                <li>bundles;</li>
                <li>order notes;</li>
                <li>product edits;</li>
                <li>delivery explanations;</li>
                <li>upsells;</li>
                <li>larger baskets.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OVER-ENGINEERED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Beware the over-engineered drawer</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Many Shopify carts become mini landing pages full of timers,
            gifts, progress bars, upsells and discount prompts. On mobile,
            this can make the checkout button harder to find.
          </p>
        </Reveal>
      </section>

      {/* FOLLOW THE FUNNEL */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow the funnel</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                If add-to-cart is strong but checkout initiation is poor,
                the cart experience deserves attention. Test whether the
                problem is clarity, hidden cost, upsells or technical
                friction before changing formats completely.
              </p>
              <p>
                The best cart is the one that confirms the purchase,
                resolves remaining questions and makes checkout obvious.
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
              <Link href="/resources/discount-code-box-checkout-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is your Shopify discount code box hurting conversion rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/sticky-add-to-cart-shopify-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you use sticky add-to-cart buttons on Shopify?
              </Link>
            </li>
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
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether your cart is helping or interrupting the purchase</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store gets plenty of carts but too few
            checkouts, contact us. We can review whether the cart interface
            is helping or interrupting the purchase.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
