import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;
const CAPI_TOKEN = process.env.FACEBOOK_CAPI_TOKEN;
const API_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

function hash(value: string) {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !CAPI_TOKEN) {
    return NextResponse.json({ error: "Pixel not configured" }, { status: 500 });
  }

  const body = await req.json();
  const { eventName, eventId, email, phone, firstName, lastName, customData } = body;

  const userData: Record<string, string> = {};
  if (email) userData.em = hash(email);
  if (phone) userData.ph = hash(phone);
  if (firstName) userData.fn = hash(firstName);
  if (lastName) userData.ln = hash(lastName);

  // Forward client IP + user agent for better matching
  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "";
  const clientUserAgent = req.headers.get("user-agent") ?? "";
  if (clientIp) userData.client_ip_address = clientIp;
  if (clientUserAgent) userData.client_user_agent = clientUserAgent;

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId, // must match browser pixel event_id for deduplication
    event_source_url: req.headers.get("referer") ?? "",
    action_source: "website",
    user_data: userData,
    ...(customData ? { custom_data: customData } : {}),
  };

  const res = await fetch(`${API_URL}?access_token=${CAPI_TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [event] }),
  });

  const json = await res.json();
  if (!res.ok) {
    console.error("[FB CAPI]", json);
    return NextResponse.json({ error: json }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
