import { fetchTopics } from '../lib/api';
import TopicList from './components/TopicList';

export default async function Home() {
  const { topics } = await fetchTopics();
  
  return (
    <main className="min-h-screen bg-gray-100">
      <TopicList topics={topics} />
    </main>
  );
}