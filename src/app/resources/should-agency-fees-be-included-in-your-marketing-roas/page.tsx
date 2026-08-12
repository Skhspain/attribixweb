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
  "headline": "Should Agency Fees Be Included in Your Marketing ROAS?",
  "description": "Platform ROAS should normally remain a simple campaign metric: attributed revenue divided by media spend.",
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
    "@id": "https://www.attribix.app/resources/should-agency-fees-be-included-in-your-marketing-roas"
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
      "name": "Should Agency Fees Be Included in Your...",
      "item": "https://www.attribix.app/resources/should-agency-fees-be-included-in-your-marketing-roas"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Agency Fees Be Included in Your..." }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Agency Fees Be Included in Your Marketing ROAS?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Platform ROAS should normally remain a simple campaign metric: attributed revenue divided by media spend. If you quietly add agency fees to one platform&apos;s denominator, it becomes difficult to compare with standard platform reporting.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              For business profitability, agency fees absolutely matter.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use layers of reporting</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Platform ROAS: attributed revenue ÷ ad spend.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Blended marketing efficiency: store revenue ÷ total paid-media spend.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Fully loaded acquisition economics: include agency, creative, software or payroll according to the business question.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why separation helps</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If Meta ROAS falls because agency cost was added but Google ROAS does not include its management cost, the comparison is misleading.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Agency fees affect CAC</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A store spending $20,000 on ads plus $3,000 management is spending $23,000 to support acquisition, not $20,000. Fully loaded new-customer CAC should reflect that if you are evaluating total economics.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Keep platform metrics clean and add service costs at the business layer.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-often-should-you-meet-with-your-marketing-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Often Should You Meet With Your Marketing Agency?</Link></li>
            <li><Link href="/resources/how-often-should-your-marketing-agency-report-to-you" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Often Should Your Marketing Agency Report to You?</Link></li>
            <li><Link href="/resources/what-should-you-expect-from-a-marketing-agency-every" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should You Expect From a Marketing Agency Every Month?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure what you should be getting?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your marketing reports show strong platform ROAS but ignore the cost of actually operating the channel, send us an inquiry. We can build a layered profitability view.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
