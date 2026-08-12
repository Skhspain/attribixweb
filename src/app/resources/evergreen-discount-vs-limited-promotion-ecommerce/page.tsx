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
  headline: "Should You Run Evergreen Discounts or Short Promotions?",
  description: "Evergreen discounts provide consistency. Short promotions create a genuine reason to act now. How to choose based on urgency, margin and the job the offer needs to do.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/evergreen-discount-vs-limited-promotion-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Evergreen vs limited promotion", item: "https://www.attribix.app/resources/evergreen-discount-vs-limited-promotion-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Evergreen vs limited promotion" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should you run evergreen discounts or short promotions?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Evergreen discounts provide consistency. Short promotions create
            a genuine reason to act now. The right choice depends on whether
            the offer is part of your normal pricing strategy or an event.
          </p>
        </Reveal>
      </section>

      {/* EVERGREEN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Evergreen offers reduce urgency</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If &quot;10% off first order&quot; is always available, customers can
            evaluate it without time pressure. That can work well as a
            predictable acquisition incentive.
          </p>
        </Reveal>
      </section>

      {/* SHORT PROMOTIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Short promotions create peaks</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Black Friday, product launches and seasonal sales can
                concentrate demand and give creative/email campaigns a clear
                message.
              </p>
              <p>
                The deadline must be real. Constantly restarting
                &quot;48-hour sales&quot; damages credibility.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARGIN AND BEHAVIOUR */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare margin and customer behaviour</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            An evergreen discount can quietly reduce margin on almost every
            new customer. A limited sale may give away more per order but
            only during a controlled window. That's the same math covered in{" "}
            <Link href="/resources/constant-discounts-ecommerce-profitability" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              are constant discounts destroying your ecommerce profitability
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* DIFFERENT JOBS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use different jobs</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Evergreen: reduce first-purchase friction.</p>
              <p>
                Short promotion: create event-based demand, clear inventory
                or support a seasonal objective.
              </p>
              <p>
                Do not choose based only on which produces the higher
                campaign ROAS during the promotion period.
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
              <Link href="/resources/constant-discounts-ecommerce-profitability" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Are constant discounts destroying your ecommerce profitability?
              </Link>
            </li>
            <li>
              <Link href="/resources/discount-code-vs-automatic-discount-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Discount code vs automatic discount: which converts better?
              </Link>
            </li>
            <li>
              <Link href="/resources/discount-effect-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How discounts change your break-even ROAS
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Work out which offers are actually incremental</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your store is always running some form of discount and you
            are unsure which offers are truly incremental, contact us. We
            can help separate conversion lift from margin loss.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
