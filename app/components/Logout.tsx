'use client';

import { logOut } from '@/utils/auth';

const Logout = () => {
  return <button onClick={() => logOut()}>Logout</button>;
};

export default Logout;
