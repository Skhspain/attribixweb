// src/app/signup/page.tsx
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white px-4">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-2">Create your Attribix account</h1>
        <p className="text-white/70">Signup flow coming soon.</p>
        <div className="mt-6">
          <Link href="/login" className="rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
