import { FaLocationDot as LocationIcon } from 'react-icons/fa6';

const LocationFilter = () => {
  return (
    <div className="min-w-[25%] hidden md:flex items-center gap-1 relative md:basis-1/3 divide-right">
      <LocationIcon className="fill-[var(--text-teritary)] text-xl hidden md:block shrink-0" />
      <input
        type="text"
        placeholder="Filter by location..."
        className="text-lg bg-inherit outline-none"
        name="location"
      />
    </div>
  );
};

export default LocationFilter;
