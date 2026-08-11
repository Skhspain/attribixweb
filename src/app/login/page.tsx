"use client";

import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white flex items-center justify-center px-4 overflow-hidden">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative w-full max-w-sm">

        {/* Logo + title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-5">
            <Image src="/assets/logo.svg" alt="Attribix" width={32} height={32} />
            <span className="text-lg font-bold tracking-tight">Attribix</span>
          </Link>
          <h1 className="text-2xl font-extrabold">Welcome back</h1>
          <p className="text-sm text-white/50 mt-1">Sign in to your analytics dashboard</p>
        </div>

        {/* Recommended hint */}
        <p className="text-center text-xs text-white/35 mb-3">
          ↓ Recommended — sign in with Google
        </p>

        {/* Clerk card wrapper */}
        <div className="relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-white/5" />
          <div className="relative flex justify-center">
            <SignIn
              forceRedirectUrl="/analytics"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "bg-slate-900/80 backdrop-blur-sm border-0 shadow-none rounded-2xl w-full",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton:
                    "rounded-xl bg-[#4285F4] text-white hover:opacity-90 shadow-md border-0",
                  socialButtonsBlockButtonText: "text-white font-medium",
                  dividerLine: "bg-white/10",
                  dividerText: "text-white/30 text-xs",
                  formFieldLabel: "text-white/60 text-xs font-medium",
                  formFieldInput:
                    "rounded-xl border border-white/15 bg-white/8 text-white placeholder:text-white/30 px-3 py-2 text-sm focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30",
                  formButtonPrimary:
                    "rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold hover:bg-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.15)]",
                  footerActionLink: "text-cyan-400 hover:text-cyan-300",
                  footerActionText: "text-white/40 text-xs",
                  footer: "bg-transparent",
                  footerPages: "bg-transparent",
                  identityPreviewText: "text-white/80",
                  identityPreviewEditButton: "text-cyan-400",
                  formFieldSuccessText: "text-emerald-400",
                  formFieldErrorText: "text-red-400 text-xs",
                  alertText: "text-white/80 text-sm",
                  internal: "bg-transparent",
                },
                variables: {
                  colorBackground: "transparent",
                  colorText: "#ffffff",
                  colorTextSecondary: "rgba(255,255,255,0.5)",
                  colorInputBackground: "rgba(255,255,255,0.05)",
                  colorInputText: "#ffffff",
                  borderRadius: "0.75rem",
                },
              }}
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
