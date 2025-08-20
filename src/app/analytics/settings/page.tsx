// src/app/analytics/settings/page.tsx
"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  // Basic state (stub). Replace with loader/fetch and real save.
  const [form, setForm] = useState({
    platform: "Shopify",
    storeUrl: "",
    currency: "USD",
    timezone: "UTC",
    dataRegion: "EU",

    // connections
    metaConnected: false,
    googleConnected: false,
    tiktokConnected: false,

    // client ids
    metaPixelId: "",
    gtagId: "",
    tiktokPixelId: "",
    autoInject: true,

    // server-side
    capiMeta: true,
    capiMetaToken: "",
    capiMetaTestCode: "",
    capiGoogle: true,
    capiGoogleToken: "",
    capiTikTok: false,
    capiTikTokToken: "",
    matchEmail: true,
    matchPhone: true,
    dedupeMode: "event_id",

    // attribution
    model: "last",
    lookbackClickDays: 7,
    lookbackViewDays: 1,
    revenueBasis: "confirmed",
    roasDenominator: "adspend",

    // utm / channels
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign",
    channelRules: "",
    excludeDomains: "paypal.com\nfacebook.com",

    // orders
    includeTaxes: false,
    includeShipping: false,
    orderStatuses: "paid,fulfilled",
    refundHandling: "when_processed",
    currencyNormalize: true,

    // privacy
    consentMode: true,
    tcfPassthrough: true,
    ipAnonymize: true,
    retentionMonths: 13,

    // notifications
    notifyEmail: "",
    slackWebhook: "",
    alerts: {
      trackingFailure: true,
      tokenExpiry: true,
      highCPA: false,
      lowROAS: false,
      dailySummary: true,
    },

    // advanced
    debugLogging: false,
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: POST to /api/settings
    console.log("Saving settings", form);
    alert("Settings saved (mock). Wire this to your API.");
  }

  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Settings</h1>

      <form onSubmit={onSubmit} className="space-y-8">
        <Section title="Store & Basics">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select
              label="Platform"
              value={form.platform}
              onChange={(v) => update("platform", v)}
              options={["Shopify", "WordPress (WooCommerce)"]}
            />
            <Input label="Store URL" value={form.storeUrl} onChange={(v) => update("storeUrl", v)} placeholder="https://yourstore.com" />
            <Select label="Currency" value={form.currency} onChange={(v) => update("currency", v)} options={["USD","EUR","NOK","GBP"]} />
            <Select label="Timezone" value={form.timezone} onChange={(v) => update("timezone", v)} options={["UTC","Europe/Oslo","Europe/Madrid","America/New_York"]} />
            <Select label="Data Region" value={form.dataRegion} onChange={(v) => update("dataRegion", v)} options={["EU","US"]} />
          </div>
        </Section>

        <Section title="Connections">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ConnectCard
              name="Meta"
              connected={form.metaConnected}
              onConnect={() => update("metaConnected", true)}
              onDisconnect={() => update("metaConnected", false)}
            />
            <ConnectCard
              name="Google"
              connected={form.googleConnected}
              onConnect={() => update("googleConnected", true)}
              onDisconnect={() => update("googleConnected", false)}
            />
            <ConnectCard
              name="TikTok"
              connected={form.tiktokConnected}
              onConnect={() => update("tiktokConnected", true)}
              onDisconnect={() => update("tiktokConnected", false)}
            />
          </div>
        </Section>

        <Section title="Tracking IDs (Client‑side)">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Meta Pixel ID" value={form.metaPixelId} onChange={(v) => update("metaPixelId", v)} placeholder="1234567890" />
            <Input label="Google Tag ID (G‑/AW‑)" value={form.gtagId} onChange={(v) => update("gtagId", v)} placeholder="G-XXXX / AW-XXXX" />
            <Input label="TikTok Pixel ID" value={form.tiktokPixelId} onChange={(v) => update("tiktokPixelId", v)} placeholder="ABCDEFG" />
            <Toggle label="Auto‑inject on storefront" value={form.autoInject} onChange={(v) => update("autoInject", v)} />
          </div>
        </Section>

        <Section title="Server‑Side (CAPI)">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Toggle label="Meta CAPI" value={form.capiMeta} onChange={(v) => update("capiMeta", v)} />
            <Input label="Meta Access Token" value={form.capiMetaToken} onChange={(v) => update("capiMetaToken", v)} />
            <Input label="Meta Test Event Code" value={form.capiMetaTestCode} onChange={(v) => update("capiMetaTestCode", v)} />

            <Toggle label="Google Server‑Side" value={form.capiGoogle} onChange={(v) => update("capiGoogle", v)} />
            <Input label="Google API Token" value={form.capiGoogleToken} onChange={(v) => update("capiGoogleToken", v)} />

            <Toggle label="TikTok Events API" value={form.capiTikTok} onChange={(v) => update("capiTikTok", v)} />
            <Input label="TikTok API Token" value={form.capiTikTokToken} onChange={(v) => update("capiTikTokToken", v)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Toggle label="Match: Email (hashed)" value={form.matchEmail} onChange={(v) => update("matchEmail", v)} />
            <Toggle label="Match: Phone (hashed)" value={form.matchPhone} onChange={(v) => update("matchPhone", v)} />
            <Select label="Deduplication" value={form.dedupeMode} onChange={(v) => update("dedupeMode", v)} options={["event_id","external_id"]} />
          </div>
        </Section>

        <Section title="Attribution Defaults">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Select label="Model" value={form.model} onChange={(v) => update("model", v)} options={["last","first","linear","timeDecay","position(40‑20‑40)"]} />
            <Input type="number" label="Click Lookback (days)" value={String(form.lookbackClickDays)} onChange={(v) => update("lookbackClickDays", Number(v))} />
            <Input type="number" label="View Lookback (days)" value={String(form.lookbackViewDays)} onChange={(v) => update("lookbackViewDays", Number(v))} />
            <Select label="Revenue Basis" value={form.revenueBasis} onChange={(v) => update("revenueBasis", v)} options={["gross","net","confirmed"]} />
            <Select label="ROAS Denominator" value={form.roasDenominator} onChange={(v) => update("roasDenominator", v)} options={["adspend","adspend+fees"]} />
          </div>
        </Section>

        <Section title="UTM & Channel Rules">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Input label="utm_source key" value={form.utmSource} onChange={(v) => update("utmSource", v)} />
            <Input label="utm_medium key" value={form.utmMedium} onChange={(v) => update("utmMedium", v)} />
            <Input label="utm_campaign key" value={form.utmCampaign} onChange={(v) => update("utmCampaign", v)} />
            <Textarea label="Custom Channel Rules (one per line, pattern => channel)" value={form.channelRules} onChange={(v) => update("channelRules", v)} placeholder="source:facebook => Meta\nmedium:cpc => Paid Search" />
            <Textarea label="Exclude Referrer Domains" value={form.excludeDomains} onChange={(v) => update("excludeDomains", v)} />
          </div>
        </Section>

        <Section title="Orders & Revenue">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input label="Include Statuses" value={form.orderStatuses} onChange={(v) => update("orderStatuses", v)} placeholder="paid, fulfilled" />
            <Select label="Refund Handling" value={form.refundHandling} onChange={(v) => update("refundHandling", v)} options={["immediate","when_processed"]} />
            <Toggle label="Include Taxes" value={form.includeTaxes} onChange={(v) => update("includeTaxes", v)} />
            <Toggle label="Include Shipping" value={form.includeShipping} onChange={(v) => update("includeShipping", v)} />
            <Toggle label="Normalize Multi‑currency" value={form.currencyNormalize} onChange={(v) => update("currencyNormalize", v)} />
          </div>
        </Section>

        <Section title="Privacy & Consent">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Toggle label="Google Consent Mode v2" value={form.consentMode} onChange={(v) => update("consentMode", v)} />
            <Toggle label="TCF String Pass‑through" value={form.tcfPassthrough} onChange={(v) => update("tcfPassthrough", v)} />
            <Toggle label="IP Anonymization" value={form.ipAnonymize} onChange={(v) => update("ipAnonymize", v)} />
            <Input type="number" label="Data Retention (months)" value={String(form.retentionMonths)} onChange={(v) => update("retentionMonths", Number(v))} />
          </div>
        </Section>

        <Section title="Notifications">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Alert Email(s)" value={form.notifyEmail} onChange={(v) => update("notifyEmail", v)} placeholder="alerts@yourco.com" />
            <Input label="Slack Webhook" value={form.slackWebhook} onChange={(v) => update("slackWebhook", v)} />
            <div className="grid grid-cols-2 gap-3">
              <Toggle label="Tracking Failures" value={form.alerts.trackingFailure} onChange={(v) => setForm(f => ({...f, alerts: {...f.alerts, trackingFailure: v}}))} />
              <Toggle label="Token Expiry" value={form.alerts.tokenExpiry} onChange={(v) => setForm(f => ({...f, alerts: {...f.alerts, tokenExpiry: v}}))} />
              <Toggle label="High CPA" value={form.alerts.highCPA} onChange={(v) => setForm(f => ({...f, alerts: {...f.alerts, highCPA: v}}))} />
              <Toggle label="Low ROAS" value={form.alerts.lowROAS} onChange={(v) => setForm(f => ({...f, alerts: {...f.alerts, lowROAS: v}}))} />
              <Toggle label="Daily Summary" value={form.alerts.dailySummary} onChange={(v) => setForm(f => ({...f, alerts: {...f.alerts, dailySummary: v}}))} />
            </div>
          </div>
        </Section>

        <Section title="Advanced / Debug">
          <Toggle label="Enable Debug Logging" value={form.debugLogging} onChange={(v) => update("debugLogging", v)} />
          <p className="mt-2 text-xs text-gray-500">Use only for troubleshooting; may increase log volume.</p>
        </Section>

        <div className="flex items-center gap-3">
          <button type="submit" className="px-5 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90">Save Settings</button>
          <span className="text-xs text-gray-500">These settings apply to your storefront and server‑side tracking.</span>
        </div>
      </form>
    </>
  );
}

/* ---------- UI helpers (atoms) ---------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-4">
      <h2 className="text-sm font-semibold text-gray-700 mb-3">{title}</h2>
      {children}
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs text-gray-600">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs text-gray-600">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs text-gray-600">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2">
      <span className="text-sm text-gray-700">{label}</span>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`h-6 w-11 rounded-full transition ${
          value ? "bg-gray-900" : "bg-gray-300"
        } relative`}
        aria-pressed={value}
      >
        <span
          className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition ${
            value ? "translate-x-5" : ""
          }`}
        />
      </button>
    </label>
  );
}

function ConnectCard({
  name,
  connected,
  onConnect,
  onDisconnect,
}: {
  name: "Meta" | "Google" | "TikTok";
  connected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 flex items-center justify-between">
      <div>
        <div className="text-sm font-semibold text-gray-900">{name}</div>
        <div className={`text-xs mt-1 ${connected ? "text-emerald-600" : "text-gray-500"}`}>
          {connected ? "Connected" : "Not connected"}
        </div>
      </div>
      {connected ? (
        <button onClick={onDisconnect} type="button" className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
          Disconnect
        </button>
      ) : (
        <button onClick={onConnect} type="button" className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90">
          Connect
        </button>
      )}
    </div>
  );
}
