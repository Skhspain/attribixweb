"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

export default function NewsletterAnalyticsPage() {
  const { getToken } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const res = await attribixFetch("/api/standalone/newsletter", token);
        const d = await res.json();
        if (d.ok) setData(d);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, []);

  const campaigns = (data?.campaigns || []).filter((c: any) => c.status === "sent");
  const stats = data?.stats || {};

  // Calculate aggregate stats
  const totalSent = campaigns.reduce((s: number, c: any) => s + (c.recipientCount || 0), 0);
  const totalOpens = campaigns.reduce((s: number, c: any) => s + (c.openCount || 0), 0);
  const totalClicks = campaigns.reduce((s: number, c: any) => s + (c.clickCount || 0), 0);
  const totalBounces = campaigns.reduce((s: number, c: any) => s + (c.bounceCount || 0), 0);
  const totalUnsubs = campaigns.reduce((s: number, c: any) => s + (c.unsubCount || 0), 0);
  const avgOpenRate = totalSent > 0 ? Math.round((totalOpens / totalSent) * 100) : 0;
  const avgClickRate = totalSent > 0 ? Math.round((totalClicks / totalSent) * 100) : 0;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Newsletter Analytics</h1>

      {loading && <div className="py-8 text-center text-slate-400">Loading...</div>}

      {!loading && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">Total Sent</div>
              <div className="text-xl font-bold mt-1">{totalSent.toLocaleString()}</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">Avg Open Rate</div>
              <div className="text-xl font-bold mt-1 text-emerald-600">{avgOpenRate}%</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">Avg Click Rate</div>
              <div className="text-xl font-bold mt-1 text-blue-600">{avgClickRate}%</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">Bounces</div>
              <div className="text-xl font-bold mt-1 text-amber-600">{totalBounces}</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">Unsubscribes</div>
              <div className="text-xl font-bold mt-1 text-red-500">{totalUnsubs}</div>
            </div>
          </div>

          <div className="rounded-xl border bg-white overflow-hidden">
            <div className="px-4 py-3 border-b bg-slate-50">
              <h2 className="text-sm font-semibold">Campaign Performance</h2>
            </div>
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Campaign</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Sent</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Delivered</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Opens</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Open %</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Clicks</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Click %</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Unsubs</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Date</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.length === 0 && (
                  <tr><td colSpan={9} className="px-4 py-8 text-center text-slate-400">No sent campaigns yet</td></tr>
                )}
                {campaigns.map((c: any) => {
                  const openRate = c.recipientCount > 0 ? Math.round((c.openCount / c.recipientCount) * 100) : 0;
                  const clickRate = c.recipientCount > 0 ? Math.round((c.clickCount / c.recipientCount) * 100) : 0;
                  return (
                    <tr key={c.id} className="border-b last:border-0 hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium">{c.name}</td>
                      <td className="px-4 py-3 text-right">{c.recipientCount}</td>
                      <td className="px-4 py-3 text-right">{c.deliveredCount || c.recipientCount}</td>
                      <td className="px-4 py-3 text-right">{c.openCount}</td>
                      <td className="px-4 py-3 text-right">
                        <span className={openRate > 20 ? "text-emerald-600" : openRate > 10 ? "text-amber-600" : "text-red-500"}>{openRate}%</span>
                      </td>
                      <td className="px-4 py-3 text-right">{c.clickCount}</td>
                      <td className="px-4 py-3 text-right">
                        <span className={clickRate > 3 ? "text-emerald-600" : clickRate > 1 ? "text-amber-600" : "text-slate-400"}>{clickRate}%</span>
                      </td>
                      <td className="px-4 py-3 text-right">{c.unsubCount || 0}</td>
                      <td className="px-4 py-3 text-slate-500">{c.sentAt ? new Date(c.sentAt).toLocaleDateString() : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-sm font-semibold mb-3">Subscriber Overview</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Active subscribers</span><span className="font-medium text-emerald-600">{stats.subscribed || 0}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Unsubscribed</span><span className="font-medium text-slate-400">{stats.unsubscribed || 0}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Total</span><span className="font-medium">{stats.total || 0}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Campaigns sent</span><span className="font-medium">{campaigns.length}</span></div>
              </div>
            </div>
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-sm font-semibold mb-3">Delivery Health</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Total emails sent</span><span className="font-medium">{totalSent}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Delivered</span><span className="font-medium text-emerald-600">{totalSent - totalBounces}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Bounce rate</span><span className={`font-medium ${totalSent > 0 && (totalBounces / totalSent) > 0.05 ? "text-red-500" : "text-emerald-600"}`}>{totalSent > 0 ? Math.round((totalBounces / totalSent) * 100) : 0}%</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Unsubscribe rate</span><span className="font-medium">{totalSent > 0 ? ((totalUnsubs / totalSent) * 100).toFixed(1) : 0}%</span></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
