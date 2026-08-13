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
  "headline": "Meta Ads Hook Rate vs Sales: Which Matters More?",
  "description": "Sales matter more if the business objective is sales.",
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
    "@id": "https://www.attribix.app/resources/meta-ads-hook-rate-vs-sales-which-matters-more"
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
      "name": "Meta Ads Hook Rate vs Sales",
      "item": "https://www.attribix.app/resources/meta-ads-hook-rate-vs-sales-which-matters-more"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Meta Ads Hook Rate vs Sales" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Hook Rate vs Sales: Which Matters More?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Sales matter more if the business objective is sales.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Hook rate is useful because it helps explain whether the opening of a video earns enough attention for the rest of the message to be seen.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              It is a diagnostic metric, not the end goal.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A high hook rate can attract the wrong people</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A dramatic visual or controversial statement may stop scrolling without creating buying intent.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A lower hook rate can still sell</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A very specific opening may appeal to fewer people and qualify exactly the customer the product needs.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use metrics in sequence</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Hook rate: Did the opening earn attention?
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Watch time: Did people stay?
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            CTR: Did they want more?
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Landing behaviour: Was the click qualified?
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Purchase: Did it sell profitably?
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t optimize the first second in isolation</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Changing an opening to improve hook rate can reduce message clarity or attract curiosity clicks.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The strongest creative metrics support the commercial outcome. They do not replace it.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/video-watch-time-is-high-but-sales-are-low-what-does" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Video Watch Time Is High but Sales Are Low: What Does That Tell You?</Link></li>
            <li><Link href="/resources/why-your-best-performing-ad-may-not-be-your-best" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Best-Performing Ad May Not Be Your Best Creative</Link></li>
            <li><Link href="/resources/ecommerce-creative-testing-system" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Build an Ecommerce Creative Testing System That Produces Useful Learnings</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Don&apos;t optimize the first second in isolation</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your creative reports focus heavily on hook rates but nobody can connect them to Shopify sales, send us an inquiry. We can build a more useful creative measurement framework.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
