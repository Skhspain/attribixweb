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
  "headline": "When Increasing Your Price Can Actually Improve Advertising Performance",
  "description": "Increasing price normally creates more purchase friction.",
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "author": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.attribix.app/assets/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/when-increasing-your-price-can-actually-improve"
  }
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.attribix.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.attribix.app/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "When Increasing Your Price Can Actually...",
      "item": "https://www.attribix.app/resources/when-increasing-your-price-can-actually-improve"
    }
  ]
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "When Increasing Your Price Can Actually..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When Increasing Your Price Can Actually Improve Advertising Performance
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Increasing price normally creates more purchase friction. It can still improve the economics of advertising when the extra margin outweighs any decline in conversion rate.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            At $80:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Conversion rate: 3%
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Contribution before ads: $25.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            At $100:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Conversion rate drops to 2.6%.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Contribution before ads rises to $43.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            The higher price produces fewer orders but substantially more allowable acquisition cost.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Price also communicates positioning</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              An unusually low price can create doubt for products where quality matters. Premium customers may interpret price as one signal among many.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That does not mean “raise your price and people will trust you.” The product and brand must support the positioning.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">More margin creates bidding room</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A higher contribution per order can allow you to tolerate more expensive Meta or Google acquisition while still making money.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch demand elasticity</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Test changes carefully. A 10% price rise may have little effect on conversion in one category and destroy demand in another.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Optimize for contribution profit, not order count or ROAS alone.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-much-discount-is-too-much-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Much Discount Is Too Much for Ecommerce?</Link></li>
            <li><Link href="/resources/why-too-many-trust-badges-can-make-a-store-look-less" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Too Many Trust Badges Can Make a Store Look Less Trustworthy</Link></li>
            <li><Link href="/resources/do-trust-badges-still-improve-ecommerce-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Do Trust Badges Still Improve Ecommerce Conversion Rates?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ads convert but margins leave almost no room to scale, send us an inquiry. Pricing and product economics may be the real constraint.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
