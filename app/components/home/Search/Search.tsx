'use client';
import { TiFilter as FilterIcon } from 'react-icons/ti';
import { MdSearch as SearchIcon } from 'react-icons/md';
import LocationFilter from './LocationFilter';
import FullTimeFilter from './FullTimeFilter';

const Search = () => {
  return (
    <form
      className="flex p-4 gap-3 items-center rounded-md mx-5 sm:mx-16 md:mx-8 bg-[var(--background-shade)]
                text-[var(--text-primary)] relative -translate-y-1/2"
    >
      <div className="min-w-[25%] md:flex items-center gap-1 relative md:basis-1/3 divide-right grow md:grow-0">
        <SearchIcon className="fill-[var(--text-teritary)] text-xl hidden md:block shrink-0" />
        <input
          type="text"
          placeholder="Filter by title..."
          className="text-lg bg-inherit outline-none placeholder:text-[#8c8f96] w-full"
          name="title"
        />
      </div>
      <LocationFilter />
      <FullTimeFilter />
      <button className="ml-auto w-fit md:hidden">
        <FilterIcon className="fill-[#6E8098] text-3xl" />
      </button>
      <button className="p-2.5 bg-[var(--text-teritary)] rounded-md text-white lg:px-6 md:ml-auto">
        <SearchIcon className="text-3xl lg:hidden" />
        <span className="hidden lg:block text-lg font-bold">Search</span>
      </button>
    </form>
  );
};

export default Search;
