// src/app/api/facebook/callback/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");

  // 1) Basic validation
  if (!code) {
    return new NextResponse("Missing code", { status: 400 });
  }

  if (state !== "attribix-login") {
    return new NextResponse("Invalid state", { status: 400 });
  }

  // 2) Facebook app credentials + redirect URL
  const clientId = process.env.FACEBOOK_APP_ID;
  const clientSecret = process.env.FACEBOOK_APP_SECRET;
  const redirectUri = process.env.NEXT_PUBLIC_FACEBOOK_CALLBACK_URL;

  if (!clientId || !clientSecret || !redirectUri) {
    return new NextResponse("Facebook app not configured", { status: 500 });
  }

  // 3) Exchange code -> access_token
  const tokenUrl = new URL(
    "https://graph.facebook.com/v20.0/oauth/access_token"
  );
  tokenUrl.searchParams.set("client_id", clientId);
  tokenUrl.searchParams.set("client_secret", clientSecret);
  tokenUrl.searchParams.set("redirect_uri", redirectUri);
  tokenUrl.searchParams.set("code", code);

  let tokenRes: Response;
  try {
    tokenRes = await fetch(tokenUrl.toString(), { method: "GET" });
  } catch (err) {
    console.error("Error talking to Facebook token endpoint:", err);
    return new NextResponse("Failed to reach Facebook", { status: 502 });
  }

  if (!tokenRes.ok) {
    const text = await tokenRes.text();
    console.error("Facebook token error:", text);
    return new NextResponse("Failed to exchange code", { status: 400 });
  }

  const tokenData = (await tokenRes.json()) as {
    access_token: string;
    token_type?: string;
    expires_in?: number;
  };

  const accessToken = tokenData.access_token;

  // 4) OPTIONAL: send token to your Attribix API (Remix app) to store it
  const apiBase = process.env.NEXT_PUBLIC_ATTRIBIX_API_BASE;
  const apiKey = process.env.NEXT_PUBLIC_ATTRIBIX_API_KEY;

  if (apiBase && apiKey) {
    try {
      await fetch(`${apiBase}/api/facebook/connect`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-attribix-key": apiKey,
        },
        body: JSON.stringify({ accessToken }),
      });
    } catch (err) {
      console.error("Error sending FB token to Attribix API:", err);
      // we still redirect the user; you can choose to fail hard instead
    }
  } else {
    console.warn(
      "Attribix API base or key missing; skipping /api/facebook/connect call"
    );
  }

  // 5) Set a short-lived cookie for the website and redirect to analytics
  const res = NextResponse.redirect(new URL("/analytics", req.url));
  res.cookies.set("attribix_fb_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });

  return res;
}
