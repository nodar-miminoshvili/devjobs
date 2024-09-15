import JobList from './components/home/JobList';
import Search from './components/home/Search/Search';
import { Suspense } from 'react';
import Logout from './components/Logout';
import JobListLoader from './components/home/JobListLoader';
import PaginationWrapper from './components/home/Pagination/PaginationWrapper';
import { generateSuspenseKeys } from '@/utils/helperFunctions';
import PaginationLoader from './components/home/Pagination/PaginationLoader';

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main className="container pb-4 flex flex-col min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)]">
      <Search />

      <Suspense
        key={generateSuspenseKeys(searchParams, 'job-list')}
        fallback={<JobListLoader placeholdersToRender={2} />}
      >
        <JobList searchParams={searchParams} />
      </Suspense>
      <Logout />

      <Suspense
        key={generateSuspenseKeys(searchParams, 'pagination')}
        fallback={<PaginationLoader />}
      >
        <PaginationWrapper searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
