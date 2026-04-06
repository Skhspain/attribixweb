"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

export default function FeedsPage() {
  const { getToken } = useAuth();
  const [shops, setShops] = useState<string[]>([]);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const res = await attribixFetch("/api/standalone/provision", token);
        const data = await res.json();
        if (data.shops) setShops(data.shops);
      } catch (e) { console.error(e); }
    }
    load();
  }, []);

  const shop = shops[0] || "your-store.myshopify.com";
  const baseUrl = "https://api.attribix.app";
  const productFeedUrl = `${baseUrl}/feeds/google-shopping/${shop}.xml`;
  const reviewFeedUrl = `${baseUrl}/feeds/google-reviews/${shop}.xml`;

  function copy(url: string, label: string) {
    navigator.clipboard.writeText(url);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Product Feeds</h1>

      {/* Google */}
      <section className="rounded-xl border bg-white p-5 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔵</span>
          <div>
            <h2 className="font-semibold">Google Merchant Center</h2>
            <p className="text-sm text-slate-500">Product feed + Reviews feed for Google Shopping</p>
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-500 block mb-1">Product Feed URL</label>
          <div className="flex gap-2">
            <input readOnly value={productFeedUrl} className="flex-1 rounded-lg border bg-slate-50 px-3 py-2 text-sm font-mono" />
            <button onClick={() => copy(productFeedUrl, "product")} className="px-4 py-2 rounded-lg border text-sm hover:bg-slate-50">
              {copied === "product" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-500 block mb-1">Reviews Feed URL</label>
          <div className="flex gap-2">
            <input readOnly value={reviewFeedUrl} className="flex-1 rounded-lg border bg-slate-50 px-3 py-2 text-sm font-mono" />
            <button onClick={() => copy(reviewFeedUrl, "review")} className="px-4 py-2 rounded-lg border text-sm hover:bg-slate-50">
              {copied === "review" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800">
          <strong>Setup steps:</strong>
          <ol className="list-decimal ml-4 mt-2 space-y-1">
            <li>Go to Google Merchant Center → Products → Feeds</li>
            <li>Click "Add product feed" → choose "Scheduled fetch"</li>
            <li>Paste the Product Feed URL above</li>
            <li>Set fetch schedule to "Daily"</li>
            <li>For Reviews: go to Merchant Center → Reviews → Settings → paste Reviews Feed URL</li>
          </ol>
        </div>
      </section>

      {/* Meta */}
      <section className="rounded-xl border bg-white p-5 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔵</span>
          <div>
            <h2 className="font-semibold">Meta Product Catalog</h2>
            <p className="text-sm text-slate-500">Same product feed works for Meta Commerce Manager</p>
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Catalog Feed URL</label>
          <div className="flex gap-2">
            <input readOnly value={productFeedUrl} className="flex-1 rounded-lg border bg-slate-50 px-3 py-2 text-sm font-mono" />
            <button onClick={() => copy(productFeedUrl, "meta")} className="px-4 py-2 rounded-lg border text-sm hover:bg-slate-50">
              {copied === "meta" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </section>

      {/* Pinterest / Microsoft */}
      <section className="rounded-xl border bg-white p-5">
        <h2 className="font-semibold mb-2">Other Platforms</h2>
        <p className="text-sm text-slate-500">The same product feed URL works with Pinterest Shopping, Microsoft Shopping, and Amazon — just paste it in each platform's catalog settings.</p>
      </section>
    </div>
  );
}
