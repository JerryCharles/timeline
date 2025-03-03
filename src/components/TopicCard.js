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

export default function TopicCard({ topic, language: propLanguage, href }) {
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;

  // Function to handle image URL encoding
  const getImageUrl = (url) => {
    if (!url) return '';
    try {
      // First encode to handle special characters, then decode to get a clean URL
      return decodeURIComponent(encodeURIComponent(url));
    } catch {
      return url;
    }
  };

  // Get title based on language
  const getTitle = () => {
    if (!topic) return '';
    if (language === LANGUAGES.ZH_TW && topic.titleZh) {
      return topic.titleZh;
    }
    return topic.title || '';
  };

  // Get summary based on language
  const getSummary = () => {
    if (!topic) return '';
    if (language === LANGUAGES.ZH_TW && topic.summaryZh) {
      return topic.summaryZh;
    }
    return topic.summary || '';
  };

  if (!topic) {
    return null;
  }

  // Use the provided href or fallback to the default
  const linkHref = href || `/topic/${topic.topicID}`;

  return (
    <Link href={linkHref} className="block h-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        {topic.image && (
          <div className="relative w-full h-48">
            <Image
              src={getImageUrl(topic.image)}
              alt={getTitle()}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {getTitle()}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4 flex-grow">
            {getSummary()}
          </p>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-auto">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {formatDate(topic.time, language)}
          </div>
        </div>
      </div>
    </Link>
  );
} 