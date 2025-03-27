import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  // Generate array of page numbers to display
  const getPageNumbers = () => {
    // Show 5 page numbers: current page, 2 before and 2 after (if available)
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="flex justify-center mt-8 mb-4">
      <ul className="flex items-center gap-1">
        {/* Previous page button */}
        <li>
          <Link
            href={currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : '#'}
            className={`flex items-center justify-center h-9 w-9 rounded border ${
              currentPage > 1 
                ? 'text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400' 
                : 'text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
          >
            <span className="sr-only">Previous</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </li>
        
        {/* Page numbers */}
        {getPageNumbers().map((pageNum) => (
          <li key={pageNum}>
            <Link
              href={`${basePath}?page=${pageNum}`}
              className={`flex items-center justify-center h-9 w-9 rounded border ${
                pageNum === currentPage
                  ? 'bg-blue-50 text-blue-600 border-blue-400 font-medium'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              aria-current={pageNum === currentPage ? 'page' : undefined}
            >
              {pageNum}
            </Link>
          </li>
        ))}
        
        {/* Next page button */}
        <li>
          <Link
            href={currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : '#'}
            className={`flex items-center justify-center h-9 w-9 rounded border ${
              currentPage < totalPages 
                ? 'text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400' 
                : 'text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
            aria-disabled={currentPage >= totalPages}
            tabIndex={currentPage >= totalPages ? -1 : undefined}
          >
            <span className="sr-only">Next</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
} 