"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

export default function SubscribersPage() {
  const { getToken } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("subscribed");
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [adding, setAdding] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const token = await getToken();
      const res = await attribixFetch("/api/standalone/newsletter", token);
      const d = await res.json();
      if (d.ok) setData(d);
    } catch (e) { console.error(e); }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  const subscribers = (data?.subscribers || [])
    .filter((s: any) => {
      if (filter !== "all" && s.status !== filter) return false;
      if (search && !s.email.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

  async function addSubscriber() {
    if (!newEmail) return;
    setAdding(true);
    try {
      const token = await getToken();
      await attribixFetch("/api/standalone/newsletter/update", token, {
        method: "POST",
        body: JSON.stringify({ action: "create-subscriber", email: newEmail, source: "manual" }),
      });
      setNewEmail(""); setShowAdd(false); load();
    } catch (e) { console.error(e); }
    setAdding(false);
  }

  async function unsubscribe(id: string) {
    if (!confirm("Unsubscribe this email?")) return;
    try {
      const token = await getToken();
      await attribixFetch("/api/standalone/newsletter/update", token, {
        method: "POST",
        body: JSON.stringify({ action: "unsubscribe", id }),
      });
      load();
    } catch (e) { console.error(e); }
  }

  const total = data?.subscribers?.length || 0;
  const active = (data?.subscribers || []).filter((s: any) => s.status === "subscribed").length;
  const unsub = total - active;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Subscribers</h1>
        <div className="flex gap-2">
          <button onClick={() => setShowAdd(true)} className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm hover:opacity-90">+ Add Subscriber</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Total</div>
          <div className="text-2xl font-bold mt-1">{loading ? "..." : total}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Active</div>
          <div className="text-2xl font-bold mt-1 text-emerald-600">{loading ? "..." : active}</div>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-xs text-slate-500">Unsubscribed</div>
          <div className="text-2xl font-bold mt-1 text-slate-400">{loading ? "..." : unsub}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 items-center">
        {["all", "subscribed", "unsubscribed"].map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-sm capitalize ${filter === f ? "bg-gray-900 text-white" : "border hover:bg-slate-50"}`}>
            {f}
          </button>
        ))}
        <input type="text" placeholder="Search by email..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="ml-auto px-3 py-1.5 border rounded-lg text-sm w-64" />
      </div>

      {/* Add subscriber modal */}
      {showAdd && (
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold mb-3">Add Subscriber</h3>
          <div className="flex gap-2">
            <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="email@example.com"
              className="flex-1 px-3 py-2 border rounded-lg text-sm" />
            <button onClick={addSubscriber} disabled={adding || !newEmail}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700 disabled:opacity-50">
              {adding ? "Adding..." : "Add"}
            </button>
            <button onClick={() => setShowAdd(false)} className="px-4 py-2 rounded-lg border text-sm">Cancel</button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-xl border bg-white overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b bg-slate-50">
              {["Email", "Source", "Status", "Subscribed", "Actions"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-slate-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
            {!loading && subscribers.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">No subscribers yet</td></tr>}
            {subscribers.slice(0, 200).map((s: any) => (
              <tr key={s.id} className="border-b hover:bg-slate-50">
                <td className="px-4 py-3 font-medium">{s.email}</td>
                <td className="px-4 py-3 text-slate-500 text-xs">{s.source || "—"}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s.status === "subscribed" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                    {s.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs">{new Date(s.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  {s.status === "subscribed" && (
                    <button onClick={() => unsubscribe(s.id)} className="text-xs text-red-500 hover:underline">Unsubscribe</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
