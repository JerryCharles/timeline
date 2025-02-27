import { LANGUAGES } from '../contexts/LanguageContext';

// Translations for the application
const translations = {
  // Home page
  home: {
    title: {
      [LANGUAGES.EN]: 'Historical Timeline',
      [LANGUAGES.CN]: '历史时间线'
    },
    subtitle: {
      [LANGUAGES.EN]: 'Explore significant historical events and their impact on our world.',
      [LANGUAGES.CN]: '探索重大历史事件及其对我们世界的影响。'
    },
    noTopics: {
      [LANGUAGES.EN]: 'No topics found. Check back later for updates.',
      [LANGUAGES.CN]: '未找到主题。请稍后再查看更新。'
    },
    error: {
      [LANGUAGES.EN]: 'Error!',
      [LANGUAGES.CN]: '错误！'
    }
  },
  
  // Topic page
  topic: {
    backToTopics: {
      [LANGUAGES.EN]: 'Back to Topics',
      [LANGUAGES.CN]: '返回主题列表'
    },
    timelineOfEvents: {
      [LANGUAGES.EN]: 'Timeline of Events',
      [LANGUAGES.CN]: '事件时间线'
    },
    relatedTopics: {
      [LANGUAGES.EN]: 'Related Topics',
      [LANGUAGES.CN]: '相关主题'
    },
    error: {
      [LANGUAGES.EN]: 'Error',
      [LANGUAGES.CN]: '错误'
    },
    noTopicId: {
      [LANGUAGES.EN]: 'No topic ID provided',
      [LANGUAGES.CN]: '未提供主题ID'
    },
    returnToHome: {
      [LANGUAGES.EN]: 'Return to Home',
      [LANGUAGES.CN]: '返回首页'
    },
    notice: {
      [LANGUAGES.EN]: 'Notice:',
      [LANGUAGES.CN]: '注意：'
    },
    topicNotFound: {
      [LANGUAGES.EN]: 'The requested topic could not be found.',
      [LANGUAGES.CN]: '找不到请求的主题。'
    },
    redirectingIn: {
      [LANGUAGES.EN]: 'Redirecting to home page in',
      [LANGUAGES.CN]: '将在以下时间后重定向到主页'
    },
    redirectingToHome: {
      [LANGUAGES.EN]: 'Redirecting to home page automatically...',
      [LANGUAGES.CN]: '正在自动重定向到主页...'
    },
    seconds: {
      [LANGUAGES.EN]: 'seconds',
      [LANGUAGES.CN]: '秒'
    },
    sponsoredContent: {
      [LANGUAGES.EN]: 'Sponsored Content',
      [LANGUAGES.CN]: '赞助内容'
    },
    adTitle: {
      [LANGUAGES.EN]: 'Discover More',
      [LANGUAGES.CN]: '发现更多'
    },
    adDescription: {
      [LANGUAGES.EN]: 'Learn about related products and services that might interest you.',
      [LANGUAGES.CN]: '了解可能对您感兴趣的相关产品和服务。'
    },
    learnMore: {
      [LANGUAGES.EN]: 'Learn More',
      [LANGUAGES.CN]: '了解更多'
    }
  },
  
  // Timeline component
  timeline: {
    noEvents: {
      [LANGUAGES.EN]: 'No events found for this topic.',
      [LANGUAGES.CN]: '未找到此主题的事件。'
    },
    switchToCentered: {
      [LANGUAGES.EN]: 'Switch to Centered View',
      [LANGUAGES.CN]: '切换到居中视图'
    },
    switchToLeft: {
      [LANGUAGES.EN]: 'Switch to Left View',
      [LANGUAGES.CN]: '切换到左侧视图'
    },
    learnMore: {
      [LANGUAGES.EN]: 'Source',
      [LANGUAGES.CN]: '来源'
    },
    sponsoredContent: {
      [LANGUAGES.EN]: 'Sponsored',
      [LANGUAGES.CN]: '赞助'
    },
    adLearnMore: {
      [LANGUAGES.EN]: 'Learn More',
      [LANGUAGES.CN]: '了解更多'
    }
  },
  
  // Footer component
  footer: {
    privacyPolicy: {
      [LANGUAGES.EN]: 'Privacy Policy',
      [LANGUAGES.CN]: '隐私政策'
    },
    termsOfService: {
      [LANGUAGES.EN]: 'Terms of Service',
      [LANGUAGES.CN]: '服务条款'
    },
    cookiePolicy: {
      [LANGUAGES.EN]: 'Cookie Policy',
      [LANGUAGES.CN]: 'Cookie 政策'
    },
    theme: {
      dark: {
        [LANGUAGES.EN]: 'Dark',
        [LANGUAGES.CN]: '深色'
      },
      light: {
        [LANGUAGES.EN]: 'Light',
        [LANGUAGES.CN]: '浅色'
      },
      system: {
        [LANGUAGES.EN]: 'System',
        [LANGUAGES.CN]: '系统'
      }
    }
  }
};

// Helper function to get translation
export const getTranslation = (key, language) => {
  const keys = key.split('.');
  let result = translations;
  
  for (const k of keys) {
    if (result[k] === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    result = result[k];
  }
  
  if (typeof result === 'object' && result[language]) {
    return result[language];
  }
  
  console.warn(`Translation not found for language ${language}: ${key}`);
  return key;
};

export default translations; 