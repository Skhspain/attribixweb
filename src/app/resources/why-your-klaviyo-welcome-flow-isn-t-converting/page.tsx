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
  "headline": "Why Your Klaviyo Welcome Flow Isn't Converting",
  "description": "A welcome flow can fail because the emails are weak, but it can also fail because the subscribers themselves have little buying intent.",
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
    "@id": "https://www.attribix.app/resources/why-your-klaviyo-welcome-flow-isn-t-converting"
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
      "name": "Why Your Klaviyo Welcome Flow Isn't Converting",
      "item": "https://www.attribix.app/resources/why-your-klaviyo-welcome-flow-isn-t-converting"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Your Klaviyo Welcome Flow Isn't Converting" }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Your Klaviyo Welcome Flow Isn&apos;t Converting
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A welcome flow can fail because the emails are weak, but it can also fail because the subscribers themselves have little buying intent.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with list source</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Subscribers from a giveaway, viral quiz or aggressive popup may be much less valuable than people who joined while viewing products.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check the promise</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If the popup says “Get 15% off” and the first email arrives late or hides the code, the flow has already broken trust.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow clicks into Shopify</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Good email clicks plus weak product-page engagement suggest message mismatch. Strong product engagement plus no carts points toward offer or price. Carts without purchases shift the diagnosis to checkout.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check deliverability and timing</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A flow cannot sell if messages land in spam or arrive after the customer already purchased. Suppress recent buyers appropriately.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t overwrite the brand with email</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Five emails in two days can create fatigue before the customer develops any relationship with the store.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Diagnose subscriber quality, message, website and timing separately rather than rewriting subject lines endlessly.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-your-welcome-flow-offer-a-discount" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Your Welcome Flow Offer a Discount?</Link></li>
            <li><Link href="/resources/how-often-should-ecommerce-brands-send-marketing-emails" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Often Should Ecommerce Brands Send Marketing Emails?</Link></li>
            <li><Link href="/resources/how-many-emails-should-be-in-a-shopify-welcome-flow" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Emails Should Be in a Shopify Welcome Flow?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the flow is pulling its weight?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Klaviyo is generating clicks but the welcome audience still does not become Shopify customers, send us an inquiry. We can help trace the funnel beyond email.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
