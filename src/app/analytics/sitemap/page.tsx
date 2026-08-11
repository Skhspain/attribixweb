"use client";

import * as React from "react";

/* ───────────────────────────
   Types
──────────────────────────── */
type FlowMap = Record<string, number>; // toKey -> share %
type PageNode = {
  key: string;
  title: string;
  path: string;
  visits: number;
  exit: number;
  to?: FlowMap;
};
type Step = { label: string; nodes: PageNode[] };

type Rect = { x: number; y: number; w: number; h: number };
type Edge = {
  id: string;
  fromKey: string;
  toKey: string;
  pct: number;
  fromOrder: number;
  toOrder: number;
};

/* ───────────────────────────
   Demo data (add/replace with your real data)
   - 1st column has multiple entry pages
   - 2nd/3rd/4th have several options so you can show Top 3/5/8/10
──────────────────────────── */
const STEPS_ALL: Step[] = [
  {
    label: "1st page",
    nodes: [
      { key: "p_home", title: "Homepage", path: "/", visits: 134, exit: 28, to: { p_hoodie_pdp: 15, p_collections: 8, p_promo: 6 } },
      {
        key: "p_hivis",
        title: "High‑visibility & protection",
        path: "/highvisibility-andprotection",
        visits: 767,
        exit: 32,
        to: { p_hoodie_pdp: 60, p_reflective_pdp: 22, p_collections: 8, p_hoodie_cat: 10 },
      },
      { key: "p_hoodie_cat", title: "Hi‑vis hoodie (category)", path: "/hoodie", visits: 186, exit: 26, to: { p_hoodie_pdp: 10, p_reflective_pdp: 6 } },
      { key: "p_bodycam", title: "Body‑camera vest", path: "/body-cam", visits: 106, exit: 27, to: { p_reflective_pdp: 9 } },
      { key: "p_promo", title: "Promo", path: "/promo", visits: 210, exit: 31, to: { p_collections: 25, p_hoodie_pdp: 10 } },
    ],
  },
  {
    label: "2nd page",
    nodes: [
      { key: "p_hoodie_pdp", title: "Hi‑vis hoodie (PDP)", path: "/product-page/hi-vis-hoodie", visits: 144, exit: 36, to: { p_cart: 48, p_windproof_pdp: 12, p_wave_jackets_pdp: 8 } },
      { key: "p_reflective_pdp", title: "Reflective jacket (PDP)", path: "/product-page/reflective-jacket", visits: 45, exit: 28, to: { p_cart: 38, p_size_guide: 8 } },
      { key: "p_collections", title: "Collections", path: "/collections", visits: 122, exit: 30, to: { p_hoodie_pdp: 20, p_wave_jackets_pdp: 14, p_cart: 6 } },
      { key: "p_wave_jackets_pdp", title: "Wave sport‑jackets (PDP)", path: "/product-page/wave-sport-jackets", visits: 25, exit: 55, to: { p_cart: 10 } },
      { key: "p_windproof_pdp", title: "Re‑vest windproof (PDP)", path: "/product-page/re-vest-windproof", visits: 19, exit: 50, to: { p_cart: 9 } },
      { key: "p_size_guide", title: "Size guide", path: "/learn/size-guide", visits: 24, exit: 29, to: { p_cart: 5 } },
      { key: "p_about", title: "About us", path: "/about-us", visits: 40, exit: 80, to: {} },
    ],
  },
  {
    label: "3rd page",
    nodes: [
      { key: "p_cart", title: "Cart", path: "/cart", visits: 82, exit: 40, to: { p_checkout: 100 } },
      { key: "p_safehome", title: "Safe at home", path: "/safe-at-home", visits: 30, exit: 50, to: {} },
    ],
  },
  {
    label: "4th page",
    nodes: [{ key: "p_checkout", title: "Checkout", path: "/checkout", visits: 50, exit: 45, to: {} }],
  },
];

