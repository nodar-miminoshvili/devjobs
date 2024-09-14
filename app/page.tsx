import Logout from './components/Logout';
import JobList from './components/home/JobList';
import Search from './components/home/Search/Search';
import Pagination from './components/home/Pagination/Pagination';
import { handleQuerySearch } from '@/utils/actions';

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const { querySnapshot, totalPages } = await handleQuerySearch(searchParams);
  const jobs: unknown = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

  return (
    <main className="container pb-4 flex flex-col min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)]">
      <Search />
      <JobList jobs={jobs as Job[]} />
      <Logout />
      <Pagination totalPages={totalPages} />
    </main>
  );
}
