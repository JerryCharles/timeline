import Image from 'next/image';
import { fetchEvents } from '../../../lib/api';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Import social media icons
import Link from 'next/link';

export default async function TopicDetail({ params }) {
  const { topic, events } = await fetchEvents(Number(params.id));

  if (!topic) {
    return <div>Topic not found</div>;
  }

  // Construct the share URL on the server
  const baseUrl = 'http://localhost:3000'; // Replace with your actual domain in production
  const shareUrl = `${baseUrl}/topic/${params.id}`;

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header Image */}
      {topic.image && (
        <div className="relative w-full h-64 mb-4">
          <Image 
            src={topic.image} 
            alt={topic.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-900 mb-2">{topic.title}</h1>

      {/* Summary */}
      <p className="text-gray-600 mb-4">{topic.summary}</p>

      {/* Social Media Share Buttons */}
      <div className="flex space-x-3 mb-6">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="h-6 w-6 text-blue-600" />
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(topic.title)}`} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="h-6 w-6 text-blue-400" />
        </a>
        <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(topic.title + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="h-6 w-6 text-green-500" />
        </a>
      </div>

      {/* Filter by Labels */}
      <div className="mb-6">
        <span className="text-sm font-semibold text-gray-700">Filter by Labels</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {[...new Set(events.flatMap(event => event.labels))].map((label, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {label}
            </span>
          ))}
          <button className="text-blue-600 text-sm">Select/Deselect All</button>
        </div>
      </div>

      {/* Timeline of Events */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Timeline of Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.eventID} className="flex">
            {/* Timeline Dot and Line */}
            <div className="flex flex-col items-center mr-4">
              <div className="h-4 w-4 bg-blue-600 rounded-full"></div>
              {event !== events[events.length - 1] && (
                <div className="w-0.5 bg-blue-600 flex-1"></div>
              )}
            </div>
            {/* Event Content */}
            <div className="flex-1">
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <span>{new Date(event.time * 1000).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-800">{event.content}</p>
              {event.labels.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {event.labels.map((label, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                      {label}
                    </span>
                  ))}
                </div>
              )}
              <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm mt-1 inline-block">
                Source ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}