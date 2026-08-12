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
  headline: "Should Shopify Stores Still Use Google Tag Manager?",
  description: "GTM is still useful, but it's no longer sensible to assume every Shopify store needs it simply because it's standard practice elsewhere.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/should-shopify-use-google-tag-manager" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Should Shopify use GTM", item: "https://www.attribix.app/resources/should-shopify-use-google-tag-manager" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Shopify use GTM" }]} />
          <Eyebrow>Tracking &amp; Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify stores still use Google Tag Manager?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Google Tag Manager is still useful, but it is no longer
            sensible to assume every Shopify store needs GTM simply
            because it is standard practice on other websites.
          </p>
        </Reveal>
      </section>

      {/* GTM VALUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">GTM is valuable when you need flexible tag management</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            It can centralize marketing/analytics scripts, custom
            variables and triggers and reduce the need for repeated theme
            edits.
          </p>
        </Reveal>
      </section>

      {/* SHOPIFY NATIVE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shopify has its own event architecture</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Customer Events, native sales-channel apps and custom
              pixels can handle many common ecommerce tracking needs. See{" "}
              <Link href="/resources/shopify-customer-events-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify Customer Events explained
              </Link>
              . The best setup may therefore use Shopify-native
              integrations, GTM, server-side tools or a combination.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPLEXITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Complexity has a cost</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              A store with Google &amp; YouTube, GA4, GTM, custom Google
              Ads pixels and a tracking app can easily send the same
              purchase more than once.
            </p>
            <p>
              Do not use GTM because &quot;professional stores use
              GTM.&quot; Use it because it solves a defined implementation
              requirement.
            </p>
          </div>
        </Reveal>
      </section>

      {/* AUDIT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Audit before adding anything</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Document:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>which system sends GA4;</li>
                <li>which sends Google Ads purchase;</li>
                <li>which sends Meta;</li>
                <li>where consent is applied;</li>
                <li>who owns transaction ID/value.</li>
              </ul>
              <p>
                The simplest accurate architecture is normally easier to
                maintain than the most flexible one.
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
              <Link href="/resources/google-tag-manager-vs-shopify-customer-events" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Tag Manager vs Shopify Customer Events
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-customer-events-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify Customer Events explained for marketers
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-server-side-tracking-guide" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Shopify server-side tracking works
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Get the cleanest architecture for your setup</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are considering GTM or already have several overlapping
            Shopify tracking setups, send us an inquiry. We can recommend
            the cleanest architecture for your needs.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
