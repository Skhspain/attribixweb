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
  "headline": "Small Marketing Agency vs Large Agency: Which Is Better?",
  "description": "Large agencies offer scale, established processes and deeper staffing.",
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
    "@id": "https://www.attribix.app/resources/small-marketing-agency-vs-large-agency-which-is-better"
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
      "name": "Small Marketing Agency vs Large Agency",
      "item": "https://www.attribix.app/resources/small-marketing-agency-vs-large-agency-which-is-better"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Small Marketing Agency vs Large Agency" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Small Marketing Agency vs Large Agency: Which Is Better?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Large agencies offer scale, established processes and deeper staffing. Small agencies can offer direct access, flexibility and fewer layers. Neither size guarantees good work.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Large agencies can handle complexity</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Big teams may have dedicated specialists for creative, analytics, feeds, development and international markets. They can be valuable for large organizations with procurement, compliance and many stakeholders.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Small agencies can stay closer to the account</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              In a boutique team, the founder or senior specialist may remain involved. Decisions can be faster and the account may represent a more meaningful share of the agency&apos;s business.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The biggest question is staffing</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Ask who will actually manage your account after onboarding. Agency size is irrelevant if the work is delegated to someone with little experience and a huge client list.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match complexity and culture</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A multinational retailer may need capabilities a three-person agency cannot provide. A $100k/month Shopify store may receive more senior attention from a smaller specialist than from a global network.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Choose the team whose working model fits the problem, not the agency with the biggest client-logo wall.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-should-you-expect-from-a-marketing-agency-every" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should You Expect From a Marketing Agency Every Month?</Link></li>
            <li><Link href="/resources/freelancer-vs-marketing-agency-which-should-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?</Link></li>
            <li><Link href="/resources/is-an-ecommerce-marketing-agency-worth-the-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is an Ecommerce Marketing Agency Worth the Cost?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the engagement?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you prefer a smaller specialist team but still need Meta, Google, Shopify and measurement expertise, send us an inquiry. We&apos;ll show you exactly who would work on the account.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
