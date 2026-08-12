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
  headline: "Is Your Shopify Discount Code Box Hurting Conversion Rate?",
  description: "A visible discount-code field can tell a full-price customer they're paying more than someone else. Here's when to reduce its emphasis, and how automatic promotions can be cleaner.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/discount-code-box-checkout-conversion" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Discount code box", item: "https://www.attribix.app/resources/discount-code-box-checkout-conversion" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Discount code box" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Is your Shopify discount code box hurting conversion rate?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A visible discount-code field can accidentally tell a full-price
            customer: &quot;You might be paying more than someone else.&quot;
            That can send them away from checkout to Google for a coupon
            that may not exist.
          </p>
        </Reveal>
      </section>

      {/* DEPENDS ON STRATEGY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The effect depends on your promotion strategy</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If almost every customer has a code from email, influencer or
            promotion, the field is genuinely useful. If codes are rare,
            giving the field visual prominence may create unnecessary
            doubt.
          </p>
        </Reveal>
      </section>

      {/* REDUCE EMPHASIS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reduce emphasis rather than hiding functionality</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A collapsed &quot;Have a discount code?&quot; link can keep
                the option available without making it the main question
                beside the checkout button.
              </p>
              <p>
                Shopify checkout customization options depend on plan and
                current platform capabilities, so implementation should
                follow the live system.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WATCH BEHAVIOUR */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch the behaviour</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If customers leave cart/checkout and return later with coupon
            traffic, or support repeatedly receives &quot;Do you have a
            discount?&quot; questions, your discount presentation may be
            training that behaviour.
          </p>
        </Reveal>
      </section>

      {/* AUTOMATIC PROMOTIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Automatic promotions can be cleaner</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                When a sale applies to everyone, automatic discounts can
                remove the need to remember and type a code. But they need
                clear messaging so customers know the price is already
                reduced.
              </p>
              <p>
                The objective is not to hide valid promotions. It is to
                avoid making full-price customers feel they missed one.
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
              <Link href="/resources/cart-drawer-vs-cart-page-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify cart drawer vs cart page: which converts better?
              </Link>
            </li>
            <li>
              <Link href="/resources/countdown-timer-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Do countdown timers actually improve ecommerce conversion rates?
              </Link>
            </li>
            <li>
              <Link href="/resources/product-bundles-vs-discounts-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Product bundles vs discounts: which increase AOV?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Stop the discount box from training coupon-hunting behaviour</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your store relies heavily on discount codes and paid traffic
            but checkout behaviour is messy, send us an inquiry. We can
            review the offer and cart journey together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