/* ───────────────────────────
   Helpers
──────────────────────────── */
const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));
const pctLabel = (p: number) => `${Math.round(p)}%`;

function strokeForShare(pct: number) {
  const t = clamp(pct / 100, 0, 1);
  return {
    width: 1.5 + 5 * t,
    color: `rgba(37,99,235, ${0.35 + 0.5 * t})`, // darker with higher pct
  };
}

/* ───────────────────────────
   UI bits
──────────────────────────── */
function Card({
  node,
  innerRef,
  interactive = false,
  active = false,
  onClick,
}: {
  node: PageNode;
  innerRef?: (el: HTMLButtonElement | null) => void;
  interactive?: boolean;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      ref={innerRef}
      onClick={interactive ? onClick : undefined}
      className={[
        "w-full text-left rounded-xl border bg-white px-4 py-3 shadow-sm transition",
        active
          ? "border-blue-500 ring-2 ring-blue-200"
          : "border-slate-200 hover:border-slate-300",
        interactive ? "cursor-pointer" : "cursor-default",
      ].join(" ")}
    >
      <div className="text-[13px] font-semibold text-slate-800 truncate">{node.title}</div>
      <div className="text-[11px] text-slate-500 truncate">{node.path}</div>

      <div className="mt-2 flex items-center gap-2">
        <div className="h-2 w-28 rounded bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-blue-600"
            style={{ width: `${clamp((node.visits / 800) * 100, 6, 100)}%` }}
          />
        </div>
        <div className="text-[11px] text-slate-500">{node.visits} visits</div>
      </div>

      <div className="mt-1 inline-flex items-center gap-1 rounded bg-rose-100 px-1.5 py-0.5 text-[10px] text-rose-600">
        {node.exit}% exit
      </div>
    </button>
  );
}

/* ───────────────────────────
   Edge building & filtering
──────────────────────────── */
function buildEdges(steps: Step[], showAll: boolean, topLinesPerSource: number, minShare: number) {
  const edges: Edge[] = [];

  for (let s = 0; s < steps.length - 1; s++) {
    for (const n of steps[s].nodes) {
      if (!n.to) continue;
      // sort outbound by share
      const out = Object.entries(n.to)
        .filter(([, pct]) => pct >= minShare)
        .sort((a, b) => b[1] - a[1]);

      out.forEach(([toKey, pct], idx) => {
        if (!showAll && idx >= topLinesPerSource) return;
        edges.push({
          id: `e-${n.key}-${toKey}-${idx}`,
          fromKey: n.key,
          toKey,
          pct,
          fromOrder: idx,
          toOrder: 0,
        });
      });
    }
  }

  // lane order for sources
  const byFrom: Record<string, Edge[]> = {};
  edges.forEach((e) => ((byFrom[e.fromKey] ??= []).push(e)));
  Object.values(byFrom).forEach((list) => {
    list.sort((a, b) => b.pct - a.pct);
    list.forEach((e, i) => (e.fromOrder = i));
  });

  // lane landing for destinations
  const byTo: Record<string, Edge[]> = {};
  edges.forEach((e) => ((byTo[e.toKey] ??= []).push(e)));
  Object.values(byTo).forEach((list) => {
    list.sort((a, b) => b.pct - a.pct);
    list.forEach((e, i) => (e.toOrder = i));
  });

  return edges;
}

/** Keep only top K nodes per column and respect minShare */
function limitSteps(steps: Step[], topK: number, minVisits = 0) {
  return steps.map((st) => ({
    label: st.label,
    nodes: st.nodes
      .filter((n) => n.visits >= minVisits)
      .sort((a, b) => b.visits - a.visits)
      .slice(0, topK),
  }));
}

