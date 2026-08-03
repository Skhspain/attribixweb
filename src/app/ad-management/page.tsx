"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

/* -----------------------------------------------------
   Data
----------------------------------------------------- */
const SERVICES = [
  {
    title: "Ongoing Meta & Google Ads management",
    desc: "Full management of your Meta and Google Ads accounts — strategy, creative direction, budget allocation and day-to-day optimisation, reviewed against real Shopify revenue instead of platform-reported ROAS.",
    fit: "For brands who want campaigns run for them, month over month.",
    href: "/ad-management/meta-ads",
    cta: "See Meta & Google Ads management",
  },
  {
    title: "Advertising audit (paid)",
    desc: "A structured, paid review of your existing Meta and/or Google Ads accounts: account structure, budget allocation, tracking setup and creative performance, delivered as a written report with prioritised fixes. Separate from the free consultation call — a fixed-scope engagement with a defined deliverable, not a conversation.",
    fit: "For brands who want a second opinion or a clear starting point before committing to ongoing management.",
    href: "/ad-management/inquiry",
    cta: "Ask about an audit",
  },
  {
    title: "Tracking and attribution setup",
    desc: "We review and set up your Shopify tracking, Meta Pixel and Conversions API, and Google Ads purchase and enhanced conversions — including event deduplication, Consent Mode and attribution setup — so conversions and revenue are recorded correctly, whether or not we manage your ad spend.",
    fit: "For brands who manage ads in-house but want tracking they can trust.",
    href: "/ad-management/inquiry",
    cta: "Ask about tracking setup",
  },
];

const TESTIMONIALS = [
  {
    quote: "Stian has been amazing at managing our social media ads! He really understands what works and has helped us reach the right audience. We've seen great results, and it's been a pleasure working with him.",
    country: "United States",
    tag: "Meta Ads",
  },
  {
    quote: "Stian is very professional and knows Google Ads inside out. He optimised our campaigns and we saw immediate improvement.",
    country: "United Kingdom",
    tag: "Google Ads",
  },
  {
    quote: "Stian knows exactly what he is doing. Following up every little detail, and communication has always been on point. He is really the guy to turn to if you need help with Meta or Google Ads.",
    country: "Norway",
    tag: "Communication",
  },
  {
    quote: "Went above and beyond both the effort, scope and time invested! Very professional and seems to really care to fix the problem of the client, not just to finalise the job. He helped me with things that were not even in my initial scope.",
    country: "Czech Republic",
    tag: "Strategy",
  },
  {
    quote: "It's the second time I've worked with Stian. He really knows his stuff. Very short response time and you always get clear answers. I really recommend Stian to anyone who needs help with ads.",
    country: "Norway",
    tag: "Long-term cooperation",
  },
  {
    quote: "Working with Bevit Agency was an outstanding experience. Their expertise in social media marketing, combined with a high level of professionalism, strategic thinking, and impeccable attention to detail, made our collaboration seamless.",
    country: "Bahamas",
    tag: "bevit agency",
  },
];

