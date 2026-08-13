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
  "headline": "How to Build an Ecommerce Creative Testing System That Produces Useful Learnings",
  "description": "Creative testing becomes expensive when every new ad is simply another piece of content.",
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
    "@id": "https://www.attribix.app/resources/ecommerce-creative-testing-system"
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
      "name": "Ecommerce Creative Testing System",
      "item": "https://www.attribix.app/resources/ecommerce-creative-testing-system"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Ecommerce Creative Testing System" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Build an Ecommerce Creative Testing System That Produces Useful Learnings
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Creative testing becomes expensive when every new ad is simply another piece of content. A useful system turns each batch into information that makes the next batch smarter.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 1: Build a research library</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Collect:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>reviews</li>
            <li>support questions</li>
            <li>objections</li>
            <li>search terms</li>
            <li>competitor positioning</li>
            <li>organic comments</li>
            <li>past winning ads</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 2: Turn observations into hypotheses</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Bad brief:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “Make five new UGC ads.”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Better brief:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “Customers repeatedly mention that setup takes under two minutes. We think ease of setup may be a stronger acquisition angle than product quality.”
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 3: Test meaningful differences</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Build several executions around:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>problem</li>
            <li>outcome</li>
            <li>demonstration</li>
            <li>proof</li>
            <li>comparison</li>
            <li>offer</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Avoid making 20 cosmetic variations and calling it strategy.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 4: Track the whole funnel</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              For each creative, review:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>spend</li>
              <li>CPM</li>
              <li>CTR</li>
              <li>CPC</li>
              <li>landing engagement</li>
              <li>carts</li>
              <li>purchases</li>
              <li>CPA</li>
              <li>new-customer performance</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 5: Write down the learning</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Examples:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “Problem-led ads create more clicks but demonstration-led traffic converts better.”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            “Price in the creative lowers CTR and improves purchase conversion.”
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Now the next test starts from evidence.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 6: Iterate winners and keep exploring</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Develop several variations of proven concepts while reserving part of production for genuinely new angles.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Do not stop innovation because one ad works.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 7: Connect creative to business economics</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The final winner is not the ad with the highest hook rate or most comments. It is the creative that helps acquire customers at economics the business can scale.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A strong system produces both ads and understanding.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/video-watch-time-is-high-but-sales-are-low-what-does" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Video Watch Time Is High but Sales Are Low: What Does That Tell You?</Link></li>
            <li><Link href="/resources/meta-ads-hook-rate-vs-sales-which-matters-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads Hook Rate vs Sales: Which Matters More?</Link></li>
            <li><Link href="/resources/why-your-best-performing-ad-may-not-be-your-best" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Best-Performing Ad May Not Be Your Best Creative</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need a second opinion on the offer?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your team produces a constant stream of Meta creative but each week feels like starting again from zero, send us an inquiry. We can help build a more structured performance-creative process.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
