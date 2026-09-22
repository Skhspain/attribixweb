import Image from "next/image";
import Link from "next/link";

const SHOPIFY_APP_URL = "https://apps.shopify.com/attribix-app";

export default function SignupPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#030712] flex">

      {/* LEFT */}
      <div className="hidden lg:flex w-[46%] h-full flex-col justify-center px-16 xl:px-20 relative overflow-hidden border-r border-white/[0.06]">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-10 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-sm">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-10">
            <Image src="/assets/logo.svg" alt="Attribix" width={32} height={32} />
            <span className="font-semibold text-white text-lg">Attribix</span>
          </Link>

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Free 14-day trial</p>
          <h2 className="text-4xl xl:text-[44px] font-bold text-white leading-[1.1] mb-4">
            Stop guessing.<br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Start knowing.
            </span>
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed mb-8">
            Server-side tracking and attribution for Meta and Google Ads, built for Shopify.
          </p>

          <ul className="space-y-2.5">
            {[
              "Server-side events reduce iOS and browser tracking gaps",
              "Clearer ROAS across Meta and Google Ads",
              "Connects directly to your Shopify store",
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
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 h-full flex flex-col justify-center items-center px-6 relative overflow-auto">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-[380px] py-8">
          <div className="lg:hidden mb-6 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
              <span className="font-semibold text-white">Attribix</span>
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-white mb-1">Get started</h1>
          <p className="text-white/35 text-sm mb-6">14-day free trial · No credit card required</p>

          <div className="rounded-2xl border border-white/[0.09] bg-[#0f172a] shadow-[0_32px_80px_rgba(0,0,0,0.7)] p-6">
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Attribix installs and connects through the Shopify App Store, so your store and ad
              accounts link up in one step.
            </p>
            <a
              href={SHOPIFY_APP_URL}
              className="block w-full rounded-xl bg-white text-gray-900 font-semibold text-sm text-center py-3 hover:bg-slate-100 transition-colors"
            >
              Take me to Shopify →
            </a>
          </div>

          <p className="mt-4 text-center text-xs text-white/20">
            Need help?{" "}
            <Link href="/book-demo" className="text-indigo-400/60 hover:text-indigo-400 transition-colors">
              Book a setup call
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}
