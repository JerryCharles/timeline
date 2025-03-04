'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Dialog } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const PolicyModal = ({ isOpen, onClose, title, content }: PolicyModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white dark:bg-gray-800 p-6">
          <Dialog.Title className="text-lg font-medium mb-4">{title}</Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500 dark:text-gray-300">{content}</p>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isChinesePath = pathname?.startsWith('/zh');
  
  const [policyModal, setPolicyModal] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const openPolicyModal = (title: string, content: string) => {
    setPolicyModal({ isOpen: true, title, content });
  };

  const closePolicyModal = () => {
    setPolicyModal((prev) => ({ ...prev, isOpen: false }));
  };

  if (!mounted) {
    return null;
  }

  return (
    <footer className="w-full bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {isChinesePath ? '關於我們' : 'About Us'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {isChinesePath 
                ? '追蹤和探索重要事件的互動時間軸平台。' 
                : 'Track and explore important events in an interactive timeline format.'}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {isChinesePath ? '政策' : 'Policies'}
            </h3>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => openPolicyModal(
                  isChinesePath ? '隱私政策' : 'Privacy Policy',
                  isChinesePath ? '隱私政策內容...' : 'Privacy Policy content here...'
                )}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-left"
              >
                {isChinesePath ? '隱私政策' : 'Privacy Policy'}
              </button>
              <button
                onClick={() => openPolicyModal(
                  isChinesePath ? '服務條款' : 'Terms of Service',
                  isChinesePath ? '服務條款內容...' : 'Terms of Service content here...'
                )}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-left"
              >
                {isChinesePath ? '服務條款' : 'Terms of Service'}
              </button>
              <button
                onClick={() => openPolicyModal(
                  isChinesePath ? 'Cookie 政策' : 'Cookie Policy',
                  isChinesePath ? 'Cookie 政策內容...' : 'Cookie Policy content here...'
                )}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-left"
              >
                {isChinesePath ? 'Cookie 政策' : 'Cookie Policy'}
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {isChinesePath ? '聯繫我們' : 'Connect With Us'}
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © 2024 Timeline. {isChinesePath ? '保留所有權利' : 'All rights reserved.'}
          </p>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={closePolicyModal}
        title={policyModal.title}
        content={policyModal.content}
      />
    </footer>
  );
} 