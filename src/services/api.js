import axios from 'axios';
import { API } from '../config';

const apiClient = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTopics = async (page = 0, pageSize = 200) => {
  try {
    const response = await apiClient.post('', {
      methodName: API.METHODS.GET_TOPIC_INFOS,
      paramInfo: {
        page,
        pageSize,
      },
    });
    
    if (response.data && response.data.code === 0) {
      return response.data.data;
    }
    
    throw new Error(response.data?.msg || 'Failed to fetch topics');
  } catch (error) {
    console.error('Error fetching topics:', error);
    throw error;
  }
};

export const getTopicDetails = async (topicID, page = 0, pageSize = 300) => {
  try {
    const response = await apiClient.post('', {
      methodName: API.METHODS.GET_EVENT_INFOS,
      paramInfo: {
        topicID,
        page,
        pageSize,
      },
    });
    
    if (response.data && response.data.code === 0) {
      if (!response.data.data || !response.data.data.topic) {
        // Return a special response instead of throwing an error
        return { notFound: true };
      }
      return response.data.data;
    }
    
    // For other API errors, still return a special response
    return { error: response.data?.msg || 'Failed to fetch topic details' };
  } catch (error) {
    console.error('Error fetching topic details:', error);
    // For network or other errors, return a special response
    return { error: 'Network error or server unavailable' };
  }
}; 