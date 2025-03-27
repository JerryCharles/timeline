import { NextRequest, NextResponse } from 'next/server';

// List of language locales supported
const LOCALES = ['en', 'zh-TW'];

// Function to determine the user's preferred language
function getPreferredLocale(request: NextRequest): string {
  // Check for language cookie first
  const cookieLocale = request.cookies.get('language')?.value;
  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    // Parse the Accept-Language header
    const preferred = acceptLanguage
      .split(',')
      .map(lang => {
        const [locale, weight] = lang.trim().split(';');
        return {
          locale: locale.split('-')[0], // Take just the language part, e.g., 'en' from 'en-US'
          weight: weight ? parseFloat(weight.split('=')[1]) : 1.0,
        };
      })
      .sort((a, b) => b.weight - a.weight);
    
    // Check for Chinese variants
    const isChinese = preferred.some(p => p.locale === 'zh');
    if (isChinese) {
      return 'zh-TW';
    }
    
    // Default to English for other languages
    return 'en';
  }
  
  // Default to English if no preference detected
  return 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip for assets, api routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // Skip files like favicon.ico, etc.
  ) {
    return NextResponse.next();
  }
  
  // Check if URL already has a locale prefix
  const pathnameHasLocale = LOCALES.some(
    locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  
  // If no locale in path, redirect based on preferred language
  if (!pathnameHasLocale) {
    // Skip redirect if switching language
    const referer = request.headers.get('referer') || '';
    const isLanguageSwitch = LOCALES.some(
      locale => referer.includes(`/${locale}/`) || referer.endsWith(`/${locale}`)
    );
    
    if (isLanguageSwitch) {
      return NextResponse.next();
    }
    
    const locale = getPreferredLocale(request);
    
    // For the root path or paths without locale
    const redirectUrl = new URL(
      pathname === '/' ? `/${locale}` : `/${locale}${pathname}`,
      request.url
    );
    
    // Copy all search params
    request.nextUrl.searchParams.forEach((value, key) => {
      redirectUrl.searchParams.set(key, value);
    });
    
    return NextResponse.redirect(redirectUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}; 