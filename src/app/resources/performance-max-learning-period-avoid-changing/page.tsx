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
  "headline": "Performance Max Learning Period: What Should You Avoid Changing?",
  "description": "The fastest way to make a new automated campaign impossible to understand is to change several important inputs every few days.",
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
    "@id": "https://www.attribix.app/resources/performance-max-learning-period-avoid-changing"
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
      "name": "Performance Max Learning Period",
      "item": "https://www.attribix.app/resources/performance-max-learning-period-avoid-changing"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Performance Max Learning Period" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Performance Max Learning Period: What Should You Avoid Changing?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The fastest way to make a new automated campaign impossible to understand is to change several important inputs every few days.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid unnecessary major edits</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Depending on Google&apos;s current system, significant changes to budget, bidding targets, conversion goals, product structure and other core settings can alter delivery and learning. That does not mean &quot;never touch PMax.&quot; It means distinguish optimization from impatience.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Fix errors immediately</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Do not protect the learning period if: tracking is broken; feed prices are wrong; products are disapproved; conversion actions are incorrect; the campaign is targeting the wrong market. Correct data matters more than uninterrupted learning.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Change one major thing for a reason</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If the campaign is constrained by a very aggressive ROAS target, adjust that deliberately and observe the result. Do not simultaneously add a large budget increase, restructure asset groups and replace the feed.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep a change log</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Record when major edits happen. When performance moves later, this makes diagnosis much easier than relying on memory. A stable campaign is easier to evaluate, but stability is not the objective by itself. Accurate signals and profitable delivery are.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-long-run-performance-max-before-judging" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should a New Performance Max Campaign Run Before You Judge It?</Link></li>
            <li><Link href="/resources/performance-max-vs-meta-ads-new-product-launch" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max vs Meta Ads for New Product Launches</Link></li>
            <li><Link href="/resources/performance-max-brand-search-overspending" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Is Overspending on Branded Searches: What to Do</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if the number is actually good?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your PMax campaign is constantly being edited and no one can tell which changes helped, send us an inquiry. We can simplify the management process.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
