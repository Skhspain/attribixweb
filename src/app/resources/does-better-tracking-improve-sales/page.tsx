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
  headline: "Why More Accurate Tracking Doesn't Automatically Create More Sales",
  description: "Better tracking can improve decisions. It cannot make a weak product, bad offer or poor website convert by itself.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/does-better-tracking-improve-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Does better tracking improve sales", item: "https://www.attribix.app/resources/does-better-tracking-improve-sales" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Does better tracking improve sales" }]} />
          <Eyebrow>Tracking &amp; Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why more accurate tracking doesn&apos;t automatically create more sales
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Better tracking can improve decisions. It cannot make a weak
            product, bad offer or poor website convert by itself. This
            matters because tracking solutions are sometimes marketed as
            though installing server-side events will instantly restore
            lost ROAS.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT CAN DO */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What better measurement can do</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Accurate signals can help:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>ad platforms optimize toward real purchases;</li>
              <li>marketers identify profitable campaigns;</li>
              <li>budgets move away from waste;</li>
              <li>discrepancies become easier to diagnose;</li>
              <li>customer journeys become clearer.</li>
            </ul>
            <p>Those improvements can influence future sales indirectly.</p>
          </div>
        </Reveal>
      </section>

      {/* WHAT IT CANNOT DO */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What it cannot do</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Tracking cannot:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>create customer demand;</li>
                <li>lower an uncompetitive price;</li>
                <li>repair a poor product page;</li>
                <li>produce new creative;</li>
                <li>remove checkout friction;</li>
                <li>guarantee attribution of every order.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REPORTING IMPROVED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Sometimes &quot;performance improved&quot; because reporting improved</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              If CAPI restores missing purchase events, Meta-reported ROAS
              can rise even if Shopify sales stay unchanged. That is a
              measurement improvement, not necessarily a revenue increase.
            </p>
            <p>Both are valuable, but they should be described honestly.</p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/can-server-side-tracking-improve-ad-performance" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Can server-side tracking improve ad performance?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-server-side-tracking-guide" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Shopify server-side tracking works
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-consent-mode-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Consent Mode on Shopify: why Google Ads conversions may change
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know which problem you actually have</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you cannot tell whether your marketing problem is tracking
            or actual campaign performance, contact us. That distinction is
            exactly what we help diagnose.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
