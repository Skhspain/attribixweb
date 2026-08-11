// src/components/HeroAnimation.tsx
"use client";

export default function HeroAnimation() {
  return (
    <div className="relative">
      {/* background gradient orbs */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-gradient-to-tr from-[#2563EB]/40 to-[#06B6D4]/30 blur-3xl hero-spin-slow" />
      <div className="pointer-events-none absolute -bottom-12 -right-6 h-64 w-64 rounded-full bg-gradient-to-tr from-[#7C3AED]/30 to-[#22D3EE]/30 blur-3xl hero-spin-slower" />

      {/* soft glow */}
      <div className="absolute -inset-4 rounded-3xl bg-cyan-400/20 blur-2xl hero-pulse-soft" />

      {/* glass card */}
      <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 shadow-2xl hero-float">
        <UIWireframe />
      </div>

      {/* scoped styles */}
      <style jsx>{`
        @keyframes heroFloat { 0%{transform:translateY(0)} 50%{transform:translateY(-8px)} 100%{transform:translateY(0)} }
        .hero-float{ animation: heroFloat 6s ease-in-out infinite; }

        @keyframes heroPulse { 0%,100%{opacity:.35} 50%{opacity:.6} }
        .hero-pulse-soft{ animation: heroPulse 4s ease-in-out infinite; }

        @keyframes heroSpin { to{ transform: rotate(360deg); } }
        .hero-spin-slow{ animation: heroSpin 24s linear infinite; }
        .hero-spin-slower{ animation: heroSpin 42s linear infinite; }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer {
          background-image: linear-gradient(90deg, rgba(255,255,255,.08) 25%, rgba(255,255,255,.2) 37%, rgba(255,255,255,.08) 63%);
          background-size: 200% 100%;
          animation: shimmer 2.2s linear infinite;
        }

        @keyframes bar {
          0% { height: 30%; }
          50% { height: var(--h, 70%); }
          100% { height: 30%; }
        }
        .bar { animation: bar 4.8s ease-in-out infinite; transform-origin: bottom; }

        /* Respect users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-float, .hero-pulse-soft, .hero-spin-slow, .hero-spin-slower, .bar, .shimmer {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function UIWireframe() {
  return (
    <div className="rounded-2xl bg-slate-900/30 border border-white/10 p-4">
      {/* header row */}
      <div className="h-6 w-40 rounded bg-white/10" />

      {/* KPI cards */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/10 p-3">
          <div className="h-4 w-24 rounded bg-white/10" />
          <div className="mt-2 h-6 w-28 rounded bg-white/20 shimmer" />
        </div>
        <div className="rounded-xl border border-white/10 p-3">
          <div className="h-4 w-24 rounded bg-white/10" />
          <div className="mt-2 h-6 w-28 rounded bg-white/20 shimmer" />
        </div>

        {/* animated chart */}
        <div className="col-span-2 h-40 rounded-xl border border-white/10 bg-white/5 overflow-hidden relative">
          <div className="absolute inset-0 opacity-80 flex items-end gap-5 px-6">
            <div className="w-6 rounded-t bg-white/20 bar" style={{ animationDelay: "0s",   // @ts-ignore
              ['--h' as any]:'52%' }} />
            <div className="w-6 rounded-t bg-white/25 bar" style={{ animationDelay: ".2s",  // @ts-ignore
              ['--h' as any]:'68%' }} />
            <div className="w-6 rounded-t bg-white/20 bar" style={{ animationDelay: ".4s",  // @ts-ignore
              ['--h' as any]:'58%' }} />
            <div className="w-6 rounded-t bg-white/30 bar" style={{ animationDelay: ".6s",  // @ts-ignore
              ['--h' as any]:'78%' }} />
            <div className="w-6 rounded-t bg-white/20 bar" style={{ animationDelay: ".8s",  // @ts-ignore
              ['--h' as any]:'60%' }} />
          </div>
          {/* light sweep */}
          <div className="absolute inset-0 shimmer" />
        </div>
      </div>
    </div>
  );
}
