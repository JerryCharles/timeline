"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Timeline from '../../../../components/Timeline';
import { useLanguage, LANGUAGES } from '../../../../contexts/LanguageContext';
import { getTranslation } from '../../../../translations';
import { getTopicDetails } from '../../../../services/api';

function TopicDetailContent({ topicData, error, lang }) {
  const { language } = useLanguage();
  const currentLang = lang || language;
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // Handle countdown
  useEffect(() => {
    if (!topicData || error) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setShouldRedirect(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [topicData, error]);

  // Handle navigation separately
  useEffect(() => {
    if (shouldRedirect) {
      router.push(`/${currentLang}`);
    }
  }, [shouldRedirect, router, currentLang]);

  if (!topicData || error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">{getTranslation('topic.notice', currentLang)} </strong>
          <span className="block sm:inline">
            {error || getTranslation('topic.topicNotFound', currentLang)}
          </span>
          <div className="mt-2">
            <p>
              {getTranslation('topic.redirectingIn', currentLang)} {countdown} {getTranslation('topic.seconds', currentLang)}...
            </p>
          </div>
          <Link href={`/${currentLang}`} className="mt-4 inline-block text-blue-600 hover:underline">
            {getTranslation('topic.returnToHome', currentLang)}
          </Link>
        </div>
      </div>
    );
  }

  const { topic, events = [] } = topicData;

  // Helper function to get the title in the current language
  const getTitle = (topic) => {
    if (!topic) return '';
    if (typeof topic.title === 'object') {
      return topic.title[currentLang] || topic.title[LANGUAGES.EN] || '';
    }
    if (currentLang === LANGUAGES.CN || currentLang === LANGUAGES.ZH_TW) {
      return topic.titleZh || topic.titleCN || topic.title || '';
    }
    return topic.title || '';
  };

  // Helper function to get the summary in the current language
  const getSummary = (topic) => {
    if (!topic) return '';
    if (typeof topic.summary === 'object') {
      return topic.summary[currentLang] || topic.summary[LANGUAGES.EN] || '';
    }
    if (currentLang === LANGUAGES.CN || currentLang === LANGUAGES.ZH_TW) {
      return topic.summaryZh || topic.summaryCN || topic.summary || '';
    }
    return topic.summary || '';
  };

  // Helper function to get the content in the current language
  const getContent = (topic) => {
    if (!topic) return '';
    if (typeof topic.content === 'object') {
      return topic.content[currentLang] || topic.content[LANGUAGES.EN] || '';
    }
    if (currentLang === LANGUAGES.ZH_TW) {
      // Try both contentZh and contentCN
      return topic.contentZh || topic.contentCN || topic.content || '';
    }
    return topic.content || '';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex items-center justify-between relative">
        <Link href={`/${currentLang}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 absolute left-0 z-10">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mx-auto text-center">
          {getTitle(topic)}
        </h1>
        
        <div className="w-8"></div>
      </div>

      {/* Topic Image */}
      {topic.image && (
        <div className="mb-3 relative aspect-[21/9] overflow-hidden rounded-xl">
          <Image
            src={topic.image}
            alt={getTitle(topic)}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none dark:prose-invert mb-6">
        <p className="text-gray-600 dark:text-gray-300">{getSummary(topic)}</p>
      </div>

      {/* Sponsored Content Section */}
      <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {getTranslation('topic.sponsoredContent', currentLang)}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {getTranslation('topic.adTitle', currentLang)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {getTranslation('topic.adDescription', currentLang)}
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              {getTranslation('topic.learnMore', currentLang)}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {getTranslation('topic.timelineOfEvents', currentLang)}
          </h2>
          <div id="timeline-view-switcher-container"></div>
        </div>
        
        {events.length > 0 ? (
          <Timeline events={events} language={currentLang} showViewSwitcherInHeader={true} />
        ) : (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              {getTranslation('timeline.noEvents', currentLang)}
            </p>
          </div>
        )}
      </div>

      {/* Related Topics Section */}
      {topic.relatedTopics && topic.relatedTopics.length > 0 && (
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {getTranslation('topic.relatedTopics', currentLang)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topic.relatedTopics.map((relatedTopic) => (
              <Link 
                key={relatedTopic.topicID} 
                href={`/${currentLang}/topic/${relatedTopic.topicID}`}
                className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {getTitle(relatedTopic)}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Client component that handles client-side logic
export default function TopicPageClient({ params }) {
  const { language } = useLanguage();
  const currentLang = params?.lang || language;
  const id = params?.id;
  const [topicData, setTopicData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopicData() {
      if (!id) {
        setError(getTranslation('topic.noTopicId', currentLang));
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Parse the ID as an integer
        const numericId = parseInt(id, 10);
        
        // Check if the ID is a valid number
        if (isNaN(numericId)) {
          setError(getTranslation('topic.invalidTopicId', currentLang) || 'Invalid topicID parameter');
          setLoading(false);
          return;
        }
        
        const data = await getTopicDetails(numericId);
        
        if (data.notFound) {
          setError(getTranslation('topic.topicNotFound', currentLang));
        } else if (data.error) {
          setError(data.error);
        } else {
          setTopicData(data);
        }
      } catch (err) {
        console.error('Error fetching topic details:', err);
        setError(getTranslation('topic.error', currentLang));
      } finally {
        setLoading(false);
      }
    }

    fetchTopicData();
  }, [id, currentLang]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return <TopicDetailContent topicData={topicData} error={error} lang={currentLang} />;
} 