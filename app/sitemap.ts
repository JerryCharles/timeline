import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual domain
  const baseUrl = 'https://3ja.com';
  
  // Define your static routes
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zh-TW`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // You can dynamically add your topic URLs here
  // For example, if you have /topic/[id] pages:
  // const topicRoutes = topics.map(topic => ({
  //   url: `${baseUrl}/topic/${topic.id}`,
  //   lastModified: new Date(topic.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));

  // Return all routes
  return [
    ...staticRoutes,
    // ...topicRoutes,
  ];
} 