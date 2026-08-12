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
  headline: "How Many Product Images Should a Shopify Product Page Have?",
  description: "There is no ideal image count for a Shopify product page. Why every image should have a job, when complex products need more visual proof, and how to design a mobile gallery that reduces uncertainty.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-many-product-images-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Product image count", item: "https://www.attribix.app/resources/how-many-product-images-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Product image count" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How many product images should a Shopify product page have?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no ideal number of product images. The right gallery is
            the smallest set that answers the customer&apos;s visual
            questions properly.
          </p>
        </Reveal>
      </section>

      {/* EVERY IMAGE A JOB */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Every image should have a job</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Useful roles include:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>clear hero image;</li>
              <li>alternate angles;</li>
              <li>scale/size;</li>
              <li>detail/texture;</li>
              <li>product in use;</li>
              <li>variant colour;</li>
              <li>packaging;</li>
              <li>before/after where truthful;</li>
              <li>key feature annotation.</li>
            </ul>
            <p>
              Ten nearly identical studio angles add less value than four
              images that answer different questions.
            </p>
          </div>
        </Reveal>
      </section>

      {/* COMPLEX PRODUCTS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Complex products need more proof</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Furniture, clothing and technical products usually need more
              visual context than a familiar commodity. A customer buying a
              sofa may want dimensions, fabric detail and room scale. A
              refill pack may need far less.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MOBILE GALLERY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Mobile gallery design matters</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Huge image sets can make the page feel endless. Use thumbnails,
            swipes and clear ordering so customers can explore without
            getting lost.
          </p>
        </Reveal>
      </section>

      {/* REDUCE UNCERTAINTY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Images should reduce uncertainty</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                If returns frequently happen because customers say a product
                was smaller, darker or different than expected, the gallery
                is not doing enough communication.
              </p>
              <p>The goal is not image count. It is confidence.</p>
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
              <Link href="/resources/product-reviews-vs-testimonials-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Product reviews vs testimonials: which build more trust?
              </Link>
            </li>
            <li>
              <Link href="/resources/sticky-add-to-cart-shopify-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you use sticky add-to-cart buttons on Shopify?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Lots of add to carts but no purchases on Shopify
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Make the gallery answer the questions customers actually have</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If product pages get traffic and carts but customers still
            hesitate or return items because expectations were unclear,
            send us an inquiry. We can review the visual buying experience.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
