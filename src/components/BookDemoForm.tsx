"use client";

import { useState } from "react";

export default function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // Build payload without fd.entries() to avoid TS lib issues
    const payload: Record<string, string> = {};
    fd.forEach((value, key) => (payload[key] = String(value)));

    // TODO: wire up when /api/demo exists
    // await fetch("/api/demo", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });

    console.log("Demo request:", payload);
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="md:col-span-3 p-6 rounded-2xl border border-white/10 bg-white/5 space-y-4"
    >
      <div>
        <label className="block text-sm font-medium">Full name</label>
        <input
          required
          name="name"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Work email</label>
        <input
          required
          type="email"
          name="email"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50"
          placeholder="jane@store.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Store URL</label>
        <input
          name="storeUrl"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50"
          placeholder="https://yourstore.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">What are you hoping to improve?</label>
        <textarea
          name="goals"
          rows={4}
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50"
          placeholder="e.g., Server-side purchase accuracy, product-level ROAS, Meta CAPI setup…"
        />
      </div>

      <button
        type="submit"
        className="w-full px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:opacity-90"
      >
        {submitted ? "Request sent ✓" : "Request demo"}
      </button>

      <p className="text-xs text-white/60">
        We’ll reply with a calendar link. By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
}
