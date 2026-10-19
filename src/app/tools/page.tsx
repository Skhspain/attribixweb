"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";

const TOOLS = [
  {
    title: "ROAS Calculator",
    desc: "Find out how much you get back for every $1 spent on ads, and how much you need to break even.",
    href: "/tools/roas-calculator",
  },
  {
    title: "MER Calculator",
    desc: "Compare all your sales with all your marketing costs, to see if marketing pays off overall (MER).",
    href: "/tools/mer-calculator",
  },
  {
    title: "Attribution Model Explorer",
    desc: "See how one sale can be credited to Facebook or Google, depending on the rule you use.",
    href: "/tools/attribution-models",
  },
];

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.attribix.app/tools" },
  ],
};

export default function ToolsPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />
          <Eyebrow>Free tools</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Free Shopify attribution tools
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Simple calculators that help you understand if your Facebook
            and Google ads are making you money.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08] hover:border-white/20"
              >
                <h2 className="text-base font-semibold text-white">{t.title}</h2>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{t.desc}</p>
                <span className="mt-4 inline-block text-xs text-white/50 group-hover:text-white/80">
                  Open tool →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
