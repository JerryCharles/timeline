'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="w-full sm:w-0 flex-1 flex items-center">
            <p className="ml-3 font-medium text-gray-100 dark:text-gray-100 text-sm text-center sm:text-left">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <button
              onClick={acceptCookies}
              className="flex items-center justify-center w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accept all cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 