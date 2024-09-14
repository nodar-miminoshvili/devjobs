import { DecodedIdToken } from 'firebase-admin/auth';
import ApplyButton from './ApplyButton';

type Props = {
  user: DecodedIdToken | null;
  company: string;
  position: string;
  isApplied: boolean;
};

const JobDetailsFooter = ({ user, company, position, isApplied }: Props) => {
  return (
    <div className="bg-[var(--background-shade)] px-4 py-6 mt-auto">
      <div className="md:flex md:justify-between md:items-center max-w-screen-lg mx-auto">
        <div className="hidden md:block">
          <p className="text-[var(--text-primary)] text-xl font-bold mb-0.5">{position}</p>
          <p className="text-[var(--text-secondary)] font-semibold">{company}</p>
        </div>
        <ApplyButton user={user} isApplied={isApplied} />
      </div>
    </div>
  );
};

export default JobDetailsFooter;
