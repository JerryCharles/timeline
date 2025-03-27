import { getTopics } from '../services/api';
import Navbar from '../components/Navbar';
import TopicCard from '../components/TopicCard';
import Pagination from '../components/Pagination';

export default async function ChineseHome({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // Get the current page from query params or default to 1
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const pageSize = 6; // Reduced number of topics per page for larger cards
  
  // Server-side data fetching using the API service with pagination
  const { topics, totalPages } = await getTopics(currentPage, pageSize);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-6 md:p-8 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">時間軸主題</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <TopicCard key={topic.topicID} topic={topic} isEnglish={false} />
            ))}
          </div>
          
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            basePath="/zh-TW"
          />
        </div>
      </main>
    </>
  );
} 