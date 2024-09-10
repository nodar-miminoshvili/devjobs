import { db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import CompanyBanner from '../components/JobDetails/CompanyBanner';
import JobDetails from '../components/JobDetails/JobDetails';
import { getUserFromCookie } from '@/utils/actions';
import JobDetailsFooter from '../components/JobDetails/JobDetailsFooter';

const JobPage = async ({ params }: { params: { jobId: string } }) => {
  const docRef = doc(db, 'jobs', params.jobId);
  const docSnap = await getDoc(docRef);
  const user = await getUserFromCookie();
  const job = { ...docSnap.data(), id: docSnap.id } as Job;

  return (
    <div className="flex flex-col gap-10 2xl:min-h-[calc(100dvh-160px)]">
      <main
        className="max-w-screen-md mx-auto relative -translate-y-3 px-4 
      bag-red-300 min-h-96 text-[var(--text-secondary)] md:-translate-y-10"
      >
        <CompanyBanner
          companyDetails={{
            company: job.company,
            logo: job.logo,
            logoBackground: job.logoBackground,
          }}
        />
        <JobDetails jobDetails={job} user={user} />
      </main>
      <JobDetailsFooter user={user} company={job.company} position={job.position} />
    </div>
  );
};

export default JobPage;
