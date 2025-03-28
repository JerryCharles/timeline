import { getTopics, getTopicEvents } from '../../../services/api';
import TopicContent from '../../../components/TopicContent';
import { Metadata } from 'next';

// Generate dynamic metadata based on topic data
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const topicID = parseInt(params.id, 10);
  
  // Fetch the topic data
  const { topic, events } = await getTopicEvents(topicID);
  
  // Extract keywords from events labels
  const eventLabels = events.flatMap(event => event.labels).filter(Boolean);
  const uniqueLabels = Array.from(new Set(eventLabels));
  
  // Base URL
  const baseUrl = 'https://3ja.com';
  
  return {
    title: `${topic.title} | Timeline`,
    description: topic.summary,
    keywords: [...uniqueLabels, topic.title, 'timeline', 'events', 'history'],
    openGraph: {
      title: `${topic.title} | Timeline`,
      description: topic.summary,
      url: `${baseUrl}/en/topic/${params.id}`,
      siteName: 'Timeline',
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(topic.time * 1000).toISOString(),
      modifiedTime: new Date(topic.updateTime * 1000).toISOString(),
      images: [
        {
          url: topic.image || `${baseUrl}/og-image-en.jpg`,
          width: 1200,
          height: 630,
          alt: topic.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${topic.title} | Timeline`,
      description: topic.summary,
      images: [topic.image || `${baseUrl}/twitter-image-en.jpg`],
    },
    alternates: {
      canonical: `/en/topic/${params.id}`,
      languages: {
        'en': `/en/topic/${params.id}`,
        'zh-TW': `/zh-TW/topic/${params.id}`,
      },
    },
  };
}

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
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50 dark:bg-gray-900">
      <TopicContent
        topic={topic}
        events={sortedEvents}
        locale="en-US"
      />
    </main>
  );
} 