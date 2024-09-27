import { getAppliedJobs } from '@/utils/actions';
import JobListing from '../home/JobListing';
import { MdContentPasteSearch as NotFoundIcon } from 'react-icons/md';
import Link from 'next/link';

const UserApplications = async ({ uid }: { uid: string }) => {
  const appliedJobs = (await getAppliedJobs(uid)) as AppliedJob[];

  return (
    <>
      {appliedJobs.length ? (
        <ul
          className="grid auto-rows-[minmax(14.5rem,1fr)] gap-14 px-5 pt-14 pb-8 sm:px-16 md:px-8 md:grid-cols-2 md:gap-x-7 
      lg:px-12 lg:gap-x-14 xl:gap-x-10 xl:grid-cols-3"
        >
          {appliedJobs
            .sort((a, b) => b.appliedAt - a.appliedAt)
            .map(job => (
              <JobListing job={job} key={job.id} appliedAt={job.appliedAt} />
            ))}
        </ul>
      ) : (
        <div className="py-12 2xl:py-20 flex flex-col items-center gap-3.5">
          <NotFoundIcon className="text-5xl text-[--button-highlight]" />
          <h1 className="text-lg font-semibold text-[--text-secondary]">No applications found</h1>
          <Link href="/" className="ApplyButton">
            Search Jobs
          </Link>
        </div>
      )}
    </>
  );
};

export default UserApplications;
