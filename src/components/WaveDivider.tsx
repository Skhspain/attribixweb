"use client";
export default function WaveDivider() {
  return (
    <div className="relative h-12 -mb-8">
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,50 C240,80 360,20 600,40 C840,60 960,10 1200,30 C1320,40 1380,60 1440,50 L1440,100 L0,100 Z"
          fill="url(#g)"
        />
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(34,211,238,.25)" />
            <stop offset="50%" stopColor="rgba(168,85,247,.25)" />
            <stop offset="100%" stopColor="rgba(59,130,246,.25)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
