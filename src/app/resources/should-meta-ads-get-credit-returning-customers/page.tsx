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
  headline: "Should Meta Ads Get Credit for Returning Customer Purchases?",
  description: "Meta can legitimately claim a returning-customer conversion under its attribution model, but that doesn't mean the ad caused the purchase.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/should-meta-ads-get-credit-returning-customers" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Meta ads returning customers", item: "https://www.attribix.app/resources/should-meta-ads-get-credit-returning-customers" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Meta ads returning customers" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Meta ads get credit for returning customer purchases?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Sometimes yes, sometimes only partly. A returning customer can
            genuinely be influenced by a Meta ad: they may discover a new
            product, remember to reorder or respond to a promotion they
            would otherwise have missed. The problem is assuming every
            repeat purchase attributed to Meta was caused by Meta.
          </p>
        </Reveal>
      </section>

      {/* EXISTING INTENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Existing customers already have intent</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A previous buyer knows the brand and may have planned to reorder
            regardless of advertising. That makes repeat-customer campaigns
            naturally efficient.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION FOLLOWS INTERACTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution still follows the interaction</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If the customer clicks a Meta ad and purchases, Meta can
              legitimately claim the conversion under its attribution model.
              That tells you the ad was part of the path. It does not tell
              you what would have happened without it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEPARATE ACQUISITION AND RETENTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate acquisition and retention</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Useful reporting can include:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>New-customer Meta revenue</li>
              <li>Returning-customer Meta revenue</li>
              <li>New-customer CPA</li>
              <li>Repeat-customer CPA</li>
              <li>Total Meta ROAS</li>
            </ul>
            <p>
              That lets you see whether Meta is expanding the customer base
              or mainly monetizing people already acquired. That's the same
              split covered in{" "}
              <Link href="/resources/meta-ads-new-customer-acquisition-measurement" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                measuring new customer acquisition on Meta
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>

      {/* TEST WHERE POSSIBLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test where possible</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Existing-customer holdouts or geographic comparisons can help
              estimate whether paid reminders add meaningful incremental
              purchases. The right answer is not &quot;never give Meta
              credit for returning customers.&quot; It is &quot;do not
              confuse repeat-customer attribution with new-customer
              acquisition.&quot;
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
              <Link href="/resources/meta-ads-new-customer-acquisition-measurement" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads New Customer Acquisition: How Should You Measure It?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-retargeting-taking-credit-for-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Retargeting Is Taking Credit for Too Many Sales: What to Do
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-retarget-website-visitors-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should You Retarget Website Visitors on Meta Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to Calculate True ROAS on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know how much of that revenue is actually new</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta reports strong revenue but you do not know how much
            comes from existing customers, send us an inquiry. We can help
            separate the two.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
