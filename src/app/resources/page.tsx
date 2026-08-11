"use client";

import React from "react";
import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { CORE_GUIDES, CATEGORIES, type Article } from "@/lib/resources-data";

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
  ],
};

function matches(a: Article, category: string, q: string) {
  if (!q) return true;
  const hay = (a.title + " " + a.desc + " " + category).toLowerCase();
  return hay.includes(q.toLowerCase());
}

export default function ResourcesPage() {
  const [query, setQuery] = React.useState("");

  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-8 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <Eyebrow>Resources</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Ecommerce marketing, advertising &amp; tracking resources
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Practical guides for people running Meta and Google Ads on
            Shopify stores — advertising performance, conversion problems,
            attribution, tracking, and when it's time to bring in outside
            help. Written by people who work in the accounts, not generic
            explainers.
          </p>
        </Reveal>
      </section>

      {/* SEARCH */}
      <section className="mx-auto max-w-3xl px-4 pb-6">
        <Reveal>
          <label htmlFor="resource-search" className="sr-only">Search resources</label>
          <input
            id="resource-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search — e.g. &ldquo;no sales&rdquo;, &ldquo;ROAS&rdquo;, &ldquo;agency&rdquo;, &ldquo;consent mode&rdquo;"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-cyan-400/50"
          />
        </Reveal>
      </section>

      {/* CATEGORY CHIPS */}
      <section className="mx-auto max-w-3xl px-4 pb-8">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60 hover:text-white hover:border-white/20 transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CORE GUIDES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-2">Start here</h2>
          <p className="text-sm text-white/60 mb-8 max-w-2xl">
            These five guides cover the core of how attribution, tracking
            and reported ROAS actually work for Shopify stores running
            Meta and Google Ads.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {CORE_GUIDES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08] hover:border-white/20"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                  {g.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{g.desc}</p>
                <span className="mt-4 inline-block text-xs text-white/50 group-hover:text-white/80">
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CATEGORY SECTIONS */}
      {CATEGORIES.map((cat) => {
        const visible = cat.items.filter((a) => matches(a, cat.label, query));
        if (query && visible.length === 0) return null;
        return (
          <section key={cat.id} id={cat.id} className="mx-auto max-w-3xl px-4 py-10 scroll-mt-24">
            <Reveal>
              <h2 className="text-xl md:text-2xl font-extrabold mb-2">{cat.label}</h2>
              <p className="text-sm text-white/60 mb-8 max-w-2xl">{cat.intro}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {visible.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08] hover:border-white/20"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                      {cat.label}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-white">{g.title}</h3>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed">{g.desc}</p>
                    <span className="mt-4 inline-block text-xs text-white/50 group-hover:text-white/80">
                      Read the guide →
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </section>
        );
      })}

      {query && CATEGORIES.every((cat) => cat.items.filter((a) => matches(a, cat.label, query)).length === 0) && (
        <section className="mx-auto max-w-3xl px-4 py-10 text-center text-sm text-white/50">
          No resources match &ldquo;{query}&rdquo;. Try a different term, or{" "}
          <Link href="/ad-management/inquiry" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            send us an inquiry
          </Link>{" "}
          if you can&apos;t find what you&apos;re looking for.
        </section>
      )}
    </ProductPageShell>
  );
}
