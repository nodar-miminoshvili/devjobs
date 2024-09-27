import { ReactElement } from 'react';

const UserApplicationsLoader = ({ placeholdersToRender }: { placeholdersToRender: number }) => {
  const placeholders: ReactElement[] = [];

  for (let i = 0; i < placeholdersToRender; i++) {
    placeholders.push(
      <div
        key={i}
        className="w-full h-full px-6 pt-12 pb-6 flex flex-col gap-3 bg-[var(--background-shade)] rounded-md relative
        animate-pulse job-placeholder"
      >
        <div className="w-14 h-14 absolute top-0 -translate-y-1/2"></div>
        <div className="w-3/5 h-6"></div>
        <div className="w-4/5 h-7"></div>
        <div className="w-1/3 h-6"></div>
        <div className="w-3/5 h-5 mt-auto"></div>
        <div className="ml-auto mt-3 h-6 w-44"></div>
      </div>
    );
  }

  return (
    <div
      className="grid auto-rows-[minmax(14.5rem,1fr)] gap-14 px-5 pt-14 pb-8 sm:px-16 md:px-8 md:grid-cols-2 md:gap-x-7 
      lg:px-12 lg:gap-x-14 xl:gap-x-10 xl:grid-cols-3"
    >
      {placeholders}
    </div>
  );
};

export default UserApplicationsLoader;
