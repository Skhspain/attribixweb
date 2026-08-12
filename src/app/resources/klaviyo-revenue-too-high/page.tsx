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
  headline: "Klaviyo Revenue Looks Too High: Is Email Taking Too Much Credit?",
  description: "Klaviyo attributed revenue can look larger than reality because attribution isn't causation. How to check attribution settings and compare against Shopify.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/klaviyo-revenue-too-high" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Klaviyo revenue too high", item: "https://www.attribix.app/resources/klaviyo-revenue-too-high" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Klaviyo revenue too high" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Klaviyo revenue looks too high: is email taking too much credit?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Klaviyo can report a large amount of attributed revenue because
            its attribution asks whether an email or SMS interaction
            happened within the configured window before purchase. That is
            not the same as proving the message caused the sale.
          </p>
        </Reveal>
      </section>

      {/* WHY IT LOOKS LARGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why the number can look surprisingly large</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>A loyal customer may:</p>
            <ol className="list-decimal list-inside space-y-1.5 marker:text-cyan-400">
              <li>Click a campaign email</li>
              <li>Browse without buying</li>
              <li>Later see a Meta ad</li>
              <li>Search Google</li>
              <li>Purchase</li>
            </ol>
            <p>
              Email, Meta and Google can all have a legitimate attribution
              claim under their own rules.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CHECK SETTINGS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check the attribution settings</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Review Klaviyo&apos;s current click/view attribution windows
              and reporting definitions. Platform defaults and features can
              change, so use current documentation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARE WITH SHOPIFY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare with Shopify</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If Klaviyo claims 45% of revenue, Meta 50% and Google 40%, the
            business did not generate 135% of its Shopify sales. Attribution
            overlaps.
          </p>
        </Reveal>
      </section>

      {/* INCREMENTAL EVIDENCE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look for incremental evidence</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Holdout testing, send-frequency tests and flow experiments
                can help estimate whether specific email activity produces
                additional orders rather than only receiving credit.
              </p>
              <p>
                The Klaviyo number is useful for comparing email activity
                under a consistent model. It should not be interpreted as
                perfectly exclusive channel revenue.
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
              <Link href="/resources/how-much-revenue-should-email-marketing-generate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much revenue should email marketing generate for a Shopify store?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-vs-klaviyo-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify vs Klaviyo revenue doesn&apos;t match: why?
              </Link>
            </li>
            <li>
              <Link href="/resources/does-klaviyo-over-attribute-revenue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does Klaviyo over-attribute revenue?
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Get a clearer cross-channel view</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your email attribution looks too good to reconcile with
            Shopify and paid media, contact us. We can help build a clearer
            cross-channel view.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
