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
  headline: "Customer Retention Rate vs Repeat Purchase Rate: What's the Difference?",
  description: "Repeat purchase rate and customer retention are related but not always calculated the same way.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/retention-rate-vs-repeat-purchase-rate-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Retention rate vs repeat rate", item: "https://www.attribix.app/resources/retention-rate-vs-repeat-purchase-rate-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Retention rate vs repeat rate" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Customer retention rate vs repeat purchase rate: what&apos;s the difference?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Repeat purchase rate and customer retention are related but not
            always calculated the same way.
          </p>
        </Reveal>
      </section>

      {/* REPEAT PURCHASE RATE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Repeat purchase rate</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              A simple ecommerce version measures the percentage of
              customers who place more than one order during a period or
              cohort window. Example:
            </p>
            <p>1,000 customers.</p>
            <p>300 buy again.</p>
            <p>Repeat purchase rate = 30%.</p>
          </div>
        </Reveal>
      </section>

      {/* RETENTION RATE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Retention rate</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Retention usually asks what percentage of an original customer
              cohort remains active or returns during a defined later
              period. The exact formula varies by business model.
              Subscription brands often measure retention differently from
              transactional Shopify stores.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY DEFINITIONS MATTER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why definitions matter</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A company can report &quot;40% retention&quot; while another
            reports &quot;25% repeat purchase rate&quot; and both be
            describing healthy behaviour using different windows and
            denominators.
          </p>
        </Reveal>
      </section>

      {/* CONSISTENT COHORT VIEW */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pick a consistent cohort view</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>For ecommerce, useful reporting can include:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Percentage with second order by 90/180/365 days</li>
                <li>Time to second purchase</li>
                <li>Repeat contribution</li>
                <li>Orders per customer</li>
              </ul>
              <p>
                The metric should help you understand whether acquired
                customers become more valuable over time.
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
              <Link href="/resources/calculate-repeat-customer-value-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to Calculate Repeat Customer Value for a Shopify Store
              </Link>
            </li>
            <li>
              <Link href="/resources/repeat-purchase-rate-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why High Repeat Purchase Rate Changes Your Break-Even ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/ecommerce-retention-vs-acquisition" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Retention Can Matter More Than Improving Facebook Ads
              </Link>
            </li>
            <li>
              <Link href="/resources/cac-payback-period-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What Is CAC Payback Period in Ecommerce?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Connect retention metrics to acquisition targets</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your retention metrics look good but do not connect clearly
            to LTV or allowable acquisition cost, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
