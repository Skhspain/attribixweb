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
  "headline": "How Many Emails Should Be in a Shopify Welcome Flow?",
  "description": "A welcome flow should stop when it has said the important things, not when it reaches a template's recommended email count.",
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "author": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.attribix.app/assets/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/how-many-emails-should-be-in-a-shopify-welcome-flow"
  }
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.attribix.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.attribix.app/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How Many Emails Should Be in a Shopify...",
      "item": "https://www.attribix.app/resources/how-many-emails-should-be-in-a-shopify-welcome-flow"
    }
  ]
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Many Emails Should Be in a Shopify..." }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Many Emails Should Be in a Shopify Welcome Flow?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A welcome flow should stop when it has said the important things, not when it reaches a template&apos;s recommended email count.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              For many ecommerce brands, three to six focused messages can cover the core journey without exhausting a new subscriber.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Give each email a reason to exist</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Possible sequence:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>Deliver the promised signup benefit and introduce the brand</li>
            <li>Explain the key product/value proposition</li>
            <li>Show proof or customer stories</li>
            <li>Handle a common objection</li>
            <li>Introduce best sellers or use cases</li>
            <li>Close a genuine welcome offer if one exists</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            You may need fewer or more depending on product complexity.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Adjust timing to buying cycle</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A grocery item and a luxury watch should not use the same cadence.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch engagement decay</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If emails five and six generate almost no clicks and higher unsubscribes, they may not deserve to remain simply because the flow “should” have six messages.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid repetitive discount reminders</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A welcome flow should build value, not teach every new subscriber to wait for a coupon.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/welcome-flow-vs-campaigns-where-should-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Welcome Flow vs Campaigns: Where Should Ecommerce Brands Focus First?</Link></li>
            <li><Link href="/resources/should-your-welcome-flow-offer-a-discount" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Your Welcome Flow Offer a Discount?</Link></li>
            <li><Link href="/resources/why-your-klaviyo-welcome-flow-isn-t-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Klaviyo Welcome Flow Isn&apos;t Converting</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this measured properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your welcome flow is long but you do not know which messages actually contribute to customer behaviour, send us an inquiry. We can help interpret the measurement alongside Shopify.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
