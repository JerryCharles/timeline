import { getTopics, getTopicEvents } from '../../services/api';
import TopicContent from '../../components/TopicContent';
import { notFound } from 'next/navigation';

// Disable caching for this page to always get fresh data
export const revalidate = 0;

export default async function TopicPage({ params }: { params: { id: string } }) {
  // Convert id to number since the API expects a number
  const topicID = parseInt(params.id, 10);
  
  try {
    // Server-side data fetching for the specific topic and its events
    const { topic, events } = await getTopicEvents(topicID);
    
    // Sort events by time (latest first)
    const sortedEvents = [...events].sort((a, b) => b.time - a.time);

    return (
      <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
        <TopicContent
          topic={topic}
          events={sortedEvents}
        />
      </main>
    );
  } catch (error) {
    // If the topic doesn't exist, trigger the 404 page
    notFound();
  }
} 