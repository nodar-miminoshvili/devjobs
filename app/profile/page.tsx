import { getUserFromCookie } from '@/utils/actions';
import { redirect } from 'next/navigation';
import UserDetails from '../components/Profile/UserDetails';
import UserApplications from '../components/Profile/UserApplications';
import { Metadata } from 'next/types';
import metadataDetails from '@/lib/metadataDetails';
import { Suspense } from 'react';
import UserDetailsLoader from '../components/Profile/UserDetailsLoader';
import UserApplicationsLoader from '../components/Profile/UserApplicationsLoader';

export const metadata: Metadata = {
  title: metadataDetails.profilePage.title,
  description: metadataDetails.profilePage.description,
};

const ProfilePage = async () => {
  const user = await getUserFromCookie();
  if (!user) redirect('/login');

  return (
    <main className="container flex flex-col min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)] pb-8">
      <Suspense fallback={<UserDetailsLoader />}>
        <UserDetails uid={user.uid} />
      </Suspense>

      <div className="pl-5 sm:pl-16 md:pl-8 mt-4 mb-2">
        <h1 className="text-[--text-primary] font-bold text-xl mb-1">Applied Jobs</h1>
        <h2 className="text-[--text-secondary] font-medium">
          A list of jobs you&apos;ve applied to
        </h2>
      </div>
      <Suspense fallback={<UserApplicationsLoader placeholdersToRender={3} />}>
        <UserApplications uid={user.uid} />
      </Suspense>
    </main>
  );
};

export default ProfilePage;
