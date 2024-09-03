'use client';

import { handleLogin } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

const GoogleLoginButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await handleLogin('google');
        router.push('/');
        router.refresh();
      }}
      className="loginOptionButton"
    >
      <GoogleIcon /> Login with Google
    </button>
  );
};

export default GoogleLoginButton;
