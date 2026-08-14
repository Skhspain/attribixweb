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
  const business = String(body.business || "").trim();
  const website = String(body.website || "").trim();
  const email = String(body.email || "").trim();
  const services = Array.isArray(body.services) ? body.services.map(String) : [];
  const adSpend = String(body.adSpend || "").trim();
  const notes = String(body.notes || "").trim();

  if (!name || !business || !website || !email || !isEmail(email) || services.length === 0 || !adSpend || !notes) {
    return NextResponse.json({ ok: false, error: "Please fill in all required fields." }, { status: 400 });
  }

  const result = await sendLeadEmail({
    subject: `Ad management inquiry: ${business}`,
    replyTo: email,
    fields: {
      Name: name,
      Business: business,
      Website: website,
      Email: email,
      Services: services,
      "Monthly ad spend": adSpend,
      Notes: notes,
    },
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "We couldn't send your inquiry. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
