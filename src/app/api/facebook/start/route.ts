import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const clientId = process.env.FACEBOOK_APP_ID;
  const callback = process.env.NEXT_PUBLIC_FACEBOOK_CALLBACK_URL;

  if (!clientId || !callback) {
    return new NextResponse("Facebook app not configured", { status: 500 });
  }

  const url = new URL("https://www.facebook.com/v20.0/dialog/oauth");

  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", callback);
  url.searchParams.set("response_type", "code");

  // Ask only for business-type permissions that Business Login supports
  // (ads_read is a good starting point for your use-case).
  url.searchParams.set("scope", "ads_read");
  url.searchParams.set("state", "attribix-login");

  return NextResponse.redirect(url.toString());
}
