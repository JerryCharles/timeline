import Link from 'next/link';
import Image from 'next/image';
import { getTopics, getTopicEvents, formatDate } from '../../services/api';

export async function generateStaticParams() {
  const topics = await getTopics();
  
  return topics.map((topic) => ({
    id: topic.topicID.toString(),
  }));
}

export default async function TopicPage({ params }: { params: { id: string } }) {
  // Convert id to number since the API expects a number
  const topicID = parseInt(params.id, 10);
  
  // Server-side data fetching for the specific topic and its events
  const { topic, events } = await getTopicEvents(topicID);
  
  // Sort events by time (latest first)
  const sortedEvents = [...events].sort((a, b) => b.time - a.time);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="w-full max-w-5xl">
        <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to Topics
        </Link>
        
        <div className="mb-8">
          {topic.image && (
            <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden mb-4">
              <Image 
                src={topic.image} 
                alt={topic.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{topic.title}</h1>
          {topic.titleCN && (
            <p className="text-gray-500 text-lg mb-4">{topic.titleCN}</p>
          )}
          
          {topic.summary && (
            <div className="text-lg text-gray-700 mb-4 bg-gray-50 p-4 rounded-lg">
              {topic.summary.replace(/\*\*/g, '')}
            </div>
          )}
          
          {topic.summaryCN && (
            <div className="text-md text-gray-500 mb-4 bg-gray-50 p-4 rounded-lg">
              {topic.summaryCN.replace(/\*\*/g, '')}
            </div>
          )}
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Timeline of Events</h2>
        
        {sortedEvents.length === 0 ? (
          <p className="text-gray-500">No events found for this topic.</p>
        ) : (
          <div className="relative border-l-2 border-gray-300 pl-8 ml-4">
            {sortedEvents.map((event, index) => (
              <div key={event.eventID} className="mb-8 relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-10 mt-1"></div>
                <div className="text-sm text-gray-500 mb-1">{formatDate(event.time)}</div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <p className="text-lg">{event.content}</p>
                  {event.contentCN && (
                    <p className="text-sm text-gray-500 mt-1">{event.contentCN}</p>
                  )}
                  
                  {event.labels && event.labels.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {event.labels.map((label, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {label}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {event.url && (
                    <a 
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm hover:underline mt-2 inline-block"
                    >
                      Read more →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 