'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';

interface Event {
  eventID: number;
  topicID: number;
  content: string;
  contentCN: string;
  time: number;
  type: number;
  url: string;
  labels: string[];
  labelsCN: string[];
  isDelete: number;
  updateTime: number;
}

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

interface EventResponse {
  code: number;
  data: {
    topic: Topic;
    events: Event[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  msg: string;
}

export default function TopicDetail() {
  const params = useParams();
  const router = useRouter();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopicDetails = async () => {
      try {
        const topicId = parseInt(params.id as string, 10);
        if (isNaN(topicId)) {
          setError('Invalid topic ID');
          return;
        }

        const response = await axios.post<EventResponse>(
          'https://timeline-833534357674.us-central1.run.app',
          {
            methodName: 'getEventInfos',
            paramInfo: {
              topicID: topicId,
              page: 0,
              pageSize: 300,
            },
          }
        );

        if (response.data.code === 0) {
          setTopic(response.data.data.topic);
          setEvents(response.data.data.events);
        } else {
          setError(response.data.msg || 'Failed to fetch topic details');
        }
      } catch (error) {
        console.error('Error fetching topic details:', error);
        setError('Failed to fetch topic details');
      }
    };

    fetchTopicDetails();
  }, [params.id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">{error}</h1>
          <button
            onClick={() => router.push('/')}
            className="text-blue-500 hover:text-blue-600"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {topic.title}
          </h1>
        </div>

        <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src={topic.image}
            alt={topic.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          {topic.summary}
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Advertisement Area
          </h2>
          {/* Add your advertisement component here */}
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.eventID}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow relative"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-0.5 h-full bg-blue-500 absolute left-8 top-10"></div>
                </div>
                <div className="flex-grow">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(event.time * 1000).toLocaleDateString('en-US')}
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>
                      {event.content}
                    </ReactMarkdown>
                  </div>
                  {event.url && (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 text-sm mt-2 inline-block"
                    >
                      Source →
                    </a>
                  )}
                  {event.labels.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {event.labels.map((label, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 