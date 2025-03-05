import { LANGUAGES } from '../contexts/LanguageContext';

// Translations for the application
const translations = {
  // Home page
  home: {
    title: {
      [LANGUAGES.EN]: 'Historical Timeline',
      [LANGUAGES.ZH_TW]: '歷史時間線'
    },
    subtitle: {
      [LANGUAGES.EN]: 'Explore significant historical events and their impact on our world.',
      [LANGUAGES.ZH_TW]: '探索重大歷史事件及其對我們世界的影響。'
    },
    noTopics: {
      [LANGUAGES.EN]: 'No topics found. Check back later for updates.',
      [LANGUAGES.ZH_TW]: '未找到主題。請稍後再查看更新。'
    },
    error: {
      [LANGUAGES.EN]: 'Error!',
      [LANGUAGES.ZH_TW]: '錯誤！'
    }
  },
  
  // Topic page
  topic: {
    backToTopics: {
      [LANGUAGES.EN]: 'Back to Topics',
      [LANGUAGES.ZH_TW]: '返回主題列表'
    },
    timelineOfEvents: {
      [LANGUAGES.EN]: 'Timeline of Events',
      [LANGUAGES.ZH_TW]: '事件時間線'
    },
    relatedTopics: {
      [LANGUAGES.EN]: 'Related Topics',
      [LANGUAGES.ZH_TW]: '相關主題'
    },
    error: {
      [LANGUAGES.EN]: 'Error',
      [LANGUAGES.ZH_TW]: '錯誤'
    },
    noTopicId: {
      [LANGUAGES.EN]: 'No topic ID provided',
      [LANGUAGES.ZH_TW]: '未提供主題ID'
    },
    invalidTopicId: {
      [LANGUAGES.EN]: 'Invalid topic ID parameter',
      [LANGUAGES.ZH_TW]: '無效的主題ID參數'
    },
    returnToHome: {
      [LANGUAGES.EN]: 'Return to Home',
      [LANGUAGES.ZH_TW]: '返回首頁'
    },
    notice: {
      [LANGUAGES.EN]: 'Notice:',
      [LANGUAGES.ZH_TW]: '注意：'
    },
    topicNotFound: {
      [LANGUAGES.EN]: 'The requested topic could not be found.',
      [LANGUAGES.ZH_TW]: '找不到請求的主題。'
    },
    redirectingIn: {
      [LANGUAGES.EN]: 'Redirecting to home page in',
      [LANGUAGES.ZH_TW]: '將在以下時間後重定向到主頁'
    },
    redirectingToHome: {
      [LANGUAGES.EN]: 'Redirecting to home page automatically...',
      [LANGUAGES.ZH_TW]: '正在自動重定向到主頁...'
    },
    seconds: {
      [LANGUAGES.EN]: 'seconds',
      [LANGUAGES.ZH_TW]: '秒'
    },
    sponsoredContent: {
      [LANGUAGES.EN]: 'Sponsored Content',
      [LANGUAGES.ZH_TW]: '贊助內容'
    },
    adTitle: {
      [LANGUAGES.EN]: 'Discover More',
      [LANGUAGES.ZH_TW]: '發現更多'
    },
    adDescription: {
      [LANGUAGES.EN]: 'Learn about related products and services that might interest you.',
      [LANGUAGES.ZH_TW]: '了解可能對您感興趣的相關產品和服務。'
    },
    learnMore: {
      [LANGUAGES.EN]: 'Learn More',
      [LANGUAGES.ZH_TW]: '了解更多'
    },
    labelsFilter: {
      [LANGUAGES.EN]: 'Filter by Labels',
      [LANGUAGES.ZH_TW]: '標籤篩選'
    },
    selectDeselectAll: {
      [LANGUAGES.EN]: 'Select/Deselect All',
      [LANGUAGES.ZH_TW]: '全選/取消全選'
    },
    noLabels: {
      [LANGUAGES.EN]: 'No labels available',
      [LANGUAGES.ZH_TW]: '沒有可用的標籤'
    }
  },
  
  // Timeline component
  timeline: {
    noEvents: {
      [LANGUAGES.EN]: 'No events found for this topic.',
      [LANGUAGES.ZH_TW]: '未找到此主題的事件。'
    },
    switchToCentered: {
      [LANGUAGES.EN]: 'Switch to Centered View',
      [LANGUAGES.ZH_TW]: '切換到居中視圖'
    },
    switchToLeft: {
      [LANGUAGES.EN]: 'Switch to Left View',
      [LANGUAGES.ZH_TW]: '切換到左側視圖'
    },
    learnMore: {
      [LANGUAGES.EN]: 'Source',
      [LANGUAGES.ZH_TW]: '來源'
    },
    sponsoredContent: {
      [LANGUAGES.EN]: 'Sponsored',
      [LANGUAGES.ZH_TW]: '贊助'
    },
    adLearnMore: {
      [LANGUAGES.EN]: 'Learn More',
      [LANGUAGES.ZH_TW]: '了解更多'
    }
  },
  
  // Footer component
  footer: {
    privacyPolicy: {
      [LANGUAGES.EN]: 'Privacy Policy',
      [LANGUAGES.ZH_TW]: '隱私政策'
    },
    termsOfService: {
      [LANGUAGES.EN]: 'Terms of Service',
      [LANGUAGES.ZH_TW]: '服務條款'
    },
    cookiePolicy: {
      [LANGUAGES.EN]: 'Cookie Policy',
      [LANGUAGES.ZH_TW]: 'Cookie 政策'
    },
    theme: {
      dark: {
        [LANGUAGES.EN]: 'Dark',
        [LANGUAGES.ZH_TW]: '深色'
      },
      light: {
        [LANGUAGES.EN]: 'Light',
        [LANGUAGES.ZH_TW]: '淺色'
      },
      system: {
        [LANGUAGES.EN]: 'System',
        [LANGUAGES.ZH_TW]: '系統'
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