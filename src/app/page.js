import LangHomePageClient from './[lang]/client-page';

// Server component that renders the English version by default
export default function RootPage() {
  return <LangHomePageClient params={{ lang: 'en' }} />;
} 