import Image from 'next/image';
import Link from 'next/link';

const JobListing = ({ job }: { job: Job }) => {
  return (
    <li>
      <Link
        href="/"
        className="w-full h-full px-6 pt-12 pb-6 flex flex-col gap-3 bg-[var(--background-shade)] rounded-md text-[var(--text-secondary)] relative
      transition-colors hover:shadow-sm hover:bg-[var(--listing-highlight)]"
      >
        <div
          className="w-14 h-14 rounded-md absolute grid place-content-center top-0 -translate-y-1/2 "
          style={{ backgroundColor: job.logoBackground }}
        >
          <Image src={job.logo} fill alt={job.company} className="object-scale-down" />
        </div>
        <div className="flex gap-3">
          <p>4d ago</p>*<p>{job.fullTime ? 'Full Time' : 'Part Time'}</p>
        </div>
        <p className="text-xl font-bold text-[var(--text-primary)]">{job.position}</p>
        <p className="font-medium">{job.company}</p>
        <p className="mt-auto text-[var(--text-teritary)] text-sm font-bold">{job.location}</p>
      </Link>
    </li>
  );
};

export default JobListing;
