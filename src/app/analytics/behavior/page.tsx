"use client";

import * as React from "react";

/* Demo data */
const steps = [
  {
    label: "1st page",
    pages: [
      { title: "High-visibility & protection", path: "/highvisibility-andprotection", share: 100, visits: 767 },
      { title: "Hi-vis hoodie", path: "/hoodie", share: 24, visits: 186 },
      { title: "Homepage", path: "/", share: 17, visits: 134 },
      { title: "Body-camera vest", path: "/body-cam", share: 14, visits: 106 },
      { title: "Dash cam dual-HD", path: "/dashcam", share: 11, visits: 81 },
    ],
  },
  {
    label: "2nd page",
    pages: [
      { title: "Hi-vis hoodie (PDP)", path: "/product-page/hi-vis-hoodie", share: 100, visits: 144 },
      { title: "Reflective stripes (PDP)", path: "/product-page/reflective-stripes", share: 52, visits: 75 },
      { title: "Reflective jacket (PDP)", path: "/product-page/reflective-jacket", share: 31, visits: 45 },
      { title: "Shipping", path: "/learn/shipping", share: 17, visits: 24 },
      { title: "Collections", path: "/collections", share: 15, visits: 22 },
    ],
  },
  {
    label: "3rd page",
    pages: [
      { title: "High-visibility & protection", path: "/highvisibility-andprotection", share: 100, visits: 82 },
      { title: "Cart", path: "/cart", share: 15, visits: 12 },
      { title: "Checkout", path: "/checkout", share: 10, visits: 8 },
      { title: "About us", path: "/about", share: 6, visits: 1 },
      { title: "Safe at home", path: "/safe-at-home", share: 1, visits: 1 },
    ],
  },
  {
    label: "4th page",
    pages: [
      { title: "Hi-vis hoodie (PDP)", path: "/product-page/hi-vis-hoodie", share: 100, visits: 19 },
      { title: "Re-vest windproof (PDP)", path: "/product-page/re-vest-windproof", share: 52, visits: 6 },
      { title: "Wave sport-jackets (PDP)", path: "/product-page/wave-sport-jackets", share: 21, visits: 4 },
      { title: "Reflective stripes (PDP)", path: "/product-page/reflective-stripes", share: 16, visits: 3 },
      { title: "Size guide", path: "/learn/size-guide", share: 11, visits: 2 },
    ],
  },
];

const metrics = [
  { label: "TOTAL VISITS (30D)", value: "12,500", change: "+3.2%", positive: true },
  { label: "CONVERSIONS", value: "1,200", change: "+6.8%", positive: true },
  { label: "AD SPEND", value: "$4,500", change: "-2.1%", positive: false },
  { label: "ROAS", value: "3.5", change: "+7.2%", positive: true },
];

export default function BehaviorOverviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Behavior overview</h1>
      <p className="text-slate-600 text-sm">
        Explore the first 4 steps people take on your site. Bars show the share of traffic a page gets in each step.
        Use it to spot detours and pages that lose people.
      </p>

      {/* Metrics row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-slate-500 mb-1">{m.label}</div>
            <div className="text-2xl font-bold text-slate-900">{m.value}</div>
            <div
              className={`mt-1 text-xs font-medium ${
                m.positive ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {m.change} vs last 30d
            </div>
          </div>
        ))}
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((step) => (
          <div key={step.label}>
            <div className="text-sm font-semibold text-slate-700 mb-3">{step.label}</div>
            <div className="flex flex-col gap-4">
              {step.pages.map((p) => (
                <div key={p.path}>
                  <div className="text-[13px] font-medium text-slate-800 truncate">{p.title}</div>
                  <div className="text-[11px] text-slate-500 truncate">{p.path}</div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-2 flex-1 rounded bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: `${p.share}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-600">{p.share}%</div>
                  </div>
                  <div className="text-[11px] text-slate-500">{p.visits} visits</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
