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
  headline: "Product Reviews vs Testimonials: Which Build More Trust?",
  description: "Reviews and testimonials answer different customer questions on a Shopify store: when product-specific reviews win, when a broader testimonial matters more, and why authenticity beats format.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/product-reviews-vs-testimonials-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Reviews vs testimonials", item: "https://www.attribix.app/resources/product-reviews-vs-testimonials-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Reviews vs testimonials" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Product reviews vs testimonials: which build more trust?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Reviews and testimonials both provide customer proof, but they
            answer different questions. Product reviews help shoppers
            understand whether this specific item performs as promised.
            Testimonials can tell a broader story about the brand, service
            or transformation.
          </p>
        </Reveal>
      </section>

      {/* REVIEWS REDUCE RISK */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reviews reduce product risk</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>They are strongest when customers need detail about:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>fit;</li>
              <li>quality;</li>
              <li>sizing;</li>
              <li>durability;</li>
              <li>colour;</li>
              <li>installation;</li>
              <li>delivery;</li>
              <li>real-world use.</li>
            </ul>
            <p>Specific reviews can answer objections more convincingly than brand copy.</p>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Testimonials can explain outcomes</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A longer customer story can show how a product or company
              affected someone over time. It is especially useful for
              premium, technical or service-heavy purchases where the
              decision involves more than one SKU.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AUTHENTICITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Authenticity matters more than format</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Perfectly polished praise with no specifics can look fabricated.
            A shorter comment that mentions a real concern and outcome can
            feel much more credible.
          </p>
        </Reveal>
      </section>

      {/* USE BOTH */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use both where they belong</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Product pages often benefit most from product-specific
                reviews. Homepage or service pages may benefit from broader
                testimonials. Paid landing pages can use the proof that
                directly supports the promise made in the ad.
              </p>
              <p>
                The question is not &quot;Which format is best?&quot; It is
                &quot;What uncertainty does the customer need removed?&quot;
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
              <Link href="/resources/how-many-product-images-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many product images should a Shopify product page have?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Lots of add to carts but no purchases on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/product-led-vs-problem-led-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should ecommerce ads lead with the product or the problem?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Put the right proof in front of the right uncertainty</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store has plenty of customer praise but it is
            not being used where it matters, contact us. We can map proof
            to the buying decision.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
