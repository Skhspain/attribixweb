"use client";

import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#030712] flex">

      {/* ── LEFT ── */}
      <div className="hidden lg:flex w-[46%] h-full flex-col justify-center px-16 xl:px-20 relative overflow-hidden border-r border-white/[0.06]">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-10 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 opacity-20"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-sm">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-10">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">A</div>
            <span className="font-semibold text-white text-lg">Attribix</span>
          </Link>

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Free 14-day trial</p>
          <h2 className="text-4xl xl:text-[44px] font-bold text-white leading-[1.1] mb-4">
            Stop guessing.<br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Start knowing.</span>
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed mb-8">
            One dashboard for ad tracking, attribution, email, reviews, social scheduling, and SEO — built for Shopify.
          </p>

          <ul className="space-y-2.5 mb-8">
            {[
              "iOS-proof attribution via server-side events",
              "True ROAS across Meta, Google & Email",
              "Automated reviews & SEO fixes",
              "No credit card required",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-white/55">
                <svg className="h-4 w-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shrink-0">S</div>
            <div>
              <p className="text-sm text-white/70 leading-snug">"Cut our CPP by 41% in the first month."</p>
              <p className="text-xs text-white/30 mt-0.5">Sarah K. · Shopify store owner</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className="flex-1 h-full flex flex-col justify-center items-center px-6 relative overflow-auto">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-[380px] py-8">
          <div className="lg:hidden mb-6 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">A</div>
              <span className="font-semibold text-white">Attribix</span>
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
          <p className="text-white/35 text-sm mb-6">14-day free trial · No credit card required</p>

          <SignUp
            forceRedirectUrl="/analytics"
            appearance={{
              variables: {
                colorBackground: "#0f172a",
                colorText: "#f1f5f9",
                colorTextSecondary: "#64748b",
                colorInputBackground: "#1e293b",
                colorInputText: "#f1f5f9",
                colorPrimary: "#6366f1",
                borderRadius: "10px",
                fontSize: "14px",
              },
              elements: {
                rootBox: "w-full",
                card: "!bg-[#0f172a] !border !border-white/[0.09] !rounded-2xl !shadow-[0_32px_80px_rgba(0,0,0,0.7)] !p-6",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "!rounded-xl !border !border-white/10 !bg-white/[0.05] hover:!bg-white/[0.09] !text-white/80 !text-sm !font-medium !transition-colors",
                dividerLine: "!bg-white/[0.07]",
                dividerText: "!text-white/20 !text-xs",
                formFieldLabel: "!text-white/40 !text-[11px] !font-semibold !uppercase !tracking-widest",
                formFieldInput: "!rounded-xl !border !border-white/[0.09] !bg-[#1e293b] !text-white !text-sm focus:!border-indigo-500/70",
                formButtonPrimary: "!rounded-xl !bg-white !text-gray-900 !font-semibold !text-sm hover:!bg-slate-100",
                footerActionText: "!text-white/30 !text-sm",
                footerActionLink: "!text-indigo-400 hover:!text-indigo-300 !font-medium",
                formFieldErrorText: "!text-red-400 !text-xs",
              },
            }}
          />

          <p className="mt-4 text-center text-xs text-white/20">
            Need help?{" "}
            <Link href="/book-demo" className="text-indigo-400/60 hover:text-indigo-400 transition-colors">Book a setup call</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
