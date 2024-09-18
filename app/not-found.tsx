import Link from 'next/link';
import { HiOutlineEmojiSad as SadFaceIcon } from 'react-icons/hi';

const NotFoundPage = () => {
  return (
    <div className="container grid place-items-center min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)]">
      <h1 className="flex flex-col gap-0.5 items-center">
        <SadFaceIcon className="text-7xl fill-[--button-highlight] text-[--base-background]" />
        <span className="text-lg text-[--text-secondary] font-semibold mb-5">Page Not Found</span>

        <span className="text-xl font-bold text-[--text-primary]">
          <Link href="/" className="ApplyButton">
            Visit Homepage
          </Link>
        </span>
      </h1>
    </div>
  );
};

export default NotFoundPage;
