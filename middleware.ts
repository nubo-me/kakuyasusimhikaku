import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Strict CSP (inline script を避ける)。Google Analytics 設置時は gtag.js のみ許可。
const securityHeaders: [string, string][] = [
  [
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' https://www.googletagmanager.com",
      "connect-src 'self' https://firestore.googleapis.com https://www.google-analytics.com https://www.googletagmanager.com",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "frame-src https://www.youtube.com https://player.vimeo.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ')
  ],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'SAMEORIGIN'],
  ['Permissions-Policy', 'geolocation=(), microphone=(), camera=()'],
];

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  securityHeaders.forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

export const config = {
  matcher: '/:path*',
};
