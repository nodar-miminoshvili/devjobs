'use client';

import { logOut } from '@/utils/auth';

const Logout = () => {
  return (
    <button
      onClick={() => logOut()}
      className="px-4 py-1.5  bg-[#ff6b6e] transition-colors hover:bg-[#d72d3f] rounded-md font-bold text-lg
      mt-3 md:ml-auto md:mt-0 text-white"
    >
      Logout
    </button>
  );
};

export default Logout;
