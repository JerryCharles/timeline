"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TopicCard from "../../components/TopicCard";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import { getTopics } from "../../services/api";
import { PAGINATION } from "../../config";
import { useLanguage, LANGUAGES } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

// Home page component for language-specific routes
export default function LangHomePageClient({ params }) {
  const { language, toggleLanguage } = useLanguage();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: PAGINATION.DEFAULT_PAGE,
    pageSize: PAGINATION.DEFAULT_PAGE_SIZE,
    totalItems: 0,
    totalPages: 0,
  });
  
  // Get the language from params
  const lang = params?.lang || language;

  const fetchTopics = async (page = 0) => {
    try {
      setLoading(true);
      const data = await getTopics(page, pagination.pageSize);
      
      setTopics(data.topics || []);
      setPagination({
        ...pagination,
        page,
        totalItems: data.total || 0,
        totalPages: Math.ceil((data.total || 0) / pagination.pageSize),
      });
    } catch (err) {
      console.error('Error fetching topics:', err);
      setError(getTranslation('home.error', lang));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics(pagination.page);
  }, [lang]);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < pagination.totalPages) {
      setPagination({ ...pagination, page: newPage });
      fetchTopics(newPage);
      
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">{error}</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 animate-pulse">
                <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            ))
          ) : topics.length > 0 ? (
            topics.map((topic) => (
              <TopicCard 
                key={topic.topicID} 
                topic={topic} 
                language={lang}
                href={`/${lang}/topic/${topic.topicID}`}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation('home.noTopics', lang)}
              </p>
            </div>
          )}
        </div>
        
        {pagination.totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
} 