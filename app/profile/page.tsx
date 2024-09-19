import { getUserFromCookie } from '@/utils/actions';
import { redirect } from 'next/navigation';
import UserDetails from '../components/Profile/UserDetails';

const ProfilePage = async () => {
  const user = await getUserFromCookie();
  if (!user) redirect('/');

  return (
    <main className="container flex flex-col min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)]">
      <UserDetails uid={user.uid} />
    </main>
  );
};

export default ProfilePage;
