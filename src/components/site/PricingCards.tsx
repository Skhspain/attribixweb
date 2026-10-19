"use client";

import React from "react";
import {
  BILLING_NOTE,
  includedSentence,
  MAX_YEARLY_SAVINGS_PCT,
  PLANS,
  yearlySavingsPct,
  type Plan,
} from "@/lib/pricing";
import { Check, TrialLink, btnPrimary, btnSecondary, cx } from "./ui";

function PlanCard({
  plan,
  yearly,
  compact,
  location,
}: {
  plan: Plan;
  yearly: boolean;
  compact: boolean;
  location: string;
}) {
  const price = yearly ? Math.round(plan.yearly / 12) : plan.monthly;
  const limits = Object.values(plan.limits);

  return (
    <li
      className={cx(
        "relative flex flex-col rounded-2xl border p-6 md:p-7",
        plan.highlight
          ? "border-cyan-300/50 bg-gradient-to-b from-cyan-400/[0.12] to-white/[0.03] shadow-[0_20px_60px_-30px_rgba(34,211,238,0.45)]"
          : "border-white/10 bg-white/[0.04]"
      )}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-cyan-300 px-3 py-0.5 text-[11px] font-bold text-gray-950">
          Most popular
        </span>
      )}
      <h3 className="text-base font-semibold text-white">{plan.name}</h3>
      <p className="mt-1 min-h-[2.5rem] text-sm text-white/60">{plan.bestFor}</p>

      <p className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-extrabold tracking-tight text-white">${price}</span>
        <span className="mb-1.5 text-sm text-white/55">USD / month</span>
      </p>
      <p className="mt-1 text-xs text-white/55">
        {yearly
          ? `Billed $${plan.yearly.toLocaleString("en-US")} per year (save ${yearlySavingsPct(plan)}%)`
          : `or $${plan.yearly.toLocaleString("en-US")} per year`}
      </p>
      <p className="mt-3 text-sm font-medium text-emerald-300">{plan.trialDays}-day free trial</p>

      <ul className="mt-5 flex-1 space-y-2.5 text-sm text-white/80">
        {(compact ? plan.summary : [...limits, ...plan.extras]).map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className={plan.highlight ? "text-cyan-300" : "text-white/45"} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <TrialLink
        location={`${location}_${plan.id}`}
        className={cx("mt-7 w-full", plan.highlight ? btnPrimary : btnSecondary)}
      >
        Start {plan.trialDays}-day trial
      </TrialLink>
    </li>
  );
}

export default function PricingCards({
  compact = false,
  location,
  showToggle = !compact,
}: {
  compact?: boolean;
  location: string;
  showToggle?: boolean;
}) {
  const [yearly, setYearly] = React.useState(false);

  return (
    <div>
      {showToggle && (
        <div className="mb-10 flex justify-center">
          <div role="radiogroup" aria-label="Billing interval" className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {[
              { v: false, label: "Monthly" },
              { v: true, label: `Yearly, save up to ${MAX_YEARLY_SAVINGS_PCT}%` },
            ].map((o) => (
              <button
                key={String(o.v)}
                type="button"
                role="radio"
                aria-checked={yearly === o.v}
                onClick={() => setYearly(o.v)}
                className={cx(
                  "min-h-[40px] rounded-full px-5 text-sm font-semibold transition",
                  yearly === o.v ? "bg-white text-gray-900" : "text-white/65 hover:text-white"
                )}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <ul className="grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <PlanCard key={p.id} plan={p} yearly={yearly} compact={compact} location={location} />
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-white/60">
        <p>{includedSentence()}</p>
        <p className="text-xs text-white/45">{BILLING_NOTE}</p>
      </div>
    </div>
  );
}
