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
  headline: "What Is a Good Hook for a Meta Ad?",
  description:
    "The hook categories that actually qualify buyers on Meta (problem, outcome, demonstration, proof and objection) and how to test them properly.",
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
    "@id": "https://www.attribix.app/resources/good-hook-for-meta-ad",
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
      name: "Good Hook for Meta Ads",
      item: "https://www.attribix.app/resources/good-hook-for-meta-ad",
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
              { label: "Good Hook for Meta Ads" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is a Good Hook for a Meta Ad?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A good hook is not a clever sentence. It is the first piece of
            information that makes the right person think, &ldquo;This might
            be for me.&rdquo; The best hook therefore depends on what your
            customer already cares about.
          </p>
        </Reveal>
      </section>

      {/* HOOK CATEGORIES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Useful hook categories</h2>
          <ul className="space-y-3 text-sm text-white/60 list-disc pl-5">
            <li>
              <span className="text-white/80 font-semibold">Problem: </span>
              &ldquo;Still waking up with a stiff neck?&rdquo; Works when the
              pain is familiar and urgent.
            </li>
            <li>
              <span className="text-white/80 font-semibold">Outcome: </span>
              &ldquo;Pack a week&apos;s clothes into one carry-on.&rdquo;
              Works when the desired result is easy to visualize.
            </li>
            <li>
              <span className="text-white/80 font-semibold">Demonstration: </span>
              Show the product solving the problem immediately. Often
              stronger than explaining it.
            </li>
            <li>
              <span className="text-white/80 font-semibold">Proof: </span>
              &ldquo;12,000 runners have switched to&hellip;&rdquo; Only use
              claims you can substantiate.
            </li>
            <li>
              <span className="text-white/80 font-semibold">Objection: </span>
              &ldquo;Yes, it works on induction.&rdquo; Useful when one
              concern repeatedly blocks purchases.
            </li>
          </ul>
        </Reveal>
      </section>

      {/* AVOID EVERYBODY HOOKS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid hooks that attract everybody</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              &ldquo;Wait until you see this!&rdquo; may create attention
              while qualifying nobody. The more disconnected the hook is from
              the buying reason, the greater the risk of cheap, useless
              traffic.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOOK AND BODY MUST AGREE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The hook and body must agree</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If the opening promises a dramatic solution but the product page
            feels unrelated, CTR can be high and sales poor. Good hooks
            create curiosity within the product&apos;s real value
            proposition.
          </p>
        </Reveal>
      </section>

      {/* TEST IDEAS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test ideas, not just wording</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Changing &ldquo;Tired of X?&rdquo; to &ldquo;Sick of X?&rdquo;
              is a small copy test. A real hook test compares different
              motivations: pain, proof, demonstration, price, convenience,
              identity.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The hook earns the next second. The rest of the ad earns the
              click and sale.
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
              <Link href="/resources/meta-ad-creative-testing-what-to-test-first" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta ad creative testing: what should you test first?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/static-images-vs-video-ads-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Static images vs video ads for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/resources/ugc-ads-vs-product-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                UGC ads vs product ads: which converts better?
              </Link>
            </li>
            <li>
              <Link href="/ad-management/meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads management
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Testing hooks without learning what sells?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta team is producing dozens of hook variations without
            learning which customer motivations actually sell, contact us.
            We can build tests around real buying reasons.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
