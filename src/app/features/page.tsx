import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Features | Attribix",
  description:
    "Explore Attribix features: server-side tracking, source attribution, ROAS, product-level insights, and export.",
};

export default function FeaturesPage() {
  const bullets = [
    { title: "Server‑side + client‑side tracking", body: "Hardened events via Conversion APIs with graceful client fallbacks." },
    { title: "True multi‑touch attribution", body: "Session stitching + UTM resolution across ads, email, and organic." },
    { title: "Product‑level ROAS", body: "Tie revenue to products, campaigns, and creatives for decisive scaling." },
    { title: "Privacy‑compliant", body: "Cookieless‑ready, hashed identifiers, and regional consent handling." },
    { title: "Exports & webhooks", body: "Get your raw events out for BI, or automate in your stack." },
  ];

  const steps = [
    { n: "01", t: "Capture", d: "Pixel + server webhooks collect clean purchase and browse events." },
    { n: "02", t: "Resolve", d: "UTMs, referrers, and session IDs stitched into one identity." },
    { n: "03", t: "Attribute", d: "Rules + models assign credit to channels, ads, and products." },
  ];

  const faqs = [
    { q: "Does this replace my pixel?", a: "No—you’ll still run pixels. Attribix hardens and enriches them with server events and unified attribution." },
    { q: "What platforms are supported?", a: "Meta, Google, TikTok, and Snapchat are first‑class; generic webhooks cover the rest." },
    { q: "Can I export everything?", a: "Yes. CSV/JSON exports and an API endpoint let you pull filtered datasets anytime." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      {/* === HEADER (identical to homepage) === */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="font-semibold">Attribix</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {/* note: links point back to homepage sections */}
            <Link href="/#features" className="opacity-80 hover:opacity-100">Features</Link>
            <Link href="/#how" className="opacity-80 hover:opacity-100">How it works</Link>
            <Link href="/#integrations" className="opacity-80 hover:opacity-100">Integrations</Link>
            <Link href="/#pricing" className="opacity-80 hover:opacity-100">Pricing</Link>
            <Link href="/#contact" className="opacity-80 hover:opacity-100">Contact</Link>
            <Link href="/login" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15">Log in</Link>
          </nav>
        </div>
      </header>

      {/* HERO (kept in your style) */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
          Explore
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05]">
          Features that make attribution actually usable
        </h1>
        <p className="mt-5 text-lg text-white/80 max-w-xl">
          From precise event capture to product‑level ROAS, Attribix turns messy tracking into
          clear, scalable decisions.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/book-demo"
            className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90"
          >
            Book a demo
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10"
          >
            Go to homepage
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">How it works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map(s => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-4xl font-extrabold text-white/70">{s.n}</div>
              <div className="mt-3 text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-white/20 p-8 text-center text-white/60">
          System diagram placeholder — drop your PNG/SVG here (tracking → resolver → attribution → reports).
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">Key capabilities</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {bullets.map(b => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-lg font-semibold">{b.title}</div>
              <p className="mt-2 text-sm text-white/70">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENS */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">Screens</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 aspect-[16/10] flex items-center justify-center text-white/50">
            Dashboard screenshot placeholder
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 aspect-[16/10] flex items-center justify-center text-white/50">
            Product attribution screenshot placeholder
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">FAQs</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10">
          {faqs.map((f, i) => (
            <details key={i} className="p-6 [&_summary]:cursor-pointer">
              <summary className="font-semibold">{f.q}</summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold">Ready to see it with your data?</h3>
            <p className="text-white/80">We’ll walk through your store and set up tracking best practices.</p>
          </div>
          <Link href="/book-demo" className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90">
            Book a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
