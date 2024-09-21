import { getAppliedJobs } from '@/utils/actions';
import JobListing from '../home/JobListing';

const UserApplications = async ({ uid }: { uid: string }) => {
  const appliedJobs = (await getAppliedJobs(uid)) as AppliedJob[];

  return (
    <>
      <ul
        className="grid auto-rows-[minmax(14.5rem,1fr)] gap-14 px-5 pt-14 sm:px-16 md:px-8 md:grid-cols-2 md:gap-x-7 
      lg:px-12 lg:gap-x-14 xl:gap-x-10 xl:grid-cols-3"
      >
        {appliedJobs.map(job => (
          <JobListing job={job} key={job.id} appliedAt={job.appliedAt} />
        ))}
      </ul>
    </>
  );
};

export default UserApplications;
