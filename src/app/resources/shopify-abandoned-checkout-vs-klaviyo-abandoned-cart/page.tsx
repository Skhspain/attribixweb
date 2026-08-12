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
  headline: "Shopify Abandoned Checkout vs Klaviyo Abandoned Cart: Why the Numbers Differ",
  description: "Shopify and Klaviyo count different abandonment stages, audiences and eligibility rules. How to compare event definitions before diagnosing a broken integration.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-abandoned-checkout-vs-klaviyo-abandoned-cart" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Checkout vs cart data mismatch", item: "https://www.attribix.app/resources/shopify-abandoned-checkout-vs-klaviyo-abandoned-cart" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Checkout vs cart data mismatch" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify abandoned checkout vs Klaviyo abandoned cart: why the numbers differ
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Shopify and Klaviyo may count different abandonment stages,
            audiences and eligibility rules. Comparing the headline numbers
            without definitions can make a healthy integration look broken.
          </p>
        </Reveal>
      </section>

      {/* DIFFERENT EVENTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Cart and checkout are different events</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Someone can add an item to cart without starting checkout.
              Shopify&apos;s abandoned checkout data represents customers
              who reached a later stage under Shopify&apos;s definition.
            </p>
            <p>
              A Klaviyo flow may trigger from Added to Cart, Started
              Checkout or another event depending on how it is configured.
            </p>
          </div>
        </Reveal>
      </section>

      {/* IDENTITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Identity matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Email systems need an identifiable customer to send a message.
              Anonymous cart users can exist in Shopify behaviour without
              being eligible for an email flow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Timing and suppression matter</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Flow delays, smart sending, profile consent and existing-customer
            logic can change who receives messages.
          </p>
        </Reveal>
      </section>

      {/* COMPARE DEFINITIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare event definitions first</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>Before diagnosing missing customers, write down:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Trigger event</li>
                <li>Identification requirement</li>
                <li>Consent requirement</li>
                <li>Delay</li>
                <li>Filters</li>
                <li>Checkout definition</li>
              </ul>
              <p>
                Two systems can both be correct while counting different
                populations.
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
              <Link href="/resources/shopify-vs-klaviyo-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify vs Klaviyo revenue doesn&apos;t match: why?
              </Link>
            </li>
            <li>
              <Link href="/resources/browse-abandonment-vs-cart-abandonment" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Browse abandonment vs cart abandonment: what&apos;s the difference?
              </Link>
            </li>
            <li>
              <Link href="/resources/good-abandoned-cart-recovery-rate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is a good abandoned cart recovery rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/klaviyo-attribution-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Klaviyo attribution explained for Shopify stores
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Map the event definitions</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Shopify and Klaviyo abandonment numbers never reconcile and
            it is affecting your reporting, send us an inquiry. We can map
            the event definitions.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
