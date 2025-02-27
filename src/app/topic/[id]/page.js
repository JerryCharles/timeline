import ClientTopicPage from './client-page.js';

// This function generates dynamic params at runtime
export const dynamicParams = true;

// Remove generateStaticParams since we're using SSR
export default async function TopicPage({ params: rawParams }) {
  // Await the params
  const params = await rawParams;
  const { id } = params;
  
  return <ClientTopicPage id={id} />;
} 