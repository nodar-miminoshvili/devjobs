import { GrFormClose as ClearIcon } from 'react-icons/gr';
import { MdSearch as SearchIcon } from 'react-icons/md';
import { useRef, useState } from 'react';

const KeywordsFilter = ({ keywords }: { keywords: string | undefined }) => {
  const [inputCanBeResseted, setInputCanBeResseted] = useState(() => !!keywords);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="min-w-[25%] flex items-center gap-1 relative md:basis-1/3 divide-right grow md:grow-0">
      <SearchIcon className="fill-[var(--text-teritary)] text-xl hidden md:block shrink-0" />
      <input
        type="text"
        placeholder="Search by title..."
        className="text-lg bg-inherit outline-none placeholder:text-[#8c8f96] w-full"
        name="keywords"
        ref={inputRef}
        defaultValue={keywords}
        autoComplete="off"
        onChange={e =>
          e.target.value ? setInputCanBeResseted(true) : setInputCanBeResseted(false)
        }
      />
      {inputCanBeResseted && (
        <button
          type="button"
          onClick={() => {
            inputRef.current!.value = '';
            setInputCanBeResseted(false);
          }}
        >
          <ClearIcon className="md:pr-3 text-[var(--text-teritary)] text-xl md:text-[2.25rem] " />
        </button>
      )}
    </div>
  );
};

export default KeywordsFilter;
