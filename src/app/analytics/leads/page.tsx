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

  const [showCreate, setShowCreate] = React.useState(false);
  const [newLead, setNewLead] = React.useState({ email: "", firstName: "", lastName: "", phone: "", company: "", source: "manual" });
  const total = Object.values(stats).reduce((a, b) => a + b, 0);

  async function createLead() {
    if (!newLead.email) return;
    try {
      const token = await getToken();
      await attribixFetch("/api/standalone/leads/update", token, {
        method: "POST",
        body: JSON.stringify({ action: "create", ...newLead }),
      });
      setShowCreate(false);
      setNewLead({ email: "", firstName: "", lastName: "", phone: "", company: "", source: "manual" });
      setFilter("all"); // reload
    } catch (e) { console.error(e); }
  }

  async function updateLeadStatus(id: string, status: string) {
    try {
      const token = await getToken();
      await attribixFetch("/api/standalone/leads/update", token, {
        method: "POST",
        body: JSON.stringify({ action: "update", id, status }),
      });
      setLeads(leads.map((l: any) => l.id === id ? { ...l, status } : l));
    } catch (e) { console.error(e); }
  }

  async function deleteLead(id: string) {
    if (!confirm("Delete this lead?")) return;
    try {
      const token = await getToken();
      await attribixFetch("/api/standalone/leads/update", token, {
        method: "POST",
        body: JSON.stringify({ action: "delete", id }),
      });
      setLeads(leads.filter((l: any) => l.id !== id));
    } catch (e) { console.error(e); }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Lead Center</h1>
        <button onClick={() => setShowCreate(!showCreate)} className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm hover:opacity-90">
          + Add Lead
        </button>
      </div>

      {showCreate && (
        <div className="rounded-xl border bg-white p-5 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="Email *" value={newLead.email} onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
              className="rounded-lg border px-3 py-2 text-sm" />
            <input placeholder="First name" value={newLead.firstName} onChange={(e) => setNewLead({ ...newLead, firstName: e.target.value })}
              className="rounded-lg border px-3 py-2 text-sm" />
            <input placeholder="Last name" value={newLead.lastName} onChange={(e) => setNewLead({ ...newLead, lastName: e.target.value })}
              className="rounded-lg border px-3 py-2 text-sm" />
            <input placeholder="Phone" value={newLead.phone} onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
              className="rounded-lg border px-3 py-2 text-sm" />
            <input placeholder="Company" value={newLead.company} onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
              className="rounded-lg border px-3 py-2 text-sm" />
            <select value={newLead.source} onChange={(e) => setNewLead({ ...newLead, source: e.target.value })}
              className="rounded-lg border px-3 py-2 text-sm">
              <option value="manual">Manual</option>
              <option value="contact_form">Contact Form</option>
              <option value="newsletter_signup">Newsletter</option>
              <option value="meta_ad">Meta Ad</option>
              <option value="google_ad">Google Ad</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button onClick={createLead} className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm">Create</button>
            <button onClick={() => setShowCreate(false)} className="px-4 py-2 rounded-lg border text-sm">Cancel</button>
          </div>
        </div>
      )}

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
                  <select value={l.status} onChange={(e) => updateLeadStatus(l.id, e.target.value)}
                    className={`rounded-full px-2 py-0.5 text-xs font-medium border-0 cursor-pointer ${STATUS_COLORS[l.status] || "bg-slate-100 text-slate-500"}`}>
                    {["new", "contacted", "qualified", "converted", "lost"].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3 text-slate-500">{l.source || l.utmSource || "—"}</td>
                <td className="px-4 py-3 text-slate-500">{l.utmCampaign || "—"}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <span className="text-slate-500">{new Date(l.createdAt).toLocaleDateString()}</span>
                  <button onClick={() => deleteLead(l.id)} className="text-slate-300 hover:text-red-500 text-xs ml-2" title="Delete">✕</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
