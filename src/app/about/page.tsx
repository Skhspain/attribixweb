"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.attribix.app/about" },
  ],
};

export default function AboutPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <Eyebrow>About</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            About Attribix
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Attribix is built by the team behind bevit, a Meta and Google
            Ads agency, not a software company that built a tracking tool
            without ever running the campaigns it reports on.
          </p>
        </Reveal>
      </section>

      {/* ORIGIN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why it exists</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Attribix was created by the bevit team after years of managing
            Meta and Google Ads accounts and dealing with incomplete,
            conflicting and misleading platform reporting for clients. The
            software connects campaign decisions with Shopify orders,
            server-side events and customer journeys. It was built to solve
            the specific reporting problems that kept coming up in that
            day-to-day agency work, not designed in the abstract.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT'S FOR */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Two ways to work with the same team</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Shopify stores can use Attribix as self-serve software,
              connecting Shopify, Meta and Google to view attribution and
              tracking in one dashboard. Businesses that want more can
              separately work with bevit directly for{" "}
              <Link href="/ad-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Ad Management
              </Link>
              , where the same team runs the campaigns using the same
              underlying data. The two are separate, optional paths: using
              Attribix doesn&apos;t require using Ad Management, and vice versa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Track record</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Stian Henriksen, who leads the team, has worked in digital
            advertising since 2008. bevit started managing Meta and Google
            Ads for clients in 2020, and roughly 80% of clients have stayed
            since then. The agency is Top Rated and 5-star reviewed on
            Fiverr, and has managed campaigns for businesses including
            MyHeritage, London Diamonds and Roberes.
          </p>
        </Reveal>
      </section>

      {/* WHERE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Who&apos;s behind it</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Attribix is operated by Bevit Agency, based in Altea, Spain. Legal
            and contact details are in the{" "}
            <Link href="/terms" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Privacy Policy
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See it on your own store</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your Shopify store and ad accounts and see the
            reporting directly.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
