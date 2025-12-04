// src/app/signup/page.tsx
"use client";

import React from "react";
import Link from "next/link";

/* -----------------------------------------------------
   Utility
----------------------------------------------------- */
function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/* -----------------------------------------------------
   Types
----------------------------------------------------- */
type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  storeUrl: string;
  monthlyAdSpend: string;
  agree: boolean;
};

export default function SignupPage() {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    storeUrl: "",
    monthlyAdSpend: "",
    agree: false,
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const { name, value } = target;

    const nextValue =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : value;

    setForm((prev) => ({
      ...prev,
      [name]: nextValue,
    }));

    setError(null);
    setSuccess(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!form.agree) {
      setError("You need to accept the terms to continue.");
      return;
    }

    setSubmitting(true);

    try {
      // TODO: Wire this up to your real signup endpoint
      console.log("Attribix signup payload:", form);

      await new Promise((resolve) => setTimeout(resolve, 700)); // tiny fake delay

      setSuccess("Account created! You can now log in with your credentials.");
    } catch (err) {
      setError("Something went wrong while creating your account.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Global styles for animated background */}
      <style jsx global>{`
        .attribix-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.7;
          mix-blend-mode: screen;
        }

        .attribix-glow-1 {
          width: 420px;
          height: 420px;
          top: -140px;
          left: -140px;
          background: radial-gradient(
            circle at 30% 0%,
            #4f46e5,
            transparent 60%
          );
          animation: attribix-float-1 26s ease-in-out infinite;
        }

        .attribix-glow-2 {
          width: 380px;
          height: 380px;
          top: -160px;
          right: -80px;
          background: radial-gradient(
            circle at 70% 10%,
            #06b6d4,
            transparent 60%
          );
          animation: attribix-float-2 30s ease-in-out infinite;
        }

        .attribix-glow-3 {
          width: 520px;
          height: 520px;
          bottom: -240px;
          left: 50%;
          background: radial-gradient(
            circle at 50% 100%,
            #0ea5e9,
            transparent 65%
          );
          animation: attribix-float-3 32s ease-in-out infinite;
        }

        .attribix-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              to right,
              rgba(148, 163, 184, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(148, 163, 184, 0.04) 1px,
              transparent 1px
            );
          background-size: 80px 80px;
          mask-image: radial-gradient(circle at center, black 0, transparent 75%);
          opacity: 0.6;
        }

        @keyframes attribix-float-1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(6%, 8%, 0) scale(1.05);
          }
        }

        @keyframes attribix-float-2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-5%, 10%, 0) scale(1.03);
          }
        }

        @keyframes attribix-float-3 {
          0%,
          100% {
            transform: translate3d(-50%, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-50%, -6%, 0) scale(1.06);
          }
        }
      `}</style>

      <main className="relative min-h-screen bg-gradient-to-b from-[#050816] via-[#050816] to-[#020617] text-slate-50">
        {/* Animated background glows + grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="attribix-glow attribix-glow-1" />
          <div className="attribix-glow attribix-glow-2" />
          <div className="attribix-glow attribix-glow-3" />
          <div className="attribix-grid" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-xl">
            {/* Heading */}
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

            {/* Card */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.85)] backdrop-blur-xl sm:p-8">
              {/* Quick actions */}
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  Continue with Shopify
                </button>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  Continue with Google
                </button>
              </div>

              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-800" />
                <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Or create with email
                </span>
                <div className="h-px flex-1 bg-slate-800" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                      placeholder="Stian Henriksen"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
                    >
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                      placeholder="you@brand.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={form.password}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
                    >
                      Confirm password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="storeUrl"
                      className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
                    >
                      Store / website URL
                    </label>
                    <input
                      id="storeUrl"
                      name="storeUrl"
                      type="url"
                      value={form.storeUrl}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                      placeholder="https://yourstore.com"
                    />
                    <p className="mt-1 text-[11px] text-slate-500">
                      Used to connect your Attribix workspace to your store.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="monthlyAdSpend"
                      className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
                    >
                      Monthly ad spend
                    </label>
                    <select
                      id="monthlyAdSpend"
                      name="monthlyAdSpend"
                      value={form.monthlyAdSpend}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                    >
                      <option value="">Select range</option>
                      <option value="<5k">&lt; $5k / month</option>
                      <option value="5k-25k">$5k – $25k / month</option>
                      <option value="25k-100k">$25k – $100k / month</option>
                      <option value="100k+">$100k+ / month</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={form.agree}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500/50"
                  />
                  <label htmlFor="agree" className="text-xs text-slate-400">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-sky-300 hover:text-sky-200"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-sky-300 hover:text-sky-200"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {error && (
                  <p className="rounded-2xl bg-red-500/10 px-3 py-2 text-xs text-red-300">
                    {error}
                  </p>
                )}
                {success && (
                  <p className="rounded-2xl bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">
                    {success}
                  </p>
                )}

                <div className="mt-2 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={cx(
                      "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition",
                      "bg-white text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.55)] hover:bg-slate-100",
                      "disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none"
                    )}
                  >
                    {submitting ? "Creating account…" : "Create account"}
                  </button>

                  <p className="text-xs text-slate-400">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-sky-300 hover:text-sky-200"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-6 text-center text-xs text-slate-500">
              <p>
                Need help getting started?{" "}
                <Link
                  href="/book-demo"
                  className="font-medium text-sky-300 hover:text-sky-200"
                >
                  Book a demo
                </Link>{" "}
                and we’ll set up Attribix together.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
