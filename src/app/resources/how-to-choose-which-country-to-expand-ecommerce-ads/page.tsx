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
  "headline": "How to Choose Which Country to Expand Ecommerce Ads Into Next",
  "description": "Do not choose the next country because Meta CPM is cheap.",
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
    "@id": "https://www.attribix.app/resources/how-to-choose-which-country-to-expand-ecommerce-ads"
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
      "name": "How to Choose Which Country to Expand...",
      "item": "https://www.attribix.app/resources/how-to-choose-which-country-to-expand-ecommerce-ads"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Choose Which Country to Expand..." }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Choose Which Country to Expand Ecommerce Ads Into Next
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Do not choose the next country because Meta CPM is cheap.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              A good expansion market combines demand with operational viability.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Score the market</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Consider:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>organic traffic/sales already coming from the country</li>
            <li>search demand</li>
            <li>competitor presence</li>
            <li>product fit</li>
            <li>shipping cost/time</li>
            <li>duties</li>
            <li>payment methods</li>
            <li>local currency</li>
            <li>return cost</li>
            <li>language requirement</li>
            <li>advertising cost</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Existing demand is a strong clue</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If a store already receives profitable organic orders from the Netherlands without advertising there, paid expansion has evidence behind it.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test economics, not only advertising metrics</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Cheap traffic can be useless if conversion is low. Expensive traffic can be highly profitable if customers have strong AOV and margin.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Expand one or a few markets deliberately</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Launching 15 countries at once makes it difficult to learn what caused success or failure.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Choose markets where the entire customer journey is competitive and where the potential scale justifies localization work.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-you-run-different-meta-creatives-for-different" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Run Different Meta Creatives for Different Countries?</Link></li>
            <li><Link href="/resources/shopify-ready-for-international-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Is a Shopify Store Ready to Advertise Internationally?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this checked before you expand?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you have international demand but do not know which market deserves the next ad budget, contact us. We can compare markets before launching.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
