"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";
import { formatMoney } from "@/lib/currency";

type Window = 7 | 14 | 30 | 90;
type View = "campaigns" | "ads";

export default function MetaAdsPage() {
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
        const res = await attribixFetch(`/api/standalone/meta-ads?days=${window}`, token);
        const d = await res.json();
        if (d.ok) setData(d);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, [window]);

  const t = data?.totals || {};
  const cur = "USD"; // Meta reports in account currency
  const roas = t.roas || 0;
  const isProfitable = roas >= 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meta Ads</h1>
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
          Meta Ads not connected. Connect via your Shopify admin → Attribix → Integrations.
        </div>
      )}

      {/* Decision banner */}
      {data?.hasData && (
        <div className={`rounded-xl p-5 text-white ${isProfitable ? "bg-gradient-to-r from-emerald-500 to-emerald-600" : "bg-gradient-to-r from-red-500 to-red-600"}`}>
          <div className="text-lg font-bold">{isProfitable ? "Your Meta ads are profitable" : "Your Meta ads need attention"}</div>
          <div className="text-sm opacity-90 mt-1">
            ROAS {roas}x — {isProfitable ? `generating ${formatMoney(t.value || 0, cur)} from ${formatMoney(t.spend || 0, cur)} spend` : `spending ${formatMoney(t.spend || 0, cur)} but only generating ${formatMoney(t.value || 0, cur)}`}
          </div>
        </div>
      )}

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Total Spend</div>
          <div className="text-xl font-bold mt-1">{formatMoney(t.spend || 0, cur)}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Impressions</div>
          <div className="text-xl font-bold mt-1">{(t.impressions || 0).toLocaleString()}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Clicks (CTR)</div>
          <div className="text-xl font-bold mt-1">{(t.clicks || 0).toLocaleString()} <span className="text-sm text-slate-400">({t.ctr || 0}%)</span></div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">ROAS</div>
          <div className={`text-xl font-bold mt-1 ${roas >= 1 ? "text-emerald-600" : "text-red-500"}`}>{roas}x</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Purchases</div>
          <div className="text-xl font-bold mt-1">{t.purchases || 0}</div>
        </div>
      </div>

      {/* Best + Worst campaign cards */}
      {data?.bestCampaign && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4">
            <div className="text-xs font-medium text-emerald-700">🏆 Best Campaign</div>
            <div className="font-bold mt-1">{data.bestCampaign.campaignName}</div>
            <div className="text-sm text-emerald-600 mt-1">ROAS {data.bestCampaign.roas}x · {data.bestCampaign.purchases} purchases · {formatMoney(data.bestCampaign.purchaseValue, cur)}</div>
          </div>
          {data.worstCampaign && (
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4">
              <div className="text-xs font-medium text-red-700">⚠️ Wasting Budget</div>
              <div className="font-bold mt-1">{data.worstCampaign.campaignName}</div>
              <div className="text-sm text-red-600 mt-1">ROAS {data.worstCampaign.roas}x · Spending {formatMoney(data.worstCampaign.spend, cur)} with low returns</div>
            </div>
          )}
        </div>
      )}

      {/* View toggle */}
      <div className="flex gap-2 border-b">
        {(["campaigns", "ads"] as View[]).map((v) => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px capitalize ${view === v ? "border-gray-900 text-gray-900" : "border-transparent text-slate-500"}`}>
            {v}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading && <div className="py-8 text-center text-slate-400">Loading...</div>}

      {!loading && view === "campaigns" && (
        <div className="rounded-xl border bg-white overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Campaign</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Spend</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Impressions</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Clicks</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">CTR</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Purchases</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Revenue</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">ROAS</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">CPA</th>
              </tr>
            </thead>
            <tbody>
              {(data?.campaigns || []).map((c: any) => (
                <tr key={c.campaignId} className="border-b last:border-0 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">{c.campaignName || c.campaignId}</td>
                  <td className="px-4 py-3 text-right">{formatMoney(c.spend, cur)}</td>
                  <td className="px-4 py-3 text-right">{c.impressions.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">{c.clicks.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">{c.ctr}%</td>
                  <td className="px-4 py-3 text-right">{c.purchases}</td>
                  <td className="px-4 py-3 text-right">{formatMoney(c.purchaseValue, cur)}</td>
                  <td className={`px-4 py-3 text-right font-bold ${c.roas >= 1 ? "text-emerald-600" : "text-red-500"}`}>{c.roas}x</td>
                  <td className="px-4 py-3 text-right">{formatMoney(c.cpa, cur)}</td>
                </tr>
              ))}
              {(data?.campaigns || []).length === 0 && <tr><td colSpan={9} className="px-4 py-8 text-center text-slate-400">No campaign data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && view === "ads" && (
        <div className="rounded-xl border bg-white overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Ad</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Ad Set</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Campaign</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Spend</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">CTR</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">CPC</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Purchases</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">ROAS</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {(data?.ads || []).map((a: any) => (
                <tr key={a.adId} className="border-b last:border-0 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">{a.adName || a.adId}</td>
                  <td className="px-4 py-3 text-slate-500">{a.adSetName || "—"}</td>
                  <td className="px-4 py-3 text-slate-500">{a.campaignName || "—"}</td>
                  <td className="px-4 py-3 text-right">{formatMoney(a.spend, cur)}</td>
                  <td className="px-4 py-3 text-right">{a.ctr}%</td>
                  <td className="px-4 py-3 text-right">{formatMoney(a.cpc, cur)}</td>
                  <td className="px-4 py-3 text-right">{a.purchases}</td>
                  <td className={`px-4 py-3 text-right font-bold ${a.roas >= 1 ? "text-emerald-600" : "text-red-500"}`}>{a.roas}x</td>
                  <td className="px-4 py-3 text-right">{formatMoney(a.purchaseValue, cur)}</td>
                </tr>
              ))}
              {(data?.ads || []).length === 0 && <tr><td colSpan={9} className="px-4 py-8 text-center text-slate-400">No ad data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {data?.lastSyncedAt && (
        <div className="text-xs text-slate-400">Last synced: {new Date(data.lastSyncedAt).toLocaleString()}</div>
      )}
    </div>
  );
}
