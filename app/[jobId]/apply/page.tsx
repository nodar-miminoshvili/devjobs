import ApplicationForm from '@/app/components/ApplicationForm/ApplicationForm';
import { checkIfUserApplied, getJobDetailsById, getUserFromCookie } from '@/utils/actions';
import { redirect } from 'next/navigation';
import { countryCodeToFullName } from '@/utils/helperFunctions';
import { MdLocationOn as Locationicon } from 'react-icons/md';
import { LuClock4 as ClockIcon } from 'react-icons/lu';
import Image from 'next/image';

const ApplyPage = async ({ params }: { params: { jobId: string } }) => {
  const user = await getUserFromCookie();
  if (!user) redirect('/');

  const isApplied = await checkIfUserApplied(user.uid, params.jobId);
  if (isApplied) redirect('/');

  const job = await getJobDetailsById(params.jobId);

  return (
    <main className="min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)] grid place-items-center">
      <div
        className="p-4 py-7 sm:p-8 md:p-10 rounded-md bg-[--background-shade] text-[--text-secondary] 
        flex flex-col items-center gap-3 my-12 max-w-[min(90dvw,25rem)]"
      >
        <h1 className="text-2xl sm:text-3xl text-[--checkbox-unchecked] font-bold mb-3">
          JOB APPLICATION
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-[--text-primary] mb-2">{job.position}</h2>
        <div className="flex flex-col gap-3 items-center">
          <div
            className="w-14 h-14 rounded-md relative"
            style={{ backgroundColor: job.logoBackground }}
          >
            <Image
              src={job.logo}
              alt={job.company}
              fill
              className="object-scale-down"
              sizes="56px"
            />
          </div>
          <h3 className="text-lg font-bold">{job.company}</h3>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          <h4 className="flex items-center gap-1.5 font-bold">
            <Locationicon className="fill-[--text-teritary]" />
            {countryCodeToFullName(job.location)}
          </h4>
          <h5 className="flex items-center gap-1.5 font-bold">
            <ClockIcon className="text-[--text-teritary]" />
            {job.fullTime ? 'Full-Time' : 'Part-Time'}
          </h5>
        </div>
        <ApplicationForm jobId={job.id} />
      </div>
    </main>
  );
};

export default ApplyPage;
