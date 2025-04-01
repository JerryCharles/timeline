'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LabelsFilter from './LabelsFilter';
import { Event, Topic } from '../services/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  TelegramShareButton, 
  WhatsappShareButton, 
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LineIcon
} from 'react-share';

interface ChineseTopicContentProps {
  topic: Topic;
  events: Event[];
  locale?: string;
}

// Custom link component for ReactMarkdown
const CustomLink = (props: any) => {
  const { href, children } = props;
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="underline"
    >
      {children}
    </a>
  );
};

export default function ChineseTopicContent({ topic, events, locale = 'zh-TW' }: ChineseTopicContentProps) {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  
  // Get current URL for sharing
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = topic.titleCN;
  
  // Format date as YYYY-MM-DD HH:MM
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };
  
  // Get all unique labels from events
  const allLabels = useMemo(() => {
    const labelSet = new Set<string>();
    events.forEach(event => {
      if (event.labelsCN && event.labelsCN.length > 0) {
        event.labelsCN.forEach(label => labelSet.add(label));
      }
    });
    return Array.from(labelSet);
  }, [events]);
  
  // Filter events based on selected labels
  const filteredEvents = useMemo(() => {
    if (selectedLabels.length === 0) return events;
    
    return events.filter(event => {
      if (!event.labelsCN || event.labelsCN.length === 0) return false;
      return event.labelsCN.some(label => selectedLabels.includes(label));
    });
  }, [events, selectedLabels]);

  return (
    <div className="w-full max-w-6xl">
      <div className="flex items-center justify-between w-full mb-4">
        <Link href="/zh-TW" className="text-blue-500 dark:text-blue-400 hover:underline inline-flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-xl md:text-2xl font-bold text-center flex-1 text-gray-900 dark:text-white">{topic.titleCN}</h1>
        <div className="w-4"></div> {/* Empty div for alignment */}
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-4">
        {topic.image && (
          <div className="max-w-4xl mx-auto">
            <div className="w-full aspect-video relative mb-4 max-h-[480px]">
              <Image 
                src={topic.image} 
                alt={topic.titleCN || topic.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        )}
        
        <div className="p-2 md:p-3">
          {topic.summaryCN && (
            <div className="text-lg text-gray-700 dark:text-gray-300 mb-4 markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: CustomLink }}>{topic.summaryCN}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
      
      {/* Share buttons */}
      <div className="p-2 mb-3">
        <div className="flex flex-wrap gap-2 justify-center">
          <FacebookShareButton url={shareUrl} hashtag="#timeline">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          
          <TelegramShareButton url={shareUrl} title={shareTitle}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          
          <WhatsappShareButton url={shareUrl} title={shareTitle}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          
          <LineShareButton url={shareUrl} title={shareTitle}>
            <LineIcon size={32} round />
          </LineShareButton>
        </div>
      </div>
      
      {allLabels.length > 0 && (
        <div className="w-full mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">按標籤篩選</h3>
            <button 
              onClick={() => selectedLabels.length === allLabels.length 
                ? setSelectedLabels([]) 
                : setSelectedLabels([...allLabels])}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              {selectedLabels.length === allLabels.length ? '取消全選' : '全選'}
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {allLabels.map((label, index) => (
              <button
                key={index}
                onClick={() => {
                  if (selectedLabels.includes(label)) {
                    setSelectedLabels(selectedLabels.filter(l => l !== label));
                  } else {
                    setSelectedLabels([...selectedLabels, label]);
                  }
                }}
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  selectedLabels.includes(label)
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <h2 className="text-2xl font-semibold mb-6 px-2 text-gray-900 dark:text-white">事件時間軸</h2>
      
      {filteredEvents.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 px-2">
          {events.length === 0 ? "此主題暫無事件。" : "沒有符合選定標籤的事件。"}
        </p>
      ) : (
        <div className="relative border-l-2 border-blue-400 pl-8 ml-4 mb-12">
          {filteredEvents.map((event) => (
            <div key={event.eventID} className="mb-10 relative">
              <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-11 mt-1 border-2 border-white dark:border-gray-800 shadow-sm"></div>
              <div className="font-medium text-sm text-blue-600 dark:text-blue-400 mb-2">{formatDate(event.time)}</div>
              <div className={`${
                event.type === 1 
                  ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700' 
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              } p-5 rounded-lg shadow-sm border`}>
                {event.contentCN && (
                  <div className={`text-sm ${
                    event.type === 1 
                      ? 'text-yellow-800 dark:text-yellow-200' 
                      : 'text-gray-500 dark:text-gray-400'
                  } mt-2 markdown-content`}>
                    <ReactMarkdown components={{ a: CustomLink }}>{event.contentCN}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 