import admin from '@/firebaseAdmin';
import Image from 'next/image';
import Logout from '../Logout';

const UserDetails = async ({ uid }: { uid: string }) => {
  const { displayName, photoURL, email } = await admin.auth().getUser(uid);
  return (
    <div className="px-1 py-6 rounded-md mx-[min(5vw,20px)] sm:mx-16 md:mx-8 bg-[var(--background-shade)] text-[var(--text-primary)] -translate-y-10 flex flex-col items-center gap-5 md:flex-row md:px-6 md:gap-8 ">
      <Image src={photoURL!} alt={displayName!} width={120} height={120} className="rounded-sm" />
      <div className="text-center md:text-left">
        <p className="text-xl font-bold mb-1.5 md:mb-2 md:text-2xl">{displayName}</p>
        <p className="text-[--text-secondary] font-medium md:text-lg break-all text-[clamp(0.8rem,6vw,1rem)] sm:text-base">
          {email}
        </p>
      </div>
      <Logout />
    </div>
  );
};

export default UserDetails;
