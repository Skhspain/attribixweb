import Link from "next/link";
import Image from "next/image";
import CopyEmail from "./CopyEmail";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" width={20} height={20} alt="Attribix" />
            <span>Attribix</span>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/features" className="hover:text-white/90">Features</Link>
            <Link href="/pricing" className="hover:text-white/90">Pricing</Link>
            <Link href="/faq" className="hover:text-white/90">FAQ</Link>
            <Link href="/agency" className="hover:text-white/90">Agency</Link>
            <Link href="/book-demo" className="hover:text-white/90">Book demo</Link>
          </nav>

          <div className="flex gap-4">
            <CopyEmail email="hello@attribix.app" />
            <Link href="/privacy" className="hover:text-white/90">Privacy</Link>
            <Link href="/terms" className="hover:text-white/90">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
