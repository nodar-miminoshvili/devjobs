import { useRef, useState } from 'react';
import { FaLocationDot as LocationIcon } from 'react-icons/fa6';
import { GrFormClose as ClearIcon } from 'react-icons/gr';

const LocationFilter = ({
  location,
  unmount,
  forMobile,
}: {
  location: string | undefined;
  unmount?: boolean;
  forMobile?: boolean;
}) => {
  const [defaultSelected, setDefaultSelected] = useState(() => !location);
  const selectRef = useRef<HTMLSelectElement>(null);
  if (unmount) return null;
  return (
    <div
      className={`min-w-[25%] items-center md:basis-1/3
                ${forMobile ? 'flex gap-3.5' : 'hidden md:flex relative divide-right gap-1'}`}
    >
      <LocationIcon className="fill-[var(--text-teritary)] text-xl shrink-0" />
      <select
        name="location"
        className={`font-bold bg-inherit appearance-none outline-none cursor-pointer text-lg  ${
          defaultSelected && 'text-[#8c8f96] font-normal'
        }`}
        ref={selectRef}
        defaultValue={location}
        onChange={e => {
          e.target.value ? setDefaultSelected(false) : setDefaultSelected(true);
        }}
      >
        <option value="">Filter by location...</option>
        <option value="US">United States</option>
        <option value="GB">United Kingdom</option>
        <option value="PT">Portugal</option>
        <option value="NL">Netherlands</option>
        <option value="CA">Canada</option>
        <option value="JP">Japan</option>
        <option value="AU">Australia</option>
        <option value="NZ">New Zeeland</option>
      </select>
      {!defaultSelected && (
        <button
          type="button"
          onClick={() => {
            selectRef.current!.selectedIndex = 0;
            setDefaultSelected(true);
          }}
          className="ml-auto"
        >
          <ClearIcon className="md:pr-3 text-[var(--text-teritary)] text-xl md:text-[2.25rem] " />
        </button>
      )}
    </div>
  );
};

export default LocationFilter;
