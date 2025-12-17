import { getTopics, getTopicEvents } from '../../../services/api';
import TopicContent from '../../../components/TopicContent';
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
    const baseUrl = 'https://tl.3ja.com';

    // Format the date for schema
    const publishDate = new Date(topic.time * 1000).toISOString();
    const modifyDate = new Date(topic.updateTime * 1000).toISOString();
    
    // Prepare article tags
    const articleTags = [...(topic.keywords || [])];
    
    return {
      title: `${topic.title} | Timeline`,
      description: topic.summary,
      keywords: [...articleTags, topic.title, 'timeline', 'events', 'history'],
      openGraph: {
        title: `${topic.title} | Timeline`,
        description: topic.summary,
        url: `${baseUrl}/en/topic/${params.id}`,
        siteName: 'Timeline',
        locale: 'en_US',
        type: 'article',
        publishedTime: publishDate,
        modifiedTime: modifyDate,
        authors: ['Timeline'],
        tags: articleTags,
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
        site: '@3ja_com',
      },
      alternates: {
        canonical: `/en/topic/${params.id}`,
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
          headline: topic.title,
          description: topic.summary,
          image: topic.image || `${baseUrl}/og-image-en.jpg`,
          datePublished: publishDate,
          dateModified: modifyDate,
          author: [{
            '@type': 'Organization',
            name: 'Timeline',
            url: baseUrl
          }],
          publisher: {
            '@type': 'Organization',
            name: 'Timeline',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/en/topic/${params.id}`
          }
        }),
        // Mobile app deep linking
        'apple-itunes-app': 'app-id=YOUR_APP_ID',
        'google-play-app': 'app-id=YOUR_APP_ID',
      },
    };
  } catch (error) {
    return {
      title: 'Topic Not Found | Timeline',
      description: 'The requested topic could not be found.',
    };
  }
}

export default async function EnglishTopicPage({ params }: { params: { id: string } }) {
  // Convert id to number since the API expects a number
  const topicID = parseInt(params.id, 10);
  
  try {
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
  } catch (error) {
    // If the topic doesn't exist, trigger the 404 page
    notFound();
  }
} 