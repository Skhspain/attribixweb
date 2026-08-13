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
  "headline": "Are You Sending Too Many Marketing Emails?",
  "description": "You are sending too many emails when the marginal message creates less value than the fatigue it causes.",
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
    "@id": "https://www.attribix.app/resources/are-you-sending-too-many-marketing-emails"
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
      "name": "Are You Sending Too Many Marketing Emails",
      "item": "https://www.attribix.app/resources/are-you-sending-too-many-marketing-emails"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Are You Sending Too Many Marketing Emails" }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Are You Sending Too Many Marketing Emails?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              You are sending too many emails when the marginal message creates less value than the fatigue it causes.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The problem is not an arbitrary number. It is the customer response.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Signs frequency may be too high</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>unsubscribe rate rising</li>
            <li>spam complaints increasing</li>
            <li>revenue per recipient declining</li>
            <li>click rate falling across comparable campaigns</li>
            <li>customers complaining about volume</li>
            <li>promotions needing deeper discounts to get attention</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution can hide fatigue</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If a customer clicks one of five weekly emails and buys, the platform can attribute the sale to email. That does not show whether sending five messages was better than sending three.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test cadence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Compare customer groups with different send frequency when scale allows. Look at total purchase behaviour across several weeks, not only campaign-level revenue.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Improve relevance before volume</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Segmentation, product interest and lifecycle timing often create more value than another generic campaign to the full list.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              More emails are not inherently bad. Repetitive, irrelevant emails are.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/high-email-open-rate-low-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Email Open Rate Is High but Sales Are Low: What Does That Mean?</Link></li>
            <li><Link href="/resources/how-often-should-ecommerce-brands-send-marketing-emails" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Often Should Ecommerce Brands Send Marketing Emails?</Link></li>
            <li><Link href="/resources/why-your-klaviyo-welcome-flow-isn-t-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Klaviyo Welcome Flow Isn&apos;t Converting</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clearer read on retention?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your email dashboard rewards more sends but customer engagement is slipping, contact us. We can help evaluate channel contribution in the wider Shopify picture.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
