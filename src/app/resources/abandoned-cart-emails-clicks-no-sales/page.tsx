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
  headline: "Why Your Abandoned Cart Emails Get Clicks but No Sales",
  description: "If recovery emails get clicks but not purchases, the email likely did its job. What to check on the store side: landing page, shipping, payment, and purchase tracking.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/abandoned-cart-emails-clicks-no-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Cart email clicks no sales", item: "https://www.attribix.app/resources/abandoned-cart-emails-clicks-no-sales" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Cart email clicks no sales" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why your abandoned cart emails get clicks but no sales
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            If people click an abandoned-cart email and still do not buy,
            the email may have done its job: it brought them back. The
            remaining problem is likely on the store or in the offer.
          </p>
        </Reveal>
      </section>

      {/* WHERE THEY LAND */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check where they land</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Does the link restore the correct cart or send users to a
            generic homepage? Are variants preserved? Is the cart still
            available on mobile?
          </p>
        </Reveal>
      </section>

      {/* ORIGINAL REASON */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Revisit the original abandonment reason</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>A reminder cannot fix:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Expensive shipping</li>
                <li>Delivery time</li>
                <li>Payment failure</li>
                <li>Stock problems</li>
                <li>Unclear returns</li>
                <li>Price resistance</li>
              </ul>
              <p>
                If the same issue is waiting when the customer returns,
                clicks will not become purchases.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEGMENT DEVICE/COUNTRY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment by device and country</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            International shoppers may return and abandon again when duties
            or shipping appear. Mobile checkout may have technical friction
            not present on desktop.
          </p>
        </Reveal>
      </section>

      {/* PURCHASE TRACKING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check purchase tracking</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                If Shopify orders occur after the clicks but Klaviyo reports
                none, attribution or integration may be the issue rather
                than conversion.
              </p>
              <p>
                Follow the customer beyond the email. The click is only
                evidence that the reminder regained attention.
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
              <Link href="/resources/email-clicks-but-no-sales-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Good email click rate but no sales: what to check
              </Link>
            </li>
            <li>
              <Link href="/resources/how-many-abandoned-cart-emails-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many abandoned cart emails should a Shopify store send?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-abandoned-checkout-vs-klaviyo-abandoned-cart" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify abandoned checkout vs Klaviyo abandoned cart: why the numbers differ
              </Link>
            </li>
            <li>
              <Link href="/resources/should-abandoned-cart-emails-offer-discount" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you offer a discount in your abandoned cart emails?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Diagnose what happens after the click</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your recovery emails generate strong clicks but Shopify
            purchases remain weak, contact us. We can help diagnose what
            happens after the customer returns.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
