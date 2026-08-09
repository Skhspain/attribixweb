// src/lib/sendLeadEmail.ts
// Server-only. Sends lead notification emails via the Resend REST API
// (same provider already wired into the attribix-app backend for
// transactional mail). No SDK dependency — a plain authenticated fetch,
// matching the pattern used there.
//
// Requires the RESEND_API_KEY environment variable to be set. If it
// isn't, sendLeadEmail returns { ok: false } rather than pretending to
// succeed — callers must surface that as a real failure to the visitor.

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const LEAD_FROM = process.env.LEAD_NOTIFICATIONS_FROM || "Attribix Website <leads@attribix.app>";
const LEAD_TO = process.env.LEAD_NOTIFICATIONS_TO || "hello@attribix.app";

export type LeadEmailResult = { ok: true } | { ok: false; error: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fieldsToHtml(fields: Record<string, string | string[]>): string {
  const rows = Object.entries(fields)
    .map(([key, value]) => {
      const display = Array.isArray(value) ? value.join(", ") : value;
      return `<tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(key)}</td><td style="padding:4px 0;">${escapeHtml(display).replace(/\n/g, "<br/>")}</td></tr>`;
    })
    .join("");
  return `<table cellpadding="0" cellspacing="0">${rows}</table>`;
}

/**
 * Sends a lead notification email. Returns { ok: false } (never throws)
 * if RESEND_API_KEY isn't configured or the send fails, so callers can
 * return an honest failure to the visitor instead of a fake success.
 */
export async function sendLeadEmail(params: {
  subject: string;
  fields: Record<string, string | string[]>;
  replyTo?: string;
}): Promise<LeadEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("sendLeadEmail: RESEND_API_KEY is not configured");
    return { ok: false, error: "Email delivery is not configured" };
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: LEAD_FROM,
        to: [LEAD_TO],
        reply_to: params.replyTo,
        subject: params.subject,
        html: fieldsToHtml(params.fields),
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("sendLeadEmail: Resend API error", res.status, body);
      return { ok: false, error: "Email delivery failed" };
    }

    return { ok: true };
  } catch (err) {
    console.error("sendLeadEmail: request failed", err);
    return { ok: false, error: "Email delivery failed" };
  }
}
