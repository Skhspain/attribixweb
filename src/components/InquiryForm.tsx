"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-cyan-500/50 focus:bg-white/[0.08] focus:ring-0";

const labelClass = "block text-xs font-semibold uppercase tracking-wide text-white/40";
const requiredMark = <span aria-hidden className="text-cyan-400"> *</span>;

const SERVICES = [
  "Meta Ads management",
  "Google Ads management",
  "Meta and Google Ads management",
  "Advertising audit",
  "Tracking and attribution setup",
  "Not sure yet",
];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export default function InquiryForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot spam trap — real visitors never fill this hidden field.
    if (String(fd.get("company_website") || "").trim() !== "") {
      return;
    }

    const services = fd.getAll("services");
    if (services.length === 0) {
      setError("Select at least one service you're interested in.");
      return;
    }

    setSubmitting(true);
    const payload: Record<string, string | string[]> = {};
    fd.forEach((value, key) => {
      if (key === "services") return;
      if (key === "company_website") return;
      payload[key] = String(value);
    });
    payload.services = services.map(String);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ ok: false }));

      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    if (typeof window !== "undefined") {
      window.gtag?.("event", "generate_lead", { form: "ad_management_inquiry" });
      window.fbq?.("track", "Lead");
    }

    setSubmitting(false);
    router.push("/ad-management/inquiry/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users, visible to bots that fill every field */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Name{requiredMark}</label>
          <input required id="name" name="name" className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label className={labelClass} htmlFor="business">Business name{requiredMark}</label>
          <input required id="business" name="business" className={inputClass} placeholder="Your Store Co." />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="website">Website{requiredMark}</label>
          <input required id="website" name="website" className={inputClass} placeholder="yourstore.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email address{requiredMark}</label>
          <input required type="email" id="email" name="email" className={inputClass} placeholder="jane@yourstore.com" />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>Services you&apos;re interested in{requiredMark}</legend>
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
      </fieldset>

      <div>
        <label className={labelClass} htmlFor="adSpend">Current monthly advertising spend (USD){requiredMark}</label>
        <select required id="adSpend" name="adSpend" className={inputClass + " cursor-pointer appearance-none"} defaultValue="">
          <option value="" disabled>Select a range</option>
          <option value="not-advertising">Not advertising yet</option>
          <option value="under-3k">Under $3,000 USD / mo</option>
          <option value="3k-10k">$3,000 – $10,000 USD / mo</option>
          <option value="10k-30k">$10,000 – $30,000 USD / mo</option>
          <option value="30k+">$30,000+ USD / mo</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="notes">What do you need help with?{requiredMark}</label>
        <textarea
          required
          id="notes"
          name="notes"
          rows={4}
          className={inputClass}
          placeholder="A short description of your situation, what's not working, or what you're trying to figure out…"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-white py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-50 shadow-[0_0_24px_rgba(255,255,255,0.08)] disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send inquiry"}
      </button>

      <p className="text-center text-xs text-white/20">
        We only use these details to reply to your inquiry — see our{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-white/40">privacy policy</a>.
        No spam, ever.
      </p>
    </form>
  );
}
