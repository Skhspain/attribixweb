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
  "headline": "Why Your Best-Performing Ad May Not Be Your Best Creative",
  "description": "The ad with the most purchases may be your best commercial asset.",
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
    "@id": "https://www.attribix.app/resources/why-your-best-performing-ad-may-not-be-your-best"
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
      "name": "Why Your Best-Performing Ad May Not Be Your...",
      "item": "https://www.attribix.app/resources/why-your-best-performing-ad-may-not-be-your-best"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Your Best-Performing Ad May Not Be Your..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Your Best-Performing Ad May Not Be Your Best Creative
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              The ad with the most purchases may be your best commercial asset. It may also have benefited from more spend, easier audiences or stronger retargeting exposure.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Creative quality and observed campaign result are related, but not identical.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Delivery is not evenly distributed</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Meta may give one ad 80% of campaign spend because early signals looked promising. Another creative receives little opportunity.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Comparing raw sales totals would be unfair.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Audience context matters</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A mediocre creative shown primarily to warm customers can produce better ROAS than an excellent cold-prospecting ad.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at efficiency and quality</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Compare where possible:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>outbound CTR</li>
            <li>CPC</li>
            <li>landing-page engagement</li>
            <li>conversion rate</li>
            <li>CPA</li>
            <li>new-customer mix</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The idea matters too</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A creative may not be the account&apos;s highest-ROAS ad but may reveal a strong new angle that works across several executions.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Commercial outcome still wins</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Do not optimize toward creative “quality scores” disconnected from sales. Just understand the context behind the result before declaring one file the universal winner.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/meta-ads-hook-rate-vs-sales-which-matters-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads Hook Rate vs Sales: Which Matters More?</Link></li>
            <li><Link href="/resources/how-to-know-whether-you-have-a-creative-problem-or-an" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Know Whether You Have a Creative Problem or an Offer Problem</Link></li>
            <li><Link href="/resources/video-watch-time-is-high-but-sales-are-low-what-does" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Video Watch Time Is High but Sales Are Low: What Does That Tell You?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Commercial outcome still wins</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account has winners but you do not know what actually made them win, contact us. We can turn performance history into useful creative learning.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
