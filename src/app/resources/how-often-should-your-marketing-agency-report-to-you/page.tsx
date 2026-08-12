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
  "headline": "How Often Should Your Marketing Agency Report to You?",
  "description": "Most ecommerce businesses benefit from a combination of short, frequent visibility and deeper monthly analysis.",
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
    "@id": "https://www.attribix.app/resources/how-often-should-your-marketing-agency-report-to-you"
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
      "name": "How Often Should Your Marketing Agency...",
      "item": "https://www.attribix.app/resources/how-often-should-your-marketing-agency-report-to-you"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Often Should Your Marketing Agency..." }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Often Should Your Marketing Agency Report to You?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Most ecommerce businesses benefit from a combination of short, frequent visibility and deeper monthly analysis.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Daily formal reports are usually noise. Waiting a full quarter to discuss a fast-moving ad account is too slow.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Weekly is useful for operational movement</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A short weekly update can cover:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>spend</li>
            <li>sales/leads</li>
            <li>major performance changes</li>
            <li>tests launched</li>
            <li>issues requiring client input</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Monthly is better for strategy</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A monthly review can compare broader trends, creative learnings, product performance, attribution and budget decisions without overreacting to daily volatility.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reporting frequency should reflect spend and volatility</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            An account spending $500,000 a month may need more active communication than one spending $3,000. Launch periods and promotions can also justify temporary increases in cadence.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Access matters too</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Clients should not need to wait for the agency report to know their own performance. Maintain appropriate access to ad accounts and store data.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A good reporting rhythm keeps the client informed without turning every bad Tuesday into an emergency meeting.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-often-should-you-meet-with-your-marketing-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Often Should You Meet With Your Marketing Agency?</Link></li>
            <li><Link href="/resources/what-should-you-expect-from-a-marketing-agency-every" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should You Expect From a Marketing Agency Every Month?</Link></li>
            <li><Link href="/resources/small-marketing-agency-vs-large-agency-which-is-better" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Small Marketing Agency vs Large Agency: Which Is Better?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure what you should be getting?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want agency reporting that explains decisions rather than simply exports platform numbers, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
