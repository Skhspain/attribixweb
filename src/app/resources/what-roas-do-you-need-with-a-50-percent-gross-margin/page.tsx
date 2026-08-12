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
  "headline": "What ROAS Do You Need With a 50% Gross Margin?",
  "description": "At a true 50% margin before advertising, the simple break-even ROAS is:",
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
    "@id": "https://www.attribix.app/resources/what-roas-do-you-need-with-a-50-percent-gross-margin"
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
      "name": "What ROAS Do You Need With a 50% Gross Margin",
      "item": "https://www.attribix.app/resources/what-roas-do-you-need-with-a-50-percent-gross-margin"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What ROAS Do You Need With a 50% Gross Margin" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What ROAS Do You Need With a 50% Gross Margin?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              At a true 50% margin before advertising, the simple break-even ROAS is:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              1 ÷ 0.50 = 2.0x = 200%.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Spend $100 on ads, generate $200 revenue, and 50% margin leaves $100 to cover the advertising.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">True contribution is usually lower than headline gross margin</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If payment, fulfilment, shipping and returns consume another 10% of revenue, contribution before ads may be 40%. Break-even then rises to 2.5x / 250%.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Target above break-even</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A business operating at 200% when 200% is true break-even creates no first-order contribution for overhead or profit. Set a target that reflects what the company needs to retain.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not over-protect ROAS</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            At 50%+ contribution, there may be room to scale at a lower ROAS than the account currently achieves. A 500% campaign at low spend is not necessarily better than a 350% campaign that produces much more profit.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Use margin to define the floor and marginal profit to decide scale.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-discounts-change-your-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Discounts Change Your Break-Even ROAS</Link></li>
            <li><Link href="/resources/what-roas-do-you-need-with-a-30-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What ROAS Do You Need With a 30% Gross Margin?</Link></li>
            <li><Link href="/resources/how-refunds-affect-your-true-advertising-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Refunds Affect Your True Advertising ROAS</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if ROAS is telling the full story?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your business has healthy margins but campaigns are being held back by an unnecessarily high ROAS target, send us an inquiry. We can model the scaling range.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
