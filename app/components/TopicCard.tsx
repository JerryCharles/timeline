import Link from 'next/link';
import Image from 'next/image';
import { Topic } from '../services/api';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link 
      href={`/topic/${topic.topicID}`} 
      className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full"
    >
      <div className="relative h-56 w-full">
        {topic.image && (
          <Image 
            src={topic.image} 
            alt={topic.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="bg-gray-100"
          />
        )}
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold line-clamp-1">{topic.title}</h2>
        {topic.titleCN && (
          <p className="text-sm text-gray-500 mb-2 line-clamp-1">{topic.titleCN}</p>
        )}
        
        {topic.summary && (
          <p className="mt-3 text-gray-700 text-sm line-clamp-3">
            {topic.summary.replace(/\*\*/g, '')}
          </p>
        )}
        
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {new Date(topic.updateTime).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
} 