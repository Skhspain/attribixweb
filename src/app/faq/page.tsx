// src/app/faq/page.tsx
import Link from "next/link";
import faq from "@/content/faq.json";

// Type guard (optional safety)
type FAQ = { q: string; a: string };
function isFAQArray(x: unknown): x is FAQ[] {
  return Array.isArray(x) && x.every(i => i && typeof i.q === "string" && typeof i.a === "string");
}

export default function FAQPage() {
  const items: FAQ[] = isFAQArray(faq) ? faq : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(i => ({
      "@type": "Question",
      "name": i.q,
      "acceptedAnswer": { "@type": "Answer", "text": i.a }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      <main className="mx-auto max-w-5xl px-4 py-20">
        {/* JSON-LD for rich results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <h1 className="text-4xl font-extrabold">FAQ</h1>
        <p className="mt-2 text-white/70">
          Common questions about Attribix. Can’t find your answer?{" "}
          <Link href="/contact" className="underline underline-offset-2">Contact us</Link>.
        </p>

        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {items.map((item, i) => (
            <details key={i} className="group open:bg-white/5">
              <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-4">
                <span className="text-base font-semibold">{item.q}</span>
                <span className="shrink-0 rounded-full border border-white/20 px-2 text-xs text-white/70 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-5 pb-5 -mt-2 text-sm text-white/80">{item.a}</div>
            </details>
          ))}
          {items.length === 0 && (
            <div className="px-5 py-6 text-sm text-white/70">No FAQ items yet. Add some to <code className="text-white/90">src/content/faq.json</code>.</div>
          )}
        </div>

        <div className="mt-10">
          <Link href="/analytics" className="inline-block rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90">
            Open analytics
          </Link>
        </div>
      </main>
    </div>
  );
}
