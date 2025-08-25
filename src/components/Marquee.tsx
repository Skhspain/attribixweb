"use client";
import React from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type Item = { quote: string; author: string; role: string; logo?: string };

export default function Marquee({ items }: { items: Item[] }) {
  const reduce = usePrefersReducedMotion();
  const list = [...items, ...items]; // loop

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div
        className="flex gap-6 py-6 will-change-transform"
        style={
          reduce
            ? undefined
            : {
                animation: "marquee 28s linear infinite",
              }
        }
      >
        {list.map((it, i) => (
          <div
            key={i}
            className="min-w-[320px] max-w-[360px] px-5 py-4 rounded-xl border border-white/10 bg-white/5"
          >
            <p className="text-sm leading-relaxed text-white/90">“{it.quote}”</p>
            <div className="mt-3 text-xs text-white/60">
              {it.author} · {it.role}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
