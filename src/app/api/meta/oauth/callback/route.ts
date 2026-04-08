// Proxy Meta OAuth callback — forward to Fly backend (not redirect, to preserve redirect_uri match)
export async function GET(request: Request) {
  const url = new URL(request.url);
  const targetUrl = `https://api.attribix.app/api/meta/oauth/callback${url.search}`;

  const res = await fetch(targetUrl, {
    headers: { "Accept": "text/html,application/json" },
    redirect: "manual",
  });

  // If Fly returns a redirect, forward it
  if (res.status >= 300 && res.status < 400) {
    const location = res.headers.get("location") || "/app/integrations/meta";
    return Response.redirect(location, 302);
  }

  // Otherwise pass through the response
  const body = await res.text();
  return new Response(body, {
    status: res.status,
    headers: { "Content-Type": res.headers.get("content-type") || "text/html" },
  });
}
