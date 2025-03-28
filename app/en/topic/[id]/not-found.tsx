"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/en');
    }, 5000);
    
    return () => clearTimeout(redirectTimer);
  }, [router]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Topic Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The topic you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
        <p className="text-sm text-blue-500 dark:text-blue-400 mb-6">
          Redirecting to home page in 5 seconds...
        </p>
        <Link 
          href="/en" 
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Return to Home
        </Link>
      </div>
    </div>
  );
} 