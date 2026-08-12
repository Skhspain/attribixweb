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
  headline: "Should Shopify Stores Use Popups?",
  description: "Popups can turn anonymous traffic into an audience you can contact again, or interrupt the exact customer you paid to bring to the store. Covers timing, mobile design and what to measure beyond signup rate.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/should-shopify-stores-use-popups" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Shopify popups", item: "https://www.attribix.app/resources/should-shopify-stores-use-popups" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify popups" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify stores use popups?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Popups can turn anonymous traffic into an audience you can
            contact again. They can also interrupt the exact customer you
            paid to bring to the store.
          </p>
        </Reveal>
      </section>

      {/* WORTHWHILE EXCHANGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use them when the exchange is worthwhile</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            An email or SMS signup needs a clear reason. That could be a
            welcome offer, early access, useful product guidance or
            availability alert. &quot;Join our newsletter&quot; is rarely
            compelling by itself.
          </p>
        </Reveal>
      </section>

      {/* TIMING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Timing matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Showing a full-screen popup the instant a Meta visitor lands
              can hide the product before they even understand what the
              store sells. Delay, scroll depth or exit intent can produce a
              less intrusive experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Mobile needs special care</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Large forms, tiny close buttons and overlapping cookie banners
            can make a store almost unusable. Test on real phones.
          </p>
        </Reveal>
      </section>

      {/* MEASURE BEYOND SIGNUP */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure beyond signup rate</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A popup that collects 8% of visitors but reduces immediate
                purchases can still be worthwhile if those leads convert
                later. Compare:
              </p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>signup rate;</li>
                <li>first-session conversion;</li>
                <li>email/SMS revenue;</li>
                <li>unsubscribe rate;</li>
                <li>overall revenue per visitor.</li>
              </ul>
              <p>
                The right question is not &quot;Do popups work?&quot; It is
                whether your popup creates more lifetime value than
                friction.
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
              <Link href="/resources/countdown-timer-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Do countdown timers actually improve ecommerce conversion rates?
              </Link>
            </li>
            <li>
              <Link href="/resources/discount-code-box-checkout-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is your Shopify discount code box hurting conversion rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-traffic-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify traffic but no sales? Find where the funnel is breaking
              </Link>
            </li>
            <li>
              <Link href="/resources/paid-ads-traffic-to-homepage-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why sending all paid traffic to your homepage is usually a mistake
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether your popup helps or hurts paid-traffic profitability</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify popup collects leads but you are unsure whether
            it helps or hurts paid-traffic profitability, send us an
            inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