/** Re-root on a first column node */
function filterJourney(steps: Step[], edges: Edge[], rootKey: string | null) {
  if (!rootKey) return { steps, edges };
  const outSteps: Step[] = [];
  let allowed = new Set<string>([rootKey]);

  for (let s = 0; s < steps.length; s++) {
    const col = steps[s];
    const keep = col.nodes.filter((n) => allowed.has(n.key));
    outSteps.push({ label: col.label, nodes: keep });

    // build next
    const next = new Set<string>();
    keep.forEach((n) => n.to && Object.keys(n.to).forEach((k) => next.add(k)));
    allowed = next;
  }

  const keptKeys = new Set(outSteps.flatMap((st) => st.nodes.map((n) => n.key)));
  const keptEdges = edges.filter((e) => keptKeys.has(e.fromKey) && keptKeys.has(e.toKey));

  return { steps: outSteps, edges: keptEdges };
}

/* ───────────────────────────
   Main Page
──────────────────────────── */
export default function SitemapFlowPage() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const nodeRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});

  const [rects, setRects] = React.useState<Record<string, Rect>>({});
  const [showAllLines, setShowAllLines] = React.useState(false);
  const [topPagesPerColumn, setTopPagesPerColumn] = React.useState(5); // << choose more pages
  const [topLinesPerSource, setTopLinesPerSource] = React.useState(2);
  const [minShare, setMinShare] = React.useState(5); // % threshold
  const [rootKey, setRootKey] = React.useState<string | null>(null);

  // 1) limit how many nodes per column
  const limitedSteps = React.useMemo(
    () => limitSteps(STEPS_ALL, topPagesPerColumn),
    [topPagesPerColumn]
  );

  // 2) edges with controls
  const allEdges = React.useMemo(
    () => buildEdges(limitedSteps, showAllLines, topLinesPerSource, minShare),
    [limitedSteps, showAllLines, topLinesPerSource, minShare]
  );

  // 3) optional re-root filter
  const { steps, edges } = React.useMemo(
    () => filterJourney(limitedSteps, allEdges, rootKey),
    [limitedSteps, allEdges, rootKey]
  );

  // measure for lines
  const measure = React.useCallback(() => {
    const base = containerRef.current?.getBoundingClientRect();
    if (!base) return;
    const next: Record<string, Rect> = {};
    Object.entries(nodeRefs.current).forEach(([k, el]) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      next[k] = { x: r.left - base.left, y: r.top - base.top, w: r.width, h: r.height };
    });
    setRects(next);
  }, []);

  React.useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    const RO =
      typeof (window as any).ResizeObserver !== "undefined"
        ? new (window as any).ResizeObserver(measure)
        : null;
    if (RO && containerRef.current) RO.observe(containerRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      RO?.disconnect?.();
    };
  }, [measure, steps]);

  // geometry for edges
  function edgeGeom(e: Edge) {
    const a = rects[e.fromKey];
    const b = rects[e.toKey];
    if (!a || !b) return null;

    const siblingsFrom = edges.filter((x) => x.fromKey === e.fromKey).length;
    const siblingsTo = edges.filter((x) => x.toKey === e.toKey).length;
    const laneGap = 16;

    const x1 = a.x + a.w;
    const y1 = a.y + a.h / 2 + (e.fromOrder - (siblingsFrom - 1) / 2) * laneGap;

    const x2 = b.x;
    const y2 = b.y + b.h / 2 + (e.toOrder - (siblingsTo - 1) / 2) * laneGap;

    const dx = Math.max(80, (x2 - x1) * 0.35);
    const c1x = x1 + dx;
    const c1y = y1;
    const c2x = x2 - dx;
    const c2y = y2;

    const d = `M ${x1} ${y1} C ${c1x} ${c1y} ${c2x} ${c2y} ${x2} ${y2}`;

    // midpoint (t=0.5)
    const t = 0.5;
    const x01 = x1 + (c1x - x1) * t;
    const y01 = y1 + (c1y - y1) * t;
    const x12 = c1x + (c2x - c1x) * t;
    const y12 = c1y + (c2y - c1y) * t;
    const x23 = c2x + (x2 - c2x) * t;
    const y23 = c2y + (y2 - c2y) * t;
    const x012 = x01 + (x12 - x01) * t;
    const y012 = y01 + (y12 - y01) * t;
    const x123 = x12 + (x23 - x12) * t;
    const y123 = y12 + (y23 - y12) * t;
    const xm = x012 + (x123 - x012) * t;
    const ym = y012 + (y123 - y012) * t;

    return { d, mid: { x: xm, y: ym } };
  }

  const rootTitle =
    rootKey && STEPS_ALL[0].nodes.find((n) => n.key === rootKey)?.title
      ? STEPS_ALL[0].nodes.find((n) => n.key === rootKey)!.title
      : null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sitemap (flow)</h1>
        <div className="flex items-center gap-6">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <span className="inline-block h-2 w-8 rounded bg-blue-600" />
            <span>Stronger line = higher share</span>
          </div>
          <label className="text-xs text-slate-700 inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-blue-600"
              checked={showAllLines}
              onChange={(e) => setShowAllLines(e.target.checked)}
            />
            Show all lines
          </label>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-slate-600">Pages/column:</span>
          {[3, 5, 8, 10].map((n) => (
            <button
              key={n}
              onClick={() => setTopPagesPerColumn(n)}
              className={`rounded px-2 py-1 border ${
                topPagesPerColumn === n
                  ? "border-blue-500 text-blue-700"
                  : "border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              Top {n}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-600">Lines/source:</span>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setTopLinesPerSource(n)}
              className={`rounded px-2 py-1 border ${
                topLinesPerSource === n
                  ? "border-blue-500 text-blue-700"
                  : "border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              Top {n}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-600">Min share:</span>
          <input
            type="number"
            min={0}
            max={100}
            value={minShare}
            onChange={(e) => setMinShare(clamp(parseInt(e.target.value || "0", 10), 0, 100))}
            className="w-16 rounded border border-slate-200 px-2 py-1"
          />
          <span className="text-slate-500 text-xs">%</span>
        </div>
      </div>

      {/* Root chip */}
      {rootKey && (
        <div className="flex items-center gap-3">
          <div className="text-xs rounded-full bg-blue-50 text-blue-700 px-3 py-1">
            Viewing journey from <b className="font-semibold">{rootTitle}</b>
          </div>
          <button
            className="text-xs text-slate-600 hover:text-slate-900 underline"
            onClick={() => setRootKey(null)}
            type="button"
          >
            Clear
          </button>
        </div>
      )}

      <div ref={containerRef} className="relative">
        {/* Lines */}
        <svg className="absolute inset-0 pointer-events-none">
          {edges.map((e) => {
            const g = edgeGeom(e);
            if (!g) return null;
            const s = strokeForShare(e.pct);
            return (
              <path
                key={e.id}
                d={g.d}
                fill="none"
                stroke={s.color}
                strokeWidth={s.width}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}
        </svg>

        {/* % chips */}
        {edges.map((e) => {
          const g = edgeGeom(e);
          if (!g) return null;
          return (
            <div
              key={`${e.id}-label`}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded bg-white/95 px-1.5 py-0.5 text-[10px] font-medium text-blue-900 shadow"
              style={{ left: g.mid.x, top: g.mid.y }}
            >
              {pctLabel(e.pct)}
            </div>
          );
        })}

        {/* Grid + cards */}
        <div className="grid grid-cols-4 gap-x-20 gap-y-12 relative">
          {steps.map((step, colIdx) => (
            <div key={step.label}>
              <div className="mb-3 text-sm font-semibold text-slate-600">{step.label}</div>
              <div className="flex flex-col gap-10">
                {step.nodes.map((n) => (
                  <Card
                    key={n.key}
                    node={n}
                    innerRef={(el) => (nodeRefs.current[n.key] = el)}
                    interactive={colIdx === 0}
                    active={rootKey === n.key}
                    onClick={() => setRootKey((prev) => (prev === n.key ? null : n.key))}
                  />
                ))}
                {step.nodes.length === 0 && (
                  <div className="text-xs text-slate-400 italic">No data</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
