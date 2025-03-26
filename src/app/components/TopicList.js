'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TopicList({ topics }) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Topics</h1>
      <div className="grid gap-4">
        {topics.map((topic) => (
          <Link key={topic.topicID} href={`/topic/${topic.topicID}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image Section */}
              {topic.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {/* Content Section */}
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{topic.title}</h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">{topic.summary}</p>
                <p className="text-gray-400 text-xs">
                  {new Date(topic.updateTime).toLocaleString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}