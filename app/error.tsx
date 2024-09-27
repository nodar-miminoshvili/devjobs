'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { PiMaskSadFill as SadFaceIcon } from 'react-icons/pi';
import metadataDetails from '@/lib/metadataDetails';

const ErrorPage = ({ reset }: { reset: () => void }) => {
  const router = useRouter();
  const [_, startTransition] = useTransition();

  const { title, description } = metadataDetails.errorPage;

  return (
    <>
      {/* Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/x-icon" href="/errorIcon/sadFace.png" fetchPriority="high" />

      <div className="container grid place-items-center min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)]">
        <div className="flex flex-col text-[--text-secondary] items-center gap-3">
          <SadFaceIcon className="text-5xl fill-[--text-teritary]" />
          <h1 className="text-lg sm:text-xl font-semibold">Oops! Something Went Wrong</h1>

          <button
            className="px-5 py-4 rounded-md font-bold bg-[var(--button-light-bg)] text-[var(--button-light-text)] 
          transition-colors hover:bg-[var(--button-light-hover-bg)]"
            onClick={() => {
              startTransition(() => {
                router.refresh();
                reset();
              });
            }}
          >
            Try Again
          </button>
          <span className="font-medium">OR</span>
          <a href="/" className="ApplyButton text-xl font-bold text-[--text-primary] text-white">
            Visit Homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
