"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

type Window = 7 | 14 | 30 | 90;
type View = "campaigns" | "ads";

export default function TikTokAdsPage() {
  const { getToken } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [window, setWindow] = useState<Window>(30);
  const [view, setView] = useState<View>("campaigns");

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const token = await getToken();
        const res = await attribixFetch(`/api/standalone/tiktok-ads?days=${window}`, token);
        const d = await res.json();
        if (d.ok) setData(d);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, [window]);

  const t = data?.totals || {};
  const roas = t.roas || 0;
  const isProfitable = roas >= 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">TikTok Ads</h1>
        <div className="flex gap-2">
          {([7, 14, 30, 90] as Window[]).map((w) => (
            <button key={w} onClick={() => setWindow(w)}
              className={`px-3 py-1.5 rounded-lg text-sm ${window === w ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
              {w}d
            </button>
          ))}
        </div>
      </div>

      {data?.connected === false && (
        <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
          TikTok Ads not connected. Connect via your Shopify admin &rarr; Attribix &rarr; Integrations &rarr; TikTok.
        </div>
      )}

      {/* Decision banner */}
      {data?.hasData && (
        <div className={`rounded-xl p-5 text-white ${isProfitable ? "bg-gradient-to-r from-emerald-500 to-emerald-600" : "bg-gradient-to-r from-red-500 to-red-600"}`}>
          <div className="text-lg font-bold">{isProfitable ? "Your TikTok ads are profitable" : "Your TikTok ads need attention"}</div>
          <div className="text-sm opacity-90 mt-1">
            {roas}x ROAS &middot; ${t.spend?.toFixed(2)} spend &rarr; ${t.value?.toFixed(2)} revenue
          </div>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {[
          { label: "Spend", value: `$${(t.spend || 0).toFixed(2)}` },
          { label: "Impressions", value: (t.impressions || 0).toLocaleString() },
          { label: "Clicks", value: (t.clicks || 0).toLocaleString() },
          { label: "CTR", value: `${(t.ctr || 0).toFixed(2)}%` },
          { label: "Conversions", value: (t.conversions || 0).toLocaleString() },
          { label: "Revenue", value: `$${(t.value || 0).toFixed(2)}` },
          { label: "ROAS", value: `${roas}x` },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-xl border bg-white p-4">
            <div className="text-xs text-slate-500">{kpi.label}</div>
            <div className="text-xl font-bold mt-1">{loading ? "..." : kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Best / Worst */}
      {data?.hasData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.bestCampaign && (
            <div className="rounded-xl border bg-emerald-50 p-4">
              <div className="text-xs text-emerald-600 font-semibold uppercase mb-1">Best Campaign</div>
              <div className="font-bold text-lg truncate">{data.bestCampaign.campaignName}</div>
              <div className="text-sm text-slate-600 mt-1">
                {data.bestCampaign.roas}x ROAS &middot; ${data.bestCampaign.spend} spend &rarr; ${data.bestCampaign.conversionValue} revenue
              </div>
            </div>
          )}
          {data.worstCampaign && (
            <div className="rounded-xl border bg-red-50 p-4">
              <div className="text-xs text-red-600 font-semibold uppercase mb-1">Needs Attention</div>
              <div className="font-bold text-lg truncate">{data.worstCampaign.campaignName}</div>
              <div className="text-sm text-slate-600 mt-1">
                {data.worstCampaign.roas}x ROAS &middot; ${data.worstCampaign.spend} spend &rarr; ${data.worstCampaign.conversionValue} revenue
              </div>
            </div>
          )}
        </div>
      )}

      {/* View toggle */}
      <div className="flex gap-2">
        <button onClick={() => setView("campaigns")}
          className={`px-4 py-2 rounded-lg text-sm ${view === "campaigns" ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
          Campaigns ({data?.campaigns?.length || 0})
        </button>
        <button onClick={() => setView("ads")}
          className={`px-4 py-2 rounded-lg text-sm ${view === "ads" ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
          Ads ({data?.ads?.length || 0})
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl border bg-white overflow-auto">
        {view === "campaigns" ? (
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                {["Campaign", "Spend", "Impressions", "Clicks", "CTR", "Conv.", "Revenue", "ROAS"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-medium text-slate-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={8} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
              {!loading && (!data?.campaigns?.length) && <tr><td colSpan={8} className="px-4 py-8 text-center text-slate-400">No campaign data yet</td></tr>}
              {data?.campaigns?.map((c: any) => (
                <tr key={c.campaignId} className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium max-w-[240px] truncate">{c.campaignName || c.campaignId}</td>
                  <td className="px-4 py-3">${c.spend.toFixed(2)}</td>
                  <td className="px-4 py-3">{c.impressions.toLocaleString()}</td>
                  <td className="px-4 py-3">{c.clicks.toLocaleString()}</td>
                  <td className="px-4 py-3">{c.ctr}%</td>
                  <td className="px-4 py-3">{c.conversions}</td>
                  <td className="px-4 py-3">${c.conversionValue.toFixed(2)}</td>
                  <td className={`px-4 py-3 font-bold ${c.roas >= 1 ? "text-emerald-600" : "text-red-600"}`}>{c.roas}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                {["Ad", "Campaign", "Ad Group", "Spend", "Clicks", "CTR", "Conv.", "Revenue", "ROAS"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-medium text-slate-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={9} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
              {!loading && (!data?.ads?.length) && <tr><td colSpan={9} className="px-4 py-8 text-center text-slate-400">No ad data yet</td></tr>}
              {data?.ads?.map((a: any) => (
                <tr key={a.adId} className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium max-w-[200px] truncate">{a.adName || a.adId}</td>
                  <td className="px-4 py-3 text-slate-500 text-xs">{a.campaignName}</td>
                  <td className="px-4 py-3 text-slate-500 text-xs">{a.adGroupName}</td>
                  <td className="px-4 py-3">${a.spend.toFixed(2)}</td>
                  <td className="px-4 py-3">{a.clicks.toLocaleString()}</td>
                  <td className="px-4 py-3">{a.ctr}%</td>
                  <td className="px-4 py-3">{a.conversions}</td>
                  <td className="px-4 py-3">${a.conversionValue.toFixed(2)}</td>
                  <td className={`px-4 py-3 font-bold ${a.roas >= 1 ? "text-emerald-600" : "text-red-600"}`}>{a.roas}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Daily trend */}
      {data?.daily?.length > 0 && (
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold mb-3">Daily Spend vs Revenue</h3>
          <div className="h-48 flex items-end gap-1">
            {data.daily.map((d: any, i: number) => {
              const maxVal = Math.max(...data.daily.map((x: any) => Math.max(x.spend, x.value)), 1);
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5" title={`${d.date}: $${d.spend} spend, $${d.value} revenue`}>
                  <div className="w-full flex gap-0.5 items-end" style={{ height: 160 }}>
                    <div className="flex-1 bg-slate-300 rounded-t" style={{ height: `${(d.spend / maxVal) * 100}%`, minHeight: 2 }} />
                    <div className="flex-1 bg-emerald-400 rounded-t" style={{ height: `${(d.value / maxVal) * 100}%`, minHeight: 2 }} />
                  </div>
                  {i % Math.ceil(data.daily.length / 10) === 0 && (
                    <span className="text-[10px] text-slate-400">{d.date.slice(5)}</span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-slate-300 rounded" /> Spend</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-emerald-400 rounded" /> Revenue</span>
          </div>
        </div>
      )}
    </div>
  );
}
