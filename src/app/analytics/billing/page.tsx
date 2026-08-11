"use client";

import React from "react";

const PLANS = [
  {
    name: "Starter", price: 39, features: [
      "300 orders tracked/mo", "Meta & Google Ads data", "30 days history",
      "UTM builder", "Basic attribution", "Email support",
    ],
  },
  {
    name: "Growth", price: 79, popular: true, features: [
      "2,500 orders tracked/mo", "90 days history", "Social calendar & analytics",
      "Product feed — Google & Meta", "Newsletter (2,500 emails/mo)",
      "Lead center", "Review collection", "Priority support",
    ],
  },
  {
    name: "Pro", price: 149, features: [
      "Unlimited orders tracked", "365 days history", "Visitor flow analysis",
      "Multi-touch attribution", "Automation flows", "Newsletter (10,000 emails/mo)",
      "SEO audit", "Custom reports", "Dedicated support",
    ],
  },
];

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
            <p className="text-xs text-slate-400 mt-1">14-day free trial</p>

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
