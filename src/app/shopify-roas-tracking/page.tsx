"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "What is ROAS?",
    a: "Return on ad spend — revenue attributed to advertising divided by what you spent on it. On its own it's a ratio, not a profit figure.",
  },
  {
    q: "What is MER?",
    a: "Marketing efficiency ratio — total store revenue divided by total ad spend across every channel, with no attribution model involved. It moves less than platform ROAS because it doesn't depend on who gets the credit.",
  },
  {
    q: "What's the difference between MER and ROAS?",
    a: "ROAS relies on attributing individual orders to individual ads or platforms. MER skips attribution entirely and compares total revenue to total spend, which makes it steadier but less useful for deciding which specific campaign to scale.",
  },
  {
    q: "Why doesn't my blended ROAS match Meta's or Google's reported ROAS?",
    a: "Meta and Google each calculate ROAS only from the orders their own attribution model credits to them — and both platforms often claim credit for the same order, so their combined ROAS routinely overstates blended reality.",
  },
  {
    q: "Is a higher ROAS always better?",
    a: "Not necessarily. A campaign can show a high ROAS on orders that would likely have happened anyway, while a lower-ROAS campaign might be reaching genuinely new customers. ROAS measures efficiency, not incrementality.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ShopifyRoasPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-12 md:pt-32">
        <Reveal>
          <Eyebrow>ROAS tracking</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify ROAS tracking
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Add Meta&apos;s reported ROAS to Google&apos;s, and the total
            usually overstates what your store actually made. The two
            platforms are frequently crediting themselves for the same
            order.
          </p>
          <ProductCTA className="mt-9" />
        </Reveal>
      </section>

      {/* WHAT ROAS ANSWERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">ROAS answers a narrower question than it sounds like</h2>
          <p className="mt-5 text-white/65 leading-relaxed">
            Return on ad spend, as reported inside Meta or Google, is revenue
            that platform attributed to itself divided by what you spent
            there. It&apos;s a real number, calculated correctly — it just
            answers &ldquo;how did this platform&apos;s own attribution model
            score itself,&rdquo; not &ldquo;how much of my actual revenue
            came from this platform.&rdquo;
          </p>
        </Reveal>
      </section>

      {/* WHY SUMMING OVERSTATES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">Adding platform ROAS together double-counts orders</h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              A customer who saw a Meta ad, then searched and clicked a Google
              ad, then bought — is a single order that both platforms may
              independently claim inside their own attribution windows. Sum
              their reported revenue and you&apos;ve counted that order
              twice, sometimes more if email or affiliate tracking also
              claims a piece of it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BLENDED ROAS + MER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Blended ROAS and MER measure differently</h2>
          <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
            <p>
              <strong className="text-white/85">Blended ROAS</strong> is the
              revenue included in the calculation divided by total
              advertising spend across the selected channels:
            </p>
            <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-cyan-200">
              Blended ROAS = Revenue ÷ Total advertising spend
            </p>
            <p>
              The part that trips people up is the numerator. Some
              businesses use total store revenue, some use only the revenue
              they attribute to advertising, and some exclude organic or
              repeat-customer revenue from the calculation entirely. None of
              these is more &ldquo;correct&rdquo; than the others — the
              actual requirement is picking one definition and keeping it
              consistent, so the number means the same thing from one month
              to the next.
            </p>
            <p>
              <strong className="text-white/85">MER</strong> (marketing
              efficiency ratio) is commonly calculated as total store revenue
              divided by total marketing spend, which sidesteps attribution
              entirely. It&apos;s cruder — it can&apos;t tell you which
              channel is working — but it can&apos;t be inflated by
              double-counted attribution either, which makes it a useful
              sanity check against blended ROAS.
            </p>
          </div>
        </Reveal>
      </section>

      {/* WORKED EXAMPLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">A week of spend, four different numbers</h2>
            <p className="mt-4 text-white/65 leading-relaxed">Illustrative example, not a real account:</p>
          </Reveal>
          <Reveal delay={80} className="mt-6 space-y-2.5 text-sm font-mono">
            <div className="flex justify-between border-b border-white/10 py-2 text-white/60">
              <span>Meta-reported revenue (spend $4,000)</span>
              <span className="text-white/85">$16,000 (4.0x)</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2 text-white/60">
              <span>Google-reported revenue (spend $3,000)</span>
              <span className="text-white/85">$13,500 (4.5x)</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2 text-white/40">
              <span>Naive sum of both platforms&apos; reported revenue</span>
              <span>$29,500</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2 text-white/40">
              <span>Estimated overlapping orders (claimed by both)</span>
              <span>≈ $8,500</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2 text-white/60">
              <span>Unique Shopify revenue that week, net of refunds</span>
              <span className="text-white/85">$21,000</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2 text-cyan-200 font-semibold">
              <span>Blended ROAS ($21,000 ÷ $7,000 combined spend)</span>
              <span>3.0x</span>
            </div>
            <div className="flex justify-between py-2 text-white/60">
              <span>MER (total store revenue ÷ total marketing spend)</span>
              <span className="text-white/85">varies — depends on total store revenue, not shown here</span>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-sm text-white/45 max-w-2xl">
              The gap between the platforms&apos; combined claim and unique
              Shopify revenue isn&apos;t fraud on either side — it&apos;s
              overlap, plus whatever refunds happened after the platforms had
              already logged their numbers. The overlap figure here is an
              estimate for illustration; the real number depends on how much
              cross-channel journey overlap your store actually has.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT AFFECTS THE ACTUAL NUMBER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Refunds, discounts, tax and shipping move the real number</h2>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            Shopify revenue itself isn&apos;t a single obvious figure either —
            gross sales, net sales after discounts and refunds, and revenue
            including tax and shipping can each tell a different ROAS story
            from the same order data. We cover how that plays out on the{" "}
            <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Google Ads tracking page
            </Link>{" "}
            in more detail.
          </p>
        </Reveal>
      </section>

      {/* INCREMENTALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold">Neither number proves the sale wouldn&apos;t have happened anyway</h2>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Blended ROAS and MER are both efficiency ratios, not proof of
              incrementality — a high ratio doesn&apos;t confirm that
              advertising caused the sale rather than a customer who was
              going to buy regardless. Attribution data, at every level of
              this page, is a reconstruction based on the evidence
              available, not a perfect record of cause and effect.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOW ATTRIBIX HELPS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold">What Attribix shows instead</h2>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Attribix combines Meta and Google spend into a blended ROAS
              figure alongside each platform&apos;s own reported number, so
              the gap between them is visible rather than something
              you&apos;d only notice by reconciling spreadsheets manually.
              MER — total store revenue over total spend — is a separate
              calculation you can make from your Shopify and ad platform
              numbers directly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* RELATED READING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Related reading</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/mer-vs-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER vs ROAS for Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See your blended ROAS</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and ad accounts to compare platform-reported
            ROAS against actual Shopify revenue.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
        <p className="mt-6 text-sm text-white/35">
          See how this fits into{" "}
          <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            Shopify attribution
          </Link>{" "}
          and{" "}
          <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            Meta Conversions API
          </Link>
          .
        </p>
      </section>
    </ProductPageShell>
  );
}
