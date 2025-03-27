import { redirect } from 'next/navigation';

export default function Home() {
  // This page will never be rendered due to middleware redirection
  redirect('/en');
  return null;
} 