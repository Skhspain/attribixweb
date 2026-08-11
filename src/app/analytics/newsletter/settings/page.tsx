"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

export default function NewsletterSettingsPage() {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [footerText, setFooterText] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const res = await attribixFetch("/api/standalone/newsletter", token);
        const data = await res.json();
        if (data.settings) {
          setFromName(data.settings.fromName || "");
          setFromEmail(data.settings.fromEmail || "");
          setReplyTo(data.settings.replyTo || "");
          setFooterText(data.settings.footerText || "");
        }
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, []);

  async function save() {
    setSaving(true); setMessage("");
    try {
      const token = await getToken();
      const res = await attribixFetch("/api/standalone/newsletter/update", token, {
        method: "POST",
        body: JSON.stringify({ action: "update-settings", fromName, fromEmail, replyTo, footerText }),
      });
      const data = await res.json();
      setMessage(data.ok ? "Settings saved!" : "Failed to save");
      if (data.ok) setTimeout(() => setMessage(""), 3000);
    } catch (e) { setMessage("Error saving"); }
    setSaving(false);
  }

  if (loading) return <div className="py-8 text-center text-slate-400">Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Newsletter Settings</h1>
        <div className="flex items-center gap-3">
          {message && <span className={`text-sm ${message.includes("!") ? "text-emerald-600" : "text-red-500"}`}>{message}</span>}
          <button onClick={save} disabled={saving} className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:opacity-90 disabled:opacity-50">
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </div>

      <section className="rounded-xl border bg-white p-5 space-y-4">
        <h2 className="font-semibold">Sender Identity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-slate-500 block mb-1">From Name</label>
            <input value={fromName} onChange={(e) => setFromName(e.target.value)} placeholder="Your Store Name"
              className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-xs text-slate-500 block mb-1">From Email</label>
            <input value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} placeholder="hello@yourstore.com" type="email"
              className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-xs text-slate-500 block mb-1">Reply-To Email</label>
            <input value={replyTo} onChange={(e) => setReplyTo(e.target.value)} placeholder="support@yourstore.com" type="email"
              className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 space-y-4">
        <h2 className="font-semibold">Email Footer</h2>
        <textarea value={footerText} onChange={(e) => setFooterText(e.target.value)} rows={3}
          placeholder="Your company address and unsubscribe notice..."
          className="w-full rounded-lg border px-3 py-2 text-sm" />
        <p className="text-xs text-slate-400">Required by CAN-SPAM. Include your physical address.</p>
      </section>
    </div>
  );
}
