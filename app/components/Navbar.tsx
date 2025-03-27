import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-pink-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="4" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="20" r="2" fill="currentColor" />
              <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-pink-500">Timeline</h1>
            <p className="text-xs text-gray-500 -mt-1">Unravel the Insights</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-500 pb-1 transition-all">Home</Link>
            <Link href="/explore" className="font-medium text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-500 pb-1 transition-all">Explore</Link>
            <Link href="/about" className="font-medium text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-500 pb-1 transition-all">About</Link>
          </div>
          
          <LanguageSelector />

          <button className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 