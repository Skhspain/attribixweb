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
  "headline": "Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?",
  "description": "A strong freelancer can outperform a weak agency, and a strong agency can provide capabilities one person cannot realistically cover.",
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
    "@id": "https://www.attribix.app/resources/freelancer-vs-marketing-agency-which-should-ecommerce"
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
      "name": "Freelancer vs Marketing Agency",
      "item": "https://www.attribix.app/resources/freelancer-vs-marketing-agency-which-should-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Freelancer vs Marketing Agency" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A strong freelancer can outperform a weak agency, and a strong agency can provide capabilities one person cannot realistically cover. The logo on the invoice tells you less than the operating model.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Freelancers can offer direct expertise</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            You may work directly with the person making campaign decisions, which reduces layers and can make communication fast. Fees can also be lower because overhead is smaller.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            The trade-off is capacity. One person can become a bottleneck for creative, tracking, reporting, CRO and holiday coverage.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Agencies can provide breadth</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A good ecommerce agency may combine Meta, Google, creative, Shopify and measurement specialists. That becomes useful when the channels interact.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The risk is being sold by a senior expert and handed to a junior account manager you rarely meet.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Choose based on the work</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If you need one specialist to fix a Google Search account, a freelancer may be ideal. If you need ongoing Meta + Google + creative + tracking + website coordination, a team can be more practical.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ask the same questions either way</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Who does the work? How many accounts do they manage? What happens during absence? Who owns the accounts? How do they measure success?
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/small-marketing-agency-vs-large-agency-which-is-better" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Small Marketing Agency vs Large Agency: Which Is Better?</Link></li>
            <li><Link href="/resources/is-an-ecommerce-marketing-agency-worth-the-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is an Ecommerce Marketing Agency Worth the Cost?</Link></li>
            <li><Link href="/resources/what-should-you-expect-from-a-marketing-agency-every" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should You Expect From a Marketing Agency Every Month?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure what you should be getting?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ecommerce marketing now spans enough disciplines that one person struggles to cover it, contact us. We can explain how our team-based management works.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
