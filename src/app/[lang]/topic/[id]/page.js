import TopicPageClient from './client-page';
import { getTopicDetails } from '../../../../services/api';

// This function generates dynamic params at runtime
export const dynamicParams = true;

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  // Await the params
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams?.id;
  const lang = resolvedParams?.lang || 'en';
  
  try {
    // Parse the ID as an integer
    const numericId = parseInt(id, 10);
    
    // Check if the ID is a valid number
    if (isNaN(numericId)) {
      return {
        title: lang === 'zh-TW' ? '無效的主題ID' : 'Invalid Topic ID',
        description: lang === 'zh-TW' ? '提供的主題ID無效。' : 'The provided topic ID is invalid.',
      };
    }
    
    // Fetch topic data
    const topicData = await getTopicDetails(numericId);
    
    // If topic not found, return default metadata
    if (topicData.notFound || topicData.error) {
      return {
        title: lang === 'zh-TW' ? '找不到主題' : 'Topic Not Found',
        description: lang === 'zh-TW' ? '找不到請求的主題。' : 'The requested topic could not be found.',
      };
    }
    
    const { topic } = topicData;
    
    // Get title in the correct language
    const title = lang === 'zh-TW' 
      ? (topic.titleZh || topic.titleCN || topic.title) 
      : topic.title || 'Historical Timeline';
    
    // Get description in the correct language
    const description = lang === 'zh-TW'
      ? (topic.summaryZh || topic.summaryCN || topic.summary)
      : topic.summary || 'Explore this historical timeline and discover significant events.';
    
    // Get image URL
    const imageUrl = topic.coverUrl || '/og-image.jpg';
    
    return {
      title: title,
      description: description,
      alternates: {
        languages: {
          'en': `/en/topic/${id}`,
          'zh-TW': `/zh-TW/topic/${id}`,
        },
      },
      openGraph: {
        title: title,
        description: description,
        url: `/${lang}/topic/${id}`,
        type: 'article',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: lang === 'zh-TW' ? '時間線主題' : 'Timeline Topic',
      description: lang === 'zh-TW' 
        ? '探索歷史事件及其對我們世界的影響。' 
        : 'Explore historical events and their impact on our world.',
    };
  }
}

// Server component that passes params to the client component
export default async function TopicPage({ params }) {
  // Await the params
  const resolvedParams = await Promise.resolve(params);
  
  return <TopicPageClient params={resolvedParams} />;
}

// Generate static params for all supported languages
export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'zh-TW' }
  ];
} 