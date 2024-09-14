import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { LuCheckCircle as Successicon } from 'react-icons/lu';

const SuccesMessage = () => {
  const { refresh } = useRouter();
  const successModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (successModalRef.current instanceof HTMLDivElement) {
      successModalRef.current.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'instant',
      });
      document.body.style.overflowY = 'hidden';
    }
  }, []);

  const enableScroll = () => {
    document.body.style.overflowY = 'auto';
    refresh();
  };
  return (
    <>
      <Link
        href="/"
        onClick={enableScroll}
        className="absolute w-full h-full bg-[#00000080] top-0 left-0"
      ></Link>
      <div
        data-success-modal
        ref={successModalRef}
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-max max-w-[min(90dvw,25rem)] p-8 h-max
       bg-[--background-shade] rounded-md"
      >
        <p className="flex items-center gap-3 text-xl">
          <Successicon className="text-[--text-teritary] text-2xl" />
          <span className="text-[--text-primary] font-bold">Application Submitted!</span>
        </p>
        <p className="text-[--text-secondary] py-12 font-medium">
          Congratulations on taking the next step in your career journey!
        </p>
        <Link href="/" onClick={enableScroll} className="ApplyButton">
          Close
        </Link>
      </div>
    </>
  );
};

export default SuccesMessage;
