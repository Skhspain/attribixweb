"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";
import { ConsultationLink, btnPrimary, btnSecondary } from "@/components/site/ui";

/* -----------------------------------------------------
   Data
----------------------------------------------------- */
const SERVICES = [
  {
    title: "We run your Facebook and Instagram ads",
    term: "Meta Ads management",
    desc: "We plan your campaigns, test new ads, choose who sees them, and regularly review results and make changes.",
    fit: "For Shopify stores that want an expert to run their Facebook and Instagram ads.",
    href: "/ad-management/meta-ads",
    cta: "Facebook and Instagram ads",
  },
  {
    title: "We run your Google ads",
    term: "Google Ads management",
    desc: "We run your Google Search and Google Shopping ads. We keep your product list in shape, choose which searches to show up for, and manage your budget.",
    fit: "For Shopify stores that want an expert to run their Google ads.",
    href: "/ad-management/google-ads",
    cta: "Google ads",
  },
  {
    title: "We fix how your sales are counted",
    term: "Tracking and measurement setup",
    desc: "We check and set up how your store reports sales to Facebook and Google, so each sale is counted, and counted only once. We also respect your visitors' cookie choices.",
    fit: "For stores that run their own ads but don't trust the numbers.",
    href: "/ad-management/inquiry",
    cta: "Ask about fixing your tracking",
  },
  {
    title: "We check your ad accounts (paid)",
    term: "Advertising audit",
    desc: "We look through your Facebook and Google ad accounts and write a report: what works, what doesn't, and what to fix first.",
    fit: "For stores that want a second opinion before hiring anyone.",
    href: "/ad-management/inquiry",
    cta: "Ask about an ad account check",
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
    title: "Tell us about your store",
    desc: "Send us a short message or book a free call. Tell us what you sell, what you spend on ads, and what you want to fix.",
  },
  {
    n: "2",
    title: "We look at your accounts",
    desc: "We look at your Facebook and Google ad accounts, and at how your store reports sales to them.",
  },
  {
    n: "3",
    title: "You get a written plan",
    desc: "We tell you what we would change, what it costs, and what to expect. Nothing starts until you say yes.",
  },
  {
    n: "4",
    title: "We run your ads and report back",
    desc: "We manage your ads every day. Each month we show you the results next to your real Shopify sales.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is the difference between Attribix and Ad Management?",
    a: "Attribix is an app. You use it yourself to see which ads work. Ad Management is a service. Our team runs your ads for you, using the same app. You can use one without the other.",
  },
  {
    q: "Who is bevit?",
    a: "bevit is our advertising team. We built Attribix because we needed better numbers for our own clients. Ad Management is done by the bevit team.",
  },
  {
    q: "Do I need Attribix to work with you?",
    a: "No. But we usually set it up when we run your ads, because it shows us your real sales, not just what Facebook and Google report.",
  },
  {
    q: "What is the difference between the free call and the paid check?",
    a: "The free call is a short chat to understand your store and see if we are a good fit. The paid check (audit) is a careful look through your ad accounts, with a written report you keep either way.",
  },
  {
    q: "Can you promise results?",
    a: "No. Nobody can honestly promise results in advertising. We will tell you what we see, what we would change and why. We won't promise a specific number.",
  },
  {
    q: "Which ad platforms do you manage?",
    a: "Facebook and Instagram ads (Meta) and Google ads, for Shopify stores. That is what we focus on.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on how much you spend on ads and how much work your accounts need. Send us a message or book a free call, and we will give you a clear price.",
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
          <Eyebrow>Ad Management · Meta and Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Want someone to manage your ads for you?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Our team runs and improves your Facebook, Instagram and Google
            ads. We handle the campaigns while you focus on running your
            business. Results are checked against your real Shopify sales.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ConsultationLink location="ad_management_hero" className={btnPrimary}>
              Book a free consultation
            </ConsultationLink>
            <Link href="/ad-management/inquiry" className={btnSecondary}>
              Send us a message
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── 2. CREDIBILITY BAR ── */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5 text-white/85 font-semibold">
              <span aria-hidden className="text-amber-400">★★★★★</span> 5.0 on Fiverr
            </span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>150+ agency reviews</span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>Top Rated seller</span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>In online advertising since 2008</span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>Facebook, Instagram and Google ads</span>
          </div>
        </Reveal>
      </section>

      {/* ── 3. ATTRIBIX + BEVIT STORY ── */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-extrabold">The team that built Attribix</h2>
          <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
            <p>
              We are <strong className="text-white/85">bevit</strong>, an advertising team.
              For years we ran Facebook and Google ads for clients, and the
              numbers from those platforms often didn&apos;t match the real
              sales. So we built Attribix to see which ads really worked.
            </p>
            <p>
              Ad Management is for stores that would rather have us run their
              ads. We use the same app and the same real sales numbers.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 4. THREE SERVICES ── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">What we can do for you</h2>
          <p className="mt-3 text-white/60 max-w-xl">
            Some stores want us to run everything. Others just want a second
            opinion, or help getting their sales counted correctly.
          </p>
        </Reveal>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
                <h3 className="font-semibold text-base text-white">{s.title}</h3>
                <p className="mt-1 text-xs text-white/45">{s.term}</p>
                <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">{s.desc}</p>
                <p className="mt-4 text-xs text-white/40 border-t border-white/10 pt-4">{s.fit}</p>
                <Link href={s.href} className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200">
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
            <Eyebrow>Reporting and measurement</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-extrabold max-w-xl">
              We judge your ads by your real sales
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed max-w-3xl">
              Facebook and Google both want credit for your sales, and both
              miss some sales too. So we don&apos;t just trust their numbers.
              We check every decision against the orders in your Shopify
              store, and the ads that led to them.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm">
              <div className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-center text-white/75">We run your ads</div>
              <div className="flex items-center justify-center text-white/30">+</div>
              <div className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-center text-white/75">Attribix counts the sales</div>
              <div className="flex items-center justify-center text-white/30">+</div>
              <div className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-center text-white/75">Your real Shopify sales</div>
              <div className="flex items-center justify-center text-white/30">=</div>
              <div className="flex-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-3 text-center text-cyan-200 font-medium">Better decisions</div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3 text-sm text-white/60">
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Fewer sales go missing, because we also report them from a server that ad blockers can&apos;t stop.</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Every decision is checked against your Shopify orders, not just what the ad platforms report.</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">One team handles both the ads and the counting, so nobody can blame someone else.</li>
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Who we have worked with</h2>
          <p className="mt-5 text-white/65 leading-relaxed">
            We have run Facebook and Google ads for online stores, service
            businesses and digital products, including MyHeritage, London
            Diamonds and Roberes. We are still writing up full case studies.
            Send us a message to hear about work similar to your business.
          </p>
        </Reveal>
      </section>

      {/* ── 7. FOUR-STEP PROCESS ── */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">What happens after you contact us</h2>
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

      {/* ── 7b. PRICING APPROACH ── */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Reveal>
          <Eyebrow>Pricing approach</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-extrabold">How pricing works</h2>
          <ul className="mt-6 space-y-3 text-white/70 leading-relaxed">
            <li>The price depends on which platforms we run, how much you spend on ads, and how much work your accounts need.</li>
            <li>You get the price in writing first. Nothing starts until you say yes.</li>
            <li>The first call is free. The ad account check (audit) has a fixed price.</li>
          </ul>
        </Reveal>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-extrabold">What clients say</h2>
            <span className="text-sm text-white/55">Selected client reviews from Fiverr, where the agency is rated 5.0 from 150+ reviews</span>
          </div>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} delay={i * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span aria-label="5 out of 5 stars" className="text-amber-400 text-sm">★★★★★</span>
                  <span className="text-[11px] text-white/40">{t.tag}</span>
                </div>
                <blockquote className="text-sm text-white/75 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-3 text-[11px] text-white/35">{t.country}</div>
              </div>
            </Reveal>
          ))}
        </div>
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
                  <li>Shopify stores that already make sales and have tried ads before</li>
                  <li>Spend about $3,000 a month or more on Facebook and Google ads, or plan to</li>
                  <li>Want results measured by real sales, not just by ad platform numbers</li>
                  <li>Happy for us to improve how sales are counted</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-sm text-white/70">Probably not a fit yet</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/50">
                  <li>Brand-new stores with no visitors or sales yet</li>
                  <li>Stores that don&apos;t use Shopify</li>
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

      {/* ── 10b. RELATED READING ── */}
      <section className="mx-auto max-w-3xl px-4 pb-4">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Deciding whether to hire an agency?</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/marketing-agency-vs-in-house" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Marketing agency vs in-house: which is better for Meta and Google Ads?</Link></li>
            <li><Link href="/resources/ecommerce-marketing-agency-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How much does an ecommerce marketing agency cost?</Link></li>
            <li><Link href="/resources/when-to-hire-a-marketing-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When should you hire an ecommerce marketing agency?</Link></li>
            <li><Link href="/resources/how-to-choose-a-meta-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to choose a Meta Ads agency for ecommerce</Link></li>
            <li><Link href="/resources/how-to-choose-a-google-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to choose a Google Ads agency for ecommerce</Link></li>
          </ul>
        </Reveal>
      </section>

      {/* ── 11. FINAL CTA ── */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on your ads?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us a few details in writing, or book a free 30-minute call.
            Either way, you&apos;ll hear directly from the team that manages
            the campaigns, not a salesperson.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
