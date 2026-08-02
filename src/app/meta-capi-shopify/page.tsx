"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ProductCTA } from "@/components/marketing/CTAGroup";

const PROBLEMS = [
  { problem: "Purchases undercounted on iOS", cause: "Safari trims cookie lifespan and blocks some pixel requests outright." },
  { problem: "Duplicate purchases in Ads Manager", cause: "Pixel and CAPI both fired without a shared event ID, so Meta counted each once." },
  { problem: "Event Match Quality stuck low", cause: "Only a hashed email is sent — no phone, external ID, or click ID to strengthen the match." },
  { problem: "Leads not appearing", cause: "Lead events are wired for the Pixel only; the server-side event was never added for that form." },
];

export default function MetaCapiPage() {
  return (
    <ProductPageShell>
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-12 md:pt-32">
        <Reveal>
          <Eyebrow>Meta Conversions API</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta CAPI for Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The Conversions API sends purchase and lead events to Meta
            directly from your server. Set up correctly alongside the Pixel,
            it recovers events the browser drops. Set up carelessly, it
            double-counts them.
          </p>
          <ProductCTA className="mt-9" />
        </Reveal>
      </section>

      {/* PIXEL VS CAPI */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Pixel and CAPI aren&apos;t alternatives</h2>
          <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
            <p>
              It&apos;s tempting to treat CAPI as the &ldquo;better&rdquo;
              replacement for the Pixel. Meta doesn&apos;t recommend running
              one instead of the other — it recommends running both, sending
              the same event twice through different routes, so that if the
              browser event is blocked, the server event still lands.
            </p>
            <p>
              The catch is that sending the same purchase twice means Meta
              needs a way to know they&apos;re duplicates rather than two
              separate sales.
            </p>
          </div>
        </Reveal>
      </section>

      {/* DEDUP DIAGRAM */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-center">
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/70">Browser pixel event</div>
              <span aria-hidden className="text-white/25 rotate-90 sm:rotate-0">+</span>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/70">Server CAPI event</div>
              <span aria-hidden className="text-white/25 rotate-90 sm:rotate-0">→</span>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/70">Matched by shared event ID</div>
              <span aria-hidden className="text-white/25 rotate-90 sm:rotate-0">→</span>
              <div className="rounded-lg border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-3 text-cyan-100 font-medium">One purchase in Ads Manager</div>
            </div>
            <p className="mt-4 text-center text-xs text-white/35">Simplified — illustrative, not literal API payload structure.</p>
          </div>
        </Reveal>
      </section>

      {/* EMQ */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">Event Match Quality is a symptom, not a target</h2>
            <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
              <p>
                Meta scores every server event on how confidently it could
                match it to a real Facebook or Instagram account, based on
                the customer parameters included — hashed email, phone,
                external ID, click ID, IP address and user agent. More
                matching parameters, more confidence, higher score.
              </p>
              <p>
                It&apos;s useful as a diagnostic — a score that drops
                suddenly usually means a field stopped being sent — but
                chasing a higher number for its own sake isn&apos;t the
                point. A checkout that legitimately collects only an email
                will never hit the same score as one that also has a phone
                number and a matched click ID, and that&apos;s fine.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMMON PROBLEMS TABLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">What usually breaks first</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left text-white/40 text-xs uppercase tracking-wide">
                  <th className="py-2 pr-4 font-medium">What you see</th>
                  <th className="py-2 font-medium">What's usually happening</th>
                </tr>
              </thead>
              <tbody>
                {PROBLEMS.map((p) => (
                  <tr key={p.problem} className="border-b border-white/5 align-top">
                    <td className="py-3 pr-4 font-semibold text-white whitespace-nowrap">{p.problem}</td>
                    <td className="py-3 text-white/55 leading-relaxed">{p.cause}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* SETUP */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">Setting it up</h2>
            <ol className="mt-5 space-y-3 text-sm text-white/60 leading-relaxed list-decimal list-inside">
              <li>Connect your Meta ad account and confirm which Pixel is already firing on your storefront.</li>
              <li>Send matching server-side events for purchases, and for any lead or add-to-cart events you rely on.</li>
              <li>Use the same event ID on both the Pixel and server event for each action, so Meta can deduplicate them.</li>
              <li>Check Events Manager for duplicate rates and match quality over the following week, not the first hour.</li>
            </ol>
            <p className="mt-5 text-sm text-white/45 max-w-2xl">
              Attribix handles the server-side event sending and event ID
              matching automatically once your Meta account is connected,
              and flags when match quality or duplicate rates drift outside
              a normal range.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Consent still governs what gets sent</h2>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            CAPI doesn&apos;t bypass a customer&apos;s tracking choice. If
            consent hasn&apos;t been given, the corresponding server event
            shouldn&apos;t be sent either — the API changes how data travels,
            not whether the customer&apos;s decision applies.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See your current Meta match quality</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and Meta account to see duplicate rates and
            Event Match Quality for your actual traffic.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
        <p className="mt-6 text-sm text-white/35">
          Want this set up for you instead?{" "}
          <Link href="/managed-services" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            See managed tracking and attribution services
          </Link>
          .
        </p>
      </section>
    </ProductPageShell>
  );
}
