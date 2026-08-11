import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/sendLeadEmail";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const storeUrl = String(body.storeUrl || "").trim();
  const goals = String(body.goals || "").trim();

  // Honeypot — real visitors never populate this hidden field.
  if (String(body.company_website || "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid name and email." }, { status: 400 });
  }

  const result = await sendLeadEmail({
    subject: `Demo request — ${name}`,
    replyTo: email,
    fields: {
      Name: name,
      Email: email,
      "Store URL": storeUrl || "—",
      "What they want to improve": goals || "—",
    },
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "We couldn't send your request. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
