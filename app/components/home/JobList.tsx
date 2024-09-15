import { handleQuerySearch } from '@/utils/actions';
import JobListing from './JobListing';

const JobList = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { querySnapshot } = await handleQuerySearch(searchParams);
  const jobs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Job[];
  return (
    <>
      <ul
        className="grid auto-rows-[14.5rem] gap-14 px-5 pt-14 sm:px-16 md:px-8 md:grid-cols-2 md:gap-x-7 
      lg:px-12 lg:gap-x-14 xl:gap-x-10 xl:grid-cols-3"
      >
        {jobs.map(job => (
          <JobListing job={job} key={job.id} />
        ))}
      </ul>
    </>
  );
};

export default JobList;
