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
  headline: "UGC Ads vs Product Ads: Which Converts Better?",
  description:
    "UGC and polished product ads communicate different kinds of proof, not opposing philosophies. When each format wins, and how to test the message separately from the execution.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ugc-ads-vs-product-ads" },
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
      name: "UGC Ads vs Product Ads",
      item: "https://www.attribix.app/resources/ugc-ads-vs-product-ads",
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
              { label: "UGC Ads vs Product Ads" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            UGC Ads vs Product Ads: Which Converts Better?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            UGC and polished product ads are not opposing religions. They
            are formats that communicate different kinds of proof.
          </p>
        </Reveal>
      </section>

      {/* DIFFERENT PROOF */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm">
            A person speaking naturally about a product can create
            relatability and social proof. A carefully shot product
            demonstration can communicate quality, detail and function far
            better than a shaky selfie.
          </p>
        </Reveal>
      </section>

      {/* UGC STRONGEST */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">UGC is strongest when the person matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              UGC-style creative works particularly well when the buyer
              needs to hear: what problem someone had; why they tried the
              product; what changed; how it fits into real life; whether
              the claim feels believable.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The format can make the message feel less like an
              advertisement, but bad UGC is still bad advertising. Reading
              a scripted list of benefits into a camera does not become
              persuasive merely because it was filmed on a phone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT LED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product-led creative wins when demonstration matters</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            For visually distinctive, technical or design-led products,
            showing the item clearly can outperform a talking head. Good
            product footage can answer objections in seconds.
          </p>
        </Reveal>
      </section>

      {/* TEST SEPARATELY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the message and format separately</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If UGC Ad A beats Product Ad B, you do not automatically know
              that UGC is the reason. The winning ad may simply have had a
              better hook or offer.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              A better test keeps the core selling idea similar while
              changing the execution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MIXED LIBRARY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build a mixed creative library</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Strong ecommerce accounts often use both: customer-style proof
            for relatability and product-led assets for clarity. The
            objective is not to find the one format that &ldquo;wins
            Meta.&rdquo; It is to communicate the reasons people buy from
            several convincing angles.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/static-images-vs-video-ads-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Static images vs video ads for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/resources/carousel-ads-vs-single-image-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Carousel ads vs single image ads
              </Link>
            </li>
            <li>
              <Link href="/resources/how-often-change-meta-ad-creatives" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How often should you change Meta ad creatives?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Testing without clear learning?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your creative testing has become a fight between UGC and
            polished ads without clear learning, send us an inquiry. We can
            structure tests around the message that drives sales.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
