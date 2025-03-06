'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return [
    Script.default({
      src: "https://www.googletagmanager.com/gtag/js?id=G-ERF3V1L6GE",
      strategy: "afterInteractive",
      key: "gtag-script"
    }),
    Script.default({
      id: "google-analytics",
      strategy: "afterInteractive",
      key: "gtag-config",
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ERF3V1L6GE');
        `
      }
    })
  ];
} 