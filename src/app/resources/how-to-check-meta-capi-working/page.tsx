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
  headline: "How to Check Whether Meta CAPI Is Working",
  description: "A healthy CAPI setup isn't simply 'server events are appearing.' How to confirm the right events arrive with useful matching data.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-to-check-meta-capi-working" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Check Meta CAPI is working", item: "https://www.attribix.app/resources/how-to-check-meta-capi-working" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Check Meta CAPI is working" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to check whether Meta CAPI is working
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A healthy CAPI setup is not simply &quot;server events are
            appearing.&quot; You need to know that the right events are
            arriving with useful matching information and that
            browser/server duplicates are handled correctly.
          </p>
        </Reveal>
      </section>

      {/* EVENTS MANAGER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use Events Manager</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Review current diagnostics for:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>server event receipt;</li>
              <li>Purchase event quality;</li>
              <li>Event Match Quality where provided;</li>
              <li>deduplication;</li>
              <li>warnings;</li>
              <li>missing parameters.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* TEST REAL PURCHASE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test a real purchase path</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Create a controlled order and identify the corresponding
                browser and server purchase. Verify value, currency and
                event timing.
              </p>
              <p>
                If both Pixel and CAPI send the same purchase, check that
                the required shared identifier is present so Meta can
                deduplicate. See{" "}
                <Link href="/resources/meta-capi-event-id-deduplication" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  why purchase event IDs matter for Meta CAPI
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPARE COUNTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare counts over time</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            One test order can prove the pipe works. It cannot prove the
            live implementation is consistently correct. Compare Meta
            event counts with Shopify orders across a useful period and
            investigate abnormal over- or under-counting.
          </p>
        </Reveal>
      </section>

      {/* EMQ */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Better EMQ is not the whole objective</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Do not add questionable customer data simply to chase a
                higher score. Send eligible, correctly collected
                first-party signals in accordance with consent and Meta
                requirements.
              </p>
              <p>
                CAPI is working when it sends accurate, compliant business
                events reliably, not when one dashboard metric turns
                green.
              </p>
            </div>
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
              <Link href="/resources/how-to-check-meta-pixel-working-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to check whether your Meta Pixel is working
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-event-match-quality-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Event Match Quality for Shopify explained
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-capi-event-id-deduplication" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why purchase event IDs matter for Meta CAPI
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Audit the server events and deduplication</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If CAPI appears connected but your Meta purchase data still
            looks unreliable, send us an inquiry. We can audit the server
            events and deduplication.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
