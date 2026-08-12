"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const DIMENSIONS = [
  {
    title: "Cost structure",
    agency: "No salary, benefits, payroll tax or tooling budget to carry. You pay a retainer, a percentage of spend, or a hybrid, and cost moves with the engagement, not with headcount.",
    inhouse: "A full-time marketer's loaded cost (salary plus benefits, plus ad platform and reporting tools) is fixed whether spend is $5,000 or $50,000 a month. Below a certain spend level, that fixed cost is hard to justify against the media budget it's managing.",
  },
  {
    title: "Specialist knowledge depth",
    agency: "An agency team is usually running several accounts at once, which means they've seen more account structures, more creative failures, and more platform changes hit different verticals. That breadth is real, but it's not automatic: it depends on the specific team, not the fact that they're an agency.",
    inhouse: "One person or a small team lives inside one account, one catalogue, one customer base. They develop deep, specific pattern-recognition for your product and audience that no outside team gets as quickly, but their reference point is narrower: they've only seen how their own account responds to a given change.",
  },
  {
    title: "Recruitment and retention risk",
    agency: "If someone on the agency team leaves, the account is reassigned inside a team that already has documented history and access. Continuity is the agency's problem to solve, not yours.",
    inhouse: "Hiring a genuinely good in-house Meta or Google Ads specialist is slow and competitive, and losing one mid-campaign means a gap while you rehire, often with less documentation of why past decisions were made than an agency would keep as standard practice.",
  },
  {
    title: "Creative resource access",
    agency: "Agencies vary widely here. Some run in-house creative teams and production; many, including performance-focused agencies, direct creative strategy and testing but expect the client to supply or commission actual production. Don't assume 'agency' means 'creative team included'; ask.",
    inhouse: "An in-house marketer usually has direct, fast access to brand assets, product photography and whoever handles design internally, without a briefing-and-approval loop through an outside vendor. Speed of iteration on creative can be a genuine in-house advantage.",
  },
  {
    title: "Tracking and technical knowledge",
    agency: "A competent agency has typically configured server-side tracking, Conversions API and enhanced conversions across multiple Shopify stores, so they've hit and fixed the common failure modes before. A weak agency, though, can be just as unfamiliar with the technical side as an inexperienced in-house hire. Agency status alone isn't proof of technical competence.",
    inhouse: "In-house teams often under-invest in tracking because it's not the part of the job that feels like marketing. It's common to find a Shopify store with years of ad spend behind it and a Pixel-only setup that's been quietly under-reporting conversions the whole time.",
  },
  {
    title: "Speed to launch",
    agency: "Onboarding takes time: account access, a review of the existing setup, a written plan before changes go live. Once running, an established agency team can usually move faster day-to-day because the processes (creative testing cadence, reporting rhythm) already exist.",
    inhouse: "No onboarding lag for someone already inside the business, but if the hire is new, they're building process from scratch at the same time they're trying to run campaigns, which is its own kind of slow start.",
  },
  {
    title: "Account ownership and continuity",
    agency: "This should always be contractual, not assumed: you should own the ad account and Business Manager, with the agency working inside it as a partner. If an agency insists on owning the account itself, that's a real risk if the relationship ends; treat it as a red flag, not a formality.",
    inhouse: "Ownership is never in question: it's your account, your login, your history. The only continuity risk is the person managing it leaving the company.",
  },
  {
    title: "Communication and availability",
    agency: "Communication is scheduled (a standing check-in call plus async messaging) rather than someone sitting a few desks away. That's not automatically worse, but it does mean questions don't get answered in the hallway.",
    inhouse: "Immediate access to whoever manages your ads, and easier cross-functional coordination with merchandising, email, or customer service on short notice, genuinely useful when campaigns need to react to inventory or promotions in real time.",
  },
  {
    title: "Ability to scale up or down",
    agency: "Scaling spend up generally just means a conversation and a revised plan: the team already has the capacity. Scaling down or pausing is usually a notice-period conversation, not a layoff.",
    inhouse: "Scaling up significantly may mean hiring a second or third person, which takes months. Scaling down means either underusing a salaried employee or having a difficult conversation about their role.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Can I run some campaigns in-house and outsource others?",
    a: "Yes, and plenty of stores do: commonly Google Shopping and Performance Max handled internally while Meta creative testing is outsourced, or the reverse. It works best when someone owns overall tracking and reporting so the two efforts aren't optimizing against different numbers.",
  },
  {
    q: "Is a freelancer a middle ground between in-house and an agency?",
    a: "In some ways. A good freelancer can bring outside-account experience like an agency does, usually at a lower cost, but without a team behind them for continuity if they're unavailable, and often without in-house creative or technical support. It's a real third option, not just a cheaper agency.",
  },
  {
    q: "What ad spend level is the tipping point toward hiring in-house?",
    a: "There isn't a fixed number, but the math worth doing is: compare a specialist's fully loaded annual cost against what an agency retainer or percentage-of-spend fee would cost at your spend level. For many stores, in-house only becomes clearly cheaper once monthly spend is well into five figures and stays there consistently.",
  },
  {
    q: "Does agency size matter more than agency vs in-house?",
    a: "Often, yes. A three-person boutique agency and a 200-person agency behave very differently: access to senior staff, how many accounts one person juggles, how standardized the process is. Evaluating the specific team you'd work with usually matters more than the agency-vs-in-house label.",
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
  headline: "Marketing Agency vs In-House: Which Is Better for Meta and Google Ads?",
  description:
    "A dimension-by-dimension comparison of agency vs in-house Meta and Google Ads management, and a framework for deciding which fits your store.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/marketing-agency-vs-in-house" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Marketing Agency vs In-House", item: "https://www.attribix.app/resources/marketing-agency-vs-in-house" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Agency vs In-House" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Marketing Agency vs In-House: Which Is Better for Meta and Google Ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Neither one is categorically better. An agency and an in-house
            hire are different trade-offs, and which one wins depends on your
            spend level, how complex your account is, and how much
            day-to-day coordination your marketing needs with the rest of
            the business. Below is what actually changes between the two,
            dimension by dimension, not a sales pitch for either side.
          </p>
        </Reveal>
      </section>

      {/* INTRO CONTEXT */}
      <section className="mx-auto max-w-3xl px-4 py-6">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm">
            Most stores don&apos;t make this decision once and forget it. They
            start in-house because it&apos;s the only option pre-revenue, move
            to an agency once ad spend justifies specialist help, and
            sometimes bring things back in-house once they&apos;re large enough
            to build a dedicated team. Treat this as a decision worth
            revisiting as the business changes, not a permanent commitment
            either direction.
          </p>
        </Reveal>
      </section>

      {/* DIMENSIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Nine things that actually change</h2>
            <p className="text-white/55 text-sm mb-8 max-w-xl">
              Both columns describe genuine strengths and genuine limits:
              read them as trade-offs, not a scorecard where one side wins
              every row.
            </p>
          </Reveal>
          <div className="space-y-8">
            {DIMENSIONS.map((d, i) => (
              <Reveal key={d.title} delay={i * 30}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold text-base text-white">{d.title}</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-1.5">Agency</p>
                      <p className="text-sm text-white/60 leading-relaxed">{d.agency}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1.5">In-house</p>
                      <p className="text-sm text-white/60 leading-relaxed">{d.inhouse}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN IN-HOUSE WINS */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When in-house genuinely wins</h2>
          <div className="space-y-4 text-white/65 leading-relaxed text-sm">
            <p>
              There are real situations where hiring in-house is the
              stronger call, and it&apos;s worth naming them plainly rather
              than treating this as an agency pitch dressed up as balance.
            </p>
            <p>
              <strong className="text-white/85">Tight day-to-day coordination.</strong>{" "}
              If ad campaigns need to react hour-to-hour to inventory
              changes, flash promotions, or a merchandising calendar that
              shifts often, having the person running ads sitting inside the
              same Slack channel as merchandising and email is a real
              advantage an outside team can&apos;t fully replicate.
            </p>
            <p>
              <strong className="text-white/85">Spend large enough that a dedicated team pays for itself.</strong>{" "}
              Once monthly spend is high enough that even a small percentage
              efficiency gain from deep, singular focus on your account
              outweighs a specialist&apos;s full salary, building an internal
              team (sometimes several people covering different channels)
              can cost less than an agency retainer scaled to that spend,
              and gives you direct control over headcount and priorities.
            </p>
            <p>
              <strong className="text-white/85">Deep niche-specific institutional knowledge.</strong>{" "}
              Some categories (regulated products, highly technical B2B
              components sold through an ecommerce storefront, categories
              with unusual compliance rules) reward someone who has spent
              years learning the category itself, not just the ad platforms.
              That knowledge is slow to transfer to an outside team no
              matter how good they are at Meta or Google Ads generally.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FRAMEWORK */}
      <section className="relative py-14">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A framework, not a verdict</h2>
            <div className="space-y-4 text-white/65 leading-relaxed text-sm">
              <p>
                Instead of asking &quot;agency or in-house,&quot; it&apos;s more useful
                to ask four narrower questions and let the answers point you
                in a direction:
              </p>
              <ul className="space-y-3 pl-1">
                <li>
                  <strong className="text-white/85">Can you afford a genuinely good specialist,</strong>{" "}
                  fully loaded, at your current spend level, not just
                  afford someone, but afford someone experienced enough to
                  be worth hiring over an outside team?
                </li>
                <li>
                  <strong className="text-white/85">How often does the account need to react</strong>{" "}
                  to something happening elsewhere in the business the same
                  day, versus operating on a weekly or monthly planning
                  rhythm?
                </li>
                <li>
                  <strong className="text-white/85">Is your tracking and attribution set up correctly</strong>{" "}
                  today, and if not, do you have someone in-house who can
                  actually fix{" "}
                  <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                    Meta CAPI
                  </Link>{" "}
                  or{" "}
                  <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                    Google Ads conversion tracking
                  </Link>
                  , or is that itself a reason to bring in outside help?
                </li>
                <li>
                  <strong className="text-white/85">What happens if the person managing your ads leaves</strong>{" "}
                  next month? Does the business have a real continuity
                  plan, or would that be a serious disruption?
                </li>
              </ul>
              <p>
                Answer those honestly and the right structure for where the
                business is right now usually becomes clear, even if it
                won&apos;t be the right structure forever.
              </p>
            </div>
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

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/ecommerce-marketing-agency-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much does an ecommerce marketing agency cost?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-does-a-meta-ads-agency-do" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What does a Meta Ads agency actually do?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-does-a-google-ads-agency-do" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What does a Google Ads agency actually do?
              </Link>
            </li>
            <li>
              <Link href="/resources/when-to-hire-a-marketing-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When to hire a marketing agency
              </Link>
            </li>
            <li>
              <Link href="/ad-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta and Google Ads management for Shopify stores
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want us to manage it for you?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            We manage Meta and Google Ads with the same focus on
            measurement, tracking and actual business performance described
            in this guide.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
