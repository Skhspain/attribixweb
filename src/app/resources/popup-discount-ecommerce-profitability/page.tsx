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
  headline: "Does a 10% Popup Discount Actually Increase Profit?",
  description: "A 10% popup can increase email signups and first purchases, or give away 10% to customers who would have bought at full price. Why incremental profit is the right metric.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/popup-discount-ecommerce-profitability" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Popup discount profitability", item: "https://www.attribix.app/resources/popup-discount-ecommerce-profitability" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Popup discount profitability" }]} />
          <Eyebrow>Creative &amp; Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does a 10% popup discount actually increase profit?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A 10% popup can increase email signups and first purchases. It
            can also give away 10% to customers who would have bought at
            full price. The right metric is incremental profit.
          </p>
        </Reveal>
      </section>

      {/* EXAMPLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              100 visitors would normally produce 3 full-price orders at
              $100. After adding a 10% popup:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>conversion rises to 4%;</li>
              <li>each order revenue becomes $90 for discount users;</li>
              <li>more visitors join email.</li>
            </ul>
            <p>
              Whether this is better depends on margin, how many buyers
              used the discount and the future value of captured leads.
            </p>
          </div>
        </Reveal>
      </section>

      {/* BEYOND IMMEDIATE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure beyond immediate conversion</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The popup can create value from visitors who do not buy today
              but later convert through email.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COUPON DEPENDENCY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch coupon dependency</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If customers learn that every new visit produces an easy
            discount, full-price conversion can weaken.
          </p>
        </Reveal>
      </section>

      {/* TEST ALTERNATIVES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test alternatives</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Compare:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>no incentive;</li>
                <li>free shipping;</li>
                <li>dollar discount;</li>
                <li>percentage discount;</li>
                <li>useful content/access.</li>
              </ul>
              <p>
                The best signup incentive is the one that increases total
                customer value after its real cost.
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
              <Link href="/resources/exit-intent-popup-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should ecommerce stores use exit-intent popups?
              </Link>
            </li>
            <li>
              <Link href="/resources/ecommerce-popup-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Email popup conversion rate: what should Shopify stores expect?
              </Link>
            </li>
            <li>
              <Link href="/resources/percentage-discount-vs-fixed-discount-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Percentage discount vs fixed discount: which works better?
              </Link>
            </li>
            <li>
              <Link href="/resources/free-gift-vs-discount-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Do free gifts convert better than percentage discounts?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out what your popup discount actually costs</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your popup conversion rate looks excellent but nobody has
            calculated what the discount costs, contact us. We can help
            model it properly.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
