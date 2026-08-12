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
  "headline": "Welcome Flow vs Campaigns: Where Should Ecommerce Brands Focus First?",
  "description": "If the store has steady new list growth, a strong welcome flow is one of the first email assets worth building because every future subscriber can experience it automatically.",
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
    "@id": "https://www.attribix.app/resources/welcome-flow-vs-campaigns-where-should-ecommerce"
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
      "name": "Welcome Flow vs Campaigns",
      "item": "https://www.attribix.app/resources/welcome-flow-vs-campaigns-where-should-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Welcome Flow vs Campaigns" }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Welcome Flow vs Campaigns: Where Should Ecommerce Brands Focus First?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              If the store has steady new list growth, a strong welcome flow is one of the first email assets worth building because every future subscriber can experience it automatically.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Campaigns remain essential for launches, promotions, content and ongoing customer contact. The question is sequencing, not choosing one forever.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build the evergreen foundation</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A welcome flow can explain:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>why the brand exists</li>
            <li>best products</li>
            <li>social proof</li>
            <li>key objections</li>
            <li>welcome offer where appropriate</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Once it works, it keeps helping new subscribers without requiring a new send every week.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Campaigns create current demand</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              They respond to seasonality, stock, launches and customer interests. They also provide fast feedback about which products and messages resonate.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Learn between the two</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A campaign that repeatedly performs well can inspire evergreen flow content. A strong welcome email can suggest ad angles.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not judge only attributed revenue</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Flows often touch high-intent new subscribers automatically and can report impressive revenue. Campaigns reach broader list segments. Compare the jobs, not only the dashboard percentage.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-many-emails-should-be-in-a-shopify-welcome-flow" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Emails Should Be in a Shopify Welcome Flow?</Link></li>
            <li><Link href="/resources/should-your-welcome-flow-offer-a-discount" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Your Welcome Flow Offer a Discount?</Link></li>
            <li><Link href="/resources/why-your-klaviyo-welcome-flow-isn-t-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Klaviyo Welcome Flow Isn&apos;t Converting</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the flow is pulling its weight?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your email and paid-media reports overlap heavily, contact us. We can help keep channel measurement grounded in actual Shopify revenue.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
