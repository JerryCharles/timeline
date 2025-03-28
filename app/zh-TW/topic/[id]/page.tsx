import { getTopics, getTopicEvents } from '../../../services/api';
import ChineseTopicContent from '../../../components/ChineseTopicContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Generate dynamic metadata based on topic data
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const topicID = parseInt(params.id, 10);
  
  try {
    // Fetch the topic data
    const { topic, events } = await getTopicEvents(topicID);
    
    // Extract keywords from events labels
    const eventLabels = events.flatMap(event => event.labelsCN).filter(Boolean);
    const uniqueLabels = Array.from(new Set(eventLabels));
    
    // Base URL
    const baseUrl = 'https://3ja.com';
    
    return {
      title: `${topic.titleCN} | Timeline`,
      description: topic.summaryCN,
      keywords: [...uniqueLabels, topic.titleCN, '時間軸', '事件', '歷史'],
      openGraph: {
        title: `${topic.titleCN} | Timeline`,
        description: topic.summaryCN,
        url: `${baseUrl}/zh-TW/topic/${params.id}`,
        siteName: 'Timeline',
        locale: 'zh_TW',
        type: 'article',
        publishedTime: new Date(topic.time * 1000).toISOString(),
        modifiedTime: new Date(topic.updateTime * 1000).toISOString(),
        images: [
          {
            url: topic.image || `${baseUrl}/og-image-zh.jpg`,
            width: 1200,
            height: 630,
            alt: topic.titleCN,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${topic.titleCN} | Timeline`,
        description: topic.summaryCN,
        images: [topic.image || `${baseUrl}/twitter-image-zh.jpg`],
      },
      alternates: {
        canonical: `/zh-TW/topic/${params.id}`,
        languages: {
          'en': `/en/topic/${params.id}`,
          'zh-TW': `/zh-TW/topic/${params.id}`,
        },
      },
    };
  } catch (error) {
    return {
      title: '主題不存在 | Timeline',
      description: '找不到請求的主題。',
    };
  }
}

export async function generateStaticParams() {
  const { topics } = await getTopics();
  
  return topics.map((topic) => ({
    id: topic.topicID.toString(),
  }));
}

export default async function ChineseTopicPage({ params }: { params: { id: string } }) {
  // Convert id to number since the API expects a number
  const topicID = parseInt(params.id, 10);
  
  try {
    // Server-side data fetching for the specific topic and its events
    const { topic, events } = await getTopicEvents(topicID);
    
    // Sort events by time (latest first)
    const sortedEvents = [...events].sort((a, b) => b.time - a.time);

    return (
      <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50 dark:bg-gray-900">
        <ChineseTopicContent
          topic={topic}
          events={sortedEvents}
          locale="zh-TW"
        />
      </main>
    );
  } catch (error) {
    // If the topic doesn't exist, trigger the 404 page
    notFound();
  }
} 