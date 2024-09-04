import JobListing from './JobListing';

const JobList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <ul
      className="grid auto-rows-[14.5rem] gap-14 px-5 pt-14 sm:px-16 md:px-8 md:grid-cols-2 md:gap-x-7 
                 lg:px-12 lg:gap-x-14 xl:gap-x-10 xl:grid-cols-3 "
    >
      {jobs.map(job => (
        <JobListing job={job} key={job.id} />
      ))}
    </ul>
  );
};

export default JobList;
