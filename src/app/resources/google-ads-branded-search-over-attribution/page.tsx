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
  headline: "Does Google Ads Over-Attribute Branded Searches?",
  description:
    "Google Ads can validly credit a branded search click while still overstating its incremental value. Why attribution and incrementality diverge on brand campaigns.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-branded-search-over-attribution" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Branded search over-attribution", item: "https://www.attribix.app/resources/google-ads-branded-search-over-attribution" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Branded search over-attribution" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does Google Ads over-attribute branded searches?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Google Ads can legitimately report a conversion after a branded
            ad click while still overstating how much incremental value the
            click created. If a customer already intended to buy and
            searched your exact brand name, the ad may have captured an
            order that organic search would otherwise have received.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION VS INCREMENTALITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution and incrementality are different</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            From Google&apos;s perspective, the click happened before the
            purchase. The attribution is valid under the model. The
            business question is different: what would have happened if
            the paid brand ad had not appeared?
          </p>
        </Reveal>
      </section>

      {/* WHEN INCREMENTAL */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When brand ads can be incremental</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              They may protect the top result from competitors, promote a
              specific offer, improve mobile visibility or direct customers
              to the right page. In those situations, some paid brand
              traffic can create value beyond organic capture.
            </p>
          </Reveal>
        </div>
      </section>

      {/* KEEP IT SEPARATE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep it separate</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Report branded and non-branded Google performance separately. A
            blended account ROAS can look exceptional when brand captures a
            large amount of existing demand. That split is covered in more depth
            in{" "}
            <Link href="/resources/google-ads-brand-vs-non-brand-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how much budget should go to brand vs non-brand
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* TEST CAREFULLY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test carefully</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Controlled pause tests, geographic comparisons and total
              paid+organic branded click trends can help estimate
              substitution. Avoid declaring every brand conversion
              &quot;cannibalized&quot; based on theory alone.
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
              <Link href="/resources/google-brand-campaign-taking-credit-organic-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is your Google Ads brand campaign taking credit for organic sales?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-bid-on-your-brand-name-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores bid on their own brand name?
              </Link>
            </li>
            <li>
              <Link href="/resources/incrementality-ecommerce-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is incrementality in ecommerce advertising?
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-brand-vs-non-brand-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much budget should go to brand vs non-brand Google Ads?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Separate attribution from likely incrementality</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If branded Search is carrying your Google ROAS and you want to
            understand the true acquisition picture, contact us. We can
            separate attribution from likely incrementality.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
