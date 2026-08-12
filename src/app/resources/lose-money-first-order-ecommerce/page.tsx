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
  headline: "When Is It Okay to Lose Money on the First Shopify Order?",
  description: "Losing money on the first order can be rational when future contribution is predictable enough to recover the loss within an acceptable period.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/lose-money-first-order-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Losing money on first order", item: "https://www.attribix.app/resources/lose-money-first-order-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Losing money on first order" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When is it okay to lose money on the first Shopify order?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Losing money on the first order can be rational when the future
            contribution from that customer is predictable enough to
            recover the loss within an acceptable period. It becomes
            dangerous when &quot;LTV&quot; is used to justify campaigns with
            no evidence of retention.
          </p>
        </Reveal>
      </section>

      {/* REQUIREMENTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Requirements for a sensible first-order loss</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>You should know:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>First-order loss per customer</li>
              <li>Repeat purchase rate</li>
              <li>Contribution per repeat order</li>
              <li>Payback period</li>
              <li>Retention by cohort</li>
              <li>Available cash</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* EXAMPLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>CAC: $70.</p>
              <p>First-order contribution before ads: $50.</p>
              <p>First-order loss = $20.</p>
              <p>
                If 70% of those customers reliably generate another $40
                contribution within 60 days, the model may be attractive. If
                only 10% reorder, the assumption collapses.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACQUISITION SOURCE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Acquisition source matters</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Customers attracted by large discounts may repeat less than
            customers acquired through normal offers. Use cohort data from
            comparable customers.
          </p>
        </Reveal>
      </section>

      {/* DON'T IGNORE CASH */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t ignore cash</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A profitable LTV model can still bankrupt a fast-growing
              business if every new customer creates a short-term cash
              deficit. First-order losses should be an intentional
              investment with measured payback, not an accidental outcome of
              chasing growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/first-order-profit-vs-lifetime-value-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                First-Order Profit vs Lifetime Value: Which Should Drive Ad Spend?
              </Link>
            </li>
            <li>
              <Link href="/resources/cac-payback-period-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What Is CAC Payback Period in Ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/ecommerce-cac-payback-period" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Long Can Ecommerce Brands Afford to Wait for Customer Payback?
              </Link>
            </li>
            <li>
              <Link href="/resources/calculate-repeat-customer-value-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to Calculate Repeat Customer Value for a Shopify Store
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Model whether retention actually supports it</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are considering scaling campaigns below first-order
            break-even, contact us. We can help model whether retention
            actually supports it.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
