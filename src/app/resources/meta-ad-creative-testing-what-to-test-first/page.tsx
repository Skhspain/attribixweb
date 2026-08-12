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
  headline: "Meta Ad Creative Testing: What Should You Test First?",
  description: "Test the selling idea before the execution: a hierarchy that produces real learning instead of a pile of assets.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ad-creative-testing-what-to-test-first" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "What to test first", item: "https://www.attribix.app/resources/meta-ad-creative-testing-what-to-test-first" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What to test first" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta ad creative testing: what should you test first?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The first creative tests should answer big commercial questions,
            not microscopic design preferences. Whether a button is blue or
            green is rarely as important as whether customers care more
            about convenience or durability.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with the selling idea</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Test different reasons to buy: problem solved; desired outcome;
            product demonstration; customer proof; comparison; price/offer;
            identity or lifestyle. If one angle clearly beats the others,
            you have learned something about customer motivation.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Then test execution</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Once a concept proves itself, explore: hook; creator; static
              vs video; opening visual; length; headline; product
              demonstration; CTA. This order prevents you from polishing a
              weak idea endlessly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep enough consistency to learn</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If Ad A has a different hook, offer, format, landing page and
            audience from Ad B, the performance difference is hard to
            interpret. You do not need laboratory-perfect tests, but avoid
            changing everything at once when learning is the goal.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Commercial metrics decide the winner</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Early creative metrics help diagnose why something works. The
              winning business creative is still the one that contributes
              profitable customers. A lower CTR with better purchase
              conversion may be more valuable than the attention-grabbing
              ad everyone likes in the creative meeting.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-tell-meta-ad-creative-problem" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to tell whether your Meta ad creative is the problem</Link></li>
            <li><Link href="/resources/good-hook-for-meta-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What is a good hook for a Meta ad?</Link></li>
            <li><Link href="/resources/how-many-variations-winning-meta-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How many variations of a winning Meta ad should you make?</Link></li>
            <li><Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta CAPI for Shopify</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Producing lots of assets but little learning?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry. We can build a testing hierarchy around the
            questions that matter commercially.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
