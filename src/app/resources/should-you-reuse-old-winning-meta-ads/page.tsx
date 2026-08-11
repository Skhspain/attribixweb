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
  headline: "Should You Reuse Old Winning Meta Ads?",
  description:
    "Old winners are worth retesting, but not guaranteed to win again. Why they can work a second time, why they might fail, and how to treat your creative history as a research library.",
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
    "@id": "https://www.attribix.app/resources/should-you-reuse-old-winning-meta-ads",
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
      name: "Reusing Old Winning Ads",
      item: "https://www.attribix.app/resources/should-you-reuse-old-winning-meta-ads",
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
              { label: "Reusing Old Winning Ads" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Reuse Old Winning Meta Ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Yes, old winning creatives are worth retesting. No, they are not
            guaranteed to become winners again.
          </p>
        </Reveal>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Customers forget. Audiences refresh. Seasons change. A creative
            that became tired six months ago may feel new to a large part of
            today&apos;s reachable audience.
          </p>
        </Reveal>
      </section>

      {/* WHY THEY CAN WORK AGAIN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why old ads can work again</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
              <li>New customers entered the market</li>
              <li>Your audience expanded</li>
              <li>Frequency reset over time</li>
              <li>The product returned to season</li>
              <li>The offer improved</li>
              <li>The old angle is still fundamentally strong</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WHY THEY MIGHT FAIL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why they might fail</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The competitive environment may have changed. The creative may
            look dated. Customer objections may be different. Meta&apos;s
            delivery and placements evolve. Your price may be less
            attractive now.
          </p>
        </Reveal>
      </section>

      {/* RETEST THE IDEA */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Retest the idea, not only the file</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Sometimes the best move is to remake the old winner:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
              <li>Cleaner opening</li>
              <li>New creator</li>
              <li>Updated product footage</li>
              <li>Current offer</li>
              <li>Shorter edit</li>
              <li>Stronger proof</li>
            </ul>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              That preserves the proven selling concept without assuming the
              original execution is timeless.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RESEARCH LIBRARY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Treat historical winners as a research library</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Review them regularly. Ask what customer motivation each winner
            addressed and whether that motivation still exists. The answer
            can save a lot of unnecessary creative guessing.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/how-many-variations-winning-meta-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many variations of a winning Meta ad should you make?
              </Link>
            </li>
            <li>
              <Link href="/resources/why-winning-meta-creatives-stop-working" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why winning Meta ad creatives stop working
              </Link>
            </li>
            <li>
              <Link href="/resources/how-often-change-meta-ad-creatives" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How often should you change Meta ad creatives?
              </Link>
            </li>
            <li>
              <Link href="/resources/good-hook-for-meta-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good hook for a Meta ad?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Turn old winners into a testing backlog</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you have years of Meta creative history but no system for
            extracting what actually worked, contact us. We can turn old
            winners into a structured testing backlog.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
