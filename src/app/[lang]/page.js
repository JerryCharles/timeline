import LangHomePageClient from './client-page';

// Generate static params for all supported languages
export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'zh-TW' }
  ];
}

// Server component that passes params to the client component
export default function LangHomePage({ params }) {
  return <LangHomePageClient params={params} />;
} 