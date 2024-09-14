'use client';
import { DecodedIdToken } from 'firebase-admin/auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuCheckCircle as Successicon } from 'react-icons/lu';

const ApplyButton = ({ user, isApplied }: { user: DecodedIdToken | null; isApplied: boolean }) => {
  const pathname = usePathname();
  return (
    <>
      {!isApplied ? (
        <Link href={user ? `${pathname}/apply` : '/login'} className="ApplyButton">
          Apply Now
        </Link>
      ) : (
        <button
          disabled
          title="You Have Already Applied For This Position"
          className="text-white px-6 py-3 rounded-md font-bold bg-[--button-light-hover-bg]
          flex items-center gap-2 justify-center w-full md:w-max"
        >
          Applied
          <Successicon className="text-[--button-highlight] text-lg" />
        </button>
      )}
    </>
  );
};

export default ApplyButton;
