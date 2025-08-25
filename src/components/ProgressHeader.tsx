"use client";
import React from "react";

export default function ProgressHeader() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const h = doc.scrollHeight - doc.clientHeight;
      const p = h > 0 ? (doc.scrollTop / h) * 100 : 0;
      if (ref.current) ref.current.style.setProperty("--p", `${p}%`);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-1 bg-white/5"
    >
      <div
        ref={ref}
        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400"
        style={{ width: "var(--p, 0%)", transition: "width 80ms linear" }}
      />
    </div>
  );
}
