"use client";

import React, { useState, useMemo } from "react";

export default function UTMBuilderPage() {
  const [baseUrl, setBaseUrl] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);

  const generatedUrl = useMemo(() => {
    if (!baseUrl) return "";
    try {
      const url = new URL(baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`);
      if (source) url.searchParams.set("utm_source", source);
      if (medium) url.searchParams.set("utm_medium", medium);
      if (campaign) url.searchParams.set("utm_campaign", campaign);
      if (term) url.searchParams.set("utm_term", term);
      if (content) url.searchParams.set("utm_content", content);
      return url.toString();
    } catch {
      return "";
    }
  }, [baseUrl, source, medium, campaign, term, content]);

  function copyUrl() {
    if (generatedUrl) {
      navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const presets = [
    { label: "Meta Ad", source: "facebook", medium: "paid_social", campaign: "" },
    { label: "Google Ad", source: "google", medium: "cpc", campaign: "" },
    { label: "Email", source: "newsletter", medium: "email", campaign: "" },
    { label: "Instagram Bio", source: "instagram", medium: "social", campaign: "bio_link" },
    { label: "TikTok Ad", source: "tiktok", medium: "paid_social", campaign: "" },
    { label: "Influencer", source: "influencer", medium: "referral", campaign: "" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">UTM Builder</h1>
        <p className="text-sm text-slate-500 mt-1">Create tracked links to measure where your traffic and conversions come from</p>
      </div>

      {/* Quick presets */}
      <div className="flex gap-2 flex-wrap">
        {presets.map((p) => (
          <button key={p.label} onClick={() => { setSource(p.source); setMedium(p.medium); if (p.campaign) setCampaign(p.campaign); }}
            className="px-3 py-1.5 rounded-full text-sm border hover:bg-slate-50 transition">
            {p.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border bg-white p-5 space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1">Website URL *</label>
          <input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="https://yourstore.com/products/your-product"
            className="w-full rounded-lg border px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-medium text-slate-500 block mb-1">Source * <span className="font-normal text-slate-400">(utm_source)</span></label>
            <input value={source} onChange={(e) => setSource(e.target.value)}
              placeholder="facebook, google, newsletter..."
              className="w-full rounded-lg border px-3 py-2 text-sm" />
            <p className="text-xs text-slate-400 mt-1">Where the traffic comes from</p>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500 block mb-1">Medium * <span className="font-normal text-slate-400">(utm_medium)</span></label>
            <input value={medium} onChange={(e) => setMedium(e.target.value)}
              placeholder="cpc, email, social, referral..."
              className="w-full rounded-lg border px-3 py-2 text-sm" />
            <p className="text-xs text-slate-400 mt-1">How the traffic gets to you</p>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500 block mb-1">Campaign <span className="font-normal text-slate-400">(utm_campaign)</span></label>
            <input value={campaign} onChange={(e) => setCampaign(e.target.value)}
              placeholder="summer_sale, launch_2026..."
              className="w-full rounded-lg border px-3 py-2 text-sm" />
            <p className="text-xs text-slate-400 mt-1">The specific campaign name</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-slate-500 block mb-1">Term <span className="font-normal text-slate-400">(utm_term)</span></label>
            <input value={term} onChange={(e) => setTerm(e.target.value)}
              placeholder="running shoes, keyword..."
              className="w-full rounded-lg border px-3 py-2 text-sm" />
            <p className="text-xs text-slate-400 mt-1">Paid search keyword (optional)</p>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500 block mb-1">Content <span className="font-normal text-slate-400">(utm_content)</span></label>
            <input value={content} onChange={(e) => setContent(e.target.value)}
              placeholder="hero_banner, sidebar_ad..."
              className="w-full rounded-lg border px-3 py-2 text-sm" />
            <p className="text-xs text-slate-400 mt-1">Differentiate ads/links (optional)</p>
          </div>
        </div>
      </div>

      {/* Generated URL */}
      {generatedUrl && (
        <div className="rounded-xl border bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold">Your tracked URL</label>
            <button onClick={copyUrl} className="px-4 py-1.5 rounded-lg bg-gray-900 text-white text-sm hover:opacity-90">
              {copied ? "Copied!" : "Copy URL"}
            </button>
          </div>
          <div className="rounded-lg bg-slate-50 border px-4 py-3 text-sm font-mono break-all text-slate-700 select-all">
            {generatedUrl}
          </div>

          {/* Breakdown */}
          <div className="text-xs text-slate-400 space-y-1 mt-2">
            <div><strong className="text-slate-500">Base URL:</strong> {baseUrl}</div>
            {source && <div><strong className="text-slate-500">utm_source:</strong> {source}</div>}
            {medium && <div><strong className="text-slate-500">utm_medium:</strong> {medium}</div>}
            {campaign && <div><strong className="text-slate-500">utm_campaign:</strong> {campaign}</div>}
            {term && <div><strong className="text-slate-500">utm_term:</strong> {term}</div>}
            {content && <div><strong className="text-slate-500">utm_content:</strong> {content}</div>}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="rounded-xl border bg-white p-5">
        <h3 className="text-sm font-semibold mb-3">Tips</h3>
        <ul className="text-sm text-slate-500 space-y-2">
          <li>• Use <strong>lowercase</strong> for all UTM values — "Facebook" and "facebook" are tracked separately</li>
          <li>• Use <strong>underscores</strong> instead of spaces — "summer_sale" not "summer sale"</li>
          <li>• Be <strong>consistent</strong> — use the same source/medium naming across all campaigns</li>
          <li>• UTM data shows up in your <strong>Attribution</strong> and <strong>Orders</strong> pages within minutes</li>
        </ul>
      </div>
    </div>
  );
}
