// Proxy Google OAuth callback — forward to Fly backend
export async function GET(request: Request) {
  const url = new URL(request.url);
  const targetUrl = `https://api.attribix.app/auth/google/callback${url.search}`;

  const res = await fetch(targetUrl, {
    headers: { "Accept": "text/html,application/json" },
    redirect: "manual",
  });

  if (res.status >= 300 && res.status < 400) {
    const location = res.headers.get("location") || "/app/integrations/google";
    return Response.redirect(location, 302);
  }

  const body = await res.text();
  return new Response(body, {
    status: res.status,
    headers: { "Content-Type": res.headers.get("content-type") || "text/html" },
  });
}
