import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Redirect old policy pages to the new ones under the [lang] directory
  if (pathname === '/privacy-policy' || pathname === '/cookie-policy' || pathname === '/terms-of-service') {
    // Default to English language
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/privacy-policy',
    '/cookie-policy',
    '/terms-of-service',
  ],
}; 