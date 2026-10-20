"use client";

import Link from "next/link";
import React from "react";
import { CampaignCompare, MoneyExample } from "./EduVisuals";
import { AdsReviewMock, JourneyMock, OverviewMock, TrackingMock } from "./ProductMocks";
import { cx, textLink } from "./ui";

type Step = {
  id: string;
  tab: string;
  title: string;
  what: string;
  why: string;
  help: string;
  action: string;
  href: string;
  visual: React.ReactNode;
  extra?: React.ReactNode;
};

const STEPS: Step[] = [
  {
    id: "results",
    tab: "Advertising results",
    title: "See where your advertising money goes",
    what: "Shows what you spent on Facebook, Instagram and Google ads next to the sales in your Shopify store.",
    why: "You no longer have to open three apps that each count sales differently.",
    help: "In a few seconds you can see whether your advertising is bringing back more than it costs.",
    action: "Check this screen every week, before you look at single ads.",
    href: "/features#results",
    visual: <OverviewMock />,
    extra: <MoneyExample />,
  },
  {
    id: "campaigns",
    tab: "Campaign check",
    title: "Know which campaigns need attention",
    what: "Lists every campaign with what it cost, the sales linked to it and what each sale cost you.",
    why: "Some campaigns bring in sales. Others quietly use up your budget.",
    help: "You set a goal, for example $3 back for every $1. Attribix marks which campaigns beat it.",
    action: "Give more budget to campaigns that beat your goal. Look closer at the others before switching them off.",
    href: "/features#campaigns",
    visual: <AdsReviewMock />,
    extra: <CampaignCompare />,
  },
  {
    id: "tracking",
    tab: "Sales tracking",
    title: "Help Facebook and Google hear about your sales",
    what: "Sends each sale to Facebook and Google a second way, from a server, and makes sure it is only counted once.",
    why: "Ad blockers can stop the normal message, so some sales never show up in your ad reports.",
    help: "Facebook and Google use your sales to decide who sees your ads. More complete information helps them.",
    action: "Turn it on in Settings, then check in Facebook that your sales are arriving.",
    href: "/features#tracking",
    visual: <TrackingMock />,
  },
  {
    id: "journeys",
    tab: "Customer journeys",
    title: "Understand how customers found your store",
    what: "For each order, shows the visits Attribix saw before it. For example: an Instagram ad, then a Google search, then the purchase.",
    why: "Most customers don't buy the first time they see an ad. The path shows which ads helped along the way.",
    help: "You can see which channels start customer journeys and which ones finish them.",
    action: "Look for ads that often appear early in the path. They may be doing more than their own reports suggest.",
    href: "/features#journeys",
    visual: <JourneyMock />,
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
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Why you should care</dt>
              <dd className="mt-1 text-white/80">{step.why}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">How it helps your business</dt>
              <dd className="mt-1 text-white/80">{step.help}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">What to do next</dt>
              <dd className="mt-1 text-white/80">{step.action}</dd>
            </div>
          </dl>
          {step.extra && <div className="mt-6">{step.extra}</div>}
          <Link href={step.href} className={cx("mt-4 inline-flex min-h-[44px] items-center text-sm", textLink)}>
            Learn more about this screen
          </Link>
        </div>
        <div className="min-w-0">{step.visual}</div>
      </div>
    </div>
  );
}
