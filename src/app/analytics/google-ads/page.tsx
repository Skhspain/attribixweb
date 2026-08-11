"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";
import { formatMoney } from "@/lib/currency";

export default function GoogleAdsPage() {
  const { getToken } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const token = await getToken();
        const res = await attribixFetch(`/api/standalone/google-ads?days=${days}`, token);
        const d = await res.json();
        if (d.ok) setData(d);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, [days]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Google Ads</h1>
        <div className="flex gap-2">
          {[7, 14, 30, 90].map((d) => (
            <button key={d} onClick={() => setDays(d)}
              className={`px-3 py-1.5 rounded-lg text-sm ${days === d ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
              {d}d
            </button>
          ))}
        </div>
      </div>

      {data?.connected === false && (
        <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
          Google Ads not connected. Connect via your Shopify admin → Attribix → Integrations.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Total Spend ({days}d)</div>
          <div className="text-2xl font-bold mt-1">{formatMoney(data?.totalSpend || 0, "USD")}</div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Campaigns</div>
          <div className="text-2xl font-bold mt-1">{data?.campaigns?.length || 0}</div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Status</div>
          <div className="text-2xl font-bold mt-1">{data?.connected ? "Connected" : "Not Connected"}</div>
        </div>
      </div>

      {loading && <div className="py-8 text-center text-slate-400">Loading...</div>}

      {!loading && (
        <div className="rounded-xl border bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Campaign</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Spend</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Active Days</th>
              </tr>
            </thead>
            <tbody>
              {(data?.campaigns || []).length === 0 && <tr><td colSpan={3} className="px-4 py-8 text-center text-slate-400">No Google Ads data</td></tr>}
              {(data?.campaigns || []).map((c: any, i: number) => (
                <tr key={i} className="border-b last:border-0 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3 text-right">{formatMoney(c.spend, "USD")}</td>
                  <td className="px-4 py-3 text-right">{c.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
