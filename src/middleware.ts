import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().split(":")[0];
  const pathname = request.nextUrl.pathname;

  if (pathname === "/_next/static/css/86c2f2a3ff93beaa.css") {
    const url = request.nextUrl.clone();
    url.pathname = "/compat.css";
    return NextResponse.rewrite(url);
  }

  if (host === "bohoblockprinted.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.hostname = "www.bohoblockprinted.com";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  // Hostinger replaces hashed Next.js chunks on every deployment. HTML must
  // revalidate so a cached page never points at JavaScript from an old build.
  const isPageRequest =
    request.method === "GET" &&
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/media/") &&
    !pathname.includes(".");

  if (isPageRequest) {
    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, max-age=0, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
  }

  return response;
}

export const config = {
  matcher: [
    "/_next/static/css/86c2f2a3ff93beaa.css",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
