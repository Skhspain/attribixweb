// src/components/CopyEmail.tsx
"use client";

import React from "react";

type CopyEmailProps = {
  email: string;
};

export default function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = React.useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Fallback: open mail client if clipboard fails
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hover:text-white/90 underline underline-offset-4"
      aria-label={`Copy ${email}`}
    >
      {copied ? "Copied!" : email}
    </button>
  );
}
