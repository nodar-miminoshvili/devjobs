import { DecodedIdToken } from 'firebase-admin/auth';
import Image from 'next/image';
import Link from 'next/link';

const LoggedInUser = ({ user }: { user: DecodedIdToken }) => {
  return (
    <Link href={'/'} className="">
      <Image
        src={user.picture!}
        alt="avatar"
        width={56}
        height={56}
        className="w-14 h-14 rounded-full overflow-hidden"
      ></Image>
    </Link>
  );
};

export default LoggedInUser;
