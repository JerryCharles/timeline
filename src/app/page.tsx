'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import TopicCard from '@/components/TopicCard';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/navigation';

interface Topic {
  topicID: number;
  title: string;
  titleCN: string;
  summary: string;
  summaryCN: string;
  image: string;
  time: number;
  updateTime: number;
  isDelete: number;
  relatedTopics: any[];
}

interface TopicResponse {
  code: number;
  data: {
    topics: Topic[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  msg: string;
}

export default function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const fetchTopics = async (page: number) => {
    try {
      const response = await axios.post<TopicResponse>(
        'https://timeline-833534357674.us-central1.run.app',
        {
          methodName: 'getTopicInfos',
          paramInfo: {
            page,
            pageSize: 12,
          },
        }
      );

      if (response.data.code === 0) {
        setTopics(response.data.data.topics);
        setTotalPages(response.data.data.totalPages);
      }
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  };

  useEffect(() => {
    fetchTopics(currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.topicID} topic={topic} isEnglish={true} />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
} 