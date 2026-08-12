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
  headline: "What Is a Good Abandoned Cart Recovery Rate?",
  description: "Recovery rate depends on audience definition, price, buying cycle and attribution window. Why your own baseline matters more than an external benchmark.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/good-abandoned-cart-recovery-rate-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Good cart recovery rate", item: "https://www.attribix.app/resources/good-abandoned-cart-recovery-rate-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Good cart recovery rate" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What is a good abandoned cart recovery rate?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A useful abandoned-cart recovery rate depends on how the
            audience is defined, product price, buying cycle, incentive and
            attribution window. A flow triggered after Add to Cart will
            usually have a different rate from one triggered after checkout
            starts. Comparing them as if they are identical is misleading.
          </p>
        </Reveal>
      </section>

      {/* OWN BASELINE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use your own baseline</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Track recovery over time for comparable cohorts. If a flow
            historically recovers 9% and falls to 4% after a shipping
            change, that is more actionable than an external benchmark
            saying 7% is &quot;good.&quot;
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTED VS INCREMENTAL */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate attributed from incremental recovery</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Some customers would have returned without the email.
              Platform-attributed recovery therefore tends to be higher than
              true incremental lift.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEASURE PROFIT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure profit</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A sequence with aggressive discounting can produce a higher
            recovery rate and lower contribution profit.
          </p>
        </Reveal>
      </section>

      {/* SEGMENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment by product and value</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                High-AOV carts and low-AOV carts may need different
                expectations and timing.
              </p>
              <p>
                Benchmarks can give context, but the useful target is
                profitable improvement against your own store&apos;s
                behaviour.
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
              <Link href="/resources/shopify-abandoned-checkout-vs-klaviyo-abandoned-cart" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify abandoned checkout vs Klaviyo abandoned cart: why the numbers differ
              </Link>
            </li>
            <li>
              <Link href="/resources/how-many-abandoned-cart-emails-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many abandoned cart emails should a Shopify store send?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-abandoned-cart-emails-offer-discount" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you offer a discount in your abandoned cart emails?
              </Link>
            </li>
            <li>
              <Link href="/resources/measure-email-marketing-true-impact-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to measure the true impact of email marketing
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Review the recovery economics</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your cart recovery rate looks strong but you are unsure
            whether discounts and attribution are inflating it, contact us.
            We can review the economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
