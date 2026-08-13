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
  headline: "Email Popup Conversion Rate: What Should Shopify Stores Expect?",
  description: "A popup conversion rate is only useful when you understand what the visitor receives in exchange. Why traffic quality, timing and subscriber value matter more than the raw rate.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ecommerce-popup-conversion-rate" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Popup conversion rate", item: "https://www.attribix.app/resources/ecommerce-popup-conversion-rate" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Popup conversion rate" }]} />
          <Eyebrow>Creative &amp; Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Email popup conversion rate: what should Shopify stores expect?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A popup conversion rate is only useful when you understand what
            the visitor receives in exchange. A 20%-off popup will normally
            collect more emails than &ldquo;Join our newsletter.&rdquo;
            That does not automatically make it the better strategy.
          </p>
        </Reveal>
      </section>

      {/* TRAFFIC QUALITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Traffic quality changes signup behaviour</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Returning customers, cold Meta visitors and organic research
            traffic can respond very differently.
          </p>
        </Reveal>
      </section>

      {/* TIMING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Timing changes the denominator</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A popup shown immediately to every visitor is not comparable
              with an exit-intent form shown only to a subset.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HIGH CONVERSION EXPENSIVE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">High conversion can be expensive</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A 15% coupon may push signup rate higher while reducing margin
            on customers who would have purchased anyway.
          </p>
        </Reveal>
      </section>

      {/* SUBSCRIBER QUALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at subscriber quality</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Track:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>purchase rate;</li>
                <li>revenue per subscriber;</li>
                <li>unsubscribe rate;</li>
                <li>repeat purchases;</li>
                <li>discount usage.</li>
              </ul>
              <p>
                A smaller list of customers with buying intent can be worth
                more than a huge list built through aggressive incentives.
              </p>
              <p>Use benchmark rates as context, not as the objective.</p>
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
              <Link href="/resources/exit-intent-popup-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should ecommerce stores use exit-intent popups?
              </Link>
            </li>
            <li>
              <Link href="/resources/popup-discount-ecommerce-profitability" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does a 10% popup discount actually increase profit?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-collect-email-or-sms-first-on-a-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you collect email or SMS first on a Shopify popup?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-shopify-stores-use-popups" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores use popups?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know whether your subscribers become customers</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify popup collects leads but you do not know
            whether those subscribers become profitable customers, send us
            an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
