"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-50 text-blue-600",
  contacted: "bg-yellow-50 text-yellow-600",
  qualified: "bg-purple-50 text-purple-600",
  converted: "bg-emerald-50 text-emerald-600",
  lost: "bg-slate-100 text-slate-500",
};

export default function LeadsPage() {
  const { getToken } = useAuth();
  const [leads, setLeads] = React.useState<any[]>([]);
  const [stats, setStats] = React.useState<Record<string, number>>({});
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState<string>("all");

  React.useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const url = filter === "all" ? "/api/standalone/leads" : `/api/standalone/leads?status=${filter}`;
        const res = await attribixFetch(url, token);
        const data = await res.json();
        if (data.ok) { setLeads(data.leads || []); setStats(data.stats || {}); }
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, [filter]);

  const total = Object.values(stats).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Lead Center</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {["new", "contacted", "qualified", "converted", "lost"].map((s) => (
          <button key={s} onClick={() => setFilter(filter === s ? "all" : s)}
            className={`rounded-xl border p-4 text-left transition ${filter === s ? "ring-2 ring-gray-900" : "hover:bg-slate-50"}`}>
            <div className="text-xs text-slate-500 capitalize">{s}</div>
            <div className="text-xl font-bold mt-1">{stats[s] || 0}</div>
          </button>
        ))}
      </div>

      <div className="rounded-xl border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Name</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Email</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Source</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Campaign</th>
              <th className="text-left px-4 py-3 font-medium text-slate-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
            {!loading && leads.length === 0 && <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">No leads yet</td></tr>}
            {leads.map((l: any) => (
              <tr key={l.id} className="border-b last:border-0 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium">{[l.firstName, l.lastName].filter(Boolean).join(" ") || "—"}</td>
                <td className="px-4 py-3">{l.email}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_COLORS[l.status] || "bg-slate-100 text-slate-500"}`}>
                    {l.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-500">{l.source || l.utmSource || "—"}</td>
                <td className="px-4 py-3 text-slate-500">{l.utmCampaign || "—"}</td>
                <td className="px-4 py-3 text-slate-500">{new Date(l.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
