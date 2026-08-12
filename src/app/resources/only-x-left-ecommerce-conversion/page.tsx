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
  headline: "Does \"Only X Left\" Increase Conversion or Hurt Trust?",
  description: "\"Only 3 left\" can help a genuinely limited-stock customer decide to buy now, or make your entire store feel dishonest when the same message appears every day.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/only-x-left-ecommerce-conversion" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Only X left messaging", item: "https://www.attribix.app/resources/only-x-left-ecommerce-conversion" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Only X left messaging" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does &ldquo;only X left&rdquo; increase conversion or hurt trust?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            &ldquo;Only 3 left&rdquo; can help a genuinely limited-stock
            customer decide whether to buy now. It can also make your
            entire store feel dishonest when the same message appears
            every day.
          </p>
        </Reveal>
      </section>

      {/* REAL SCARCITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Real scarcity is information</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If only three units remain and restocking takes six weeks,
            telling customers can prevent them from postponing a purchase
            they genuinely want.
          </p>
        </Reveal>
      </section>

      {/* FAKE SCARCITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Fake scarcity trains distrust</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Customers notice when:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>&ldquo;Only 2 left&rdquo; resets;</li>
                <li>every product is supposedly almost sold out;</li>
                <li>the stock message never changes;</li>
                <li>urgency widgets contradict actual inventory.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MATCH BRAND */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Scarcity should match the brand</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A luxury or premium brand may prefer subtle stock
            communication. An event ticket or limited-edition launch
            naturally supports stronger urgency.
          </p>
        </Reveal>
      </section>

      {/* NOT ONLY METRIC */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion is not the only metric</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A deceptive scarcity tactic can increase short-term
                purchases and reduce long-term trust, repeat purchase and
                referral behaviour.
              </p>
              <p>
                Use accurate inventory information to help the customer
                decide. Do not manufacture shortages as a permanent sales
                technique.
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
              <Link href="/resources/scarcity-marketing-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is scarcity marketing hurting your ecommerce brand?
              </Link>
            </li>
            <li>
              <Link href="/resources/show-number-sold-product-page-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores show the number of products sold?
              </Link>
            </li>
            <li>
              <Link href="/resources/countdown-timer-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Do countdown timers actually improve ecommerce conversion rates?
              </Link>
            </li>
            <li>
              <Link href="/resources/social-proof-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does social proof actually increase ecommerce conversion rate?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Build urgency that customers can actually trust</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your store depends heavily on urgency tactics and you are
            worried about how they affect trust, send us an inquiry. We can
            help build stronger offers without fake pressure.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
