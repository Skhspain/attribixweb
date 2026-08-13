"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";
import { LastReviewed, OfficialSources } from "@/components/marketing/ArticleTrust";

const FAQ_ITEMS = [
  {
    q: "We changed our cookie banner and Google Ads conversions dropped. Is Consent Mode the cause?",
    a: "It's the first thing to check. A new cookie banner can change the default consent state, delay when consent signals fire relative to your tags, or default to denying storage until someone actively accepts, any of which reduces directly measured conversions and shifts more of your reporting to modeled estimates.",
  },
  {
    q: "Does Consent Mode block Google Ads tracking entirely when consent is denied?",
    a: "No. It changes what the tag is allowed to store and send: without ad_storage consent, the tag can't set or read ad-related cookies. Google can still receive a limited, cookieless ping and use it, along with aggregate patterns, to model conversions statistically.",
  },
  {
    q: "Can server-side tracking or Enhanced Conversions get around Consent Mode?",
    a: "No, and any claim that it does should be treated with suspicion. Server-side tracking changes how an event physically reaches Google, not whether you're allowed to send it. A customer who hasn't consented should be excluded from server-side events the same way they're excluded from browser-based ones.",
  },
  {
    q: "Will modeled conversions ever exactly match what direct measurement would have shown?",
    a: "No, and that's not really the goal. Modeling is built to narrow the aggregate gap over enough volume and time, not to reconstruct any specific missing conversion. Low-traffic accounts and short reporting windows will see more volatility from modeling than high-traffic accounts will.",
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

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Consent Mode on Shopify: Why Google Ads Conversions May Change",
  description:
    "What Google Consent Mode reads from a cookie banner, what happens when consent is denied, and the common implementation mistakes that cause a conversion drop after a banner change.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-consent-mode-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Google Consent Mode on Shopify", item: "https://www.attribix.app/resources/google-consent-mode-shopify" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Consent Mode on Shopify" }]} />
          <Eyebrow>Tracking &amp; Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Consent Mode on Shopify: why Google Ads conversions may change
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            &ldquo;We changed the cookie banner and conversions dropped&rdquo; is
            one of the most common tracking complaints on Shopify stores
            running Google Ads, and Consent Mode is usually the mechanism
            behind it. It doesn&apos;t block tracking outright. It changes
            how much of it Google measures directly versus estimates.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT IS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What Consent Mode actually is</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Consent Mode is a signal, not a tracking method of its own. Your
            consent management platform (the cookie banner and whatever
            logic sits behind it) tells Google&apos;s tags whether the
            visitor has granted categories of consent, most relevantly{" "}
            <code className="text-cyan-300">ad_storage</code> (whether ads
            cookies can be set) and{" "}
            <code className="text-cyan-300">analytics_storage</code>{" "}
            (whether analytics cookies can be set). Google&apos;s tags read
            that signal and adjust their own behavior accordingly: they
            don&apos;t decide consent themselves, and they don&apos;t
            override whatever the banner determined.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            This means the accuracy of the whole system depends entirely on
            the CMP sending the right signal, at the right time, in a
            format Google&apos;s tags actually understand. A cookie banner
            that looks correct to a human visitor can still be wired up
            wrong at the signal level.
          </p>
        </Reveal>
      </section>

      {/* WHAT HAPPENS WHEN DENIED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What happens when consent is denied</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              When a visitor declines ad-related consent, the Google Ads tag
              can&apos;t set or read the cookies it would normally use to
              track that visitor across a session or return visit. It can
              still send a limited, cookieless signal indicating that an ad
              interaction and, separately, a conversion event occurred,
              without attaching the identifiers that would normally let
              Google connect the two directly.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Google uses that limited signal, combined with patterns from
              consented traffic on the same account, to statistically model
              how many of the unconsented visits likely converted. This is
              worth being honest about: modeling is an estimate, not a
              recovery mechanism. It can narrow the gap between reported and
              actual conversions in aggregate, over enough volume and time.
              It does not reconstruct any individual missing conversion, and
              it will never claim to have measured a specific visitor&apos;s
              specific purchase. Accounts with low traffic or short
              reporting windows will see this modeling behave more
              erratically than high-volume accounts, simply because there&apos;s
              less consented data to model from.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY THE BANNER CHANGE MATTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Diagnosing &ldquo;we changed the banner and conversions dropped&rdquo;</h2>
          <div className="mt-2 space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              A conversion drop right after a cookie banner change almost
              always traces back to one of a few implementation issues,
              rather than Consent Mode itself being broken:
            </p>
            <p>
              <strong className="text-white/85">The consent signal fires late.</strong>{" "}
              If tags load and start attempting to fire before the CMP has
              finished initializing and communicating a consent state,
              they can end up operating on a default (often the most
              restrictive one) for a meaningful slice of visitors, even
              those who go on to accept. Tag and consent script order
              matters here; a banner that loads after the Google tag has
              already attempted to fire creates a gap the new banner didn&apos;t
              intend.
            </p>
            <p>
              <strong className="text-white/85">A stricter default consent state than before.</strong>{" "}
              Google&apos;s tags support setting default consent values
              that apply before the visitor makes any choice, and separate
              values once they do. A banner rebuild that changes the
              default from granted-until-declined to denied-until-accepted
              is a deliberate, defensible privacy choice, but it will
              measurably reduce directly-tracked conversions, because more
              visitors are now in a denied state for however long it takes
              them to interact with the banner, if they interact at all.
            </p>
            <p>
              <strong className="text-white/85">Basic vs. advanced implementation differences.</strong>{" "}
              Google Consent Mode supports more than one depth of
              implementation, and Shopify stores commonly run one that only
              loads Google&apos;s tags after consent is granted versus one
              that always loads them and adjusts behavior based on the
              signal. These behave differently for denied visitors: one
              produces no signal at all until consent changes, the other
              produces the limited cookieless signal described above. Which
              one a given theme or app has actually implemented is worth
              confirming directly rather than assuming, since the practical
              effect on modeled conversions differs.
            </p>
            <p>
              <strong className="text-white/85">The CMP and Google tags disagree on category names.</strong>{" "}
              If the cookie banner app maps its own consent categories to
              Google&apos;s expected signal names incorrectly, Google&apos;s
              tags may never receive a valid signal at all and fall back to
              the most conservative default regardless of what the visitor
              actually chose.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SERVER SIDE / ENHANCED CONVERSIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consent still governs server-side events and Enhanced Conversions</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              It&apos;s tempting to treat server-side tracking as a way
              around consent restrictions, since the event isn&apos;t
              relying on a browser cookie to reach Google. That&apos;s not
              how it works, and no honest implementation claims otherwise.
              Consent Mode still governs what a server-side event or an
              Enhanced Conversions payload is allowed to include: a
              visitor who declined ad-storage consent should have their
              server-side event sent without the identifying data Enhanced
              Conversions would normally attach, the same way their
              browser-side event is sent without ad cookies. Server-side
              tracking closes a technical gap in how reliably an event
              reaches Google; it doesn&apos;t change who you&apos;re
              allowed to track. We cover what Enhanced Conversions can and
              can&apos;t do in more detail on{" "}
              <Link href="/resources/enhanced-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Enhanced Conversions for Shopify explained
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT MENTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Where Attribix fits</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Attribix ties Google Ads conversion data back to actual Shopify
            orders, which makes a sudden post-banner-change drop easier to
            isolate: you can see whether the gap between reported
            conversions and real orders widened right when the banner
            shipped, rather than guessing from Google Ads reporting alone.
            More on how that connection works on{" "}
            <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Google Ads conversion tracking for Shopify
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="space-y-2 border-t border-white/10 pt-6">
            <OfficialSources
              sources={[
                { label: "About consent mode", href: "https://support.google.com/google-ads/answer/10000067" },
              ]}
            />
            <LastReviewed date="August 12, 2026" />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/enhanced-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Enhanced Conversions for Shopify explained
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads and Shopify revenue don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-conversions-dropped-suddenly" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversions dropped suddenly: how to diagnose it
              </Link>
            </li>
            <li>
              <Link href="/resources/ios-ad-blockers-shopify-tracking-loss" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                iOS, ad blockers and privacy: how much Shopify tracking are you losing?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want your Consent Mode setup checked?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send an inquiry and we&apos;ll look at how your cookie banner,
            consent signals, and Google tags are actually wired together on
            your store.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
