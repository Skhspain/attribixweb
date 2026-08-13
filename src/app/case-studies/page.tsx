"use client";

import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";

export default function CaseStudiesPage() {
  return (
    <ProductPageShell>
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case studies" }]} />
          <Eyebrow>Case studies</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Case studies
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            We&apos;re putting together real case studies from actual Attribix
            implementations: the tracking setup before, what changed, and
            what the data showed afterward.
          </p>
        </Reveal>
      </section>

      {/* HONEST STATE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Nothing published here yet</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            We&apos;d rather publish this page empty than fill it with
            illustrative numbers dressed up as results. When a case study
            goes up, it&apos;ll show a real store, a real tracking setup, and
            real before-and-after data, with client approval, and with the
            same honesty about limitations you&apos;ll find throughout this site.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See what Attribix shows for your own store</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and ad accounts and see your own numbers
            instead of waiting on someone else&apos;s.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
