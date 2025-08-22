import Image from "next/image";
import Link from "next/link";
import BookDemoForm from "../../components/BookDemoForm";

export const metadata = {
  title: "Book a demo | Attribix",
  description: "Book a live walkthrough of Attribix and get a tailored tracking plan.",
};

export default function BookDemoPage() {
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
            <Link href="/#features" className="opacity-80 hover:opacity-100">Features</Link>
            <Link href="/#how" className="opacity-80 hover:opacity-100">How it works</Link>
            <Link href="/#integrations" className="opacity-80 hover:opacity-100">Integrations</Link>
            <Link href="/#pricing" className="opacity-80 hover:opacity-100">Pricing</Link>
            <Link href="/#contact" className="opacity-80 hover:opacity-100">Contact</Link>
            <Link href="/login" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15">
              Log in
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
          Get a walkthrough
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05]">
          Book a demo
        </h1>
        <p className="mt-5 text-lg text-white/80 max-w-xl">
          20–30 minutes on Zoom. We’ll review your current tracking, show live reports, and outline the setup plan.
        </p>
        <div className="mt-7">
          <Link
            href="/"
            className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10"
          >
            Go to homepage
          </Link>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <BookDemoForm />
          <aside className="md:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold">What you’ll see</h3>
              <ul className="mt-2 list-disc ml-5 text-white/70 space-y-1">
                <li>Live dashboard with ROAS and product attribution</li>
                <li>How we stitch sessions and UTMs</li>
                <li>Export & reporting options</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold">Trusted by ecommerce teams</h3>
              <p className="text-white/70 mt-2">Logos/testimonials placeholder — add when ready.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold">Prefer email?</h3>
              <a className="text-blue-300 font-medium" href="mailto:hello@attribix.com">
                hello@attribix.com
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
