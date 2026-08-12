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
  "headline": "When Should You Exclude Existing Customers From Meta Ads?",
  "description": "Exclude existing customers when you need a campaign to answer a new-customer acquisition question or when the advertised product is irrelevant after purchase.",
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
    "@id": "https://www.attribix.app/resources/when-should-you-exclude-existing-customers-from-meta"
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
      "name": "When Should You Exclude Existing Customers...",
      "item": "https://www.attribix.app/resources/when-should-you-exclude-existing-customers-from-meta"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "When Should You Exclude Existing Customers..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When Should You Exclude Existing Customers From Meta Ads?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Exclude existing customers when you need a campaign to answer a new-customer acquisition question or when the advertised product is irrelevant after purchase.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Prospecting measurement becomes clearer</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If a campaign is supposed to acquire new customers, including loyal repeat buyers can inflate ROAS and lower CPA.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Using appropriate customer-list or purchaser exclusions, subject to Meta&apos;s current audience capabilities and privacy requirements, can create a cleaner acquisition view.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Exclusions are imperfect</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Customer lists may not match everyone. Cookie/device limitations and account setup can leave some existing customers eligible.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Use Shopify customer data to validate the result rather than assuming the audience setting created perfect separation.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t exclude from every campaign</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Existing customers can be valuable targets for:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>complementary products</li>
            <li>replenishment</li>
            <li>launches</li>
            <li>reactivation</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Think by objective</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Prospecting campaign? Usually stronger case for exclusion.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Retention campaign? Existing customers are the point.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Make the audience match the business question.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-google-ads-send-traffic-to-a-product-page-or" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Google Ads Send Traffic to a Product Page or Collection Page?</Link></li>
            <li><Link href="/resources/what-should-be-included-in-a-google-ads-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Included in a Google Ads Management Service?</Link></li>
            <li><Link href="/resources/what-should-be-included-in-a-meta-ads-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Included in a Meta Ads Management Service?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta prospecting campaigns show great ROAS but existing customers are mixed into the results, contact us. We can help build a cleaner acquisition view.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
