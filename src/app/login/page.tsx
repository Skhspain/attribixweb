"use client";

import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold">
            Log in to <span className="text-white/90">Attribix</span>
          </div>
          <p className="text-sm text-white/70 mt-1">Access your analytics dashboard</p>
        </div>

        <div className="flex justify-center">
          <SignIn
            forceRedirectUrl="/analytics"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-white/10 backdrop-blur border border-white/10 rounded-2xl shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton:
                  "rounded-xl bg-[#4285F4] text-white hover:opacity-90 shadow-md",
                formFieldInput:
                  "rounded-xl border border-white/20 bg-white/90 text-gray-900 px-3 py-2 text-sm",
                formButtonPrimary:
                  "rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold hover:opacity-90",
                footerActionLink: "text-sky-300 hover:text-sky-200",
              },
            }}
          />
        </div>

        <div className="text-center mt-4">
          <Link href="/" className="text-xs text-white/70 hover:text-white/90">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
