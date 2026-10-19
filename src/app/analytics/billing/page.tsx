"use client";

import React from "react";
import { PLANS as SHARED_PLANS } from "@/lib/pricing";

// Plan data comes from the shared pricing config so the in-app preview,
// the website and the Shopify listing stay in sync.
const PLANS = SHARED_PLANS.map((p) => ({
  name: p.name,
  price: p.monthly,
  trialDays: p.trialDays,
  popular: p.highlight,
  features: [...Object.values(p.limits), ...p.extras],
}));

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Plans & Billing</h1>
        <p className="text-sm text-slate-500 mt-2">Start free. Upgrade when you see value.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div key={plan.name} className={`rounded-xl border-2 bg-white p-6 relative ${plan.popular ? "border-gray-900 shadow-lg" : "border-slate-200"}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-bold">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-slate-500 text-sm"> /mo</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">{plan.trialDays}-day free trial</p>

            <ul className="mt-6 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className={`mt-6 w-full py-2.5 rounded-xl text-sm font-semibold ${plan.popular ? "bg-gray-900 text-white hover:opacity-90" : "border border-slate-200 hover:bg-slate-50"}`}>
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
