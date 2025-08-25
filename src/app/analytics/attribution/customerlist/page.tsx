"use client";

import React from "react";

/** ---------------------------------------------------------
 *  DEMO DATA (replace with your real data source)
 *  --------------------------------------------------------- */
type Customer = {
  id: string;
  name: string;          // "Alex Morgan"
  email?: string;        // "alex@example.com"
  phone?: string;        // "+1 (415) 555-0101"
  country?: string;      // "US", "NO", ...
  orderId: string;       // "o-1001"
  value: number;         // 240
  attributed: string;    // "Google $240.00"
  path: string;          // "Meta → Email → Google"
};

const ALL_CUSTOMERS: Customer[] = [
  {
    id: "c001",
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "+1 (415) 555-0101",
    country: "US",
    orderId: "o-1001",
    value: 240,
    attributed: "Google $240.00",
    path: "Meta → Email → Google",
  },
  {
    id: "c002",
    name: "Sam Woods",
    email: "sam.woods@example.com",
    phone: "+47 998 88 777",
    country: "NO",
    orderId: "o-1002",
    value: 120,
    attributed: "Direct $120.00",
    path: "TikTok → Direct",
  },
  {
    id: "c003",
    name: "Jamie Lee",
    email: "jamie.lee@example.com",
    phone: "+44 (0) 7700 900000",
    country: "GB",
    orderId: "o-1003",
    value: 480,
    attributed: "Meta $480.00",
    path: "Google → Meta → Meta",
  },
  {
    id: "c004",
    name: "Taylor Reed",
    email: "taylor.reed@example.com",
    phone: "+34 600 123 456",
    country: "ES",
    orderId: "o-1004",
    value: 90,
    attributed: "Direct $90.00",
    path: "Organic → Referral → Direct",
  },
  {
    id: "c005",
    name: "Chris Diaz",
    email: "chris.diaz@example.com",
    phone: "+1-415-555-1234",
    country: "US",
    orderId: "o-1005",
    value: 320,
    attributed: "Direct $320.00",
    path: "Google → Email → Google → Direct",
  },
];

/** ---------------------------------------------------------
 *  UTILS: Normalization, SHA-256, CSV download
 *  --------------------------------------------------------- */

// Normalize per Google/Meta guidance: trim, lowercase, strip spaces for email.
// For phone: keep digits and leading +, try to get E.164-like (+[country][national]).
function normalizeEmail(email?: string) {
  if (!email) return "";
  return email.trim().toLowerCase();
}

function normalizePhone(phone?: string) {
  if (!phone) return "";
  const cleaned = phone.replace(/[^+\d]/g, ""); // keep + and digits
  return cleaned.startsWith("+") ? cleaned : cleaned; // best effort
}

function toFirstLast(name?: string) {
  if (!name) return { fn: "", ln: "" };
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return { fn: parts[0], ln: "" };
  return { fn: parts.slice(0, -1).join(" "), ln: parts.slice(-1)[0] };
}

