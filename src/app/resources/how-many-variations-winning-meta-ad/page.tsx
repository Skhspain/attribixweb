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
  headline: "How Many Variations of a Winning Meta Ad Should You Make?",
  description:
    "There's no magic number. How to find the element that made a Meta ad win, iterate one layer at a time, and avoid burning a winning concept on cosmetic edits.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/how-many-variations-winning-meta-ad",
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Winning Ad Variations",
      item: "https://www.attribix.app/resources/how-many-variations-winning-meta-ad",
    },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Winning Ad Variations" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Many Variations of a Winning Meta Ad Should You Make?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When an ad wins, the next step is not necessarily to make 30
            copies of it. The goal is to discover why it won and preserve
            that reason while exploring new executions.
          </p>
        </Reveal>
      </section>

      {/* IDENTIFY THE WINNING ELEMENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Identify the likely winning element</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Was it:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
            <li>The customer problem</li>
            <li>A strong demonstration</li>
            <li>The creator</li>
            <li>An offer</li>
            <li>A testimonial</li>
            <li>A surprising opening</li>
            <li>The product itself</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            If you do not know, your variations should help answer that.
          </p>
        </Reveal>
      </section>

      {/* CHANGE ONE LAYER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Change one meaningful layer at a time</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              You might keep the same core script and test three opening
              hooks. Or keep the hook and change the proof section. Or turn
              the winning video idea into a static image.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              This creates a family of related creatives rather than random
              copies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DON'T EXHAUST WITH COSMETIC EDITS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t exhaust the idea with cosmetic edits</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Twenty videos with slightly different subtitles are unlikely to
            create the same value as three genuinely different executions of
            the core concept.
          </p>
        </Reveal>
      </section>

      {/* KEEP EXPLORING NEW ANGLES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep exploring new angles too</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Iteration protects and extends a winner, but an account also
              needs fresh concepts. Otherwise every creative eventually
              traces back to one idea, and the business has no replacement
              when customer response changes.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              There is no magic number. Build enough variations to
              understand and extend the winning concept, then move
              production toward the next meaningful hypothesis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/why-winning-meta-creatives-stop-working" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why winning Meta ad creatives stop working
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-reuse-old-winning-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you reuse old winning Meta ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ad-creative-testing-what-to-test-first" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta ad creative testing: what to test first
              </Link>
            </li>
            <li>
              <Link href="/resources/how-often-change-meta-ad-creatives" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How often should you change Meta ad creatives?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Turn one winning ad into a creative system</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you have one winning Meta ad and do not know how to turn it
            into a repeatable creative system, contact us. We can help build
            structured iterations without losing the original insight.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
