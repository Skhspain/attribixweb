"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

type Window = 30 | 90 | 180;

export default function ProductAnalyticsPage() {
  const { getToken } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [window, setWindow] = useState<Window>(30);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const token = await getToken();
        const res = await attribixFetch(`/api/standalone/products?days=${window}`, token);
        const d = await res.json();
        if (d.ok) setData(d);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, [window]);

  const products = data?.products || [];
  const totals = data?.totals || {};

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Product Analytics</h1>
        <div className="flex gap-2">
          {([30, 90, 180] as Window[]).map((w) => (
            <button key={w} onClick={() => setWindow(w)}
              className={`px-3 py-1.5 rounded-lg text-sm ${window === w ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
              {w}d
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Total Revenue</div>
          <div className="text-2xl font-bold mt-1">${loading ? "..." : (totals.revenue || 0).toLocaleString()}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Units Sold</div>
          <div className="text-2xl font-bold mt-1">{loading ? "..." : (totals.units || 0).toLocaleString()}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Orders</div>
          <div className="text-2xl font-bold mt-1">{loading ? "..." : (totals.orders || 0).toLocaleString()}</div>
        </div>
      </div>

      {/* Products Table */}
      <div className="rounded-xl border bg-white overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b bg-slate-50">
              {["Product", "Revenue", "Units", "Orders", "AOV"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-slate-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
            {!loading && products.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">No product data yet</td></tr>}
            {products.map((p: any, i: number) => (
              <tr key={p.productId} className="border-b hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-xs text-slate-400">ID: {p.productId}</div>
                </td>
                <td className="px-4 py-3 font-semibold">${p.revenue.toLocaleString()}</td>
                <td className="px-4 py-3">{p.units.toLocaleString()}</td>
                <td className="px-4 py-3">{p.orders.toLocaleString()}</td>
                <td className="px-4 py-3">${p.aov}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