// Browser-native SHA-256 -> hex
async function sha256Hex(input: string) {
  const enc = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", enc);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function download(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** ---------------------------------------------------------
 *  EXPORTERS
 *  --------------------------------------------------------- */

// Google Ads Customer Match CSV
// Minimal schema that works well: hashed_email,hashed_phone,country
async function exportGoogleCSV(rows: Customer[]) {
  const header = ["hashed_email", "hashed_phone", "country"];
  const lines: string[] = [header.join(",")];

  for (const r of rows) {
    const email = normalizeEmail(r.email);
    const phone = normalizePhone(r.phone);
    const country = (r.country || "").toUpperCase();

    const hemail = email ? await sha256Hex(email) : "";
    const hphone = phone ? await sha256Hex(phone) : "";

    lines.push([hemail, hphone, country].join(","));
  }

  download(`google_customer_match_${new Date().toISOString().slice(0,10)}.csv`, lines.join("\n"));
}

// Meta Custom Audiences CSV
// Recommended fields: email, phone, fn, ln, country — all SHA-256 hashed.
async function exportMetaCSV(rows: Customer[]) {
  const header = ["email", "phone", "fn", "ln", "country"]; // all hashed except country per spec
  const lines: string[] = [header.join(",")];

  for (const r of rows) {
    const email = normalizeEmail(r.email);
    const phone = normalizePhone(r.phone);
    const { fn, ln } = toFirstLast(r.name);
    const country = (r.country || "").toUpperCase();

    const hemail = email ? await sha256Hex(email) : "";
    const hphone = phone ? await sha256Hex(phone) : "";
    const hfn = fn ? await sha256Hex(fn.toLowerCase()) : "";
    const hln = ln ? await sha256Hex(ln.toLowerCase()) : "";

    lines.push([hemail, hphone, hfn, hln, country].join(","));
  }

  download(`meta_custom_audience_${new Date().toISOString().slice(0,10)}.csv`, lines.join("\n"));
}

// Raw attribution CSV (unhashed)
function exportAttributionCSV(rows: Customer[]) {
  const header = ["id", "name", "email", "phone", "country", "orderId", "value", "attributed", "path"];
  const lines = [header.join(",")];
  for (const r of rows) {
    lines.push(
      [
        r.id,
        r.name,
        r.email || "",
        r.phone || "",
        r.country || "",
        r.orderId,
        r.value.toFixed(2),
        r.attributed,
        `"${r.path}"`,
      ].join(",")
    );
  }
  download(`customer_attribution_${new Date().toISOString().slice(0,10)}.csv`, lines.join("\n"));
}

/** ---------------------------------------------------------
 *  PAGE
 *  --------------------------------------------------------- */

const TABS = ["Last-Click", "First-Click", "Linear", "Time-Decay"] as const;
type Tab = typeof TABS[number];

export default function CustomerListPage() {
  const [tab, setTab] = React.useState<Tab>("Last-Click");
  const [query, setQuery] = React.useState("");
  const [rows] = React.useState<Customer[]>(ALL_CUSTOMERS);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
      [r.name, r.email, r.phone, r.orderId, r.id, r.path].some((v) =>
        (v || "").toString().toLowerCase().includes(q)
      )
    );
  }, [rows, query]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customer List</h1>

        <div className="flex gap-2">
          <button
            className="px-3 py-2 rounded-md border bg-white hover:bg-slate-50 text-sm"
            onClick={() => exportGoogleCSV(filtered)}
            title="Export hashed emails/phones for Google Ads Customer Match"
          >
            Export → Google Ads (Customer Match)
          </button>

          <button
            className="px-3 py-2 rounded-md border bg-white hover:bg-slate-50 text-sm"
            onClick={() => exportMetaCSV(filtered)}
            title="Export hashed emails/phones + names for Meta Custom Audiences"
          >
            Export → Meta (Custom Audiences)
          </button>

          <button
            className="px-3 py-2 rounded-md border bg-white hover:bg-slate-50 text-sm"
            onClick={() => exportAttributionCSV(filtered)}
            title="Export the visible table as raw CSV"
          >
            Export → Raw CSV
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-md text-sm border ${
              tab === t ? "bg-slate-900 text-white border-slate-900" : "bg-white hover:bg-slate-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          {filtered.length} customer{filtered.length === 1 ? "" : "s"} • Model: <span className="font-medium">{tab}</span>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search customers or order IDs..."
          className="w-80 px-3 py-2 rounded-md border text-sm"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Customer</th>
              <th className="text-left px-4 py-3 font-medium">Order</th>
              <th className="text-left px-4 py-3 font-medium">Value</th>
              <th className="text-left px-4 py-3 font-medium">Attributed Split</th>
              <th className="text-left px-4 py-3 font-medium">Path</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-slate-500">ID: {r.id}</div>
                  <div className="text-xs text-slate-500">{r.email || "—"} · {r.phone || "—"} {r.country ? `· ${r.country}` : ""}</div>
                </td>
                <td className="px-4 py-3">{r.orderId}</td>
                <td className="px-4 py-3">${r.value.toFixed(2)}</td>
                <td className="px-4 py-3">{r.attributed}</td>
                <td className="px-4 py-3">{r.path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* small legal/help */}
      <p className="text-xs text-slate-500">
        Exports hash emails/phones with SHA‑256 in the browser and apply basic normalization (lowercase email, E.164‑style phone).
        Always ensure you have consent and comply with Google/Meta policies before uploading customer lists.
      </p>
    </div>
  );
}
