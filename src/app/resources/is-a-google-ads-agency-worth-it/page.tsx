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
  "headline": "Is a Google Ads Agency Worth It?",
  "description": "A Google Ads agency becomes valuable when the account is important enough that search terms, Shopping feeds, bidding, tracking and budget decisions deserve specialist attention.",
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
    "@id": "https://www.attribix.app/resources/is-a-google-ads-agency-worth-it"
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
      "name": "Is a Google Ads Agency Worth It",
      "item": "https://www.attribix.app/resources/is-a-google-ads-agency-worth-it"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Is a Google Ads Agency Worth It" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Is a Google Ads Agency Worth It?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A Google Ads agency becomes valuable when the account is important enough that search terms, Shopping feeds, bidding, tracking and budget decisions deserve specialist attention.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Google Ads can look simpler than it is</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A business can launch Performance Max in minutes. That does not mean the conversion action is correct, Merchant Center is healthy or the campaign is distinguishing brand demand from new-customer acquisition.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Good agency work happens beyond bidding</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              For ecommerce, useful management can include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Search query analysis</li>
              <li>negative keywords</li>
              <li>Shopping feed work</li>
              <li>Merchant Center diagnostics</li>
              <li>PMax structure</li>
              <li>conversion tracking</li>
              <li>Enhanced Conversions</li>
              <li>landing-page analysis</li>
              <li>profit-based product allocation</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When DIY can be fine</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A small, simple campaign with low spend and an owner who understands Google Ads may not justify a recurring fee. The agency should not cost more than the problem it solves.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure the commercial difference</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Compare total cost, management time, missed opportunities and risk of bad tracking. The question is not whether an agency can produce a prettier dashboard. It is whether the business gains more profit, control or capacity.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/ad-management/google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">See how Attribix runs Google Ads management</Link></li>
            <li><Link href="/resources/is-a-meta-ads-agency-worth-it" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is a Meta Ads Agency Worth It?</Link></li>
            <li><Link href="/resources/is-an-ecommerce-marketing-agency-worth-the-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is an Ecommerce Marketing Agency Worth the Cost?</Link></li>
            <li><Link href="/resources/freelancer-vs-marketing-agency-which-should-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the engagement?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google Ads is an important sales channel but you are not confident in the structure, tracking or feed, send us an inquiry. We can review whether professional management would pay for itself.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
