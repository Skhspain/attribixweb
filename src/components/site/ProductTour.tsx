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
  help: string;
  action: string;
  href: string;
  visual: React.ReactNode;
};

const STEPS: Step[] = [
  {
    id: "overview",
    tab: "Overview",
    title: "All your key numbers on one screen",
    what: "Shows your sales from Shopify next to what you spent on Facebook and Google ads.",
    why: "You don't have to open three different apps that all count sales differently.",
    help: "In a few seconds you can see if your advertising is paying for itself.",
    action: "Check the big picture first: is your ad spending bringing back more than it costs?",
    href: "/features#dashboard",
    visual: <OverviewMock />,
  },
  {
    id: "ads",
    tab: "Ads Review",
    title: "See which ads make money",
    what: "Lists every ad campaign with what it cost, how many sales it brought, and how much each sale cost you.",
    why: "Some campaigns make money and some quietly waste it. This screen shows which is which.",
    help: "You set a goal, for example $3 in sales for every $1 spent. Attribix marks which campaigns beat it.",
    action: "Give more budget to campaigns that beat your goal. Look closer at the ones that don't before you turn them off.",
    href: "/features#ads-review",
    visual: <AdsReviewMock />,
  },
  {
    id: "attribution",
    tab: "Attribution",
    title: "See which channel really earned the sale",
    what: "Splits your sales between Facebook, Google, email and other channels. You choose the rule for who gets the credit.",
    why: "Facebook and Google both take credit for the same sale. Here, each order is counted only once.",
    help: "You get a fairer picture of which channel deserves more of your budget.",
    action: "Pick one rule and stick with it, so you compare channels fairly over time.",
    href: "/features#attribution",
    visual: <AttributionMock />,
  },
  {
    id: "tracking",
    tab: "Sale tracking",
    title: "Make sure sales are reported correctly",
    what: "Sends every sale to Facebook and Google in a second, more reliable way, and makes sure it is only counted once.",
    why: "Ad blockers hide some sales. Then your ads look worse than they really are.",
    help: "Facebook and Google use your sales to find new buyers. Better information can help them show your ads to the right people.",
    action: "Turn it on in Settings, then check in Facebook that your sales are arriving.",
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
          <Link href={step.href} className={cx("mt-6 inline-flex min-h-[44px] items-center text-sm", textLink)}>
            Learn more about this screen
          </Link>
        </div>
        <div className="min-w-0">{step.visual}</div>
      </div>
    </div>
  );
}
