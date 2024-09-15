import { ReactElement } from 'react';
import JobListingPlaceholder from './JobListingPlaceholder';

const JobListLoader = ({ placeholdersToRender }: { placeholdersToRender: number }) => {
  const placeholders: ReactElement[] = [];

  for (let i = 0; i < placeholdersToRender; i++) {
    placeholders.push(<JobListingPlaceholder key={i} />);
  }

  return (
    <div
      className="grid auto-rows-[14.5rem] gap-14 px-5 pt-14 sm:px-16 md:px-8 md:grid-cols-2 md:gap-x-7 
      lg:px-12 lg:gap-x-14 xl:gap-x-10 xl:grid-cols-3"
    >
      {placeholders}
    </div>
  );
};

export default JobListLoader;
