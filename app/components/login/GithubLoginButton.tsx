'use client';
import { handleLogin } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { FaGithub as GithubIcon } from 'react-icons/fa';

const GithubLoginButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await handleLogin('github');
        router.push('/');
        router.refresh();
      }}
      className="loginOptionButton"
    >
      <GithubIcon className="fill-[var(--text-primary)]" /> Login with GitHub
    </button>
  );
};

export default GithubLoginButton;
