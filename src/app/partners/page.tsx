"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BENEFITS = [
  {
    icon: "💰",
    title: "20% recurring commission",
    desc: "Earn 20% of every subscription your referred clients pay — for as long as they stay.",
  },
  {
    icon: "🎯",
    title: "Co-branded reports",
    desc: "White-label dashboards and reports your clients see under your agency brand.",
  },
  {
    icon: "⚡",
    title: "Priority support",
    desc: "Dedicated partner Slack channel and priority onboarding support for your clients.",
  },
  {
    icon: "📊",
    title: "Partner dashboard",
    desc: "Track referrals, commissions, and client performance in one place.",
  },
  {
    icon: "🛠️",
    title: "Early access",
    desc: "Be first to test new features and influence the Attribix roadmap.",
  },
  {
    icon: "📣",
    title: "Joint marketing",
    desc: "Co-marketing opportunities — case studies, webinars, and featured listings.",
  },
];

const TIERS = [
  {
    name: "Affiliate",
    commission: "15%",
    clients: "1–4 clients",
    perks: ["Referral link", "Commission dashboard", "Email support"],
    color: "border-white/10",
    badge: "",
  },
  {
    name: "Silver",
    commission: "20%",
    clients: "5–14 clients",
    perks: ["Everything in Affiliate", "Co-branded reports", "Partner Slack", "Priority support"],
    color: "border-indigo-500/50",
    badge: "Most popular",
  },
  {
    name: "Gold",
    commission: "25%",
    clients: "15+ clients",
    perks: ["Everything in Silver", "White-label option", "Roadmap input", "Joint case studies", "Dedicated account manager"],
    color: "border-amber-400/50",
    badge: "Best value",
  },
];

const FAQS = [
  {
    q: "How does the referral tracking work?",
    a: "You get a unique referral link. When someone signs up through it, they're attributed to you permanently — even if they upgrade months later.",
  },
  {
    q: "When do I get paid?",
    a: "Commissions are paid monthly via bank transfer or PayPal, with a 30-day hold period.",
  },
  {
    q: "Can I white-label Attribix for my clients?",
    a: "White-labelling is available on the Gold tier. Your clients see your brand, not ours.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "None. You can refer one client or a hundred — there's no lock-in or minimum.",
  },
];

export default function PartnersPage() {
  const [open, setOpen] = React.useState<number | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", agency: "", clients: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/fb-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventName: "Lead", eventId: crypto.randomUUID(), customData: { lead_type: "partner" } }),
    }).catch(() => {});
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Header />

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-6xl px-4 pt-28 pb-20 text-center overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Partner Program
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-5">
            Grow together.<br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Earn recurring revenue.
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Join agencies and consultants who earn 15–25% recurring commission by referring their Shopify clients to Attribix.
          </p>
          <a href="#apply" className="inline-block rounded-xl bg-white text-gray-900 px-8 py-4 font-bold text-sm hover:bg-slate-100 transition shadow-xl">
            Apply to become a partner →
          </a>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Why partner with us</p>
          <h2 className="text-3xl font-bold">Everything you need to succeed</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 hover:bg-white/[0.05] transition">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-semibold text-white mb-1">{b.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIERS ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Partner tiers</p>
          <h2 className="text-3xl font-bold">More clients, higher commission</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.color} bg-white/[0.03] p-7 flex flex-col`}>
              {t.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-bold text-white">
                  {t.badge}
                </span>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                <p className="text-xs text-white/40">{t.clients}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">{t.commission}</span>
                <span className="text-white/40 text-sm ml-1">/ recurring</span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-7">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/60">
                    <svg className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#apply" className="block text-center rounded-xl border border-white/15 py-2.5 text-sm font-semibold hover:bg-white/5 transition">
                Apply now →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Common questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-white hover:bg-white/[0.03] transition"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span className="text-white/40 ml-4 shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-white/50 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── APPLY FORM ── */}
      <section id="apply" className="mx-auto max-w-2xl px-4 py-16 pb-28">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Get started</p>
          <h2 className="text-3xl font-bold">Apply to become a partner</h2>
          <p className="text-white/40 text-sm mt-2">We review applications within 2 business days.</p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-xl font-bold mb-2">Application received!</h3>
            <p className="text-white/50 text-sm">We'll be in touch within 2 business days at the email you provided.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Your name</label>
                <input required name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-indigo-500/60 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Work email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@agency.com" className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-indigo-500/60 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Agency / Company name</label>
              <input required name="agency" value={form.agency} onChange={handleChange} placeholder="Growth Agency Ltd." className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-indigo-500/60 focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">How many Shopify clients do you work with?</label>
              <select required name="clients" value={form.clients} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-white focus:border-indigo-500/60 focus:outline-none">
                <option value="" disabled>Select range</option>
                <option value="1-4">1–4 clients</option>
                <option value="5-14">5–14 clients</option>
                <option value="15+">15+ clients</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Anything else you'd like us to know?</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your agency and clients..." className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-indigo-500/60 focus:outline-none resize-none" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-white text-gray-900 py-3.5 font-bold text-sm hover:bg-slate-100 transition shadow-lg">
              Submit application →
            </button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
