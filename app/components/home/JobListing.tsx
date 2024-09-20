import { displayPostTime, countryCodeToFullName } from '@/utils/helperFunctions';
import Image from 'next/image';
import Link from 'next/link';

const JobListing = ({ job }: { job: Job }) => {
  return (
    <li>
      <Link
        href={`/${job.id}`}
        className="w-full h-full px-6 pt-12 pb-6 flex flex-col gap-3 bg-[var(--background-shade)] rounded-md text-[var(--text-secondary)] relative
      transition-colors hover:shadow-sm hover:bg-[var(--listing-highlight)]"
      >
        <div
          className="w-14 h-14 rounded-md absolute grid place-content-center top-0 -translate-y-1/2 "
          style={{ backgroundColor: job.logoBackground }}
        >
          <Image src={job.logo} fill sizes="56px" alt={job.company} className="object-scale-down" />
        </div>
        <div className="flex gap-2 items-center">
          <p>{displayPostTime(job.postedAt.seconds)}</p>
          <span className="bg-[--button-highlight] w-2 h-2 rounded-full translate-y-px"></span>
          <p>{job.fullTime ? 'full' : 'part'} time</p>
        </div>
        <p className="text-xl font-bold text-[var(--text-primary)]">{job.position}</p>
        <p className="font-medium">{job.company}</p>
        <p className="mt-auto text-[var(--text-teritary)] text-sm font-bold">
          {countryCodeToFullName(job.location)}
        </p>
      </Link>
    </li>
  );
};

export default JobListing;
