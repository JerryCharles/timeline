import Link from 'next/link';
import Image from 'next/image';
import { getTopics } from './services/api';

export default async function Home() {
  // Server-side data fetching using the API service
  const topics = await getTopics();

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Timeline Topics</h1>
        
        <div className="grid gap-6">
          {topics.map((topic) => (
            <Link 
              href={`/topic/${topic.topicID}`} 
              key={topic.topicID}
              className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              {topic.image && (
                <div className="w-full md:w-48 h-48 relative rounded-md overflow-hidden flex-shrink-0">
                  <Image 
                    src={topic.image} 
                    alt={topic.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              )}
              <div className="flex-grow">
                <h2 className="text-xl md:text-2xl font-semibold">{topic.title}</h2>
                {topic.titleCN && (
                  <p className="text-sm text-gray-500 mb-2">{topic.titleCN}</p>
                )}
                {topic.summary && (
                  <div className="mt-2 text-gray-700 line-clamp-3">
                    {topic.summary.replace(/\*\*/g, '')}
                  </div>
                )}
                {topic.summaryCN && (
                  <div className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {topic.summaryCN.replace(/\*\*/g, '')}
                  </div>
                )}
                <p className="mt-2 text-sm text-gray-500">Last updated: {new Date(topic.updateTime).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 