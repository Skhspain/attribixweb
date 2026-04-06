"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { attribixFetch } from "@/lib/api";

type Template = {
  id: string; name: string; category: string;
  description: string; primaryColor: string; html: string;
};

const CARD_W = 200;
const CARD_H = 170;
const IFRAME_W = 600;
const SCALE = CARD_W / IFRAME_W;
const IFRAME_H = Math.round(CARD_H / SCALE);

export default function TemplateGalleryPage() {
  const { getToken } = useAuth();
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState<string>("blank");
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const res = await attribixFetch("/api/standalone/newsletter/templates", token);
        const data = await res.json();
        if (data.ok) {
          setTemplates(data.templates || []);
          setCategories(data.categories || ["All"]);
        }
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, []);

  const filtered = activeCategory === "All"
    ? templates
    : templates.filter((t) => t.category === activeCategory);

  const selectedTemplate = selectedId === "blank" ? null : templates.find((t) => t.id === selectedId);

  async function createFromTemplate() {
    setCreating(true);
    try {
      const token = await getToken();
      const res = await attribixFetch("/api/standalone/newsletter/update", token, {
        method: "POST",
        body: JSON.stringify({
          action: "create-campaign",
          name: selectedTemplate?.name || "Untitled campaign",
          subject: "",
          htmlContent: selectedTemplate?.html || "",
        }),
      });
      const data = await res.json();
      if (data.ok && data.campaign?.id) {
        router.push(`/analytics/newsletter/campaign/${data.campaign.id}`);
      }
    } catch (e) { console.error(e); }
    setCreating(false);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white border-b px-6 flex items-center justify-between h-[60px]">
        <div className="flex items-center gap-4">
          <a href="/analytics/newsletter" className="text-sm text-slate-500 hover:text-slate-700">← Campaigns</a>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-semibold">Choose a template</span>
          <span className="text-sm text-slate-400">— {templates.length + 1} templates</span>
        </div>
        <div className="flex items-center gap-3">
          {selectedId && (
            <span className="text-sm text-slate-500">
              {selectedId === "blank" ? "Blank selected" : `Selected: ${selectedTemplate?.name}`}
            </span>
          )}
          <button onClick={createFromTemplate} disabled={!selectedId || creating}
            className="px-6 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed">
            {creating ? "Creating..." : "Next →"}
          </button>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-8">
        {/* Category tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat ? "bg-gray-900 text-white" : "bg-white border hover:bg-slate-50"}`}>
              {cat}
            </button>
          ))}
        </div>

        {loading && <div className="py-12 text-center text-slate-400">Loading templates...</div>}

        {/* Template grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Blank template */}
          <div
            onClick={() => setSelectedId("blank")}
            className={`cursor-pointer rounded-xl border-2 overflow-hidden transition hover:shadow-md ${selectedId === "blank" ? "border-emerald-500 shadow-md" : "border-slate-200"}`}
          >
            <div className="bg-slate-100 flex items-center justify-center" style={{ height: CARD_H }}>
              <span className="text-3xl text-slate-300">+</span>
            </div>
            <div className="p-3">
              <div className="text-sm font-semibold">Blank</div>
              <div className="text-xs text-slate-400">Start from scratch</div>
            </div>
          </div>

          {filtered.map((t) => (
            <div
              key={t.id}
              onClick={() => setSelectedId(t.id)}
              className={`cursor-pointer rounded-xl border-2 overflow-hidden transition hover:shadow-md ${selectedId === t.id ? "border-emerald-500 shadow-md" : "border-slate-200"}`}
            >
              <div className="overflow-hidden relative bg-white" style={{ height: CARD_H }}>
                <iframe
                  srcDoc={t.html}
                  sandbox=""
                  scrolling="no"
                  style={{
                    width: IFRAME_W,
                    height: IFRAME_H,
                    transform: `scale(${SCALE})`,
                    transformOrigin: "top left",
                    pointerEvents: "none",
                    border: "none",
                  }}
                />
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-slate-400">{t.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
