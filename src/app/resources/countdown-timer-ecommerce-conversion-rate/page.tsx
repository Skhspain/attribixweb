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
  headline: "Do Countdown Timers Actually Improve Ecommerce Conversion Rates?",
  description: "Countdown timers can increase urgency when there's a real deadline, and damage trust when they reset on every refresh. How to test the offer, not just the clock.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/countdown-timer-ecommerce-conversion-rate" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Countdown timers", item: "https://www.attribix.app/resources/countdown-timer-ecommerce-conversion-rate" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Countdown timers" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Do countdown timers actually improve ecommerce conversion rates?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Countdown timers can increase urgency when there is a real
            deadline. They can damage trust when the timer resets every
            time the customer refreshes the page.
          </p>
        </Reveal>
      </section>

      {/* REAL URGENCY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Real urgency is useful information</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A genuine sale ending at midnight, shipping cutoff or limited
            launch window gives the customer a reason to decide now rather
            than later.
          </p>
        </Reveal>
      </section>

      {/* FAKE URGENCY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Fake urgency is easy to spot</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Evergreen timers that magically restart teach returning
              visitors that the deadline is meaningless. Even if they
              increase short-term conversion, the brand cost can be larger.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEST THE OFFER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the offer, not just the clock</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A timer cannot make a weak promotion compelling. If &quot;10%
            off&quot; does not matter to the customer, adding minutes and
            seconds will not create value.
          </p>
        </Reveal>
      </section>

      {/* PROFIT AND TRUST */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at profit and trust signals</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Compare conversion, AOV, refund rate and repeat customer
                behaviour. A timer that attracts rushed low-quality
                purchases may not be a net win.
              </p>
              <p>
                Use urgency to communicate real constraints, not manufacture
                anxiety.
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
              <Link href="/resources/should-shopify-stores-use-popups" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores use popups?
              </Link>
            </li>
            <li>
              <Link href="/resources/discount-code-box-checkout-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is your Shopify discount code box hurting conversion rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/product-bundles-vs-discounts-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Product bundles vs discounts: which increase AOV?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-20-percent-budget-rule" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Increasing Meta Ads budget: is the 20% rule real?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether your urgency tactics create incremental sales</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your store relies heavily on timers and promotions but you
            are unsure whether they create incremental sales, contact us.
            We can review the offer and conversion data.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
