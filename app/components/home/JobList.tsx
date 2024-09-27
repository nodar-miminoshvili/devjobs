import { handleQuerySearch } from '@/utils/actions';
import JobListing from './JobListing';
import { AiOutlineFileSearch as NotFoundIcon } from 'react-icons/ai';

const JobList = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { querySnapshot } = await handleQuerySearch(searchParams);
  const jobs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Job[];

  return (
    <>
      {jobs.length ? (
        <ul
          className="grid auto-rows-[14.5rem] gap-14 px-5 pt-14 pb-8 sm:px-16 md:px-8 md:grid-cols-2 md:gap-x-7 
      lg:px-12 lg:gap-x-14 xl:gap-x-10 xl:grid-cols-3"
        >
          {jobs.map(job => (
            <JobListing job={job} key={job.id} />
          ))}
        </ul>
      ) : (
        <div className="grow flex flex-col items-center justify-center gap-4">
          <NotFoundIcon className="text-5xl text-[--button-highlight]" />
          <h1 className="text-lg font-semibold text-[--text-secondary]">
            Can&apos;t find that job ...
          </h1>
          <a href="/?keywords=&location=&fullTime=" className="ApplyButton">
            Clear Search
          </a>
        </div>
      )}
    </>
  );
};

export default JobList;
