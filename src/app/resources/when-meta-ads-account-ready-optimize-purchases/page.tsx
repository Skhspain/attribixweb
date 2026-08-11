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
  headline: "When Is Your Meta Ads Account Ready to Optimize for Purchases?",
  description:
    "You don't need weeks of traffic or add-to-cart campaigns before optimizing for purchases. What actually determines whether the purchase event is a usable signal from day one.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/when-meta-ads-account-ready-optimize-purchases",
  },
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
      name: "Purchase Optimization Timing",
      item: "https://www.attribix.app/resources/when-meta-ads-account-ready-optimize-purchases",
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
              { label: "Purchase Optimization Timing" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When Is Your Meta Ads Account Ready to Optimize for Purchases?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            You do not need to earn permission to optimize for purchases by
            first spending weeks on traffic or add-to-cart campaigns. If
            purchases are the business goal and the purchase event is
            implemented correctly, there is a strong argument for giving
            Meta that signal from the beginning.
          </p>
        </Reveal>
      </section>

      {/* SIGNAL USABLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The real question is whether the signal is usable</h2>
          <p className="text-white/60 leading-relaxed text-sm mb-4">
            Before running purchase optimization, confirm:
          </p>
          <ul className="space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>The purchase event fires on genuine completed orders</li>
            <li>Value and currency are correct</li>
            <li>Duplicate browser/server events are deduplicated</li>
            <li>The correct Pixel/dataset is connected</li>
            <li>The website can actually complete purchases</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm mt-4">
            A new account with clean tracking is in a better position than
            an old account with thousands of misleading events. If you
            haven&apos;t checked how the Pixel and{" "}
            <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Conversions API
            </Link>{" "}
            work together on the deduplication point specifically, see our
            comparison of{" "}
            <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Meta Pixel vs Conversions API for Shopify
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* LOW VOLUME VOLATILITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Low volume creates volatility, not necessarily the wrong objective</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A high-AOV store might generate only a handful of weekly
              purchases. That means results will be noisy. Switching to Add
              to Cart may create more data but does not necessarily help
              Meta find buyers — the same tradeoff we walk through in{" "}
              <Link href="/resources/meta-ads-optimize-add-to-cart-or-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Add to Cart vs Purchase optimization
              </Link>
              . Budget and conversion rate matter too. If the account is
              expected to generate one purchase every two weeks, no campaign
              structure can create rich purchase learning from thin
              economics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DON'T SEASON PIXEL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not buy cheap traffic just to &ldquo;season&rdquo; the pixel</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Traffic campaigns can be useful when traffic itself is the
            objective. Running them solely to fill the pixel with visitors
            can attract users who behave very differently from buyers. Start
            with the real business outcome whenever the funnel and budget
            reasonably support it. Then judge the account with realistic
            expectations about how much purchase data it can generate.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/meta-ads-optimize-add-to-cart-or-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you optimize Meta Ads for Add to Cart or Purchase?
              </Link>
            </li>
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify server-side tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Launching Meta Ads on a new Shopify store?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are launching Meta Ads for a new Shopify store and are
            unsure how to structure the first campaigns, send us an inquiry.
            We can review tracking and build the account around the
            purchase goal from day one.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
