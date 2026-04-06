"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";

export default function FlowsPage() {
  const { getToken } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const token = await getToken();
      const res = await attribixFetch("/api/standalone/newsletter/flows", token);
      const d = await res.json();
      if (d.ok) setData(d);
    } catch (e) { console.error(e); }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function createFromTemplate(templateId: string) {
    try {
      const token = await getToken();
      await attribixFetch("/api/standalone/newsletter/flows", token, {
        method: "POST", body: JSON.stringify({ action: "create_from_template", templateId }),
      });
      load();
    } catch (e) { console.error(e); }
  }

  async function toggleFlow(id: string) {
    try {
      const token = await getToken();
      await attribixFetch("/api/standalone/newsletter/flows", token, {
        method: "POST", body: JSON.stringify({ action: "toggle", id }),
      });
      load();
    } catch (e) { console.error(e); }
  }

  const templates = data?.templates || [];
  const flows = data?.flows || [];
  const emojis: Record<string, string> = { welcome: "👋", post_purchase: "📦", winback: "💌", abandoned_cart: "🛒", vip: "⭐", birthday: "🎂" };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Automation Flows</h1>

      {/* Templates */}
      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-3">Create from Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((t: any) => (
            <div key={t.id} className="rounded-xl border bg-white p-5 hover:shadow-md transition">
              <div className="text-2xl mb-2">{emojis[t.id] || "📧"}</div>
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{t.description}</p>
              <p className="text-xs text-slate-400 mt-2">{t.steps?.length || 0} emails</p>
              <button onClick={() => createFromTemplate(t.id)}
                className="mt-3 px-4 py-1.5 rounded-lg bg-gray-900 text-white text-sm hover:opacity-90">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Active flows */}
      {flows.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-3">Your Flows</h2>
          <div className="space-y-3">
            {flows.map((f: any) => (
              <div key={f.id} className="rounded-xl border bg-white p-5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{f.name}</h3>
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${f.enabled ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"}`}>
                      {f.enabled ? "Active" : "Paused"}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{f.description} · {f.steps?.length || 0} steps · {f.enrollmentCount || 0} enrolled</p>
                </div>
                <button onClick={() => toggleFlow(f.id)}
                  className={`px-4 py-1.5 rounded-lg text-sm ${f.enabled ? "border hover:bg-slate-50" : "bg-gray-900 text-white hover:opacity-90"}`}>
                  {f.enabled ? "Pause" : "Enable"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && <div className="py-8 text-center text-slate-400">Loading...</div>}
    </div>
  );
}
