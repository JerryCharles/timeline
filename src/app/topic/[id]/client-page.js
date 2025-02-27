"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Timeline from '../../../components/Timeline';
import { useLanguage, LANGUAGES } from '../../../contexts/LanguageContext';
import { getTranslation } from '../../../translations';
import { getTopicDetails } from '../../../services/api';

function TopicDetailContent({ topicData, error }) {
  const { language } = useLanguage();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
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
      router.push('/');
    }
  }, [shouldRedirect, router]);

  if (!topicData || error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">{getTranslation('topic.notice', language)} </strong>
          <span className="block sm:inline">
            {error || getTranslation('topic.topicNotFound', language)}
          </span>
          <div className="mt-2">
            <p>
              {getTranslation('topic.redirectingIn', language)} {countdown} {getTranslation('topic.seconds', language)}...
            </p>
          </div>
          <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
            {getTranslation('topic.returnToHome', language)}
          </Link>
        </div>
      </div>
    );
  }

  const topic = topicData.topic;
  const events = topicData.events || [];

  // Get title based on language
  const getTitle = (topic) => {
    if (!topic) return '';
    if (typeof topic.title === 'object') {
      return topic.title[language] || topic.title[LANGUAGES.EN] || '';
    }
    if (language === LANGUAGES.CN && topic.titleCN) {
      return topic.titleCN;
    }
    return topic.title || '';
  };

  // Get summary based on language
  const getSummary = (topic) => {
    if (!topic) return '';
    if (typeof topic.summary === 'object') {
      return topic.summary[language] || topic.summary[LANGUAGES.EN] || '';
    }
    if (language === LANGUAGES.CN && topic.summaryCN) {
      return topic.summaryCN;
    }
    return topic.summary || '';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-6">
        <svg className="w-3.5 h-3.5 mr-1 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        {getTranslation('topic.backToTopics', language)}
      </Link>

      <div>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {getTitle(topic)}
          </h1>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <p>{getSummary(topic)}</p>
        </div>

        {/* Sponsored Content Section */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {getTranslation('topic.sponsoredContent', language)}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {getTranslation('topic.adTitle', language)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {getTranslation('topic.adDescription', language)}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                {getTranslation('topic.learnMore', language)}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {getTranslation('topic.timelineOfEvents', language)}
            </h2>
            <div id="timeline-view-switcher-container"></div>
          </div>
          <Timeline events={events} showViewSwitcherInHeader={true} />
        </div>
        
        {/* Related Topics Section */}
        {topic.relatedTopics && topic.relatedTopics.length > 0 && (
          <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              {getTranslation('topic.relatedTopics', language)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topic.relatedTopics.map((relatedTopic) => (
                <Link 
                  key={relatedTopic.topicID}
                  href={`/topic/${relatedTopic.topicID}`}
                  className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow"
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
    </div>
  );
}

// Client component that handles client-side logic
export default function ClientTopicPage({ id }) {
  const { language } = useLanguage();
  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopicDetail = async () => {
      try {
        setLoading(true);
        const data = await getTopicDetails(parseInt(id, 10));
        
        // Handle the case when topic is not found or there's an API error
        if (data.notFound || data.error) {
          setTopicData(null);
          setError(data.error || 'Topic not found');
          return;
        }
        
        // Transform the data to match the language structure
        if (data.topic) {
          const transformedTopic = {
            ...data.topic,
            title: {
              [LANGUAGES.EN]: data.topic.title,
              [LANGUAGES.CN]: data.topic.titleCN || data.topic.title
            },
            summary: {
              [LANGUAGES.EN]: data.topic.summary,
              [LANGUAGES.CN]: data.topic.summaryCN || data.topic.summary
            }
          };

          // Transform related topics if they exist
          if (data.topic.relatedTopics) {
            transformedTopic.relatedTopics = data.topic.relatedTopics.map(topic => ({
              ...topic,
              title: {
                [LANGUAGES.EN]: topic.title,
                [LANGUAGES.CN]: topic.titleCN || topic.title
              }
            }));
          }

          setTopicData({
            ...data,
            topic: transformedTopic
          });
        } else {
          setTopicData(null);
          setError('Topic not found');
        }
      } catch (err) {
        setError(err.message);
        setTopicData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTopicDetail();
    }
  }, [id, language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return <TopicDetailContent topicData={topicData} error={error} />;
} 