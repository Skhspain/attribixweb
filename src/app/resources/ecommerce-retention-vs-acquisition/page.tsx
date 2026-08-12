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
  headline: "Why Retention Can Matter More Than Improving Facebook Ads",
  description: "A business trying to reduce Meta CPA by a few dollars may be ignoring a much larger opportunity: turning more first-time buyers into repeat customers.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ecommerce-retention-vs-acquisition" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Retention vs acquisition", item: "https://www.attribix.app/resources/ecommerce-retention-vs-acquisition" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Retention vs acquisition" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why retention can matter more than improving Facebook ads
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A business spending months trying to reduce Meta CPA from $45 to
            $42 may be ignoring a much larger opportunity: turning more
            first-time buyers into repeat customers.
          </p>
        </Reveal>
      </section>

      {/* ACQUISITION LIMITS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Acquisition improvements have limits</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Advertising markets become more expensive as you scale. You can
            improve creative, targeting and landing pages, but you cannot
            reduce acquisition cost forever.
          </p>
        </Reveal>
      </section>

      {/* RETENTION INCREASES VALUE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Retention increases customer value</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                If customers become worth more, the same $45 CPA can
                suddenly be excellent.
              </p>
              <p>
                Suppose first-order contribution is $40. At $45 CPA,
                acquisition loses $5.
              </p>
              <p>
                If average future contribution grows by $30, customer
                economics become positive without changing Meta at all.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SUPPORTS MORE ACQUISITION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Retention also supports more acquisition</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Higher LTV gives you room to bid more aggressively, enter more
            markets and tolerate lower first-order ROAS.
          </p>
        </Reveal>
      </section>

      {/* PRODUCT EXPERIENCE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product experience is marketing</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Quality, delivery, service and product usefulness drive
              retention more than ad account structure. Paid advertising and
              retention should therefore be treated as one economic system.
              Better ads acquire customers. Better retention makes each
              acquired customer worth more.
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
              <Link href="/resources/repeat-purchase-rate-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why High Repeat Purchase Rate Changes Your Break-Even ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/retention-rate-vs-repeat-purchase-rate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Customer Retention Rate vs Repeat Purchase Rate: What&apos;s the Difference?
              </Link>
            </li>
            <li>
              <Link href="/resources/loyalty-program-vs-discounts-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Loyalty Program vs Discounts: Which Drives More Repeat Purchases?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-cost-per-purchase-increasing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads Cost Per Purchase Increasing: What to Check
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Connect acquisition targets to retention economics</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are pushing Meta harder but customer value remains flat,
            send us an inquiry. We can help connect acquisition targets to
            retention economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
