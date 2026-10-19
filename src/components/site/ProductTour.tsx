"use client";

import Link from "next/link";
import React from "react";
import { AdsReviewMock, AttributionMock, OverviewMock, TrackingMock } from "./ProductMocks";
import { cx, textLink } from "./ui";

type Step = {
  id: string;
  tab: string;
  title: string;
  what: string;
  why: string;
  action: string;
  href: string;
  visual: React.ReactNode;
};

const STEPS: Step[] = [
  {
    id: "overview",
    tab: "Overview",
    title: "Revenue, spend and ROAS in one view",
    what: "Shopify revenue and orders sit next to Meta and Google ad spend, with ROAS and average order value calculated for you.",
    why: "You stop switching between three dashboards that each count sales differently.",
    action: "Check whether total ad spend is paying back at the store level before looking at single campaigns.",
    href: "/features#dashboard",
    visual: <OverviewMock />,
  },
  {
    id: "ads",
    tab: "Ads Review",
    title: "See which campaigns clear your target",
    what: "Every Meta and Google campaign with spend, purchases, cost per acquisition and ROAS, marked against a target ROAS you set.",
    why: "It shows which campaigns pay for themselves and which only look good inside the ad platform.",
    action: "Move budget towards campaigns above target and investigate the ones below it.",
    href: "/features#ads-review",
    visual: <AdsReviewMock />,
  },
  {
    id: "attribution",
    tab: "Attribution",
    title: "Compare how each channel gets credit",
    what: "Tracked Shopify orders split by channel under last-click, first-click, linear or time-decay attribution.",
    why: "Meta and Google each credit themselves. Seeing several models side by side shows where they overlap.",
    action: "Pick the model that matches how you buy media, and use it consistently in budget decisions.",
    href: "/features#attribution",
    visual: <AttributionMock />,
  },
  {
    id: "tracking",
    tab: "Tracking",
    title: "Send purchases from the server, counted once",
    what: "Purchases go to Meta through the Conversions API and to Google from the server, alongside the browser pixel, using a shared event ID.",
    why: "Browser tracking misses some purchases because of ad blockers and privacy limits. Platforms optimise on what they receive.",
    action: "Turn on server-side sending, then confirm in Meta Events Manager that events arrive and are deduplicated.",
    href: "/features#tracking",
    visual: <TrackingMock />,
  },
];

export default function ProductTour() {
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % STEPS.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + STEPS.length) % STEPS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = STEPS.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const step = STEPS[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Product walkthrough"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
      >
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`tour-tab-${s.id}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`tour-panel-${s.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cx(
              "min-h-[44px] shrink-0 rounded-full border px-4 text-sm font-semibold transition",
              i === active
                ? "border-white bg-white text-gray-900"
                : "border-white/15 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
            )}
          >
            <span className="mr-1.5 tabular-nums text-xs opacity-60">{i + 1}</span>
            {s.tab}
          </button>
        ))}
      </div>

      <div
        id={`tour-panel-${step.id}`}
        role="tabpanel"
        aria-labelledby={`tour-tab-${step.id}`}
        className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12"
      >
        <div>
          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
          <dl className="mt-6 space-y-5 text-sm leading-relaxed">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">What it does</dt>
              <dd className="mt-1 text-white/80">{step.what}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Why it matters</dt>
              <dd className="mt-1 text-white/80">{step.why}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">What to do with it</dt>
              <dd className="mt-1 text-white/80">{step.action}</dd>
            </div>
          </dl>
          <Link href={step.href} className={cx("mt-6 inline-flex min-h-[44px] items-center text-sm", textLink)}>
            More on {step.tab.toLowerCase()} in Features
          </Link>
        </div>
        <div className="min-w-0">{step.visual}</div>
      </div>
    </div>
  );
}
