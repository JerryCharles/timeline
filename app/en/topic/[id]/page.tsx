import { getTopics, getTopicEvents } from '../../../services/api';
import TopicContent from '../../../components/TopicContent';

export async function generateStaticParams() {
  const { topics } = await getTopics();
  
  return topics.map((topic) => ({
    id: topic.topicID.toString(),
  }));
}

export default async function EnglishTopicPage({ params }: { params: { id: string } }) {
  // Convert id to number since the API expects a number
  const topicID = parseInt(params.id, 10);
  
  // Server-side data fetching for the specific topic and its events
  const { topic, events } = await getTopicEvents(topicID);
  
  // Sort events by time (latest first)
  const sortedEvents = [...events].sort((a, b) => b.time - a.time);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <TopicContent
        topic={topic}
        events={sortedEvents}
        locale="en-US"
      />
    </main>
  );
} 