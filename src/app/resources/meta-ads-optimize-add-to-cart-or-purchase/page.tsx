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
  headline: "Should You Optimize Meta Ads for Add to Cart or Purchase?",
  description:
    "More add-to-cart volume looks like more data, but it isn't the same signal as a purchase. When Add to Cart optimization actually helps, and when it just trains Meta toward the wrong outcome.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-optimize-add-to-cart-or-purchase" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Add to Cart vs Purchase Optimization",
      item: "https://www.attribix.app/resources/meta-ads-optimize-add-to-cart-or-purchase",
    },
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
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Add to Cart vs Purchase" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Optimize Meta Ads for Add to Cart or Purchase?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            If your real goal is purchases, purchase is normally the most
            useful signal you can give Meta. Optimizing for add to cart
            because it happens more frequently can look logical, but it
            changes the job you are asking the system to do.
          </p>
        </Reveal>
      </section>

      {/* MORE EVENTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">More events do not always mean better events</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Meta is very good at finding people likely to perform the event
            you choose. People who add products to cart are not necessarily
            the same people who complete orders. Suppose Campaign A
            optimizes for Add to Cart and produces 200 carts at $4 each but
            only five purchases. Campaign B optimizes for Purchase and
            produces 50 carts but 12 purchases. The first campaign has more
            conversion data. The second has more business value.
          </p>
        </Reveal>
      </section>

      {/* LOW VOLUME */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When lower-funnel volume is extremely low</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A brand-new account with almost no purchases may struggle to
              provide much purchase feedback. That can make advertisers
              consider a higher-volume event. Before changing the
              optimization event, ask why purchases are scarce. Is the
              budget tiny relative to the product price? Is tracking broken?
              Is the offer weak? Is the site failing to convert? Choosing
              Add to Cart will not solve those problems, and if the account
              simply hasn&apos;t generated enough purchase data yet, it&apos;s
              worth working through{" "}
              <Link href="/resources/when-meta-ads-account-ready-optimize-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                when an account is actually ready to optimize for purchases
              </Link>{" "}
              before switching the event.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AVOID EASY ACTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid training toward an easy action</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If your store has a high cart-abandonment rate (the pattern we
            cover in{" "}
            <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              lots of add to carts but no purchases
            </Link>
            ), optimizing for carts can reinforce the exact behaviour you do
            not want. Purchase optimization aligns the platform with the
            final commercial outcome. There can be exceptions, particularly
            in unusual funnels or early-stage testing, but treat them as
            deliberate experiments rather than standard practice.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/when-meta-ads-account-ready-optimize-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When is your Meta Ads account ready to optimize for purchases?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Lots of add to carts but no purchases on Shopify
              </Link>
            </li>
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-lead-ads-vs-website-conversions" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Lead Ads vs website conversions for ecommerce
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not enough purchase data to optimize on?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account is not producing enough purchase data and
            you are considering changing optimization events, contact us. We
            can check whether the problem is volume, campaign setup, website
            conversion or tracking first.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
