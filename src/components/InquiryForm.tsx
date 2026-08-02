"use client";

import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-cyan-500/50 focus:bg-white/[0.08] focus:ring-0";

const labelClass = "block text-xs font-semibold uppercase tracking-wide text-white/40";

const SERVICES = [
  "Meta Ads management",
  "Google Ads management",
  "Meta and Google Ads management",
  "Advertising audit",
  "Tracking and attribution setup",
  "Not sure yet",
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    fd.forEach((value, key) => (payload[key] = String(value)));

    // TODO: wire up to /api/inquiry or CRM
    console.log("Managed services inquiry:", payload);
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
        <p className="text-base font-semibold text-white">Inquiry received</p>
        <p className="mt-2 text-sm text-white/40 max-w-xs">
          We read every inquiry personally and reply within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Name</label>
          <input required name="name" className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label className={labelClass}>Business name</label>
          <input required name="business" className={inputClass} placeholder="Your Store Co." />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Website</label>
          <input required name="website" className={inputClass} placeholder="yourstore.com" />
        </div>
        <div>
          <label className={labelClass}>Email address</label>
          <input required type="email" name="email" className={inputClass} placeholder="jane@yourstore.com" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Services you&apos;re interested in</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <label
              key={s}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/50 transition has-[:checked]:border-cyan-500/40 has-[:checked]:bg-cyan-500/[0.08] has-[:checked]:text-white"
            >
              <input type="checkbox" name="services" value={s} className="h-3 w-3 rounded border-white/20 bg-transparent accent-cyan-500" />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Current monthly advertising spend</label>
        <select required name="adSpend" className={inputClass + " cursor-pointer appearance-none"} defaultValue="">
          <option value="" disabled>Select a range</option>
          <option value="not-advertising">Not advertising yet</option>
          <option value="under-3k">Under $3,000 / mo</option>
          <option value="3k-10k">$3,000 – $10,000 / mo</option>
          <option value="10k-30k">$10,000 – $30,000 / mo</option>
          <option value="30k+">$30,000+ / mo</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>What do you need help with?</label>
        <textarea
          required
          name="notes"
          rows={4}
          className={inputClass}
          placeholder="A short description of your situation, what's not working, or what you're trying to figure out…"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-white py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-50 shadow-[0_0_24px_rgba(255,255,255,0.08)]"
      >
        Send inquiry
      </button>

      <p className="text-center text-xs text-white/20">
        We only use these details to reply to your inquiry. No spam, ever.
      </p>
    </form>
  );
}
