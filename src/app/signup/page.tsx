"use client";

import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#030712] flex flex-col lg:flex-row">

      {/* ── LEFT: Branding ── */}
      <div className="hidden lg:flex flex-col justify-center w-[48%] min-h-screen px-16 xl:px-20 relative overflow-hidden border-r border-white/[0.06]">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full">
          <div className="absolute w-[600px] h-[600px] -top-40 -left-40 rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute w-[400px] h-[400px] bottom-0 right-0 rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-md">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2.5 mb-12 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white">A</div>
            <span className="font-semibold text-lg text-white">Attribix</span>
          </Link>

          {/* Headline */}
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Free 14-day trial</span>
            <h2 className="mt-3 text-4xl xl:text-5xl font-bold text-white leading-tight">
              Stop guessing.<br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Start knowing.
              </span>
            </h2>
            <p className="mt-4 text-white/50 text-base leading-relaxed">
              One dashboard for ad tracking, attribution, email, reviews, social scheduling, and SEO — built for Shopify.
            </p>
          </div>

          {/* Checklist */}
          <ul className="space-y-3 mb-10">
            {[
              "iOS-proof attribution via server-side events",
              "True ROAS across Meta, Google & Email",
              "Automated review collection & SEO fixes",
              "No credit card required to start",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                <svg className="h-4 w-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* Testimonial */}
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white shrink-0">S</div>
            <div>
              <p className="text-sm text-white/75 leading-snug">"Cut our CPP by 41% in the first month."</p>
              <p className="text-xs text-white/30 mt-1">Sarah K. · Shopify store owner</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Form ── */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-16 min-h-screen relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/8 blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-[400px]">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">A</div>
              <span className="font-semibold text-white">Attribix</span>
            </Link>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white">Create your account</h1>
            <p className="text-white/40 text-sm mt-1">14-day free trial · No credit card required</p>
          </div>

          <SignUp
            forceRedirectUrl="/analytics"
            appearance={{
              variables: {
                colorBackground: "#0d1117",
                colorText: "#f1f5f9",
                colorTextSecondary: "#64748b",
                colorInputBackground: "#111827",
                colorInputText: "#f1f5f9",
                colorPrimary: "#6366f1",
                borderRadius: "10px",
                fontSize: "14px",
              },
              elements: {
                rootBox: "w-full",
                card: "!bg-[#0d1117] !border !border-white/[0.08] !rounded-2xl !shadow-[0_24px_60px_rgba(0,0,0,0.6)] !p-6",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "!rounded-xl !border !border-white/10 !bg-white/[0.05] hover:!bg-white/[0.09] !text-white/80 !text-sm !font-medium",
                dividerLine: "!bg-white/[0.08]",
                dividerText: "!text-white/25 !text-xs",
                formFieldLabel: "!text-white/40 !text-[11px] !font-semibold !uppercase !tracking-wider",
                formFieldInput: "!rounded-xl !border !border-white/10 !bg-[#111827] !text-white !text-sm focus:!border-indigo-500/60 focus:!ring-1 focus:!ring-indigo-500/30 !placeholder-white/20",
                formButtonPrimary: "!rounded-xl !bg-white !text-gray-900 !font-semibold !text-sm hover:!bg-slate-100 !shadow-lg",
                footerActionText: "!text-white/35 !text-sm",
                footerActionLink: "!text-indigo-400 hover:!text-indigo-300 !font-medium",
                formFieldErrorText: "!text-red-400 !text-xs",
                alertText: "!text-red-400 !text-sm",
              },
            }}
          />

          <p className="mt-4 text-center text-xs text-white/25">
            Need help?{" "}
            <Link href="/book-demo" className="text-indigo-400/70 hover:text-indigo-400 transition-colors">
              Book a setup call
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}
