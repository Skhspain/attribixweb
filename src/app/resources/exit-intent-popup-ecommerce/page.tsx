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
  headline: "Should Ecommerce Stores Use Exit-Intent Popups?",
  description: "Exit-intent popups try to recover value from visitors who appear ready to leave. When they help, when they train customers to game a discount, and how to measure them properly.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/exit-intent-popup-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Exit-intent popups", item: "https://www.attribix.app/resources/exit-intent-popup-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Exit-intent popups" }]} />
          <Eyebrow>Creative &amp; Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should ecommerce stores use exit-intent popups?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Exit-intent popups try to recover value from visitors who
            appear ready to leave. On desktop, mouse movement can indicate
            exit intent reasonably well. Mobile behaviour is less
            straightforward.
          </p>
        </Reveal>
      </section>

      {/* RELEVANT LAST OFFER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use them for a relevant last offer</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Useful options can include:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>email signup;</li>
              <li>help finding the right product;</li>
              <li>free-shipping information;</li>
              <li>genuine incentive;</li>
              <li>reminder about saved cart.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* NOT EVERY EXIT DISCOUNT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not turn every exit into a discount</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If customers learn that moving toward the browser close
              button produces 15% off, you can train them to manufacture
              the &ldquo;exit.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRAFFIC SOURCE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider the traffic source</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Cold informational traffic may respond better to an email
            capture. A cart user may need shipping reassurance. One popup
            for every visitor ignores intent.
          </p>
        </Reveal>
      </section>

      {/* MEASURE DOWNSTREAM */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure downstream value</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Track:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>popup conversions;</li>
                <li>purchases;</li>
                <li>email value;</li>
                <li>discount cost;</li>
                <li>mobile frustration;</li>
                <li>repeat purchase.</li>
              </ul>
              <p>
                An exit popup is worthwhile if it recovers more value than
                the friction and margin it creates.
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
              <Link href="/resources/should-shopify-stores-use-popups" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores use popups?
              </Link>
            </li>
            <li>
              <Link href="/resources/popup-discount-ecommerce-profitability" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does a 10% popup discount actually increase profit?
              </Link>
            </li>
            <li>
              <Link href="/resources/ecommerce-popup-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Email popup conversion rate: what should Shopify stores expect?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-collect-email-or-sms-first-on-a-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you collect email or SMS first on a Shopify popup?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know whether your popup actually creates revenue</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your popup strategy collects plenty of emails but you do not
            know whether it improves total Shopify revenue, send us an
            inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
