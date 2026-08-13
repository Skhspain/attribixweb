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
  headline: "Are Constant Discounts Destroying Your Ecommerce Profitability?",
  description: "Discounting can make ROAS look healthier while margin quietly erodes. How to spot promotion dependency, calculate the break-even lift, and use discounts intentionally.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/constant-discounts-ecommerce-profitability" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Discount profitability", item: "https://www.attribix.app/resources/constant-discounts-ecommerce-profitability" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Discount profitability" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Are constant discounts destroying your ecommerce profitability?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Discounting can make marketing metrics look healthier while the
            business underneath becomes weaker. A lower price can improve
            conversion and ROAS, but every discounted order contributes less
            money before advertising and overhead.
          </p>
        </Reveal>
      </section>

      {/* PROMOTION DEPENDENCY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch for promotion dependency</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Warning signs include:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Sales collapse at full price</li>
              <li>Customers wait for predictable sale periods</li>
              <li>Email campaigns need deeper discounts to perform</li>
              <li>Meta creatives lead with price rather than product value</li>
              <li>Margin falls while revenue grows</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* BREAK-EVEN LIFT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate the break-even lift</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If a promotion reduces contribution per order from $40 to $25,
              order volume needs to rise 60% just to create the same total
              contribution. That's a useful sense-check covered in more depth in{" "}
              <Link href="/resources/how-discounts-change-your-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how discounts change your break-even ROAS
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* CUSTOMER QUALITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Discounting can change customer quality</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Price-sensitive buyers may have lower repeat rates or return as
            soon as the next coupon appears. Compare retention by acquisition
            offer.
          </p>
        </Reveal>
      </section>

      {/* USE PROMOTIONS INTENTIONALLY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use promotions intentionally</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Clear inventory, acquire a strategic first order, create a
                launch moment or increase basket size. Avoid discounting
                simply because last week&apos;s ROAS looked better during a sale.
              </p>
              <p>
                A promotion should solve a commercial objective, not become
                the business model by accident.
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
              <Link href="/resources/evergreen-discount-vs-limited-promotion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you run evergreen discounts or short promotions?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-discounts-change-your-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How discounts change your break-even ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/gross-margin-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How gross margin changes your break-even ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether the offer or the ads are the real issue</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your campaigns only hit target ROAS during discounts, send us
            an inquiry. We can help determine whether the ads, offer or
            margin structure is the real issue.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