const PROCESS = [
  {
    n: "1",
    title: "Send inquiry or book a call",
    desc: "Tell us about your store, your current ad spend and what you're trying to fix.",
  },
  {
    n: "2",
    title: "Account and tracking review",
    desc: "We look at your existing Meta/Google accounts and your current tracking setup, including what Shopify data is and isn't connected.",
  },
  {
    n: "3",
    title: "Plan and proposal",
    desc: "You get a clear, written plan: what we'd change, what it costs, and what to expect. No work starts before you approve it.",
  },
  {
    n: "4",
    title: "Manage, report, adjust",
    desc: "We run the campaigns, connect everything to Attribix, and report monthly against real Shopify revenue — not platform-reported numbers.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How is this different from just using Attribix on its own?",
    a: "Attribix is software — you can run it yourself with your existing agency or in-house team. Managed services are optional: the same team behind Attribix manages your campaigns directly, using the same tracking.",
  },
  {
    q: "What's the relationship between Attribix and bevit?",
    a: "bevit is the advertising team; Attribix is the tracking platform bevit built to work through the attribution problems it kept running into for clients. Ad Management is delivered by the bevit team.",
  },
  {
    q: "Do I need to use Attribix to work with you on ads?",
    a: "No, but we typically set up Attribix tracking alongside any ongoing management, because it's how we make sure campaign decisions are based on real Shopify revenue.",
  },
  {
    q: "What's the difference between the free consultation call and the paid audit?",
    a: "The free consultation call is a short conversation to understand your situation and see if we're a fit. The paid audit is a deeper, structured review of your ad accounts and tracking, with specific written recommendations you keep either way.",
  },
  {
    q: "Do you guarantee results?",
    a: "No — nobody honestly can. We'll tell you what we see, what we'd change, and why, but we don't promise a specific ROAS or growth number.",
  },
  {
    q: "Which platforms do you manage?",
    a: "Meta Ads and Google Ads for Shopify stores. That's what we focus on and what we're best at.",
  },
  {
    q: "How much does ongoing management cost?",
    a: "It depends on account complexity and monthly ad spend. Send an inquiry or book a free consultation call and we'll give you a straight answer.",
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

/* -----------------------------------------------------
   Page
----------------------------------------------------- */
export default function AdManagementPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-indigo-600/8 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/6 blur-3xl" />
      </div>

      <Header />

      {/* ── 1. HERO ── */}
      <section className="relative mx-auto max-w-4xl px-4 pt-24 pb-14 md:pt-32 md:pb-16 text-center">
        <Reveal>
          <Eyebrow>Ad management by the team behind Attribix</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta &amp; Google Ads management for Shopify stores
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            We combine hands-on campaign management with server-side tracking
            and honest attribution, so decisions are based on real Shopify
            revenue — not only the results reported by advertising platforms.
          </p>
          <ManagedServicesCTA className="mt-9 justify-center" />
        </Reveal>
      </section>

      {/* ── 2. CREDIBILITY BAR ── */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5 text-white/85 font-semibold">
              <span className="text-amber-400">★★★★★</span> 5.0
            </span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>150+ verified reviews</span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>Top Rated on Fiverr</span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>Marketing experience since 2008</span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>Meta &amp; Google Ads specialists</span>
          </div>
        </Reveal>
      </section>

      {/* ── 3. ATTRIBIX + BEVIT STORY ── */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <Eyebrow>Why we also run ads</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-extrabold">Attribix was built from real advertising work</h2>
          <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
            <p>
              Attribix was created by the team behind <strong className="text-white/85">bevit</strong> after
              years of managing Meta and Google Ads and dealing with
              incomplete, conflicting and misleading platform reports. The
              software helps us connect campaign decisions with Shopify
              orders, server-side events and customer journeys.
            </p>
            <p>
              Many attribution platforms are developed separately from the
              teams making daily campaign decisions. Attribix grew directly
              out of our work managing real Meta and Google Ads accounts —
              Ad Management is the optional service for businesses that want
              the same team to manage their campaigns directly, using that
              same data.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 4. THREE SERVICES ── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">How much do you want us to run?</h2>
          <p className="mt-3 text-white/60 max-w-xl">
            Some stores want the accounts fully handed off. Others just want
            a second opinion, or tracking they can trust while they run ads
            themselves.
          </p>
        </Reveal>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
                <h3 className="font-semibold text-base text-white">{s.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">{s.desc}</p>
                <p className="mt-4 text-xs text-white/40 border-t border-white/10 pt-4">{s.fit}</p>
                <Link href={s.href} className="mt-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                  {s.cta} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 5. WHY ATTRIBIX GIVES US AN ADVANTAGE ── */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <Eyebrow>The Attribix advantage</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-extrabold max-w-xl">
              The difference is what we&apos;re optimising against
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed max-w-3xl">
              Most agencies make decisions from the numbers Meta and Google
              report inside their own ad managers — numbers shaped by cookie
              loss, attribution windows, and each platform&apos;s incentive to
              take credit for the sale. We built Attribix because we
              didn&apos;t trust those numbers either. When we manage your ads,
              we&apos;re not just watching ROAS in Ads Manager — we&apos;re
              watching what actually shipped in Shopify, tied back to the ad,
              the campaign and the customer journey that led to it.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm">
              <div className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-center text-white/75">Campaign management</div>
              <div className="flex items-center justify-center text-white/30">+</div>
              <div className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-center text-white/75">Attribix tracking</div>
              <div className="flex items-center justify-center text-white/30">+</div>
              <div className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-center text-white/75">Shopify revenue</div>
              <div className="flex items-center justify-center text-white/30">=</div>
              <div className="flex-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-3 text-center text-cyan-200 font-medium">Better-informed decisions</div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3 text-sm text-white/60">
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Server-side events, not just pixel data — fewer gaps from iOS, ad blockers and cookie loss.</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Every campaign decision checked against Shopify orders, not platform-reported conversions.</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">One team accountable for both the ads and the tracking — no finger-pointing between agency and tool.</li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <ManagedServicesCTA className="mt-9" />
          </Reveal>
        </div>
      </section>

      {/* ── 6. EXPERIENCE ── */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Experience across ecommerce and performance advertising</h2>
          <p className="mt-5 text-white/65 leading-relaxed">
            We have managed Meta and Google Ads for businesses across
            ecommerce, services and digital products. Verified case studies
            are currently being prepared. Send us an inquiry to discuss
            experience relevant to your business and advertising channels.
          </p>
        </Reveal>
      </section>

      {/* ── 7. FOUR-STEP PROCESS ── */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">What happens after you reach out</h2>
          </Reveal>
          <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 90}>
                <div className="border-t-2 border-cyan-500/30 pt-4">
                  <span className="text-xs font-semibold text-cyan-300/70">Step {step.n}</span>
                  <h3 className="mt-1 font-semibold text-sm">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-extrabold">What clients say</h2>
            <span className="text-sm text-white/45">5.0 from 150+ verified reviews</span>
          </div>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} delay={i * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-amber-400 text-sm">★★★★★</span>
                  <span className="text-[11px] text-white/40">{t.tag}</span>
                </div>
                <blockquote className="text-sm text-white/75 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-3 text-[11px] text-white/35">{t.country}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-8 text-center">
            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Read all verified reviews →
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── 9. WHO IT'S FOR ── */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">Is this a fit?</h2>
          </Reveal>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
                <h3 className="font-semibold text-sm text-emerald-300">Good fit</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                  <li>Shopify or Shopify Plus stores with existing revenue and some paid ad history</li>
                  <li>Roughly $3,000+/month combined on Meta and/or Google Ads, or about to start</li>
                  <li>Want a partner who reports against real revenue, not platform ROAS</li>
                  <li>Open to server-side tracking and attribution changes</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-sm text-white/70">Probably not a fit yet</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/50">
                  <li>Pre-revenue stores with no traffic or sales history</li>
                  <li>Stores on platforms other than Shopify</li>
                  <li>Looking for the cheapest option rather than a long-term partner</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Frequently asked questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* ── 11. FINAL CTA ── */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on your ad accounts?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us a few details in writing, or book a free 30-minute call.
            Either way, you&apos;ll hear directly from the team that manages
            the campaigns — not a salesperson.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
