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
  headline: "Meta Ads Broad Targeting vs Interests: What Works Better for Ecommerce?",
  description:
    "Why broad targeting became attractive, when interests are still useful, and why the comparison should include more than CPM.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-broad-vs-interest-targeting" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Broad vs Interest Targeting",
      item: "https://www.attribix.app/resources/meta-ads-broad-vs-interest-targeting",
    },
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
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Broad vs Interest Targeting" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Broad Targeting vs Interests: What Works Better for Ecommerce?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Broad targeting and interest targeting are often discussed as
            if one must be universally better. In practice, they solve
            different problems, and the answer depends heavily on your
            account, product and data.
          </p>
        </Reveal>
      </section>

      {/* WHY BROAD BECAME ATTRACTIVE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why broad targeting became attractive</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Meta&apos;s delivery system has much more information than the
            few interests an advertiser selects in Ads Manager. With a
            purchase objective and good conversion signals, broader
            audiences give the system room to decide who is most likely to
            buy.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            For established ecommerce accounts, broad targeting can also
            reduce the problem of advertisers slicing the same audience
            into dozens of tiny ad sets.
          </p>
        </Reveal>
      </section>

      {/* WHEN INTERESTS STILL USEFUL */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When interests can still be useful</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Interest targeting may still be useful when you are
              exploring a niche, entering a new market, dealing with
              limited conversion history or trying to understand whether a
              specific customer group responds differently.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              It can also be useful as a testing framework. If a product
              is specifically designed for runners, golfers or new
              parents, a relevant interest test can answer a commercial
              question even if broad eventually becomes the scaling
              setup.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CREATIVE IS TARGETING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The creative is part of the targeting</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            This is often overlooked. An ad about recovering after a
            marathon will naturally attract a different person from an ad
            about comfortable everyday footwear, even if both are
            delivered to a broad audience.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Strong creative can therefore do some of the audience
            selection work. That is one reason modern Meta accounts often
            depend less on complex interest stacks than they once did.
          </p>
        </Reveal>
      </section>

      {/* COMPARE OUTCOMES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare business outcomes, not just CPM</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              An interest audience may produce cheaper clicks but worse
              customers. Broad may have a higher CPM but a better purchase
              rate. The comparison should include: CPA; purchase
              conversion rate; new-customer mix; revenue; margin; repeat
              purchase quality where available.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Do not choose broad because someone says interests are dead.
              Do not choose interests because they make the campaign feel
              more controlled. Test the hypothesis against real Shopify
              results. See{" "}
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>{" "}
              for how to measure that properly.
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
              <Link href="/resources/advantage-plus-shopping-campaigns-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you use Advantage+ Shopping Campaigns for Shopify?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-retarget-website-visitors-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you retarget website visitors on Meta Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Audience structure turned into a maze?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account has become a maze of audiences or broad
            targeting is not performing the way you expected, send us an
            inquiry. We can help simplify the structure and identify what
            is actually driving sales.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
