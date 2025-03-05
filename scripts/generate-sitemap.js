const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Mock config in case the import fails
const API = {
  BASE_URL: 'https://timeline-833534357674.us-central1.run.app',
  METHODS: {
    GET_TOPIC_INFOS: 'getTopicInfos',
  }
};

// Create API client
const apiClient = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
const getTopics = async (page = 0, pageSize = 200) => {
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
    // For development, return mock data if API is not available
    return {
      topics: [
        {
          topicID: 1,
          title: "World War II",
          titleZh: "第二次世界大战",
          updateTime: new Date().toISOString()
        },
        {
          topicID: 2,
          title: "Industrial Revolution",
          titleZh: "工业革命",
          updateTime: new Date().toISOString()
        }
      ]
    };
  }
};

async function generateSitemap() {
  try {
    console.log('Generating sitemap...');
    
    // Get all topics
    const { topics } = await getTopics();
    
    if (!topics || !Array.isArray(topics)) {
      throw new Error('No topics found or invalid response format');
    }
    
    // Base URL - replace with your actual domain
    const baseUrl = 'https://3ja.com';
    
    // Available languages
    const languages = ['en', 'zh-TW'];
    
    // Start XML content
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
    
    // Add home pages for each language
    languages.forEach(lang => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/${lang}</loc>\n`;
      
      // Add language alternates
      languages.forEach(alternateLang => {
        if (alternateLang !== lang) {
          xml += `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${baseUrl}/${alternateLang}" />\n`;
        }
      });
      
      xml += `    <changefreq>daily</changefreq>\n`;
      xml += `    <priority>1.0</priority>\n`;
      xml += `  </url>\n`;
    });
    
    // Add topic pages
    topics.forEach(topic => {
      languages.forEach(lang => {
        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}/${lang}/topic/${topic.topicID}</loc>\n`;
        
        // Add language alternates for topic
        languages.forEach(alternateLang => {
          if (alternateLang !== lang) {
            xml += `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${baseUrl}/${alternateLang}/topic/${topic.topicID}" />\n`;
          }
        });
        
        xml += `    <lastmod>${new Date(topic.updateTime).toISOString()}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.8</priority>\n`;
        xml += `  </url>\n`;
      });
    });
    
    // Add static pages
    const staticPages = ['privacy-policy', 'terms-of-service', 'cookie-policy'];
    staticPages.forEach(page => {
      languages.forEach(lang => {
        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}/${lang}/${page}</loc>\n`;
        
        // Add language alternates
        languages.forEach(alternateLang => {
          if (alternateLang !== lang) {
            xml += `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${baseUrl}/${alternateLang}/${page}" />\n`;
          }
        });
        
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.5</priority>\n`;
        xml += `  </url>\n`;
      });
    });
    
    // Close XML
    xml += '</urlset>';
    
    // Write sitemap file
    const publicDir = path.join(process.cwd(), 'public');
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Run the function
generateSitemap(); 