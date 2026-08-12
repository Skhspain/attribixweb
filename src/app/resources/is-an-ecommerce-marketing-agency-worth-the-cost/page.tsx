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
  "headline": "Is an Ecommerce Marketing Agency Worth the Cost?",
  "description": "An ecommerce agency is worth the cost when it solves a problem more valuable than the fee.",
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
    "@id": "https://www.attribix.app/resources/is-an-ecommerce-marketing-agency-worth-the-cost"
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
      "name": "Is an Ecommerce Marketing Agency Worth the Cost",
      "item": "https://www.attribix.app/resources/is-an-ecommerce-marketing-agency-worth-the-cost"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Is an Ecommerce Marketing Agency Worth the Cost" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Is an Ecommerce Marketing Agency Worth the Cost?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              An ecommerce agency is worth the cost when it solves a problem more valuable than the fee. The strongest agencies do not merely operate ad platforms. They understand how traffic, product economics, website conversion and measurement interact.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The fee is only one cost</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Keeping marketing in-house can involve salaries, recruitment, management time, creative resources, analytics and specialist tools. Outsourcing can bundle some of those capabilities, but you sacrifice some day-to-day control and internal knowledge.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at your bottleneck</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If the store has no clear offer or very little demand, paying an agency to “optimize Meta” may not help. If the business already spends heavily and has strong products but lacks advertising expertise, the opportunity is different.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Evaluate the operating model</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Ask:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>who actually works on the account</li>
            <li>whether creative is included</li>
            <li>how often performance is reviewed</li>
            <li>who owns data/accounts</li>
            <li>how tracking is handled</li>
            <li>whether fees rise automatically with spend</li>
            <li>contract flexibility</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use profit, not promises</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Avoid agencies guaranteeing unrealistic ROAS or sales outcomes they cannot control. A credible partner should be willing to discuss margins, website conversion and uncertainty.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/freelancer-vs-marketing-agency-which-should-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?</Link></li>
            <li><Link href="/resources/is-a-google-ads-agency-worth-it" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is a Google Ads Agency Worth It?</Link></li>
            <li><Link href="/resources/small-marketing-agency-vs-large-agency-which-is-better" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Small Marketing Agency vs Large Agency: Which Is Better?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need clarity on what&apos;s included?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are deciding whether to keep ecommerce marketing in-house or bring in a specialist team, send us an inquiry. We can discuss the actual workload and economics before recommending a setup.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
