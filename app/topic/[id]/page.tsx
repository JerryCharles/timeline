import Link from 'next/link';
import Image from 'next/image';
import { getTopics, getTopicEvents, formatDate } from '../../services/api';

export async function generateStaticParams() {
  const { topics } = await getTopics();
  
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
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <div className="w-full max-w-5xl">
        <Link href="/" className="text-blue-500 hover:underline mb-8 inline-flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Topics
        </Link>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          {topic.image && (
            <div className="w-full h-64 md:h-96 relative mb-4">
              <Image 
                src={topic.image} 
                alt={topic.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{topic.title}</h1>
            {topic.titleCN && (
              <p className="text-gray-500 text-lg mb-4">{topic.titleCN}</p>
            )}
            
            {topic.summary && (
              <div className="text-lg text-gray-700 mb-4">
                {topic.summary.replace(/\*\*/g, '')}
              </div>
            )}
            
            {topic.summaryCN && (
              <div className="text-md text-gray-500 mb-4">
                {topic.summaryCN.replace(/\*\*/g, '')}
              </div>
            )}
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 px-2">Timeline of Events</h2>
        
        {sortedEvents.length === 0 ? (
          <p className="text-gray-500 px-2">No events found for this topic.</p>
        ) : (
          <div className="relative border-l-2 border-blue-400 pl-8 ml-4 mb-12">
            {sortedEvents.map((event, index) => (
              <div key={event.eventID} className="mb-10 relative">
                <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-11 mt-1 border-2 border-white shadow-sm"></div>
                <div className="font-medium text-sm text-blue-600 mb-2">{formatDate(event.time)}</div>
                <div className="bg-white p-5 rounded-lg shadow-sm border">
                  <p className="text-lg font-medium text-gray-800">{event.content.replace(/\*\*/g, '')}</p>
                  {event.contentCN && (
                    <p className="text-sm text-gray-500 mt-2">{event.contentCN}</p>
                  )}
                  
                  {event.labels && event.labels.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 mb-2">
                      {event.labels.map((label, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
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
                      className="mt-3 inline-flex items-center gap-1 text-blue-500 font-medium hover:text-blue-700 text-sm"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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