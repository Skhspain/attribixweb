"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function MagneticButton({
  children,
  className,
  as: As = "a",
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  as?: any;
  href?: string;
  onClick?: React.MouseEventHandler;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  }
  function onLeave() {
    const el = ref.current!;
    el.style.transform = `translate(0,0)`;
  }

  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      <As
        href={href}
        onClick={onClick}
        className={twMerge(
          "relative inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold transition-transform will-change-transform",
          "shadow-[0_10px_40px_-10px_rgba(255,255,255,.25)] hover:shadow-[0_14px_50px_-12px_rgba(255,255,255,.35)]",
          className
        )}
      >
        <span ref={ref} className="block">
          {children}
        </span>
        <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
      </As>
    </div>
  );
}
