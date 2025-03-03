import ClientTopicPage from './client-page.js';
import { getTopicDetails } from '../../../services/api';

// This function generates dynamic params at runtime
export const dynamicParams = true;

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = params;
  
  try {
    // Fetch topic data
    const topicData = await getTopicDetails(id);
    
    // If topic not found, return default metadata
    if (topicData.notFound || topicData.error) {
      return {
        title: 'Topic Not Found',
        description: 'The requested topic could not be found.',
      };
    }
    
    const { topic } = topicData;
    
    // Get title in both languages
    const title = topic.title || 'Historical Timeline';
    const titleZhTW = topic.titleZh || topic.title || '歷史時間線';
    
    // Get description in both languages
    const description = topic.summary || 'Explore this historical timeline and discover significant events.';
    const descriptionZhTW = topic.summaryZh || topic.summary || '探索這個歷史時間線，發現重要事件。';
    
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
        url: `/topic/${id}`,
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
      title: 'Timeline Topic',
      description: 'Explore historical events and their impact on our world.',
    };
  }
}

// Remove generateStaticParams since we're using SSR
export default async function TopicPage({ params }) {
  const { id, lang } = params;
  
  return <ClientTopicPage id={id} lang={lang} />;
} 