import { DecodedIdToken } from 'firebase-admin/auth';
import Link from 'next/link';

const ApplyButton = ({ user }: { user: DecodedIdToken | null }) => {
  return (
    <>
      {user ? (
        <button className="ApplyButton">Apply Now</button>
      ) : (
        <Link href="/login" className="ApplyButton">
          Apply Now
        </Link>
      )}
    </>
  );
};

export default ApplyButton;
