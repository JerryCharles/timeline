"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

// Format date from timestamp
const formatDate = (timestamp, language) => {
  if (!timestamp) return 'N/A';
  
  // Handle 10-digit timestamps (seconds) by converting to milliseconds
  const timestampMs = timestamp.toString().length === 10 
    ? timestamp * 1000 
    : timestamp;
  
  const date = new Date(timestampMs);
  
  // Convert timestamp to YYYY-MM-DD HH:mm format
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

// Get title based on language
const getTitle = (event, language) => {
  if (language === LANGUAGES.CN || language === LANGUAGES.ZH_TW) {
    return event.titleZh || event.titleCN || event.title;
  }
  return event.title;
};

// Get content based on language
const getContent = (event, language) => {
  if (language === LANGUAGES.CN || language === LANGUAGES.ZH_TW) {
    return event.contentZh || event.contentCN || event.content;
  }
  return event.content;
};

// Timeline view switcher button component
const TimelineViewSwitcher = ({ timelineStyle, toggleTimelineStyle, language }) => (
  <button 
    onClick={toggleTimelineStyle}
    className="flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    aria-label={timelineStyle === 'left' 
      ? getTranslation('timeline.switchToCentered', language) 
      : getTranslation('timeline.switchToLeft', language)}
  >
    {timelineStyle === 'left' ? (
      // Icon for left view - shows centered layout icon
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 5h14M5 19h14"></path>
      </svg>
    ) : (
      // Icon for centered view - shows left layout icon
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10M4 18h12"></path>
      </svg>
    )}
  </button>
);

export default function Timeline({ events = [], showViewSwitcherInHeader = false, language: urlLanguage }) {
  const { language: contextLanguage } = useLanguage();
  const language = urlLanguage || contextLanguage;
  const [timelineStyle, setTimelineStyle] = useState(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      return localStorage.getItem('timelineStyle') || 'left';
    }
    return 'left';
  });
  const [portalContainer, setPortalContainer] = useState(null);
  
  // Toggle timeline style and save to localStorage
  const toggleTimelineStyle = () => {
    const newStyle = timelineStyle === 'left' ? 'center' : 'left';
    setTimelineStyle(newStyle);
    if (typeof window !== 'undefined') {
      localStorage.setItem('timelineStyle', newStyle);
    }
  };

  // Effect to find the portal container when component mounts
  useEffect(() => {
    if (showViewSwitcherInHeader) {
      const container = document.getElementById('timeline-view-switcher-container');
      if (container) {
        setPortalContainer(container);
      }
    }
  }, [showViewSwitcherInHeader]);

  // Function to get event background class based on type
  const getEventBackgroundClass = (event) => {
    if (event.type === 1) {
      return 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800';
    }
    return 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700';
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">
          {getTranslation('timeline.noEvents', language)}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Render the view switcher in the header using a portal if showViewSwitcherInHeader is true */}
      {showViewSwitcherInHeader && portalContainer && createPortal(
        <TimelineViewSwitcher 
          timelineStyle={timelineStyle} 
          toggleTimelineStyle={toggleTimelineStyle} 
          language={language} 
        />,
        portalContainer
      )}
      
      {/* Timeline Style Switcher - only show if not in header */}
      {!showViewSwitcherInHeader && (
        <div className="mb-6 flex justify-end">
          <TimelineViewSwitcher 
            timelineStyle={timelineStyle} 
            toggleTimelineStyle={toggleTimelineStyle} 
            language={language} 
          />
        </div>
      )}
      
      {timelineStyle === 'left' ? (
        /* Left-aligned Timeline */
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
          {events.map((event, index) => (
            <React.Fragment key={`event-fragment-${event.eventID || event.id || index}-${index}`}>
              <div className={`mb-10 ml-6 pb-6 border-b border-gray-100 dark:border-gray-800 ${getEventBackgroundClass(event)} rounded-lg p-4`}>
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {getTitle(event, language)}
                </h3>
                <div className="flex justify-between items-center mb-6">
                  <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {formatDate(event.time, language)}
                  </time>
                  {event.url && (
                    <a 
                      href={event.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm font-medium"
                    >
                      {getTranslation('timeline.learnMore', language) || 'Learn more'}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
                </div>
                <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown>
                    {getContent(event, language)}
                  </ReactMarkdown>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : (
        /* Center-aligned Timeline */
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200 dark:border-gray-700 z-0"></div>
          
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            const shouldCenter = event.type === 1;
            
            return (
              <React.Fragment key={`event-centered-fragment-${event.eventID || event.id || index}-${index}`}>
                <div className="mb-12">
                  {/* Content positioned left, right, or center based on type */}
                  <div className={`flex ${shouldCenter ? 'justify-center' : isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className={`${shouldCenter ? 'w-8/12' : 'w-5/12'} ${getEventBackgroundClass(event)} p-4 rounded-lg shadow border relative z-30`}>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {getTitle(event, language)}
                      </h3>
                      <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown>
                          {getContent(event, language)}
                        </ReactMarkdown>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                        <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {formatDate(event.time, language)}
                        </time>
                        {event.url && (
                          <a 
                            href={event.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm font-medium"
                          >
                            {getTranslation('timeline.learnMore', language) || 'Learn more'}
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Dot indicator on the line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-24 z-20">
                    <div className="w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-900"></div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
} 