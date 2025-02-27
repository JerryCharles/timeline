"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TopicCard from "../components/TopicCard";
import Pagination from "../components/Pagination";
import { getTopics } from "../services/api";
import { PAGINATION } from "../config";
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export default function Home() {
  const { language } = useLanguage();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: PAGINATION.DEFAULT_PAGE,
    pageSize: PAGINATION.DEFAULT_PAGE_SIZE,
    total: 0,
    totalPages: 0,
  });

  const fetchTopics = async (page = 0) => {
    try {
      setLoading(true);
      const data = await getTopics(page, PAGINATION.DEFAULT_PAGE_SIZE);
      
      // Keep the original data structure
      setTopics(data.topics || []);
      setPagination({
        page,
        pageSize: PAGINATION.DEFAULT_PAGE_SIZE,
        total: data.total || 0,
        totalPages: Math.ceil((data.total || 0) / PAGINATION.DEFAULT_PAGE_SIZE),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics(pagination.page);
  }, [language]); // Refetch when language changes

  const handlePageChange = (newPage) => {
    fetchTopics(newPage);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">{getTranslation('home.error', language)}</strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="w-full max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {getTranslation('home.title', language)}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {getTranslation('home.subtitle', language)}
          </p>
        </div>

        {topics.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              {getTranslation('home.noTopics', language)}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {topics.map((topic) => (
              <TopicCard key={topic.topicID} topic={topic} />
            ))}
          </div>
        )}
      </div>

      {topics.length > 0 && (
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}
