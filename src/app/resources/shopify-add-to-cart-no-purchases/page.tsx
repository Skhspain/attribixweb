"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "Is a high add-to-cart, low-checkout pattern always a bad sign?",
    a: "Not always. Some shoppers use the cart to save items and compare, or check out later on another device. But if the gap is large and consistent, it's usually telling you something real about what happens right after someone commits to a product.",
  },
  {
    q: "Where do I actually see the reasons people abandoned?",
    a: "Shopify's abandoned checkout list under Orders shows carts that reached checkout but didn't finish, including what was in them and sometimes the customer's contact details. It won't tell you why, but it will tell you which products and price points are involved, which narrows the search.",
  },
  {
    q: "Could this be a tracking problem instead of a real one?",
    a: "It's worth checking. If Shopify's own order count looks low compared to add-to-cart events reported by an ad platform's pixel, make sure the purchase event itself is still firing correctly before concluding fewer people are actually buying.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lots of Add to Carts but No Purchases on Shopify",
  description: "What usually sits between a full cart and a completed order, and how to tell which one you have.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-add-to-cart-no-purchases" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Add to cart but no purchases", item: "https://www.attribix.app/resources/shopify-add-to-cart-no-purchases" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Add to cart, no purchase" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Lots of add to carts but no purchases on Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Someone adding a product to cart has already told you the
            product and price got their attention. Something specific is
            stopping them right after that, and it&apos;s usually visible
            in Shopify&apos;s own abandoned checkout data if you look at it
            directly instead of guessing.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shipping and tax, revealed late</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The single most common reason a full cart doesn&apos;t become
            an order is the total getting bigger at checkout than the
            shopper expected on the product page. If shipping cost, import
            duties or tax only appear once someone reaches checkout, that&apos;s
            a price increase they didn&apos;t sign up for, and a lot of
            people leave rather than accept it. If your abandoned checkouts
            cluster around certain shipping regions, this is very likely
            the cause.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Delivery time and payment options</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A delivery estimate that&apos;s longer than the shopper
              expected, or the absence of a payment method they trust or
              prefer, both show up as add-to-cart without checkout
              completion. This is worth checking by device and region too:
              a missing Buy Now Pay Later option or wallet-based payment
              tends to matter more on mobile, where typing in full card
              details is more friction than on desktop.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The discount field as a trust signal, not just a feature</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            An empty discount code box at checkout can send some shoppers
            looking elsewhere for a code before they finish buying, and
            not all of them come back. If you run frequent promotions,
            this can quietly cost you completed orders from people who
            would have paid full price if the box hadn&apos;t suggested
            there might be a better deal available.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">General trust, not just this specific checkout</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              For a first-time visitor, adding to cart is a low-commitment
              action. Completing a purchase asks them to trust the site
              with payment details. Missing reviews, no visible returns
              policy, or a checkout that looks noticeably different from
              the rest of the store can all quietly raise doubt at exactly
              the point where it matters most.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-checkout-no-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Customers reach checkout but don&apos;t buy</Link></li>
            <li><Link href="/resources/shopify-traffic-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify traffic but no sales: find where the funnel is breaking</Link></li>
            <li><Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta CAPI for Shopify</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure which one it is?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you&apos;ve checked the obvious causes and carts are still
            piling up without orders, send us an inquiry: we can look at
            the store and the checkout together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
