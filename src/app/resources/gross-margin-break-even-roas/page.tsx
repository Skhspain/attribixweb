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
  headline: "How Gross Margin Changes Your Break-Even ROAS",
  description: "Break-even ROAS rises sharply as margin falls because less of each revenue dollar is available to pay for advertising. The simple formula, and why real break-even is often higher.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/gross-margin-break-even-roas" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Gross margin break-even ROAS", item: "https://www.attribix.app/resources/gross-margin-break-even-roas" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Gross margin break-even ROAS" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How gross margin changes your break-even ROAS
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Break-even ROAS rises sharply as margin falls because less of
            each revenue dollar is available to pay for advertising.
          </p>
        </Reveal>
      </section>

      {/* SIMPLE FORMULA */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Simple gross-margin formula</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>Break-even ROAS = 1 ÷ gross margin</p>
            <p>Examples before other variable costs:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>70% margin → 1 / .70 = 1.43x (143%)</li>
              <li>50% margin → 2.00x (200%)</li>
              <li>40% margin → 2.50x (250%)</li>
              <li>30% margin → 3.33x (333%)</li>
              <li>20% margin → 5.00x (500%)</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* REAL BREAK-EVEN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Real break-even is often higher</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Payment fees, fulfilment, shipping subsidies, discounts and
                returns reduce contribution margin further.
              </p>
              <p>
                If a &quot;50% gross margin&quot; product leaves only 38%
                after variable costs, a 200% ROAS is not truly break-even.
                The fuller comparison is in{" "}
                <Link href="/resources/contribution-margin-vs-gross-margin-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  contribution margin vs gross margin for ecommerce advertising
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFFERENT TARGETS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Different products need different targets</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A Google campaign selling products at 25% and 70% margins should
            not treat one dollar of conversion value as economically
            identical.
          </p>
        </Reveal>
      </section>

      {/* BREAK-EVEN IS NOT TARGET */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Break-even is not target ROAS</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The business still needs contribution for overhead and profit,
              so operating target should generally sit above break-even
              unless LTV intentionally supports first-order loss.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/contribution-margin-vs-gross-margin-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Contribution margin vs gross margin for ecommerce advertising
              </Link>
            </li>
            <li>
              <Link href="/resources/what-roas-do-you-need-with-a-30-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What ROAS do you need with a 30% gross margin?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-roas-do-you-need-with-a-50-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What ROAS do you need with a 50% gross margin?
              </Link>
            </li>
            <li>
              <Link href="/resources/400-roas-profitable" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why a 400% ROAS can still lose money
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Build ROAS targets that mean something economically</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your account uses one ROAS target across products with very
            different margins, send us an inquiry. We can build
            economically meaningful targets.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
