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
  "headline": "When Is a Shopify Store Ready to Advertise Internationally?",
  "description": "A store is ready for international ads when the business can deliver an experience that is competitive enough for the target market.",
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
    "@id": "https://www.attribix.app/resources/shopify-ready-for-international-ads"
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
      "name": "International Advertising Readiness",
      "item": "https://www.attribix.app/resources/shopify-ready-for-international-ads"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "International Advertising Readiness" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When Is a Shopify Store Ready to Advertise Internationally?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A store is ready for international ads when the business can deliver an experience that is competitive enough for the target market.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Advertising access is the easy part.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Domestic fundamentals should work</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            You do not need to dominate your home country, but there should be evidence that:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>customers want the product</li>
            <li>the site converts</li>
            <li>fulfilment works</li>
            <li>margins support acquisition</li>
            <li>tracking is reliable</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            International expansion does not repair weak fundamentals.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Logistics must be viable</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Know:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>shipping cost</li>
              <li>delivery time</li>
              <li>returns</li>
              <li>duties/taxes</li>
              <li>prohibited/restricted products</li>
              <li>customer service process</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Checkout should support the market</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Local currency and appropriate payment methods can matter.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The store needs measurement by market</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Separate revenue, CPA, AOV and contribution by country. A blended international ROAS can hide weak markets.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with evidence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Organic orders, customer inquiries, website traffic and search demand can point toward the strongest first expansion markets.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">A practical readiness scorecard</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl mb-6">
              Score each area honestly. A store with several &ldquo;not
              ready&rdquo; answers should fix those before spending on
              international ads, not alongside it.
            </p>
            <div className="space-y-3">
              {[
                { area: "Domestic conversion baseline", ready: "Stable conversion rate and repeat purchase for at least 2-3 months", notReady: "Domestic sales are themselves inconsistent or newly launched" },
                { area: "Shipping cost", ready: "Landed cost to the target country is known and margin-positive", notReady: "Shipping cost to the market hasn't been calculated" },
                { area: "Delivery time", ready: "Realistic delivery window is known and acceptable to that market", notReady: "Delivery time is unknown or clearly uncompetitive" },
                { area: "Duties and returns", ready: "Duties/tax handling and a return path for that country are defined", notReady: "No plan for customs, duties or return logistics" },
                { area: "Local currency and payment", ready: "Store shows local currency with locally relevant payment methods", notReady: "Checkout only supports one currency and payment method" },
                { area: "Margin after landed cost", ready: "Contribution margin holds after shipping, duties and FX", notReady: "Margin hasn't been recalculated for the new market's costs" },
                { area: "Tracking by market", ready: "Revenue, CPA and contribution can be separated by country", notReady: "Only a single blended reporting view exists" },
                { area: "Customer support", ready: "Support can handle the language and time zone", notReady: "No plan for support coverage in that market" },
                { area: "Localization", ready: "Product pages and key claims make sense in the local context", notReady: "Site is untranslated and assumes domestic context throughout" },
                { area: "Evidence of demand", ready: "Organic orders, traffic or inquiries already come from that market", notReady: "No signal the market wants the product yet" },
              ].map((row) => (
                <div key={row.area} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="font-semibold text-white text-sm">{row.area}</div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed"><span className="text-emerald-300/90">Ready:</span> {row.ready}</p>
                  <p className="mt-1 text-sm text-white/50 leading-relaxed"><span className="text-amber-300/80">Needs work:</span> {row.notReady}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/60 leading-relaxed text-sm max-w-2xl">
              Mostly &ldquo;ready&rdquo;: the market is worth a real test
              budget. A mix of ready and needs-work: fix the specific gaps
              first, since ad spend won&apos;t compensate for a landed
              price, delivery time, or checkout experience that doesn&apos;t
              hold up. Mostly needs-work: the constraint isn&apos;t
              advertising access, it&apos;s the underlying business being
              ready to serve that market at all.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-choose-which-country-to-expand-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Choose Which Country to Expand Ecommerce Ads Into Next</Link></li>
            <li><Link href="/resources/should-you-run-different-meta-creatives-for-different" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Run Different Meta Creatives for Different Countries?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need a clearer read on the funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store is performing domestically and you are considering international expansion, send us an inquiry. We can help assess whether the marketing economics are ready.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
