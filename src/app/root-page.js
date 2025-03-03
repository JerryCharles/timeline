import { redirect } from 'next/navigation';

// This is a simple server component that redirects to the appropriate language
export default function RootPage() {
  // Redirect to the default language (English)
  redirect('/en');
} 