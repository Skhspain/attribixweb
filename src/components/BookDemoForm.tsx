"use client";

import { useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export default function BookDemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setError(null);
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    fd.forEach((value, key) => (payload[key] = String(value)));

    try {
      const res = await fetch("/api/book-demo", {
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

      if (typeof window !== "undefined") {
        window.gtag?.("event", "generate_lead", { form: "book_demo" });
        window.fbq?.("track", "Lead");
      }
      setStatus("sent");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="md:col-span-3 p-6 rounded-2xl border border-white/10 bg-white/5">
        <p className="text-base font-semibold text-white">Request sent</p>
        <p className="mt-2 text-sm text-white/60">
          We&apos;ll reply with a calendar link shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="md:col-span-3 p-6 rounded-2xl border border-white/10 bg-white/5 space-y-4"
    >
      {/* Honeypot — hidden from real users, visible to bots that fill every field */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="name">Full name</label>
        <input
          required
          id="name"
          name="name"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="email">Work email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50"
          placeholder="jane@store.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="storeUrl">Store URL</label>
        <input
          id="storeUrl"
          name="storeUrl"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50"
          placeholder="https://yourstore.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="goals">What are you hoping to improve?</label>
        <textarea
          id="goals"
          name="goals"
          rows={4}
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50"
          placeholder="e.g., Server-side purchase accuracy, product-level ROAS, Meta CAPI setup…"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request demo"}
      </button>

      <p className="text-xs text-white/60">
        We&apos;ll reply with a calendar link. By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
}
