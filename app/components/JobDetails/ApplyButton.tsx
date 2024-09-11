'use client';
import { DecodedIdToken } from 'firebase-admin/auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ApplyButton = ({ user }: { user: DecodedIdToken | null }) => {
  const pathname = usePathname();
  return (
    <Link href={user ? `${pathname}/apply` : '/login'} className="ApplyButton">
      Apply Now
    </Link>
  );
};

export default ApplyButton;
