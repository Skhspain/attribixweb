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
  headline: "Why a 400% ROAS Can Still Lose Money",
  description: "A 400% ROAS means $4 of attributed revenue for every $1 of ad spend. It says nothing about what the product costs to make and deliver. A worked example of thin margin eating the contribution.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/400-roas-profitable" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Why 400% ROAS can lose money", item: "https://www.attribix.app/resources/400-roas-profitable" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why 400% ROAS can lose money" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why a 400% ROAS can still lose money
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A 400% ROAS means $4 of attributed revenue for every $1 of ad
            spend. It says nothing about what the product costs to make and
            deliver.
          </p>
        </Reveal>
      </section>

      {/* THIN MARGIN EXAMPLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example: thin margin</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Revenue: $100</li>
              <li>Ad spend at 4x ROAS: $25</li>
              <li>Product cost: $60</li>
              <li>Fulfilment/shipping/payment: $15</li>
            </ul>
            <p>$100 - $25 - $60 - $15 = $0 before overhead.</p>
            <p>
              The campaign reports 400% ROAS and produces no first-order
              contribution.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ATTRIBUTION CAN MAKE IT LOOK BETTER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution can make it look even better</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If Meta claims revenue also claimed by Google, platform ROAS
              is not necessarily exclusive channel revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MARGIN DETERMINES GOOD */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Margin determines &quot;good&quot;</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            At 70% contribution margin, 400% can be extremely strong. At
            20%, it may be below break-even.
          </p>
        </Reveal>
      </section>

      {/* USE BREAK-EVEN ROAS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use break-even ROAS</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Calculate from contribution margin and set targets above
                that level according to desired profit and LTV. The
                underlying formula is in{" "}
                <Link href="/resources/gross-margin-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  how gross margin changes your break-even ROAS
                </Link>
                .
              </p>
              <p>
                Never evaluate ROAS without asking, &quot;What percentage of
                revenue is actually available to pay for the
                advertising?&quot;
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
              <Link href="/resources/gross-margin-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How gross margin changes your break-even ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/why-revenue-based-roas-can-hide-an-unprofitable" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why revenue-based ROAS can hide an unprofitable business
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Reconcile the report with the bank account</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If 400% sounds good in your reports but profit does not feel
            good in the bank account, send us an inquiry. We can reconcile
            the two.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
