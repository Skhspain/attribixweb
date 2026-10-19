"use client";

import React from "react";
import Link from "next/link";
import faq from "@/content/faq.json";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import FAQList from "@/components/marketing/FAQList";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { DemoLink, SectionHeader, TrialLink, textLink } from "@/components/site/ui";
import { BILLING_NOTE, trialSummary } from "@/lib/pricing";

type FAQ = { q: string; a: string };
function isFAQArray(x: unknown): x is FAQ[] {
  return Array.isArray(x) && x.every((i) => i && typeof i.q === "string" && typeof i.a === "string");
}

// Trial and billing answers come from the pricing config so they can never
// drift from the pricing page.
const PRICING_ITEMS: FAQ[] = [
  {
    q: "Is there a free trial?",
    a: `Yes. The trial lasts ${trialSummary()}. Use it to see your own numbers before you pay anything.`,
  },
  {
    q: "How do I pay?",
    a: `${BILLING_NOTE} To cancel, uninstall the app.`,
  },
];

export default function FAQPage() {
  const items: FAQ[] = [...(isFAQArray(faq) ? faq : []), ...PRICING_ITEMS];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-20 md:pt-32">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        <SectionHeader
          as="h1"
          eyebrow="FAQ"
          title="Frequently asked questions"
          intro="Short, simple answers about what Attribix does, how it counts your sales, and what it costs."
        />

        <div className="mt-10">
          <FAQList items={items} />
        </div>

        <p className="mt-8 text-sm text-white/65">
          Questions about having us run your ads? See the{" "}
          <Link href="/ad-management" className={textLink}>
            Ad Management FAQ
          </Link>
          . Anything else: <a href="mailto:hello@attribix.app" className={textLink}>hello@attribix.app</a>.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <TrialLink location="faq" />
          <DemoLink location="faq">Get a free walkthrough</DemoLink>
        </div>
      </main>
    </ProductPageShell>
  );
}
