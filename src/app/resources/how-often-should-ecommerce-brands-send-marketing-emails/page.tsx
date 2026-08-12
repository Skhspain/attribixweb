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
  "headline": "How Often Should Ecommerce Brands Send Marketing Emails?",
  "description": "The correct email frequency is the highest cadence that continues to create incremental value without damaging list health and customer trust.",
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
    "@id": "https://www.attribix.app/resources/how-often-should-ecommerce-brands-send-marketing-emails"
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
      "name": "How Often Should Ecommerce Brands Send...",
      "item": "https://www.attribix.app/resources/how-often-should-ecommerce-brands-send-marketing-emails"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Often Should Ecommerce Brands Send..." }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Often Should Ecommerce Brands Send Marketing Emails?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              The correct email frequency is the highest cadence that continues to create incremental value without damaging list health and customer trust.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That may be one campaign a week for one brand and daily sends for another.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Frequency depends on why people subscribe</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A fast-moving fashion store has more new products and promotions to communicate than a furniture brand where customers buy every few years.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch marginal performance</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              As send frequency increases, each additional campaign may generate less revenue because you are contacting the same people more often.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Track:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>revenue per recipient</li>
              <li>clicks</li>
              <li>unsubscribes</li>
              <li>spam complaints</li>
              <li>repeat purchase</li>
              <li>total weekly revenue</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              A campaign can be profitable individually while making the next campaign less effective.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment instead of blasting everyone</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            High-engagement customers can often tolerate more communication than dormant profiles. Product interests and purchase history can also make messages more relevant.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid rules copied from other brands</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              “Three emails per week” is not a strategy. Increase or reduce cadence based on customer response and content quality.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-your-klaviyo-welcome-flow-isn-t-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Klaviyo Welcome Flow Isn&apos;t Converting</Link></li>
            <li><Link href="/resources/are-you-sending-too-many-marketing-emails" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Are You Sending Too Many Marketing Emails?</Link></li>
            <li><Link href="/resources/should-your-welcome-flow-offer-a-discount" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Your Welcome Flow Offer a Discount?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this measured properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If email frequency is increasing and attributed revenue looks good but list health is deteriorating, send us an inquiry. We can help interpret the wider customer impact.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
