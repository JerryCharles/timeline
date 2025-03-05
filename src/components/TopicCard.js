"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';

// Format date from timestamp
const formatDate = (timestamp, language) => {
  if (!timestamp) return 'N/A';
  const date = new Date(timestamp);
  
  // Convert timestamp to YYYY-MM-DD HH:mm format
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

// Get title based on language
const getTitle = (topic, language) => {
  if (!topic) return '';
  if (typeof topic.title === 'object') {
    return topic.title[language] || topic.title[LANGUAGES.EN] || '';
  }
  if (language === LANGUAGES.CN || language === LANGUAGES.ZH_TW) {
    return topic.titleZh || topic.titleCN || topic.title || '';
  }
  return topic.title || '';
};

// Get summary based on language
const getSummary = (topic, language) => {
  if (!topic) return '';
  if (typeof topic.summary === 'object') {
    return topic.summary[language] || topic.summary[LANGUAGES.EN] || '';
  }
  if (language === LANGUAGES.CN || language === LANGUAGES.ZH_TW) {
    return topic.summaryZh || topic.summaryCN || topic.summary || '';
  }
  return topic.summary || '';
};

export default function TopicCard({ topic }) {
  const { language } = useLanguage();

  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": getTitle(topic, language),
    "description": getSummary(topic, language),
    "image": topic.image,
    "dateModified": topic.updateTime,
    "inLanguage": language,
    "author": {
      "@type": "Organization",
      "name": "Timeline"
    }
  };

  return (
    <Link href={`/${language}/topic/${topic.topicID}`} className="block h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col border border-gray-200 dark:border-gray-700">
        {topic.image && (
          <div className="relative h-48 flex-shrink-0">
            <Image
              src={topic.image}
              alt={getTitle(topic, language)}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {getTitle(topic, language)}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
            {getSummary(topic, language)}
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <time>{formatDate(topic.updateTime, language)}</time>
          </div>
        </div>
      </div>
    </Link>
  );
} 