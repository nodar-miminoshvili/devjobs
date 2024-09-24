import { getUserFromCookie } from '@/utils/actions';
import GithubLoginButton from '../components/login/GithubLoginButton';
import GoogleLoginButton from '../components/login/GoogleLoginButton';
import { redirect } from 'next/navigation';
import metadataDetails from '@/lib/metadataDetails';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: metadataDetails.loginPage.title,
  description: metadataDetails.loginPage.description,
};

const LoginPage = async () => {
  const user = await getUserFromCookie();
  if (user) return redirect('/');
  return (
    <main className="min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)] grid place-items-center">
      <div className="min-w-max p-6 min-h-72 bg-[var(--background-shade)] text-[var(--text-primary)] shadow-lg rounded-md text-center">
        <h1 className="text-xl font-bold mb-3">Login</h1>
        <h2 className="font-medium">Choose your preferred login method</h2>
        <div className="mt-8 flex flex-col gap-3.5 ">
          <GoogleLoginButton />
          <GithubLoginButton />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
