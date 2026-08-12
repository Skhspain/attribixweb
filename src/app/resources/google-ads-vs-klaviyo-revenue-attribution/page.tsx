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
  headline: "Google Ads vs Klaviyo Revenue: Why Both Can Claim the Same Customer",
  description: "A customer can click a Klaviyo email, then search the brand on Google and buy. Why Google Ads and Klaviyo can both attribute the same order, especially around branded Search.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-vs-klaviyo-revenue-attribution" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Google vs Klaviyo revenue", item: "https://www.attribix.app/resources/google-ads-vs-klaviyo-revenue-attribution" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google vs Klaviyo revenue" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads vs Klaviyo revenue: why both can claim the same customer
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A customer can click a Klaviyo email, later search the brand on
            Google and purchase. Google Ads and Klaviyo can both attribute
            that order under their respective rules.
          </p>
        </Reveal>
      </section>

      {/* DIFFERENT INTERACTIONS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The systems observe different interactions</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Klaviyo sees message engagement. Google sees advertising
            interactions. Neither automatically knows which interaction was
            indispensable to the purchase.
          </p>
        </Reveal>
      </section>

      {/* BRANDED SEARCH */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Branded Search makes overlap especially common</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Email can create or reactivate interest, after which the
              customer searches the brand. Google then captures high-intent
              demand at the end of the journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEPARATE OPTIMIZATION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate channel optimization from business attribution</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Use Google Ads reporting to manage Google campaigns and Klaviyo
            reporting to compare email activity. For overall budgeting, do
            not add their attributed revenues together.
          </p>
        </Reveal>
      </section>

      {/* SEQUENCE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at the sequence</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Customer-journey data, where available, can show whether email
              tends to precede branded Search. That insight may affect how
              you value the two channels even if perfect causal credit is
              impossible.
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
              <Link href="/resources/meta-ads-vs-klaviyo-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads vs Klaviyo attribution: who gets credit for the sale?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-bid-on-your-brand-name-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores bid on their own brand name?
              </Link>
            </li>
            <li>
              <Link href="/resources/google-brand-campaign-taking-credit-organic-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is your Google Ads brand campaign taking credit for organic sales?
              </Link>
            </li>
            <li>
              <Link href="/resources/klaviyo-attribution-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Klaviyo attribution explained for Shopify stores
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Reconcile the combined claims against Shopify</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If branded Google and Klaviyo both look incredibly profitable
            but Shopify revenue does not support the combined claims, send
            us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
