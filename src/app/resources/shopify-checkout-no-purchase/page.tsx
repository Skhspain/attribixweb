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
    q: "How is this different from cart abandonment?",
    a: "Cart abandonment covers everyone who added a product and left at any point after. This is narrower: people who actually started the checkout process (entered an email, an address, or a payment method) and still didn't finish. It's a smaller, more specific group, and the causes tend to sit right in the checkout flow rather than earlier in the funnel.",
  },
  {
    q: "Can I see where in checkout people stop?",
    a: "Shopify's checkout and analytics reporting can show checkout initiation versus completed orders, and abandoned checkouts include a timestamp for the last update, which gives a rough sense of how far someone got. It won't always show the exact field they abandoned on.",
  },
  {
    q: "Is a payment failure the same as a payment decline?",
    a: "No, and it's worth distinguishing them. A decline usually means the customer's card was rejected by their bank, which is largely out of your control. A failure means something on the store or gateway side broke the transaction. That's worth investigating directly, since it can silently cost you completed sales.",
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
  headline: "Shopify Customers Reach Checkout but Don't Buy: What to Check",
  description: "The last-mile causes that stop a checkout in progress from finishing.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-checkout-no-purchase" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Checkout but no purchase", item: "https://www.attribix.app/resources/shopify-checkout-no-purchase" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Checkout, no purchase" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify customers reach checkout but don&apos;t buy: what to check
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Someone who&apos;s already started checkout has more intent
            than almost anyone else on your site. If they still don&apos;t
            finish, the cause is usually mechanical: something in the
            checkout flow itself, not the offer or the marketing that got
            them there.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Payment method availability</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Check which payment methods are actually enabled and whether
            they match what your customers expect for their region. A
            store selling mainly to mobile shoppers in a market where a
            specific wallet or Buy Now Pay Later option is standard will
            lose people who don&apos;t see it as an option, even if card
            payment technically works fine.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shipping and tax calculated at the last step</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If shipping cost or tax is only calculated once an address is
              entered at checkout, and the number is materially different
              from what the shopper expected from the cart page, that
              surprise is often enough on its own to end the transaction.
              This is especially common for international orders where
              duties get added late, or where a flat shipping rate turns
              out to be significantly higher for a specific region.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Localization and currency</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            International shoppers checking out in an unfamiliar currency,
            with a mismatched language, or with an address format that
            doesn&apos;t fit their country tend to abandon at a higher
            rate. If a meaningful share of your traffic comes from outside
            your primary market, check whether checkout is actually
            localized for those regions or just technically accessible to
            them.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Genuine checkout errors</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Sometimes it&apos;s a bug, not a decision: a discount code
              app conflicting with checkout, a shipping rate that fails to
              calculate for certain addresses, or a payment gateway timing
              out. These tend to show up as a spike concentrated on
              specific products, regions or devices rather than an even
              spread, which is a useful signal that something is broken
              rather than merely unappealing.
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
            <li><Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Lots of add to carts but no purchases</Link></li>
            <li><Link href="/resources/shopify-traffic-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify traffic but no sales</Link></li>
            <li><Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads conversion tracking for Shopify</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Still losing orders at checkout?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you&apos;ve ruled out the obvious causes and checkout
            completion is still low, send us an inquiry. We can look at
            the store and the account together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
