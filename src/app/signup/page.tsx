"use client";

import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <>
      <style jsx global>{`
        .su-glow-a {
          position: absolute; border-radius: 9999px; filter: blur(90px); pointer-events: none;
        }
        @keyframes su-float {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-18px) scale(1.04); }
        }
        /* Override Clerk card to be transparent so our bg shows */
        .cl-card { background: transparent !important; box-shadow: none !important; border: none !important; }
        .cl-internal-b3fm6y { display: none !important; } /* hides Clerk header */
        .cl-headerTitle, .cl-headerSubtitle { display: none !important; }
      `}</style>

      <div className="min-h-screen bg-[#030712] text-white flex">

        {/* ── LEFT PANEL ── */}
        <div className="hidden lg:flex flex-col justify-between w-[52%] relative overflow-hidden bg-gradient-to-br from-[#0d1117] to-[#030712] px-14 py-12">
          {/* Glows */}
          <div className="su-glow-a w-[500px] h-[500px] -top-32 -left-32 bg-indigo-600/25" style={{ animation: "su-float 14s ease-in-out infinite" }} />
          <div className="su-glow-a w-[400px] h-[400px] bottom-0 right-0 bg-cyan-500/15" style={{ animation: "su-float 18s ease-in-out infinite reverse" }} />
          {/* Grid */}
          <div className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* Logo */}
          <div className="relative z-10">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">A</div>
              <span className="font-semibold text-lg tracking-tight">Attribix</span>
            </Link>
          </div>

          {/* Main copy */}
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">Free 14-day trial</p>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Stop guessing.<br />
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                Start knowing.
              </span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-sm">
              One dashboard for ad tracking, attribution, email, reviews, social scheduling, and SEO — built for Shopify.
            </p>

            {/* Feature list */}
            <ul className="mt-8 space-y-3">
              {[
                "iOS-proof attribution via server-side events",
                "True ROAS across Meta, Google & Email",
                "Automated review collection & SEO fixes",
                "No credit card required to start",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <svg className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Social proof */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold shrink-0">S</div>
              <div>
                <p className="text-sm text-white/80">"Cut our CPP by 41% in the first month."</p>
                <p className="text-xs text-white/30 mt-0.5">Sarah K. · Shopify store owner</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 relative bg-[#030712]">
          <div className="su-glow-a w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/10" />

          <div className="relative z-10 w-full max-w-md">
            {/* Mobile logo */}
            <div className="lg:hidden mb-8 flex justify-center">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">A</div>
                <span className="font-semibold text-lg tracking-tight">Attribix</span>
              </Link>
            </div>

            <div className="mb-7">
              <h1 className="text-2xl font-bold">Create your account</h1>
              <p className="text-white/40 text-sm mt-1">14-day free trial · No credit card required</p>
            </div>

            <SignUp
              forceRedirectUrl="/analytics"
              appearance={{
                variables: {
                  colorBackground: "#0d1117",
                  colorText: "#f8fafc",
                  colorTextSecondary: "#94a3b8",
                  colorInputBackground: "#0f172a",
                  colorInputText: "#f8fafc",
                  colorPrimary: "#6366f1",
                  borderRadius: "12px",
                },
                elements: {
                  rootBox: "w-full",
                  card: "bg-[#0d1117] border border-white/[0.08] rounded-2xl shadow-2xl p-7",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "!rounded-xl !border !border-white/10 !bg-white/[0.05] hover:!bg-white/10 !text-white !text-sm",
                  dividerLine: "!bg-white/10",
                  dividerText: "!text-white/30 !text-xs",
                  formFieldLabel: "!text-white/50 !text-xs !font-medium !uppercase !tracking-wider",
                  formFieldInput: "!rounded-xl !border !border-white/10 !bg-white/[0.05] !text-white !text-sm focus:!border-indigo-500 focus:!ring-1 focus:!ring-indigo-500/50",
                  formButtonPrimary: "!rounded-xl !bg-white !text-gray-900 !font-semibold !text-sm hover:!bg-white/90",
                  footerActionText: "!text-white/40 !text-sm",
                  footerActionLink: "!text-indigo-400 hover:!text-indigo-300 !text-sm !font-medium",
                  identityPreviewText: "!text-white/70",
                  identityPreviewEditButtonIcon: "!text-indigo-400",
                  alertText: "!text-red-400 !text-sm",
                  formFieldErrorText: "!text-red-400 !text-xs",
                },
              }}
            />

            <p className="mt-5 text-center text-xs text-white/25">
              Need help?{" "}
              <Link href="/book-demo" className="text-indigo-400 hover:text-indigo-300">
                Book a setup call
              </Link>
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
