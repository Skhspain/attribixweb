// Proxy Meta OAuth start from attribix.app to api.attribix.app
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const targetUrl = `https://api.attribix.app/api/meta/oauth/start${url.search}`;
  return NextResponse.redirect(targetUrl);
}
