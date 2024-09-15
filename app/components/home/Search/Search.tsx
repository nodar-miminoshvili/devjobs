'use client';
import { TiFilter as FilterIcon } from 'react-icons/ti';
import { MdSearch as SearchIcon } from 'react-icons/md';
import LocationFilter from './LocationFilter';
import FullTimeFilter from './FullTimeFilter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import KeywordsFilter from './KeywordsFilter';
import { useState } from 'react';
import MobileFiltersModal from './MobileFiltersModal';

const Search = () => {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleSearch = (formData: FormData) => {
    const keywords = formData.get('keywords');
    const location = formData.get('location');
    const fullTime = Boolean(formData.get('fullTime'));

    const params = new URLSearchParams(searchParams);

    const queryParams = {
      keywords,
      location,
      fullTime,
    };

    params.set('page', '1');

    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    }

    push(`${pathname}?${params.toString()}`);
  };

  const handleOpenFilters = () => {
    setIsFiltersModalOpen(true);
    document.body.style.overflowY = 'hidden';
  };

  const handleCloseFilters = () => {
    setIsFiltersModalOpen(false);
    document.body.style.overflowY = 'scroll';
  };

  return (
    <form action={handleSearch}>
      <div
        className="flex p-4 gap-3 items-center rounded-md mx-5 sm:mx-16 md:mx-8 bg-[var(--background-shade)]
                text-[var(--text-primary)] -translate-y-1/2"
      >
        <KeywordsFilter keywords={searchParams.get('keywords')?.toString()} />

        <LocationFilter
          location={searchParams.get('location')?.toString()}
          unmount={isFiltersModalOpen}
        />

        <FullTimeFilter isSelected={!!searchParams.get('fullTime')} unmount={isFiltersModalOpen} />

        <button className="ml-auto w-fit md:hidden" type="button" onClick={handleOpenFilters}>
          <FilterIcon className="fill-[#6E8098] text-3xl" />
        </button>

        <button
          className="p-2.5 bg-[var(--text-teritary)] rounded-md text-white lg:px-6 md:ml-auto 
                    transition-colors hover:bg-[var(--button-highlight)]"
        >
          <SearchIcon className="text-3xl lg:hidden" />
          <span className="hidden lg:block text-lg font-bold">Search</span>
        </button>
      </div>

      {isFiltersModalOpen && (
        <MobileFiltersModal handleCloseFilters={handleCloseFilters}>
          <LocationFilter location={searchParams.get('location')?.toString()} forMobile />
          <FullTimeFilter isSelected={!!searchParams.get('fullTime')} forMobile />
        </MobileFiltersModal>
      )}
    </form>
  );
};

export default Search;
