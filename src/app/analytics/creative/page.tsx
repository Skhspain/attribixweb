"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

type Window = 7 | 14 | 30 | 90;

export default function CreativeAnalyticsPage() {
  const { getToken } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [window, setWindow] = useState<Window>(30);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const token = await getToken();
        const res = await attribixFetch(`/api/standalone/creative?days=${window}`, token);
        const d = await res.json();
        if (d.ok) setData(d);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, [window]);

  const ads = data?.ads || [];
  const totals = data?.totals || {};

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Creative Analytics</h1>
        <div className="flex gap-2">
          {([7, 14, 30, 90] as Window[]).map((w) => (
            <button key={w} onClick={() => setWindow(w)}
              className={`px-3 py-1.5 rounded-lg text-sm ${window === w ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
              {w}d
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Total Spend</div>
          <div className="text-xl font-bold mt-1">${loading ? "..." : (totals.spend || 0).toFixed(2)}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Revenue</div>
          <div className="text-xl font-bold mt-1">${loading ? "..." : (totals.value || 0).toFixed(2)}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">ROAS</div>
          <div className={`text-xl font-bold mt-1 ${(totals.roas || 0) >= 1 ? "text-emerald-600" : "text-red-600"}`}>
            {loading ? "..." : `${totals.roas || 0}x`}
          </div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Active Ads</div>
          <div className="text-xl font-bold mt-1">{loading ? "..." : totals.adCount || 0}</div>
        </div>
      </div>

      {/* Best / Worst */}
      {data?.hasData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.bestAd && (
            <div className="rounded-xl border bg-emerald-50 p-4">
              <div className="text-xs text-emerald-600 font-semibold uppercase mb-1">Best Ad</div>
              <div className="font-bold text-lg truncate">{data.bestAd.adName}</div>
              <div className="text-sm text-slate-600 mt-1">
                {data.bestAd.roas}x ROAS &middot; ${data.bestAd.spend} spend &rarr; ${data.bestAd.purchaseValue} revenue
              </div>
              <div className="text-xs text-slate-400 mt-1">{data.bestAd.campaignName} &rarr; {data.bestAd.adSetName}</div>
            </div>
          )}
          {data.worstAd && (
            <div className="rounded-xl border bg-red-50 p-4">
              <div className="text-xs text-red-600 font-semibold uppercase mb-1">Needs Attention</div>
              <div className="font-bold text-lg truncate">{data.worstAd.adName}</div>
              <div className="text-sm text-slate-600 mt-1">
                {data.worstAd.roas}x ROAS &middot; ${data.worstAd.spend} spend &rarr; ${data.worstAd.purchaseValue} revenue
              </div>
            </div>
          )}
        </div>
      )}

      {/* Ads Table */}
      <div className="rounded-xl border bg-white overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b bg-slate-50">
              {["Ad", "Campaign", "Ad Set", "Spend", "Impr.", "Clicks", "CTR", "CPC", "Purch.", "Revenue", "ROAS"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-slate-600 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={11} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
            {!loading && ads.length === 0 && <tr><td colSpan={11} className="px-4 py-8 text-center text-slate-400">No ad data yet. Connect Meta Ads to see creative performance.</td></tr>}
            {ads.map((a: any) => (
              <tr key={a.adId} className="border-b hover:bg-slate-50">
                <td className="px-4 py-3 font-medium max-w-[200px] truncate">{a.adName || a.adId}</td>
                <td className="px-4 py-3 text-xs text-slate-500 max-w-[150px] truncate">{a.campaignName}</td>
                <td className="px-4 py-3 text-xs text-slate-500 max-w-[150px] truncate">{a.adSetName}</td>
                <td className="px-4 py-3">${a.spend}</td>
                <td className="px-4 py-3">{a.impressions.toLocaleString()}</td>
                <td className="px-4 py-3">{a.clicks.toLocaleString()}</td>
                <td className="px-4 py-3">{a.ctr}%</td>
                <td className="px-4 py-3">${a.cpc}</td>
                <td className="px-4 py-3">{a.purchases}</td>
                <td className="px-4 py-3">${a.purchaseValue}</td>
                <td className={`px-4 py-3 font-bold ${a.roas >= 1 ? "text-emerald-600" : "text-red-600"}`}>{a.roas}x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
