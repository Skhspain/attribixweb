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
  headline: "Meta Pixel Helper Shows Multiple Pixels: Is That a Problem?",
  description: "Multiple Pixels on a site aren't automatically wrong. The problem is when nobody knows why they're there.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-pixel-helper-multiple-pixels" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Multiple Meta Pixels", item: "https://www.attribix.app/resources/meta-pixel-helper-multiple-pixels" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Multiple Meta Pixels" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Pixel Helper shows multiple Pixels: is that a problem?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Multiple Pixels on a site are not automatically wrong.
            Agencies, old accounts, separate business units or apps can
            legitimately create more than one dataset. The problem is when
            nobody knows why they are there.
          </p>
        </Reveal>
      </section>

      {/* WHO OWNS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ask who owns each Pixel</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Identify:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Pixel/dataset ID;</li>
              <li>Business Manager owner;</li>
              <li>integration sending it;</li>
              <li>events it receives;</li>
              <li>campaigns using it.</li>
            </ul>
            <p>
              An old Pixel that still receives Purchase events can create
              confusing reports even if current campaigns optimize toward
              another one.
            </p>
          </div>
        </Reveal>
      </section>

      {/* DUPLICATE ACROSS PIXELS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check whether events duplicate across Pixels</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If two Pixels each record the same Shopify orders, each
              account can show purchase data. That is different from one
              Pixel counting the same purchase twice, but it still makes
              measurement harder.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMMON CAUSE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Native app + manual code is a common cause</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A store may have Meta&apos;s Shopify integration plus an old
            theme script or GTM tag. Removing anything blindly can break
            live campaigns, so map the implementation first.
          </p>
        </Reveal>
      </section>

      {/* CONSOLIDATE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consolidate when practical</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A clean tracking architecture is easier to audit and
              maintain. Keep multiple Pixels only when there is a real
              business reason.
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
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify: full setup overview
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-capi-event-id-deduplication" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why purchase event IDs matter for Meta CAPI
              </Link>
            </li>
            <li>
              <Link href="/resources/fix-duplicate-meta-purchases-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to fix duplicate purchases in Meta Ads for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-tag-assistant-shows-multiple-google-tags-what" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Tag Assistant shows multiple Google tags: what does it mean?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Map and clean the Pixel setup safely</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store shows several Meta Pixels and no one is
            sure which one is correct, send us an inquiry. We can map and
            clean the setup safely.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
