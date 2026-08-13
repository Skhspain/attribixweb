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
  headline: "Does Klaviyo Over-Attribute Revenue?",
  description: "Klaviyo can attribute more revenue to email than is truly incremental. Why loyal customers and channel overlap inflate the number, and how to test for real lift.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/does-klaviyo-over-attribute-revenue" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Klaviyo over-attribution", item: "https://www.attribix.app/resources/does-klaviyo-over-attribute-revenue" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Klaviyo over-attribution" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does Klaviyo over-attribute revenue?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Klaviyo can attribute more revenue to email than you would
            consider truly incremental. That does not necessarily mean the
            platform is &quot;wrong.&quot; It means attribution and
            causation are different.
          </p>
        </Reveal>
      </section>

      {/* RULES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution follows rules</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If a customer interacts with a message and later buys within the
            eligible window, the system can assign revenue according to that
            model.
          </p>
        </Reveal>
      </section>

      {/* LOYAL CUSTOMERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Loyal customers create a challenge</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Email subscribers are often existing customers with high
              purchase intent. They may have reordered even without the
              campaign. Attribution cannot directly observe that alternate
              outcome.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OVERLAP */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Overlap is normal</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A purchase can appear in Klaviyo, Meta and Google simultaneously.
            Adding those revenue figures together will overstate actual
            store sales.
          </p>
        </Reveal>
      </section>

      {/* EXPERIMENTS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use experiments for stronger evidence</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                For larger lists, holdout groups and controlled send tests
                can help estimate incremental lift. Compare total Shopify
                revenue/customer behaviour, not only the email dashboard.
              </p>
              <p>
                The best use of Klaviyo attribution is to compare email
                activity consistently while keeping the wider business
                context visible.
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
              <Link href="/resources/klaviyo-revenue-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Klaviyo revenue looks too high: is email taking too much credit?
              </Link>
            </li>
            <li>
              <Link href="/resources/klaviyo-attribution-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Klaviyo attribution explained for Shopify stores
              </Link>
            </li>
            <li>
              <Link href="/resources/measure-email-marketing-true-impact-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to measure the true impact of email marketing
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-measure-email-profitability-instead-of-just" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to measure email profitability instead of just revenue
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Separate attributed revenue from business lift</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Klaviyo revenue looks far stronger than the actual change in
            Shopify sales, send us an inquiry. We can help separate
            attributed revenue from business lift.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
