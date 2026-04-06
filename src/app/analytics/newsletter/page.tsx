"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

export default function NewsletterPage() {
  const { getToken } = useAuth();
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [tab, setTab] = React.useState<"subscribers" | "campaigns">("subscribers");

  React.useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const res = await attribixFetch("/api/standalone/newsletter", token);
        const json = await res.json();
        if (json.ok) setData(json);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, []);

  const stats = data?.stats || { subscribed: 0, unsubscribed: 0, total: 0 };
  const subscribers = data?.subscribers || [];
  const campaigns = data?.campaigns || [];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Newsletter</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Subscribers</div>
          <div className="text-2xl font-bold mt-1 text-emerald-600">{stats.subscribed}</div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Unsubscribed</div>
          <div className="text-2xl font-bold mt-1 text-slate-400">{stats.unsubscribed}</div>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <div className="text-xs text-slate-500">Campaigns Sent</div>
          <div className="text-2xl font-bold mt-1">{campaigns.filter((c: any) => c.status === "sent").length}</div>
        </div>
      </div>

      <div className="flex gap-2 border-b">
        {(["subscribers", "campaigns"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${tab === t ? "border-gray-900 text-gray-900" : "border-transparent text-slate-500 hover:text-slate-700"}`}>
            {t === "subscribers" ? "Subscribers" : "Campaigns"}
          </button>
        ))}
      </div>

      {loading && <div className="text-center py-8 text-slate-400">Loading...</div>}

      {!loading && tab === "subscribers" && (
        <div className="rounded-xl border bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Email</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Name</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Source</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">No subscribers yet</td></tr>}
              {subscribers.map((s: any) => (
                <tr key={s.id} className="border-b last:border-0 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">{s.email}</td>
                  <td className="px-4 py-3">{[s.firstName, s.lastName].filter(Boolean).join(" ") || "—"}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${s.status === "subscribed" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">{s.source || s.utmSource || "—"}</td>
                  <td className="px-4 py-3 text-slate-500">{new Date(s.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && tab === "campaigns" && (
        <div className="rounded-xl border bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Campaign</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Recipients</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Opens</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Clicks</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Sent</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.length === 0 && <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">No campaigns yet</td></tr>}
              {campaigns.map((c: any) => (
                <tr key={c.id} className="border-b last:border-0 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      c.status === "sent" ? "bg-emerald-50 text-emerald-600" :
                      c.status === "draft" ? "bg-slate-100 text-slate-500" :
                      c.status === "sending" ? "bg-blue-50 text-blue-600" :
                      "bg-slate-100 text-slate-500"
                    }`}>{c.status}</span>
                  </td>
                  <td className="px-4 py-3 text-right">{c.recipientCount}</td>
                  <td className="px-4 py-3 text-right">{c.openCount}</td>
                  <td className="px-4 py-3 text-right">{c.clickCount}</td>
                  <td className="px-4 py-3 text-slate-500">{c.sentAt ? new Date(c.sentAt).toLocaleDateString() : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
