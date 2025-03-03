import Image from 'next/image';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';

export default function Header() {
  const { language, toggleLanguage, getLanguageLabel } = useLanguage();

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={90}
            priority
          />
        </div>
        
        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            {getLanguageLabel()}
          </button>
        </div>
      </div>
    </header>
  );
} 