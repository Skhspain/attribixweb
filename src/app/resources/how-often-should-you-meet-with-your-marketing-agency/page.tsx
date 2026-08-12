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
  "headline": "How Often Should You Meet With Your Marketing Agency?",
  "description": "Meeting more often does not automatically improve marketing.",
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
    "@id": "https://www.attribix.app/resources/how-often-should-you-meet-with-your-marketing-agency"
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
      "name": "How Often Should You Meet With Your...",
      "item": "https://www.attribix.app/resources/how-often-should-you-meet-with-your-marketing-agency"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Often Should You Meet With Your..." }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Often Should You Meet With Your Marketing Agency?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Meeting more often does not automatically improve marketing. The useful frequency is the one that keeps decisions moving without consuming the time needed to do the work.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Weekly can work during active periods</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Launches, major creative testing, website changes or high ad spend can justify a short weekly call. The meeting should focus on decisions and blockers, not reading a dashboard aloud.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Monthly can be enough for stable accounts</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If campaigns are mature and communication happens asynchronously, a deeper monthly strategy meeting may provide more value than four repetitive weekly calls.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate operational communication from meetings</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Urgent issues should not wait for a scheduled call. Use email/Slack/project tools for approvals, stock changes and tracking problems.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Bring business context</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The best agency meetings include information the ad account cannot see: inventory, margin changes, product launches, sales-team feedback, customer complaints and cash-flow priorities.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Meetings are a coordination tool, not a deliverable to maximize.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-often-should-your-marketing-agency-report-to-you" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Often Should Your Marketing Agency Report to You?</Link></li>
            <li><Link href="/resources/what-should-you-expect-from-a-marketing-agency-every" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should You Expect From a Marketing Agency Every Month?</Link></li>
            <li><Link href="/resources/small-marketing-agency-vs-large-agency-which-is-better" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Small Marketing Agency vs Large Agency: Which Is Better?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the engagement?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If agency calls take a lot of time but rarely produce clear next actions, contact us. We keep meetings focused on the decisions that affect performance.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
