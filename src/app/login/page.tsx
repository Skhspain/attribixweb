// src/app/login/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: call your auth API; for now, simulate success and go to analytics
      window.location.href = "/analytics";
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold">Log in to <span className="text-white/90">Attribix</span></div>
          <p className="text-sm text-white/70 mt-1">Access your analytics dashboard</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-6">
          <label className="block">
            <span className="text-xs text-white/80">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/20 bg-white/90 text-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@company.com"
            />
          </label>

          <label className="block mt-4">
            <span className="text-xs text-white/80">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/20 bg-white/90 text-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Logging in…" : "Log in"}
          </button>

          <div className="mt-4 text-xs text-white/70 text-center">
            Don’t have an account?{" "}
            <Link href="/signup" className="underline underline-offset-2">
              Sign up
            </Link>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link href="/" className="text-xs text-white/70 hover:text-white/90">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
