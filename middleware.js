import { NextResponse } from 'next/server';

// List of supported locales
const locales = ['en', 'zh-TW'];
const defaultLocale = 'en';

// Get the preferred locale from the request
function getLocale(request) {
  // Get the locale from the cookie if it exists
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Get the locale from the Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const acceptedLocales = acceptLanguage.split(',')
      .map(locale => locale.split(';')[0].trim())
      .map(locale => locale.toLowerCase());

    // Check for Chinese variants first
    if (acceptedLocales.some(locale => locale.startsWith('zh'))) {
      return 'zh-TW';
    }

    // Check for English
    if (acceptedLocales.some(locale => locale.startsWith('en'))) {
      return 'en';
    }
  }

  // Default to English
  return defaultLocale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Skip for static files and api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/static/') ||
    pathname.includes('.') // Skip files with extensions
  ) {
    return;
  }

  // Get current locale from URL path
  const pathnameLocale = locales.find(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Get the preferred locale
  const preferredLocale = getLocale(request);
  
  // If URL has no locale, redirect to the preferred locale
  if (!pathnameLocale) {
    const url = new URL(`/${preferredLocale}${pathname}`, request.url);
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url);
  }

  // If URL locale doesn't match cookie locale, show language switch tip
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && cookieLocale !== pathnameLocale) {
    const response = NextResponse.next();
    response.headers.set('x-language-mismatch', 'true');
    response.headers.set('x-preferred-language', cookieLocale);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  // Match all request paths except for:
  // - API routes (/api/*)
  // - Static files (/_next/*)
  // - Public files (/public/*)
  // - Favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|public|favicon.ico).*)'],
}; 