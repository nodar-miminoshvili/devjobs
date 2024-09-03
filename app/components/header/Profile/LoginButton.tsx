import Link from 'next/link';
import { FaRegUser as UserIcon } from 'react-icons/fa6';

const LoginButton = () => {
  return (
    <Link href="/login" className="w-14 h-14 grid place-items-center">
      <UserIcon className="fill-white text-[1.75rem] hover:fill-gray-400 transition-colors" />
    </Link>
  );
};

export default LoginButton;
