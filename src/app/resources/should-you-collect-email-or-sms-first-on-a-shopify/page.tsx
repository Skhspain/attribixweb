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
  "headline": "Should You Collect Email or SMS First on a Shopify Popup?",
  "description": "Email generally creates less signup friction.",
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
    "@id": "https://www.attribix.app/resources/should-you-collect-email-or-sms-first-on-a-shopify"
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
      "name": "Should You Collect Email or SMS First on a...",
      "item": "https://www.attribix.app/resources/should-you-collect-email-or-sms-first-on-a-shopify"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should You Collect Email or SMS First on a..." }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Collect Email or SMS First on a Shopify Popup?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Email generally creates less signup friction. SMS can provide more immediate reach and potentially higher engagement, but customers may be more hesitant to share a phone number.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Email is usually the easier first ask</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            People are accustomed to providing email for:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>welcome offers</li>
            <li>order information</li>
            <li>product updates</li>
            <li>newsletters</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">SMS is a higher-trust channel</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Text messages feel more personal and intrusive. Make the value and expected frequency clear.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Consent requirements also deserve careful implementation based on current laws and platform rules.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Two-step forms can work</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            One approach is:
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 1: Email</h2>
            <div className="space-y-4 max-w-2xl">

            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 2: Optional SMS for an additional benefit</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            This allows customers to choose how much information they want to share.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">More data is not automatically better</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A form collecting name, email, phone, birthday and product preference may produce richer profiles and fewer completed signups.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Collect what you have a real marketing use for.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-returning-customer-revenue-can-make-your-roas-look" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Returning Customer Revenue Can Make Your ROAS Look Better Than It Is</Link></li>
            <li><Link href="/resources/new-customers-vs-returning-customers-which-should-you" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">New Customers vs Returning Customers: Which Should You Optimize For?</Link></li>
            <li><Link href="/resources/how-to-increase-repeat-purchase-rate-without-constant" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Increase Repeat Purchase Rate Without Constant Discounts</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this measured properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your lead capture asks customers for too much before they even see the store, send us an inquiry. We can help simplify the acquisition journey.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
