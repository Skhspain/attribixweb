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
            Attribix is made by bevit, a team that runs Facebook and Google
            ads for businesses. We built it to answer a simple question: which
            ads really bring in customers?
          </p>
        </Reveal>
      </section>

      {/* ORIGIN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why it exists</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            For years we ran ads for online stores. Facebook said one number.
            Google said another. The store&apos;s real sales said a third. We
            couldn&apos;t tell our clients which ads truly worked. So we built
            Attribix. It puts your real Shopify sales next to your ads, and
            makes sure each sale is counted correctly.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT'S FOR */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Two ways to work with us</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              You can use the Attribix app yourself. Connect your Shopify
              store and your Facebook and Google ad accounts, and see which ads
              work. Or, if you would rather not run your ads yourself, our team
              can do it for you through{" "}
              <Link href="/ad-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Ad Management
              </Link>
              . You can use one without the other.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What we believe</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              There is no single &quot;right&quot; way to decide which ad earned a sale. Facebook and
              Google both want the credit, so their numbers rarely add up to your real sales. We
              don&apos;t pretend to have one perfect number. Instead, Attribix shows your real orders,
              lets you compare different ways of giving credit, and counts as many sales as it
              can. Then you decide, with the facts in front of you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Track record</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Stian Henriksen leads the team and has worked in online
            advertising since 2008. bevit started running Facebook and Google
            ads for clients in 2020, and about 80% of those clients have stayed
            with us since. The agency is Top Rated with 5-star reviews on
            Fiverr, and has run ads for businesses including MyHeritage, London
            Diamonds and Roberes.
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
            Install the app, connect your ad accounts, and see which of
            your ads bring in customers.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
