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
  headline: "Why Google Search Ads Get Clicks but Low-Quality Traffic",
  description: "Clearer intent mapping (search term, ad, landing page, offer) beats simply narrowing keywords.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-low-quality-traffic" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Low-quality traffic", item: "https://www.attribix.app/resources/google-ads-low-quality-traffic" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Low-quality traffic" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Google Search ads get clicks but low-quality traffic
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Google Search is intent-driven, but a click from a search
            engine is not automatically high intent. Poor traffic often
            comes from a mismatch between the keyword, the actual search
            term and what the landing page sells.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Broad language creates broad intent</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A keyword such as &quot;running shoes&quot; can represent
            dozens of needs: cheap shoes, reviews, repairs, sizing, local
            stores, used shoes or a specific brand. The search terms
            report reveals which of those you actually paid for.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ad copy can attract the wrong person</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              An aggressive &quot;50% OFF&quot; headline may increase CTR
              from bargain hunters when your profitable customer values
              premium quality. More clicks can reduce sales quality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Landing pages complete the qualification</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If the ad targets &quot;waterproof hiking boots&quot; but
            lands on a general footwear homepage, customers have to do too
            much work. Even relevant traffic can look low quality when the
            destination is poor.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check geography, devices and networks</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Traffic quality can differ sharply by location and device.
              Also verify exactly which campaign or network is producing
              the clicks rather than treating all Google traffic as
              equivalent. The solution is not necessarily narrower
              keywords. It is clearer intent mapping: search term → ad →
              landing page → offer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-ads-search-terms-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads search terms: what should ecommerce advertisers look for?</Link></li>
            <li><Link href="/resources/negative-keywords-ecommerce-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads negative keywords for ecommerce</Link></li>
            <li><Link href="/resources/google-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads getting clicks but no sales?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Traffic arriving but not engaging?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry. We can trace which search terms are
            creating the problem.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
