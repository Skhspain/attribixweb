// Proxy Google OAuth start from attribix.app to api.attribix.app
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const targetUrl = `https://api.attribix.app/api/google/oauth/start${url.search}`;
  return NextResponse.redirect(targetUrl);
}
