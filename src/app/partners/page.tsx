"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-cyan-500/50 focus:outline-none";
const labelClass = "block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2";

export default function PartnersPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setError(null);
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    if (String(fd.get("company_website") || "").trim() !== "") {
      setStatus("sent");
      return;
    }
    const payload: Record<string, string> = {};
    fd.forEach((value, key) => (payload[key] = String(value)));

    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Header />

      <section className="mx-auto max-w-2xl px-4 pt-28 pb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">Partners</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
          Working with Shopify agencies and consultants
        </h1>
        <p className="text-white/60 text-base leading-relaxed">
          A number of agencies and consultants already send us clients
          informally. We&apos;re putting together a proper referral
          arrangement (commission terms, attribution, payout schedule)
          rather than publishing numbers before they&apos;re settled.
        </p>
        <p className="mt-4 text-white/60 text-base leading-relaxed">
          If you work with Shopify stores running Meta or Google Ads and
          want to be part of that when it&apos;s ready, tell us about your
          business below.
        </p>
        <p className="mt-4 text-white/60 text-base leading-relaxed">
          The fit is agencies and consultants managing Shopify clients on
          Meta or Google Ads who want their clients on{" "}
          <a href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            better attribution and server-side tracking
          </a>{" "}
          without building it themselves. Register interest below and
          we&apos;ll reach out once the referral terms are finalized.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-4 pb-24">
        {status === "sent" ? (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8">
            <h2 className="text-lg font-semibold mb-2">Thanks, that&apos;s in</h2>
            <p className="text-sm text-white/60">
              We&apos;ll reach out at the email you provided once the
              program is ready.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-5">
            <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
              <label htmlFor="company_website">Leave this field empty</label>
              <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">Your name</label>
                <input required id="name" name="name" placeholder="Jane Smith" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">Work email</label>
                <input required type="email" id="email" name="email" placeholder="jane@agency.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass} htmlFor="agency">Agency / company name</label>
              <input id="agency" name="agency" placeholder="Growth Agency Ltd." className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="clients">Roughly how many Shopify clients do you work with?</label>
              <select id="clients" name="clients" defaultValue="" className={inputClass + " cursor-pointer appearance-none"}>
                <option value="" disabled>Select a range</option>
                <option value="1-4">1–4 clients</option>
                <option value="5-14">5–14 clients</option>
                <option value="15+">15+ clients</option>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="message">Anything else worth knowing?</label>
              <textarea id="message" name="message" rows={3} placeholder="Your agency, your clients, how you typically refer tools…" className={inputClass + " resize-none"} />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-white text-gray-900 py-3.5 font-semibold text-sm hover:bg-slate-100 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
