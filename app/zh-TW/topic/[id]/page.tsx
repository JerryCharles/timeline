import { getTopics, getTopicEvents } from '../../../services/api';
import ChineseTopicContent from '../../../components/ChineseTopicContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Disable caching for this page to always get fresh data
export const revalidate = 0;

// Generate dynamic metadata based on topic data
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const topicID = parseInt(params.id, 10);
  
  try {
    // Fetch the topic data
    const { topic, events } = await getTopicEvents(topicID);
    
    // Base URL
    const baseUrl = 'https://3ja.com';

    // Format the date for schema
    const publishDate = new Date(topic.time * 1000).toISOString();
    const modifyDate = new Date(topic.updateTime * 1000).toISOString();
    
    // Prepare article tags
    const articleTags = [...(topic.keywordsCN || [])];
    
    return {
      title: `${topic.titleCN} | 3ja.com`,
      description: topic.summaryCN,
      keywords: [...articleTags, topic.titleCN, '時間軸', '事件', '歷史'],
      openGraph: {
        title: `${topic.titleCN} | 3ja.com`,
        description: topic.summaryCN,
        url: `${baseUrl}/zh-TW/topic/${params.id}`,
        siteName: '3ja.com',
        locale: 'zh_TW',
        type: 'article',
        publishedTime: publishDate,
        modifiedTime: modifyDate,
        authors: ['3ja.com'],
        tags: articleTags,
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
        title: `${topic.titleCN} | 3ja.com`,
        description: topic.summaryCN,
        images: [topic.image || `${baseUrl}/twitter-image-zh.jpg`],
        site: '@3ja_com',
      },
      alternates: {
        canonical: `/zh-TW/topic/${params.id}`,
        languages: {
          'en': `/en/topic/${params.id}`,
          'zh-TW': `/zh-TW/topic/${params.id}`,
        },
      },
      other: {
        // Schema.org Article markup
        'schema:webpage': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: topic.titleCN,
          description: topic.summaryCN,
          image: topic.image || `${baseUrl}/og-image-zh.jpg`,
          datePublished: publishDate,
          dateModified: modifyDate,
          author: [{
            '@type': 'Organization',
            name: '3ja.com',
            url: baseUrl
          }],
          publisher: {
            '@type': 'Organization',
            name: '3ja.com',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/zh-TW/topic/${params.id}`
          },
          inLanguage: 'zh-TW'
        }),
        // Mobile app deep linking
        'apple-itunes-app': 'app-id=YOUR_APP_ID',
        'google-play-app': 'app-id=YOUR_APP_ID',
        'line-share': 'true'
      },
    };
  } catch (error) {
    return {
      title: '主題不存在 | 3ja.com',
      description: '找不到請求的主題。',
    };
  }
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