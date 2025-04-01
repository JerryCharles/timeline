// API service to fetch topics and events

export interface Topic {
  topicID: number;
  title: string;
  titleCN: string;
  summary: string;
  summaryCN: string;
  image: string;
  time: number;
  updateTime: number;
  isDelete: number;
  relatedTopics: any[];
  keywords: string[];
  keywordsCN: string[];
}

export interface Event {
  eventID: number;
  topicID: number;
  content: string;
  contentCN: string;
  time: number;
  url: string;
  type: number;
  labels: string[];
  labelsCN: string[];
  isDelete: number;
  updateTime: number;
}

export interface TopicsResponse {
  code: number;
  data: {
    topics: Topic[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  msg: string;
}

export interface EventsResponse {
  code: number;
  data: {
    topic: Topic;
    events: Event[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  msg: string;
}

export interface TopicPaginationResponse {
  topics: Topic[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Format date helper function
export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Format date for Chinese locale
export function formatChineseDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const API_URL = 'https://tl-api.3ja.com';

export async function getTopics(page: number = 1, pageSize: number = 10): Promise<TopicPaginationResponse> {
  // API expects 0-indexed page
  const apiPage = Math.max(0, page - 1);
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      methodName: 'getTopicInfos',
      paramInfo: {
        page: apiPage,
        pageSize,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch topics');
  }

  const data: TopicsResponse = await response.json();
  
  if (data.code !== 0) {
    throw new Error(data.msg || 'Failed to fetch topics');
  }

  return {
    topics: data.data.topics,
    total: data.data.total,
    page: page, // Return 1-indexed page for client use
    pageSize: data.data.pageSize,
    totalPages: data.data.totalPages,
  };
}

export async function getTopicEvents(topicID: number): Promise<{ topic: Topic; events: Event[] }> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      methodName: 'getEventInfos',
      paramInfo: {
        topicID,
        page: 0,
        pageSize: 300,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }

  const data: EventsResponse = await response.json();
  
  if (data.code !== 0) {
    throw new Error(data.msg || 'Failed to fetch events');
  }

  return {
    topic: data.data.topic,
    events: data.data.events,
  };
} 