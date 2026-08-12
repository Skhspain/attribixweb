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
  headline: "Attribution vs Incrementality: What's the Difference?",
  description: "Attribution assigns credit. Incrementality estimates what advertising caused. Why that one distinction changes how two marketers read the same campaign.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/attribution-vs-incrementality" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Attribution vs incrementality", item: "https://www.attribix.app/resources/attribution-vs-incrementality" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Attribution vs incrementality" }]} />
          <Eyebrow>Attribution</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Attribution vs incrementality: what&apos;s the difference?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Attribution assigns credit. Incrementality estimates what
            advertising caused. That one distinction explains why two
            marketers can look at the same campaign and reach different
            conclusions.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION EXAMPLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution example</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A customer clicks Meta, later clicks Google and purchases.
            Depending on the model, Meta, Google or both may receive
            credit.
          </p>
        </Reveal>
      </section>

      {/* INCREMENTALITY EXAMPLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Incrementality example</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Now ask: without either ad, would the customer still have
              purchased? If yes, some attributed revenue was not
              incremental. If no, the advertising created the sale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY ATTRIBUTION IS EASIER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why attribution is easier</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            You can observe clicks, impressions and purchases. You cannot
            directly observe the alternate universe where the person did
            not see the ad. Incrementality therefore requires experiments
            or modelling. Those approaches are covered in{" "}
            <Link href="/resources/incrementality-ecommerce-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              what is incrementality in ecommerce advertising
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* WHY BOTH MATTER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why both matter</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Attribution is practical for campaign optimization and
                customer-journey analysis. Incrementality is valuable for
                budget allocation and understanding channel lift.
              </p>
              <p>
                A retargeting campaign can have high attributed ROAS and
                low incremental lift. A discovery campaign can have modest
                last-click attribution and meaningful incremental value.
              </p>
              <p>Do not force one metric to answer the other&apos;s question.</p>
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
              <Link href="/resources/incrementality-ecommerce-advertising" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is incrementality in ecommerce advertising?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-retargeting-taking-credit-for-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta retargeting is taking credit for too many sales
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-branded-search-over-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does Google Ads over-attribute branded searches?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-attribution-models" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution models explained
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Separate attribution from the incrementality question</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your team is debating which channel &quot;really caused&quot;
            sales, contact us. We can separate attribution reporting from
            the deeper incrementality question.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
