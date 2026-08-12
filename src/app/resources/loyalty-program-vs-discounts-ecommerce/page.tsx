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
  headline: "Loyalty Program vs Discounts: Which Drives More Repeat Purchases?",
  description: "Discounts create immediate price motivation. Loyalty programs create a reason to keep choosing the same brand over time.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/loyalty-program-vs-discounts-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Loyalty program vs discounts", item: "https://www.attribix.app/resources/loyalty-program-vs-discounts-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Loyalty program vs discounts" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Loyalty program vs discounts: which drives more repeat purchases?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Discounts create immediate price motivation. Loyalty programs
            create a reason to keep choosing the same brand over time.
            Neither works if customers did not like the first purchase.
          </p>
        </Reveal>
      </section>

      {/* DISCOUNTS SIMPLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Discounts are simple</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            &quot;15% off your next order&quot; is easy to understand and
            can move a customer quickly. The cost is equally clear: margin.
          </p>
        </Reveal>
      </section>

      {/* LOYALTY ACCUMULATED VALUE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Loyalty can build accumulated value</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Points, tiers or rewards can make future purchases more
              attractive without discounting every single order equally.
              The downside is complexity. If customers need a spreadsheet to
              understand the rewards, the program will not influence much
              behaviour.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEASURE INCREMENTAL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure incremental repeat purchases</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Customers joining loyalty programs are often already your most
            engaged buyers. High repeat rates among members do not prove the
            program caused those repeats. Where possible, compare similar
            customer groups and look at changes after enrollment.
          </p>
        </Reveal>
      </section>

      {/* CATEGORY FREQUENCY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider category frequency</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A loyalty program makes more sense for frequent purchases than
              products bought once a decade. Use the system that fits how
              customers naturally return rather than copying a coffee-shop
              rewards model onto every Shopify store.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/free-shipping-customer-retention-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does Free Shipping Increase Customer Retention?
              </Link>
            </li>
            <li>
              <Link href="/resources/ecommerce-retention-vs-acquisition" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Retention Can Matter More Than Improving Facebook Ads
              </Link>
            </li>
            <li>
              <Link href="/resources/calculate-repeat-customer-value-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to Calculate Repeat Customer Value for a Shopify Store
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-spend-on-existing-customers-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Much Should Ecommerce Brands Spend on Existing Customers?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Evaluate the economics of the retention offer</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want to increase repeat sales without turning every email
            into a coupon, send us an inquiry. We can help evaluate the
            economics of the retention offer.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
