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
  "headline": "What Should You Expect From a Marketing Agency Every Month?",
  "description": "A good agency month should contain more than a report showing what happened.",
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
    "@id": "https://www.attribix.app/resources/what-should-you-expect-from-a-marketing-agency-every"
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
      "name": "What Should You Expect From a Marketing...",
      "item": "https://www.attribix.app/resources/what-should-you-expect-from-a-marketing-agency-every"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Should You Expect From a Marketing..." }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Should You Expect From a Marketing Agency Every Month?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A good agency month should contain more than a report showing what happened. There should be a visible cycle of analysis, decisions, implementation and learning.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Expect ongoing account work</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Depending on the channels, that can include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>search term and query review</li>
            <li>budget changes</li>
            <li>creative analysis and briefs</li>
            <li>feed/merchant issues</li>
            <li>campaign restructuring when justified</li>
            <li>landing-page observations</li>
            <li>tracking checks</li>
            <li>new tests</li>
            <li>performance explanations</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Not every account needs dramatic changes every week. Constant activity can be as damaging as neglect.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reporting should explain movement</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A useful report answers:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>What changed?</li>
              <li>Why do we think it changed?</li>
              <li>What did we learn?</li>
              <li>What are we doing next?</li>
              <li>Where are we uncertain?</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              A spreadsheet of CPM, CTR and ROAS without interpretation is not strategy.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">You should know what is being tested</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            There should be a backlog of meaningful hypotheses rather than random edits.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Communication should match the business</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Some clients need weekly calls. Others prefer concise updates and a monthly strategy review. Frequency matters less than accountability and clarity.
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
            <li><Link href="/resources/freelancer-vs-marketing-agency-which-should-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?</Link></li>
            <li><Link href="/resources/how-often-should-your-marketing-agency-report-to-you" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Often Should Your Marketing Agency Report to You?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need clarity on what&apos;s included?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are paying an agency but cannot explain what they actually do between reports, contact us. We can show you what a transparent management cadence looks like.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
