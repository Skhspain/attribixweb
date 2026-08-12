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
  "headline": "What Is a Good Landing Page Conversion Rate for Ecommerce?",
  "description": "A good landing-page conversion rate is one that supports profitable acquisition at the cost and quality of the traffic being sent to it.",
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
    "@id": "https://www.attribix.app/resources/what-is-a-good-landing-page-conversion-rate-for"
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
      "name": "What Is a Good Landing Page Conversion Rate...",
      "item": "https://www.attribix.app/resources/what-is-a-good-landing-page-conversion-rate-for"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Is a Good Landing Page Conversion Rate..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is a Good Landing Page Conversion Rate for Ecommerce?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A good landing-page conversion rate is one that supports profitable acquisition at the cost and quality of the traffic being sent to it.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A universal percentage hides too many variables.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Traffic source matters</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Branded Google traffic may convert at 8% while cold Meta traffic converts at 2%, and both can be commercially healthy.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product price matters</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A $20 impulse product and a $2,000 purchase should not be judged against the same conversion expectation.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Offer and margin matter</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Use:
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CPA ≈ CPC ÷ conversion rate</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If CPC is $1 and conversion rate is 2%, CPA is roughly $50.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Whether 2% is good depends on whether you can afford a $50 acquisition cost.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare against your own baseline</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the same page falls from 3.5% to 1.8% after a redesign, that movement matters regardless of external benchmarks.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment before judging</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Look at device, country, campaign, new/returning visitor and product.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The useful question is not “Is 2.7% good?” It is “Is this page converting this traffic profitably, and is there evidence the rate can improve?”
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-your-landing-page-gets-clicks-but-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Landing Page Gets Clicks but No Sales</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-landing-page-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Landing Page Be?</Link></li>
            <li><Link href="/resources/when-does-an-ecommerce-brand-need-a-dedicated-landing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Does an Ecommerce Brand Need a Dedicated Landing Page?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want to know whether your landing page is actually good enough for your traffic costs, contact us. We can connect conversion rate to CPA and margin.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
