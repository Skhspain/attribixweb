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
  "headline": "What Should Be Included in a Meta Ads Management Service?",
  "description": "Meta Ads management should cover more than turning campaigns on and off.",
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
    "@id": "https://www.attribix.app/resources/what-should-be-included-in-a-meta-ads-management"
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
      "name": "What Should Be Included in a Meta Ads...",
      "item": "https://www.attribix.app/resources/what-should-be-included-in-a-meta-ads-management"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Should Be Included in a Meta Ads..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Should Be Included in a Meta Ads Management Service?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Meta Ads management should cover more than turning campaigns on and off. The quality of the result depends on the inputs around the platform too.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Core account management</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A strong service should normally address:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>account/campaign structure</li>
            <li>budgets</li>
            <li>optimization</li>
            <li>audience strategy where relevant</li>
            <li>placements</li>
            <li>testing</li>
            <li>retargeting</li>
            <li>scaling decisions</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative needs ownership</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Someone must be responsible for new concepts, briefs, production or at least performance feedback to the creative team. An agency that complains about creative fatigue but offers no creative process has only diagnosed half the problem.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Tracking should be checked</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Meta Pixel/CAPI, purchase value and Shopify discrepancies directly affect decision quality. The agency should at minimum know whether the conversion data is credible.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Landing pages matter</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If clicks are strong but the store conversion rate is poor, management should include identifying that issue rather than endlessly changing targeting.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reporting should use business context</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            ROAS, CPA and platform purchases matter, but Shopify revenue, new customers and margin should influence interpretation.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-should-be-included-in-a-google-ads-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Included in a Google Ads Management Service?</Link></li>
            <li><Link href="/resources/can-cookie-consent-reduce-your-reported-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Can Cookie Consent Reduce Your Reported ROAS?</Link></li>
            <li><Link href="/resources/why-meta-view-through-attribution-can-overvalue-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Meta View-Through Attribution Can Overvalue Meta Ads</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Attribix offers Meta Ads management with campaign, measurement and ecommerce performance considered together. Send us an inquiry if you want us to review your account.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
