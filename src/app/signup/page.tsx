"use client";

import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignupPage() {
  return (
    <>
      <style jsx global>{`
        .attribix-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.7;
          mix-blend-mode: screen;
        }
        .attribix-glow-1 {
          width: 420px; height: 420px; top: -140px; left: -140px;
          background: radial-gradient(circle at 30% 0%, #4f46e5, transparent 60%);
          animation: attribix-float-1 26s ease-in-out infinite;
        }
        .attribix-glow-2 {
          width: 380px; height: 380px; top: -160px; right: -80px;
          background: radial-gradient(circle at 70% 10%, #06b6d4, transparent 60%);
          animation: attribix-float-2 30s ease-in-out infinite;
        }
        .attribix-glow-3 {
          width: 520px; height: 520px; bottom: -240px; left: 50%;
          background: radial-gradient(circle at 50% 100%, #0ea5e9, transparent 65%);
          animation: attribix-float-3 32s ease-in-out infinite;
        }
        .attribix-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(to right, rgba(148,163,184,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(circle at center, black 0, transparent 75%);
          opacity: 0.6;
        }
        @keyframes attribix-float-1 { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(6%,8%,0) scale(1.05); } }
        @keyframes attribix-float-2 { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-5%,10%,0) scale(1.03); } }
        @keyframes attribix-float-3 { 0%,100% { transform: translate3d(-50%,0,0) scale(1); } 50% { transform: translate3d(-50%,-6%,0) scale(1.06); } }
      `}</style>

      <div className="relative min-h-screen bg-gradient-to-b from-[#050816] via-[#050816] to-[#020617] text-slate-50">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="attribix-glow attribix-glow-1" />
          <div className="attribix-glow attribix-glow-2" />
          <div className="attribix-glow attribix-glow-3" />
          <div className="attribix-grid" />
        </div>

        <Header />

        <main className="relative mx-auto flex max-w-5xl flex-col px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-xl">
            <div className="mb-8 text-center">
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Create your Attribix account
              </h1>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                One login for your{" "}
                <span className="bg-gradient-to-r from-[#4f46e5] via-[#06b6d4] to-[#38bdf8] bg-clip-text font-semibold text-transparent">
                  analytics
                </span>
                , attribution and reporting.
              </p>
            </div>

            <div className="flex justify-center">
              <SignUp
                routing="hash"
                afterSignUpUrl="/analytics"
                appearance={{
                  elements: {
                    rootBox: "w-full max-w-xl",
                    card: "rounded-3xl border border-slate-800/80 bg-slate-950/70 shadow-[0_20px_60px_rgba(15,23,42,0.85)] backdrop-blur-xl p-6 sm:p-8",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton:
                      "rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-500",
                    formFieldInput:
                      "rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40",
                    formFieldLabel:
                      "text-xs font-medium uppercase tracking-[0.18em] text-slate-400",
                    formButtonPrimary:
                      "rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold shadow-[0_18px_45px_rgba(15,23,42,0.55)] hover:bg-slate-100",
                    footerActionLink: "font-medium text-sky-300 hover:text-sky-200",
                  },
                }}
              />
            </div>

            <div className="mt-6 text-center text-xs text-slate-500">
              <p>
                Need help getting started?{" "}
                <Link href="/book-demo" className="font-medium text-sky-300 hover:text-sky-200">
                  Book a demo
                </Link>{" "}
                and we'll set up Attribix together.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
