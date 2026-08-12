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
  headline: "How Long Can Ecommerce Brands Afford to Wait for Customer Payback?",
  description: "A profitable customer can still create a cash-flow problem if it takes too long to recover the money spent acquiring them.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ecommerce-cac-payback-period" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "How long to wait for payback", item: "https://www.attribix.app/resources/ecommerce-cac-payback-period" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How long to wait for payback" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How long can ecommerce brands afford to wait for customer payback?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A profitable customer can still create a cash-flow problem if it
            takes too long to recover the money spent acquiring them.
          </p>
        </Reveal>
      </section>

      {/* PAYBACK IS TIMING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Payback is about timing</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Imagine spending $100 to acquire a customer.</p>
            <p>Customer A produces $120 contribution in 30 days.</p>
            <p>Customer B produces $200 contribution, but only after 18 months.</p>
            <p>
              Customer B is worth more in theory. Customer A is much easier
              to scale with limited cash.
            </p>
          </div>
        </Reveal>
      </section>

      {/* NO UNIVERSAL PERIOD */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">There is no universal acceptable period</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Businesses with strong cash reserves and predictable
              subscription revenue can tolerate longer payback. Bootstrapped
              ecommerce stores often need much faster recovery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FULL COST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Include the full acquisition cost</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Payback should consider the marketing costs you actually use in
            your CAC definition, not only the platform CPA if there are
            material agency and creative expenses.
          </p>
        </Reveal>
      </section>

      {/* RETENTION UNCERTAINTY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch retention uncertainty</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The further into the future you project, the less certain the
              value becomes. Conservative forecasting matters.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GROWTH CONSUMES CASH */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Growth consumes cash</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Rapid new-customer acquisition can temporarily reduce cash even
            when the model is profitable. That is why scaling decisions
            should consider inventory and working capital alongside ROAS.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/cac-payback-period-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What Is CAC Payback Period in Ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/lose-money-first-order-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When Is It Okay to Lose Money on the First Shopify Order?
              </Link>
            </li>
            <li>
              <Link href="/resources/first-order-profit-vs-lifetime-value-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                First-Order Profit vs Lifetime Value: Which Should Drive Ad Spend?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-should-ecommerce-spend-to-acquire-customer" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much Should Ecommerce Brands Spend to Acquire a New Customer?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Connect growth to payback and cash flow</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you know your customer LTV but not how long it takes to
            recover acquisition cost, contact us. We can connect marketing
            growth to payback and cash flow.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
