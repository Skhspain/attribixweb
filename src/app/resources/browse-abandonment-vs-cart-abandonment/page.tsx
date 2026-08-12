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
  headline: "Browse Abandonment vs Cart Abandonment: What's the Difference?",
  description: "Browse abandonment and cart abandonment sit at different levels of intent and need different messages. How to build each flow without overwhelming the same customer.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/browse-abandonment-vs-cart-abandonment" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Browse vs cart abandonment", item: "https://www.attribix.app/resources/browse-abandonment-vs-cart-abandonment" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Browse vs cart abandonment" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Browse abandonment vs cart abandonment: what&apos;s the difference?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Browse abandonment and cart abandonment happen at different
            levels of intent. A browser looked at a product and left. A
            cart abandoner took the stronger action of adding something to
            the basket.
          </p>
        </Reveal>
      </section>

      {/* SOFTER MESSAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Browse abandonment needs a softer message</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>The customer may still be researching. Useful content can include:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Product reminder</li>
              <li>Reviews</li>
              <li>Alternatives</li>
              <li>Educational information</li>
              <li>Category benefits</li>
            </ul>
            <p>
              An aggressive &quot;Complete your order now&quot; message can
              feel strange when no order was started.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CART DIRECT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Cart abandonment can be more direct</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The shopper has already indicated purchase intent. Reminders
              about the exact cart, shipping, returns and checkout are more
              relevant.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ATTRIBUTION DIFFERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution naturally differs</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Cart flows usually report stronger conversion because the
            audience was closer to purchase before receiving the email.
            That does not prove the flow itself created all of the
            difference.
          </p>
        </Reveal>
      </section>

      {/* AVOID OVERWHELM */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid overwhelming the same customer</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Someone can qualify for browse, cart and checkout flows
                quickly. Use suppression and flow logic so they do not
                receive contradictory messages.
              </p>
              <p>
                Treat the two flows as different stages of the buying
                journey, not two versions of the same automation.
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
              <Link href="/resources/how-many-abandoned-cart-emails-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many abandoned cart emails should a Shopify store send?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-abandoned-checkout-vs-klaviyo-abandoned-cart" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify abandoned checkout vs Klaviyo abandoned cart: why the numbers differ
              </Link>
            </li>
            <li>
              <Link href="/resources/abandoned-cart-email-vs-retargeting-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Abandoned cart email vs Meta retargeting: which should get the credit?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-abandoned-cart-emails-offer-discount" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you offer a discount in your abandoned cart emails?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Map the recovery journey more cleanly</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ecommerce flows overlap and several channels claim the
            same recovering customer, contact us. We can help map the
            journey more cleanly.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
