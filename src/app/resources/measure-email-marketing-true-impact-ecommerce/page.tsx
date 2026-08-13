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
  headline: "How to Measure the True Impact of Email Marketing",
  description: "Platform metrics, Shopify outcomes, holdout tests, profit and list health: a fuller way to measure what email actually contributes, beyond attributed revenue.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/measure-email-marketing-true-impact-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Measure email's true impact", item: "https://www.attribix.app/resources/measure-email-marketing-true-impact-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Measure email's true impact" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to measure the true impact of email marketing
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The strongest email measurement asks more than &quot;How much
            revenue did the platform attribute?&quot; It asks how customer
            behaviour changes because the emails were sent.
          </p>
        </Reveal>
      </section>

      {/* PLATFORM METRICS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with platform metrics</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Campaign and flow revenue, clicks, conversion and revenue per
            recipient help compare messages within the email program.
          </p>
        </Reveal>
      </section>

      {/* SHOPIFY OUTCOMES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Add Shopify outcomes</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Track repeat purchase rate, cohort revenue, customer lifetime
              value and overall sales. A growing email program should
              eventually appear in customer behaviour, not only the
              attribution dashboard.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOLDOUTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use holdouts when possible</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Exclude a small eligible group from a campaign or flow and
            compare purchase behaviour. The difference can provide stronger
            evidence of incremental impact than attribution alone.
          </p>
        </Reveal>
      </section>

      {/* PROFIT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure profit</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Email has creative, platform and discount costs. A 20%-off
              campaign may generate a lot of attributed revenue while
              contributing much less margin than a smaller full-price
              campaign.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LIST HEALTH */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at list health</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            More sends can increase short-term revenue and damage long-term
            engagement through unsubscribes and fatigue. Optimize the
            customer relationship, not the next campaign screenshot.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/does-klaviyo-over-attribute-revenue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Does Klaviyo over-attribute revenue?
                </Link>
              </li>
              <li>
                <Link href="/resources/how-to-measure-email-profitability-instead-of-just" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How to measure email profitability instead of just revenue
                </Link>
              </li>
              <li>
                <Link href="/resources/how-much-revenue-should-email-marketing-generate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How much revenue should email marketing generate for a Shopify store?
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Understand email alongside paid media, not on top of it</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want to understand how email contributes alongside paid
            media rather than counting the same orders twice, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
