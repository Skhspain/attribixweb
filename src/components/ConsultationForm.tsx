"use client";

import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-cyan-500/50 focus:bg-white/[0.08] focus:ring-0";

const labelClass = "block text-xs font-semibold uppercase tracking-wide text-white/40";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    fd.forEach((value, key) => (payload[key] = String(value)));

    // TODO: wire up to /api/consultation or CRM
    console.log("Consultation request:", payload);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 ring-1 ring-cyan-500/30">
          <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-base font-semibold text-white">Request received</p>
        <p className="mt-2 text-sm text-white/40">
          We&apos;ll review your details and follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full name</label>
          <input
            required
            name="name"
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className={labelClass}>Work email</label>
          <input
            required
            type="email"
            name="email"
            className={inputClass}
            placeholder="jane@yourstore.com"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Store URL</label>
        <input
          required
          name="storeUrl"
          className={inputClass}
          placeholder="https://yourstore.com"
        />
      </div>

      <div>
        <label className={labelClass}>Monthly ad spend</label>
        <select
          required
          name="adSpend"
          className={inputClass + " cursor-pointer appearance-none"}
          defaultValue=""
        >
          <option value="" disabled>Select a range</option>
          <option value="under-5k">Under $5,000 / mo</option>
          <option value="5k-15k">$5,000 – $15,000 / mo</option>
          <option value="15k-50k">$15,000 – $50,000 / mo</option>
          <option value="50k-150k">$50,000 – $150,000 / mo</option>
          <option value="150k+">$150,000+ / mo</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Platforms you&apos;re currently running</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Meta Ads", "Google Ads", "TikTok Ads", "Other"].map((platform) => (
            <label
              key={platform}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/50 transition has-[:checked]:border-cyan-500/40 has-[:checked]:bg-cyan-500/[0.08] has-[:checked]:text-white"
            >
              <input
                type="checkbox"
                name="platforms"
                value={platform}
                className="h-3 w-3 rounded border-white/20 bg-transparent accent-cyan-500"
              />
              {platform}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Anything you want us to know?</label>
        <textarea
          name="notes"
          rows={3}
          className={inputClass}
          placeholder="Current challenges, what you've already tried, or anything else relevant…"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-white py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-50 shadow-[0_0_24px_rgba(255,255,255,0.08)]"
      >
        Request consultation
      </button>

      <p className="text-center text-xs text-white/20">
        We&apos;ll confirm within one business day. No spam, ever.
      </p>
    </form>
  );
}
