import ApplicationForm from '@/app/components/ApplicationForm/ApplicationForm';
import { getJobDetailsById, getUserFromCookie } from '@/utils/actions';
import { redirect } from 'next/navigation';
import { countryCodeToFullName } from '@/utils/helperFunctions';
import { MdLocationOn as Locationicon } from 'react-icons/md';
import { LuClock4 as ClockIcon } from 'react-icons/lu';

const ApplyPage = async ({ params }: { params: { jobId: string } }) => {
  const user = await getUserFromCookie();
  if (!user) redirect('/');
  const job = await getJobDetailsById(params.jobId);

  return (
    <main className="min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)] grid place-items-center">
      <div
        className="p-8 rounded-md bg-[var(--background-shade)] text-[var(--text-secondary)] flex flex-col items-center gap-3 my-12
       max-w-[min(90dvw,24rem)]"
      >
        <h1 className="text-3xl text-[var(--checkbox-unchecked)] font-bold mb-2">
          JOB APPLICATION
        </h1>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">{job.position}</h2>
        <h3 className="text-lg font-bold">{job.company}</h3>
        <div className="flex gap-5">
          <h4 className="flex items-center gap-1.5 font-bold">
            <Locationicon className="fill-[var(--text-teritary)]" />{' '}
            {countryCodeToFullName(job.location)}
          </h4>
          <h5 className="flex items-center gap-1.5 font-bold">
            <ClockIcon className="text-[var(--text-teritary)]" />{' '}
            {job.fullTime ? 'Full-Time' : 'Part-Time'}
          </h5>
        </div>
        <ApplicationForm jobId={job.id} userId={user.uid} />
      </div>
    </main>
  );
};

export default ApplyPage;
