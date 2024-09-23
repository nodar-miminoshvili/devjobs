import Link from 'next/link';
import { HiOutlineEmojiSad as SadFaceIcon } from 'react-icons/hi';

const NotFound = ({ type }: { type: 'default' | 'invalid-jobId' }) => {
  return (
    <div className="container grid place-items-center min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)]">
      <h1 className="flex flex-col gap-0.5 items-center">
        <SadFaceIcon className="text-7xl fill-[--button-highlight] text-[--base-background]" />
        <span className="text-lg text-[--text-secondary] font-semibold mb-1">404 Not Found</span>
        <span className="text-[--text-secondary] font-medium mb-5">
          {type === 'default'
            ? 'Could not find the requested page'
            : 'Could not find the requested job'}
        </span>

        <Link href="/" className="ApplyButton text-xl font-bold text-[--text-primary] text-white">
          Visit Homepage
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
