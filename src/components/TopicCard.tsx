'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/outline';

interface Topic {
  topicID: number;
  title: string;
  titleCN: string;
  summary: string;
  summaryCN: string;
  image: string;
  time: number;
  updateTime: number;
}

interface TopicCardProps {
  topic: Topic;
  isEnglish?: boolean;
}

export default function TopicCard({ topic, isEnglish = false }: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
    >
      <Link href={`${isEnglish ? '' : '/zh'}/topic/${topic.topicID}`} className="flex flex-col h-full">
        <div className="relative h-48">
          <Image
            src={topic.image}
            alt={isEnglish ? topic.title : topic.titleCN}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {isEnglish ? topic.title : topic.titleCN}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 flex-grow">
            {isEnglish ? topic.summary : topic.summaryCN}
          </p>
          <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <ClockIcon className="h-4 w-4 mr-1" />
            {new Date(topic.updateTime).toLocaleDateString(isEnglish ? 'en-US' : 'zh-TW')}
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 