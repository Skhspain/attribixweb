"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useAuth } from "@clerk/nextjs";
import { attribixFetch } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";

declare global { interface Window { unlayer?: any; } }

export default function CampaignEditorPage() {
  const { getToken } = useAuth();
  const params = useParams();
  const router = useRouter();
  const campaignId = params.id as string;
  const editorRef = useRef<HTMLDivElement>(null);

  const [campaign, setCampaign] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [unlayerReady, setUnlayerReady] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sendError, setSendError] = useState("");
  const [recipientFilter, setRecipientFilter] = useState<"all" | "source" | "status">("all");
  const [filterValue, setFilterValue] = useState("");
  const [recipientCount, setRecipientCount] = useState<number | null>(null);
  const [subscriberSources, setSubscriberSources] = useState<string[]>([]);

  // Load campaign data
  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const res = await attribixFetch(`/api/standalone/newsletter/campaign/${campaignId}`, token);
        const data = await res.json();
        if (data.ok && data.campaign) {
          setCampaign(data.campaign);
          setName(data.campaign.name || "");
          setSubject(data.campaign.subject || "");
          setPreviewText(data.campaign.previewText || "");
        }
      } catch (e) { console.error(e); }
      setLoading(false);

      // Fetch subscriber count + sources
      try {
        const token2 = await getToken();
        const subRes = await attribixFetch("/api/standalone/newsletter", token2);
        const subData = await subRes.json();
        setRecipientCount(subData.stats?.subscribed || 0);
        const sources = [...new Set((subData.subscribers || []).map((s: any) => s.source || s.utmSource).filter(Boolean))] as string[];
        setSubscriberSources(sources);
      } catch (e) { console.error(e); }
    }
    load();
  }, [campaignId]);

  // Load Unlayer editor
  useEffect(() => {
    if (loading || !campaign) return;
    if (typeof window === "undefined") return;

    function initUnlayer() {
      if (!editorRef.current || !window.unlayer) return;
      window.unlayer.init({
        id: "unlayer-editor",
        displayMode: "email",
        locale: "en-US",
        appearance: {
          theme: "light",
          panels: { tools: { dock: "right", collapsible: true, defaultCollapsed: true } },
        },
        customCSS: [
          `.blockbuilder-branding { display: none !important; }`,
          `.blockbuilder-footer { display: none !important; }`,
          `body { overflow-x: hidden !important; }`,
          `.blockbuilder-content-tools { overflow: hidden !important; }`,
          `.blockbuilder-preferences { width: 0 !important; min-width: 0 !important; overflow: hidden !important; transition: width 0.3s !important; }`,
          `.blockbuilder-preferences:hover, .blockbuilder-preferences:focus-within, .blockbuilder-preferences.active { width: 360px !important; min-width: 360px !important; }`,
        ],
        features: {
          textEditor: { tables: true, emojis: true },
          preview: true,
          undoRedo: true,
        },
        tools: {
          button: { enabled: true },
          image: { enabled: true },
          text: { enabled: true },
          divider: { enabled: true },
          heading: { enabled: true },
          html: { enabled: true },
          social: { enabled: true },
          video: { enabled: true },
        },
      });

      // Load existing design or HTML template — replace placeholders with real values
      window.unlayer.addEventListener("editor:ready", () => {
        const replacePlaceholders = (str: string) => str
          .replace(/\{\{shop_url\}\}/gi, "https://yourstore.com")
          .replace(/\{\{shop\}\}/gi, "Your Store")
          .replace(/\{\{first_name\}\}/gi, "Customer")
          .replace(/\{\{name\}\}/gi, "Customer")
          .replace(/\{\{email\}\}/gi, "customer@example.com");

        if (campaign.designJson) {
          try {
            const json = typeof campaign.designJson === "string" ? campaign.designJson : JSON.stringify(campaign.designJson);
            const design = JSON.parse(replacePlaceholders(json));
            window.unlayer.loadDesign(design);
          } catch (e) { console.error("Failed to load design JSON:", e); }
        } else if (campaign.htmlContent) {
          // Load HTML in classic mode — complex table HTML can't auto-convert
          window.unlayer.loadDesign({ html: replacePlaceholders(campaign.htmlContent), classic: true });
        }
        setUnlayerReady(true);
      });
    }

    if (window.unlayer) { initUnlayer(); return; }
    const script = document.createElement("script");
    script.src = "https://editor.unlayer.com/embed.js";
    script.async = true;
    script.onload = () => initUnlayer();
    document.head.appendChild(script);
  }, [loading, campaign]);

  const handleSave = useCallback(async () => {
    setSaveStatus("saving");
    try {
      const token = await getToken();

      const doSave = async (htmlContent: string, designJson: any) => {
        const res = await attribixFetch("/api/standalone/newsletter/update", token, {
          method: "POST",
          body: JSON.stringify({
            action: "update-campaign",
            id: campaignId,
            name, subject, previewText,
            htmlContent, designJson: designJson ? JSON.stringify(designJson) : null,
          }),
        });
        const result = await res.json();
        setSaveStatus(result.ok ? "saved" : "error");
        if (result.ok) setTimeout(() => setSaveStatus("idle"), 2000);
      };

      if (window.unlayer && unlayerReady) {
        window.unlayer.exportHtml(async (data: { design: object; html: string }) => {
          await doSave(data.html, data.design);
        });
      } else {
        await doSave("", null);
      }
    } catch (e) {
      console.error(e);
      setSaveStatus("error");
    }
  }, [campaignId, name, subject, previewText, unlayerReady]);

  const handleSend = useCallback(async () => {
    setSendStatus("sending");
    setSendError("");
    try {
      const token = await getToken();
      // Save first
      await handleSave();
      // Then send
      const res = await attribixFetch("/api/standalone/newsletter/update", token, {
        method: "POST",
        body: JSON.stringify({ action: "update-campaign", id: campaignId, status: "sending" }),
      });
      const result = await res.json();
      if (result.ok) {
        setSendStatus("sent");
        setTimeout(() => router.push("/analytics/newsletter/analytics"), 2000);
      } else {
        setSendStatus("error");
        setSendError(result.error || "Failed to send");
      }
    } catch (e) {
      setSendStatus("error");
      setSendError("Network error");
    }
  }, [campaignId, handleSave]);

  if (loading) return <div className="p-8 text-slate-400">Loading newsletter...</div>;
  if (!campaign) return <div className="p-8 text-red-500">Newsletter not found</div>;

  const isSent = campaign.status === "sent" || campaign.status === "sending";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => router.push("/analytics/newsletter")} className="text-sm text-slate-500 hover:text-slate-700 mb-2">
            &larr; Back to Newsletter
          </button>
          <h1 className="text-2xl font-bold">Edit Newsletter</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={handleSave} disabled={saveStatus === "saving" || isSent}
            className="px-4 py-2 rounded-lg border text-sm hover:bg-slate-50 disabled:opacity-50">
            {saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved ✓" : "Save Draft"}
          </button>
          {!isSent && (
            <button onClick={handleSend} disabled={sendStatus === "sending" || !subject}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700 disabled:opacity-50">
              {sendStatus === "sending" ? "Sending..." : sendStatus === "sent" ? "Sent ✓" : "Send Newsletter"}
            </button>
          )}
          {isSent && <span className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-600 text-sm font-medium">Sent</span>}
        </div>
      </div>

      {sendError && <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{sendError}</div>}

      {/* Campaign details */}
      <div className="rounded-xl border bg-white p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs text-slate-500 block mb-1">Newsletter Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} disabled={isSent}
            className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Subject Line *</label>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} disabled={isSent}
            placeholder="Your email subject..."
            className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Preview Text</label>
          <input value={previewText} onChange={(e) => setPreviewText(e.target.value)} disabled={isSent}
            placeholder="Text shown in inbox preview..."
            className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
      </div>

      {/* Recipient targeting */}
      <div className="rounded-xl border bg-white p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Recipients</h2>
          <span className="text-sm text-slate-500">
            {recipientFilter === "all"
              ? `${recipientCount ?? "..."} subscribed`
              : `Filtered — ${recipientFilter}: ${filterValue}`}
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <select value={recipientFilter} onChange={(e) => { setRecipientFilter(e.target.value as any); setFilterValue(""); }}
            disabled={isSent} className="rounded-lg border px-3 py-2 text-sm">
            <option value="all">All subscribers</option>
            <option value="source">By source</option>
            <option value="status">By status</option>
          </select>
          {recipientFilter === "source" && (
            <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}
              disabled={isSent} className="rounded-lg border px-3 py-2 text-sm">
              <option value="">Select source...</option>
              {subscriberSources.map((s) => <option key={s} value={s}>{s}</option>)}
              <option value="post_purchase">Post-purchase</option>
              <option value="popup">Popup</option>
              <option value="manual">Manual</option>
              <option value="import">Import</option>
            </select>
          )}
          {recipientFilter === "status" && (
            <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}
              disabled={isSent} className="rounded-lg border px-3 py-2 text-sm">
              <option value="">Select status...</option>
              <option value="subscribed">Subscribed</option>
              <option value="unsubscribed">Unsubscribed</option>
            </select>
          )}
        </div>
      </div>

      {/* Hide Unlayer branding + fix scroll */}
      <style dangerouslySetInnerHTML={{ __html: `
        #unlayer-editor iframe { max-width: 100% !important; width: 100% !important; }
        #unlayer-editor > div { overflow: hidden !important; }
        .powered-by-unlayer, [class*="powered-by"] { display: none !important; visibility: hidden !important; }
      `}} />

      {/* Unlayer email editor */}
      <div className="rounded-xl border bg-white overflow-hidden">
        <div className="px-4 py-3 border-b bg-slate-50 flex items-center justify-between">
          <span className="text-sm font-medium">Email Designer</span>
          {!unlayerReady && <span className="text-xs text-slate-400">Loading editor...</span>}
        </div>
        <div ref={editorRef} id="unlayer-editor" style={{ minHeight: "calc(100vh - 300px)", height: "auto" }} />
      </div>
    </div>
  );
}
