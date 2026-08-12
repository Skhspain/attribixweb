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
  headline: "Should Ecommerce Brands Use Meta Lead Ads or Send Traffic to Shopify?",
  description:
    "Purchase-optimized traffic is the default for most Shopify stores, but higher-friction or higher-price offers can do better with a lead form first. How to decide which funnel fits your product.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-lead-ads-vs-website-conversions" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lead Ads vs Website Conversions",
      item: "https://www.attribix.app/resources/meta-lead-ads-vs-website-conversions",
    },
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
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Lead Ads vs Website Conversions" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Ecommerce Brands Use Meta Lead Ads or Send Traffic to Shopify?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            For most direct-to-consumer Shopify stores, the sale happens on
            the website. That makes purchase-optimized traffic the obvious
            default. But there are situations where capturing a lead before
            asking for a purchase can be smarter. The decision comes down to
            buying friction and customer intent.
          </p>
        </Reveal>
      </section>

      {/* FRICTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm">
            A $35 impulse product normally does not need a salesperson or
            long nurture sequence. Sending a shopper through a lead form can
            add an unnecessary step. A $3,000 custom product,
            consultation-based offer or product that requires qualification
            may be different. In that case, getting an email, phone number
            or request for advice can be the conversion that matters first.
          </p>
        </Reveal>
      </section>

      {/* LEAD ADS STRONGEST */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Lead Ads are strongest when the next step is clear</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A lead is not revenue. Before running lead generation, define
              what happens after submission. Who follows up? How fast? Is
              there an email sequence? What percentage of qualified leads
              become customers? What is a lead worth? Cheap leads can be
              expensive if none of them buy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WEBSITE SIGNALS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Website campaigns give you richer buying signals</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Sending users to Shopify allows you to measure product views,
            carts, checkout and purchases. It also lets customers self-serve,
            compare products and buy immediately. For normal ecommerce,
            those signals are often more useful than a form completion.
            They&apos;re also what makes{" "}
            <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              attribution
            </Link>{" "}
            back to the ad meaningful in the first place.
          </p>
        </Reveal>
      </section>

      {/* BOTH */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Sometimes the best answer is both</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A premium store could run purchase campaigns for ready-to-buy
              customers and lead campaigns for people who need guidance. The
              important part is measuring the two funnels separately instead
              of comparing CPL directly with purchase CPA. Ask which action
              moves the customer genuinely closer to revenue. Optimize for
              that, not whichever Meta objective produces the
              cheapest-looking result. The same logic applies when{" "}
              <Link href="/resources/meta-ads-optimize-add-to-cart-or-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                choosing between Add to Cart and Purchase optimization
              </Link>
              .
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
              <Link href="/resources/meta-ads-optimize-add-to-cart-or-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you optimize Meta Ads for Add to Cart or Purchase?
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution software
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-new-customer-acquisition-measurement" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads new customer acquisition: how should you measure it?
              </Link>
            </li>
            <li>
              <Link href="/ad-management/meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads management
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure which funnel fits your product?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are unsure whether Meta should be generating Shopify
            purchases or leads for your business, send us an inquiry. We can
            map the funnel and choose the campaign objective around actual
            revenue.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
