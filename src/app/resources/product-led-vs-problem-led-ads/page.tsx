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
  headline: "Should Ecommerce Ads Lead With the Product or the Problem?",
  description:
    "When a Meta ad should open on the product itself and when it needs a problem first, based on how visually desirable the product is.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/product-led-vs-problem-led-ads",
  },
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
      name: "Product-Led vs Problem-Led Ads",
      item: "https://www.attribix.app/resources/product-led-vs-problem-led-ads",
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
              { label: "Product-Led vs Problem-Led Ads" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Ecommerce Ads Lead With the Product or the Problem?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Some products sell themselves visually. Others make little sense
            until the customer recognizes the problem they solve. That is why
            there is no universal rule to &ldquo;lead with pain&rdquo; or
            &ldquo;show the product in the first second.&rdquo;
          </p>
        </Reveal>
      </section>

      {/* LEAD WITH PRODUCT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Lead with the product when it is immediately desirable</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Fashion, jewellery, food, furniture and visually distinctive
            products often benefit from showing the item quickly. The
            product itself creates curiosity.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            A long problem setup can delay the thing people actually want to
            see.
          </p>
        </Reveal>
      </section>

      {/* LEAD WITH PROBLEM */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Lead with the problem when the product needs context</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A posture product, specialist tool or organizational solution
              may be more compelling after the viewer recognizes a familiar
              frustration.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              &ldquo;Still digging through a drawer to find the right
              cable?&rdquo; gives a cable organizer a reason to exist.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DON'T MANUFACTURE PAIN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not manufacture pain</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Overdramatic problem messaging can make a brand feel cheap or
            manipulative. The problem should be real and proportional to the
            product.
          </p>
        </Reveal>
      </section>

      {/* AWARENESS LEVELS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test awareness levels</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Cold audiences may respond to a clear problem or outcome.
              People who already know your product may respond better to
              proof, offer or new use cases.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              A strong creative library usually includes both product-led and
              problem-led approaches because customers enter the journey with
              different levels of awareness.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The best opening is the one that makes the value obvious
              fastest to the intended customer.
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
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/ugc-ads-vs-product-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                UGC ads vs product ads: which converts better?
              </Link>
            </li>
            <li>
              <Link href="/resources/carousel-ads-vs-single-image-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Carousel ads vs single image ads: which should you use?
              </Link>
            </li>
            <li>
              <Link href="/resources/good-hook-for-meta-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is a good hook for a Meta ad?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Every ad communicating the product the same way?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta ads all communicate the product in the same way,
            contact us. We can build a creative strategy around different
            customer motivations and awareness levels.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
