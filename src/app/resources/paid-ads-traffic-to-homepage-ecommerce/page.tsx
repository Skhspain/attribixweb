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
  headline: "Why Sending All Paid Traffic to Your Homepage Is Usually a Mistake",
  description: "Your homepage serves many jobs. A paid campaign usually has one. Why sending every Meta and Google click to the homepage often creates unnecessary friction.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/paid-ads-traffic-to-homepage-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Paid traffic to homepage", item: "https://www.attribix.app/resources/paid-ads-traffic-to-homepage-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Paid traffic to homepage" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why sending all paid traffic to your homepage is usually a mistake
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Your homepage serves many jobs. A paid campaign usually has one.
            That is why sending every Meta and Google click to the homepage
            often creates unnecessary friction.
          </p>
        </Reveal>
      </section>

      {/* CUSTOMER TOLD YOU */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The customer already told you what they want</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              A Google search for &ldquo;rose gold tennis bracelet&rdquo;
              should not land on a homepage where the customer has to open
              Jewellery → Bracelets → Tennis.
            </p>
            <p>
              A Meta ad featuring one specific product should usually
              continue to that product or a dedicated page explaining it.
            </p>
          </div>
        </Reveal>
      </section>

      {/* HOMEPAGES BROAD */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Homepages are broad by design</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>They may contain:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>multiple categories;</li>
                <li>brand story;</li>
                <li>newsletter;</li>
                <li>seasonal promotions;</li>
                <li>different customer journeys.</li>
              </ul>
              <p>
                That is useful for general browsing and less useful for a
                campaign with specific intent.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ATTENTION COST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Every extra decision costs attention</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Paid traffic is expensive. If the visitor has to search your
            website again after clicking the ad, the campaign has created
            work instead of removing it.
          </p>
        </Reveal>
      </section>

      {/* EXCEPTIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">There are exceptions</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A brand campaign, broad brand-awareness activity or very
                small catalogue can make the homepage appropriate.
              </p>
              <p>
                The default principle remains: send customers to the most
                relevant page you already know they want.
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
              <Link href="/resources/collection-page-vs-product-page-google-shopping" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Collection page vs product page for Google Shopping traffic
              </Link>
            </li>
            <li>
              <Link href="/resources/different-landing-pages-meta-and-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you create different landing pages for Meta and Google Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-landing-page-message-match-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to match your ad message to your landing page
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-traffic-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify traffic but no sales? Find where the funnel is breaking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Send customers to the page they actually asked for</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your campaigns drive large volumes of paid traffic into the
            homepage and conversion is weak, send us an inquiry. We can map
            ads to more relevant destinations.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
