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
    // Parse the Accept-Language header
    const acceptedLocales = acceptLanguage.split(',')
      .map(locale => {
        const [lang, q = 'q=1.0'] = locale.trim().split(';');
        const quality = parseFloat(q.split('=')[1]);
        return { lang, quality };
      })
      .sort((a, b) => b.quality - a.quality);

    // Find the first accepted locale that is supported
    for (const { lang } of acceptedLocales) {
      // Check for exact match
      if (locales.includes(lang)) {
        return lang;
      }
      
      // Check for language match (e.g., 'zh-TW' matches 'zh')
      const langPrefix = lang.split('-')[0];
      const matchingLocale = locales.find(locale => 
        locale.startsWith(langPrefix + '-') || locale === langPrefix
      );
      
      if (matchingLocale) {
        return matchingLocale;
      }
    }
  }

  // Default to English
  return defaultLocale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;
  
  // Get the preferred locale
  const locale = getLocale(request);
  
  // Only add locale prefix for non-English languages
  if (locale === 'en') {
    return;
  }
  
  // Redirect to the locale-prefixed path for non-English languages
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  // Match all request paths except for:
  // - API routes (/api/*)
  // - Static files (/_next/*)
  // - Public files (/public/*)
  // - Favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|public|favicon.ico).*)'],
}; 