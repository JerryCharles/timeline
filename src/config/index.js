/**
 * Application Configuration
 */

// API Configuration
export const API = {
  BASE_URL: 'https://timeline-833534357674.us-central1.run.app',
  ENDPOINTS: {
    GET_TOPICS: '',  // Base URL is used directly
  },
  METHODS: {
    GET_TOPIC_INFOS: 'getTopicInfos',
    GET_EVENT_INFOS: 'getEventInfos',
  }
};

// Pagination Configuration
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 0,
};

// Color Scheme
export const COLORS = {
  primary: '#3b82f6',    // Blue
  secondary: '#10b981',  // Green
  accent: '#8b5cf6',     // Purple
  error: '#ef4444',      // Red
  warning: '#f59e0b',    // Amber
  info: '#3b82f6',       // Blue
  success: '#10b981',    // Green
  background: {
    light: '#ffffff',
    dark: '#111827',
  },
  text: {
    light: '#1f2937',
    dark: '#f9fafb',
  }
};

// Date Format Options
export const DATE_FORMAT = {
  LONG: { year: 'numeric', month: 'long', day: 'numeric' },
  SHORT: { year: 'numeric', month: 'short', day: 'numeric' },
  YEAR_ONLY: { year: 'numeric' },
};

// Image Configuration
export const IMAGES = {
  FALLBACK: '/placeholder.jpg',
}; 