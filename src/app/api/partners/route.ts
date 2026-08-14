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

  // Honeypot: real visitors never populate this hidden field.
  if (String(body.company_website || "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const agency = String(body.agency || "").trim();
  const clients = String(body.clients || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid name and email." }, { status: 400 });
  }

  const result = await sendLeadEmail({
    subject: `Partner interest: ${agency || name}`,
    replyTo: email,
    fields: {
      Name: name,
      Email: email,
      "Agency / business": agency || "—",
      "Approx. clients": clients || "—",
      Message: message || "—",
    },
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "We couldn't send your application. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
