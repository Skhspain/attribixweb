"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";
import { formatMoney } from "@/lib/currency";

type Order = {
  id: string; orderId: string | null; totalValue: number; currency: string;
  createdAt: string; utmSource: string | null; utmCampaign: string | null;
  country: string | null; city: string | null; referrer: string | null;
};

export default function OrdersPage() {
  const { getToken } = useAuth();
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [stats, setStats] = React.useState<any>({});
  const [loading, setLoading] = React.useState(true);
  const [days, setDays] = React.useState(30);

  async function load() {
    setLoading(true);
    try {
      const token = await getToken();
      const res = await attribixFetch(`/api/standalone/orders?days=${days}`, token);
      const data = await res.json();
      if (data.ok) { setOrders(data.orders || []); setStats(data.stats || {}); }
    } catch (e) { console.error(e); }
    setLoading(false);
  }

  React.useEffect(() => { load(); }, [days]);

  const cur = stats.currency || "USD";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex gap-2">
          {[7, 30, 90].map((d) => (
            <button key={d} onClick={() => setDays(d)}
              className={`px-3 py-1.5 rounded-lg text-sm ${days === d ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
              {d}d
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Total Orders</div>
          <div className="text-2xl font-bold mt-1">{stats.totalOrders || 0}</div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Revenue</div>
          <div className="text-2xl font-bold mt-1">{formatMoney(stats.totalRevenue || 0, cur)}</div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Avg Order Value</div>
          <div className="text-2xl font-bold mt-1">{formatMoney(stats.aov || 0, cur)}</div>
        </div>
      </div>

      <div className="rounded-xl border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Date</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Order</th>
              <th className="text-right px-4 py-3 font-medium text-slate-600">Value</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Source</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Campaign</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Country</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
            {!loading && orders.length === 0 && <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">No orders found</td></tr>}
            {orders.map((o) => (
              <tr key={o.id} className="border-b last:border-0 hover:bg-slate-50">
                <td className="px-4 py-3">{new Date(o.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3 font-mono text-xs">{o.orderId || o.id.slice(0, 8)}</td>
                <td className="px-4 py-3 text-right font-medium">{formatMoney(o.totalValue, o.currency)}</td>
                <td className="px-4 py-3">{o.utmSource || "direct"}</td>
                <td className="px-4 py-3 text-slate-500">{o.utmCampaign || "—"}</td>
                <td className="px-4 py-3">{o.country || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
