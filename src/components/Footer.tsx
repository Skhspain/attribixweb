import Link from "next/link";
import Image from "next/image";
import CopyEmail from "./CopyEmail";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.svg" width={20} height={20} alt="Attribix" />
          <span>Attribix</span>
        </Link>

        <div className="flex gap-4">
          <CopyEmail email="hello@attribix.app" />
          <Link href="/privacy" className="hover:text-white/90">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white/90">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
