import { useEffect } from 'react';
import Overlay from '../../Overlay';

const MobileFiltersModal = ({
  children,
  handleCloseFilters,
}: {
  children: React.ReactNode;
  handleCloseFilters: () => void;
}) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaQueryChange = (query: MediaQueryListEvent) => {
      if (!query.matches) return;
      handleCloseFilters();
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [handleCloseFilters]);

  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-[var(--background-shade)] text-[var(--text-primary)] w-[min(95dvw,20rem)] 
      p-8 z-20 flex flex-col gap-8 items-start rounded-lg"
      >
        {children}
        <button
          onClick={e => {
            if (e.target instanceof HTMLButtonElement && e.target.form) {
              e.target.form.requestSubmit();
              handleCloseFilters();
            }
          }}
          className="text-white bg-[var(--text-teritary)] font-bold py-3 w-full rounded-md"
        >
          Search
        </button>
      </div>
      <Overlay handleCloseOverlay={handleCloseFilters} />
    </>
  );
};

export default MobileFiltersModal;
