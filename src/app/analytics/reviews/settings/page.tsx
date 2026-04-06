"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

export default function ReviewSettingsPage() {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Review settings
  const [autoApprove, setAutoApprove] = useState(false);
  const [sendRequestEmail, setSendRequestEmail] = useState(true);
  const [requestDelayDays, setRequestDelayDays] = useState(7);
  const [emailSubject, setEmailSubject] = useState("How was your order from {shop}?");
  const [emailBody, setEmailBody] = useState("Hi {name},\n\nThank you for your recent order! We'd love to hear what you think.\n\n{review_link}\n\nThank you!");
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [discountType, setDiscountType] = useState("percentage");
  const [discountValue, setDiscountValue] = useState(10);
  const [discountExpiryDays, setDiscountExpiryDays] = useState(30);

  // Widget settings
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [starColor, setStarColor] = useState("#f59e0b");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [borderColor, setBorderColor] = useState("#e5e7eb");
  const [layout, setLayout] = useState("list");
  const [showVerifiedBadge, setShowVerifiedBadge] = useState(true);
  const [showReviewerName, setShowReviewerName] = useState(true);
  const [showDate, setShowDate] = useState(true);
  const [allowImages, setAllowImages] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const res = await attribixFetch("/api/standalone/reviews/settings", token);
        const data = await res.json();
        if (data.settings) {
          const s = data.settings;
          setAutoApprove(s.autoApprove); setSendRequestEmail(s.sendRequestEmail);
          setRequestDelayDays(s.requestDelayDays); setEmailSubject(s.emailSubject);
          setEmailBody(s.emailBody); setDiscountEnabled(s.discountEnabled);
          setDiscountType(s.discountType); setDiscountValue(s.discountValue);
          setDiscountExpiryDays(s.discountExpiryDays);
        }
        if (data.widgetSettings) {
          const w = data.widgetSettings;
          setPrimaryColor(w.primaryColor); setStarColor(w.starColor);
          setBackgroundColor(w.backgroundColor); setBorderColor(w.borderColor);
          setLayout(w.layout); setShowVerifiedBadge(w.showVerifiedBadge);
          setShowReviewerName(w.showReviewerName); setShowDate(w.showDate);
          setAllowImages(w.allowImages);
        }
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, []);

  async function saveSettings() {
    setSaving(true); setMessage("");
    try {
      const token = await getToken();
      await Promise.all([
        attribixFetch("/api/standalone/reviews/settings", token, {
          method: "POST",
          body: JSON.stringify({ target: "settings", autoApprove, sendRequestEmail, requestDelayDays, emailSubject, emailBody, discountEnabled, discountType, discountValue, discountExpiryDays }),
        }),
        attribixFetch("/api/standalone/reviews/settings", token, {
          method: "POST",
          body: JSON.stringify({ target: "widget", primaryColor, starColor, backgroundColor, borderColor, layout, showVerifiedBadge, showReviewerName, showDate, allowImages }),
        }),
      ]);
      setMessage("Settings saved!");
      setTimeout(() => setMessage(""), 3000);
    } catch (e) { setMessage("Failed to save"); }
    setSaving(false);
  }

  if (loading) return <div className="p-8 text-slate-400">Loading settings...</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Review Settings</h1>
        <div className="flex items-center gap-3">
          {message && <span className={`text-sm ${message.includes("!") ? "text-emerald-600" : "text-red-500"}`}>{message}</span>}
          <button onClick={saveSettings} disabled={saving}
            className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:opacity-90 disabled:opacity-50">
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </div>

      {/* Review Request Email */}
      <section className="rounded-xl border bg-white p-5 space-y-4">
        <h2 className="font-semibold">Review Request Emails</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Toggle label="Send review request emails" value={sendRequestEmail} onChange={setSendRequestEmail} />
          <Toggle label="Auto-approve reviews" value={autoApprove} onChange={setAutoApprove} />
          <div>
            <label className="text-xs text-slate-500 block mb-1">Delay after purchase (days)</label>
            <input type="number" value={requestDelayDays} onChange={(e) => setRequestDelayDays(Number(e.target.value))}
              className="w-full rounded-lg border px-3 py-2 text-sm" min={1} max={30} />
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Email Subject</label>
          <input value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="How was your order from {shop}?" />
          <p className="text-xs text-slate-400 mt-1">Variables: {"{shop}"}, {"{name}"}, {"{order_id}"}</p>
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Email Body</label>
          <textarea value={emailBody} onChange={(e) => setEmailBody(e.target.value)} rows={6}
            className="w-full rounded-lg border px-3 py-2 text-sm font-mono" />
          <p className="text-xs text-slate-400 mt-1">Variables: {"{name}"}, {"{review_link}"}, {"{shop}"}</p>
        </div>
      </section>

      {/* Discount Incentive */}
      <section className="rounded-xl border bg-white p-5 space-y-4">
        <h2 className="font-semibold">Review Incentive (Discount)</h2>
        <Toggle label="Offer discount for reviews" value={discountEnabled} onChange={setDiscountEnabled} />
        {discountEnabled && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-slate-500 block mb-1">Discount Type</label>
              <select value={discountType} onChange={(e) => setDiscountType(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 text-sm">
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed amount</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">Value</label>
              <input type="number" value={discountValue} onChange={(e) => setDiscountValue(Number(e.target.value))}
                className="w-full rounded-lg border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">Expiry (days)</label>
              <input type="number" value={discountExpiryDays} onChange={(e) => setDiscountExpiryDays(Number(e.target.value))}
                className="w-full rounded-lg border px-3 py-2 text-sm" />
            </div>
          </div>
        )}
      </section>

      {/* Widget Design */}
      <section className="rounded-xl border bg-white p-5 space-y-4">
        <h2 className="font-semibold">Review Widget Design</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorInput label="Primary Color" value={primaryColor} onChange={setPrimaryColor} />
          <ColorInput label="Star Color" value={starColor} onChange={setStarColor} />
          <ColorInput label="Background" value={backgroundColor} onChange={setBackgroundColor} />
          <ColorInput label="Border Color" value={borderColor} onChange={setBorderColor} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="text-xs text-slate-500 block mb-1">Layout</label>
            <select value={layout} onChange={(e) => setLayout(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm">
              <option value="list">List</option>
              <option value="grid">Grid</option>
              <option value="carousel">Carousel</option>
            </select>
          </div>
          <Toggle label="Verified badge" value={showVerifiedBadge} onChange={setShowVerifiedBadge} />
          <Toggle label="Reviewer name" value={showReviewerName} onChange={setShowReviewerName} />
          <Toggle label="Show date" value={showDate} onChange={setShowDate} />
        </div>
        <Toggle label="Allow image uploads" value={allowImages} onChange={setAllowImages} />

        {/* Preview */}
        <div className="rounded-xl border p-6 mt-4" style={{ backgroundColor, borderColor }}>
          <div className="text-sm font-medium mb-3" style={{ color: primaryColor }}>Review Widget Preview</div>
          <div className="rounded-lg border p-4" style={{ borderColor }}>
            <div className="flex items-center gap-2">
              <span style={{ color: starColor }}>{"★".repeat(5)}</span>
              {showVerifiedBadge && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">Verified</span>}
            </div>
            <p className="text-sm mt-2" style={{ color: "#374151" }}>Great product! Exactly what I needed.</p>
            <div className="text-xs mt-2" style={{ color: "#9ca3af" }}>
              {showReviewerName && "Alex M."}{showReviewerName && showDate && " · "}{showDate && "April 6, 2026"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between rounded-lg border px-3 py-2 cursor-pointer hover:bg-slate-50">
      <span className="text-sm">{label}</span>
      <button type="button" onClick={() => onChange(!value)}
        className={`h-6 w-11 rounded-full transition relative ${value ? "bg-gray-900" : "bg-gray-300"}`}>
        <span className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition ${value ? "translate-x-5" : ""}`} />
      </button>
    </label>
  );
}

function ColorInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-xs text-slate-500 block mb-1">{label}</label>
      <div className="flex items-center gap-2">
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)}
          className="h-8 w-8 rounded border cursor-pointer" />
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
          className="flex-1 rounded-lg border px-3 py-1.5 text-sm font-mono" />
      </div>
    </div>
  );
}
