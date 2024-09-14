import { countryCodeToFullName } from '@/utils/helperFunctions';
import DetailList from './DetailList';
import { DecodedIdToken } from 'firebase-admin/auth';
import ApplyButton from './ApplyButton';

type Props = {
  jobDetails: Job;
  user: DecodedIdToken | null;
  isApplied: boolean;
};

const JobDetails = ({ jobDetails: job, user, isApplied }: Props) => {
  return (
    <div className="bg-[var(--background-shade)] rounded-md mt-10 px-5 pt-10 pb-12 md:px-8">
      <div className="md:flex items-center justify-between ">
        <div className="flex flex-col gap-1.5 mb-7 md:mb-0 md:gap-2">
          <div className="flex gap-3 items-center">
            <p>5h ago</p>
            <span>*</span>
            <p>{job.fullTime ? 'Full Time' : 'Part Time'}</p>
          </div>
          <h1 className="text-[var(--text-primary)] font-bold text-xl md:text-[1.75rem]">
            {job.position}
          </h1>
          <p className="text-[var(--text-teritary)] font-semibold">
            {countryCodeToFullName(job.location)}
          </p>
        </div>
        <ApplyButton user={user} isApplied={isApplied} />
      </div>
      <p className="mt-10">{job.description}</p>
      <div className="mt-8">
        <p className="text-[var(--text-primary)] text-xl font-bold">Requirements</p>
        <DetailList details={job.requirements} type="requirements" />
      </div>
      <div className="mt-10">
        <p className="text-[var(--text-primary)] text-xl font-bold">What You Will Do</p>
        <DetailList details={job.whatYouWillDo} type="whatYouWillDo" />
      </div>
    </div>
  );
};

export default JobDetails;
