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
  headline: "Abandoned Cart Email vs Meta Retargeting: Which Should Get the Credit?",
  description: "A cart abandoner can be recovered by email or by a Meta retargeting ad, and both systems may claim the sale. Why the right question is incremental recovery, not credit.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/abandoned-cart-email-vs-retargeting-attribution" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Cart email vs retargeting credit", item: "https://www.attribix.app/resources/abandoned-cart-email-vs-retargeting-attribution" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Cart email vs retargeting credit" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Abandoned cart email vs Meta retargeting: which should get the credit?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A shopper who abandons cart may receive an email and see a Meta
            retargeting ad before returning to buy. Both systems may claim
            the sale. Neither claim tells you perfectly which reminder
            caused the return.
          </p>
        </Reveal>
      </section>

      {/* HIGH INTENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The customer was already high intent</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Cart abandoners have demonstrated strong purchase intent before
            either recovery message. That means both email and retargeting
            naturally enjoy high conversion rates.
          </p>
        </Reveal>
      </section>

      {/* EMAIL ADVANTAGE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Email has a direct identity advantage</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If the customer provided an email during checkout, a cart flow
              can deliver specific product and checkout information without
              buying another ad impression.
            </p>
          </Reveal>
        </div>
      </section>

      {/* META REACH */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Meta can reach customers who ignore email</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Retargeting can provide visual reminder, proof or objection
            handling and may reach people who never open the message.
          </p>
        </Reveal>
      </section>

      {/* INCREMENTAL RECOVERY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The right question is incremental recovery</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Instead of deciding which dashboard deserves credit, test
              whether using both increases total recovered carts compared
              with one channel alone. Holdout groups can be useful at
              sufficient scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DO NOT DOUBLE-COUNT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not double-count recovery revenue</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            For business reporting, one Shopify order remains one order
            regardless of how many recovery channels interacted with it.
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
                <Link href="/resources/meta-ads-vs-klaviyo-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Meta Ads vs Klaviyo attribution: who gets credit for the sale?
                </Link>
              </li>
              <li>
                <Link href="/resources/how-many-abandoned-cart-emails-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How many abandoned cart emails should a Shopify store send?
                </Link>
              </li>
              <li>
                <Link href="/resources/meta-retargeting-taking-credit-for-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Meta retargeting is taking credit for too many sales: what to do
                </Link>
              </li>
              <li>
                <Link href="/resources/abandoned-cart-emails-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Why your abandoned cart emails get clicks but no sales
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Measure recovery as one customer journey</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your abandoned-cart flow and Meta retargeting both claim the
            same revenue, contact us. We can help you measure the recovery
            system as one customer journey.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
