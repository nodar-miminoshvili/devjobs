const JobDetailsLoadingPage = () => {
  return (
    <div className="flex flex-col gap-10 2xl:min-h-dvh details-placeholder">
      <div
        className="max-w-screen-md mx-auto relative -translate-y-3 px-4 
                  min-h-96 text-[var(--text-secondary)] md:-translate-y-10 w-full"
      >
        {/* DETAILS PLACEHOLDER BANNER */}
        <div
          className="flex flex-col items-center gap-7 relative bg-[var(--background-shade)] rounded-md pb-8 
    md:flex-row md:pb-0 md:min-h-36 md:gap-10 "
        >
          <div
            className="absolute -translate-y-1/2 w-14 h-14 rounded-md 
        md:relative md:translate-y-0 md:w-36 md:h-36 md:rounded-r-none bg-[var(--button-light-bg)] animate-pulse"
          ></div>
          <div className="pt-12 md:pt-0">
            <div className="mb-2.5 md:mb-1.5 h-8 w-24 mx-auto md:mx-0 placeholder-box"></div>
            <div className="h-5 w-36 placeholder-box"></div>
          </div>
          <div className="w-36 h-14 md:ml-auto md:mr-8 placeholder-box"></div>
        </div>

        {/* DETAILS PLACEHOLDER */}
        <div className="bg-[var(--background-shade)] rounded-md mt-10 px-5 pt-10 pb-12 md:px-8 animate-pulse">
          <div className="md:flex items-center justify-between ">
            <div className="flex flex-col gap-1.5 mb-7 md:mb-0 md:gap-2">
              <div className="flex gap-3 items-center">
                <div className="w-14 h-6 placeholder-box-plain"></div>
                <div className="w-20 h-6 placeholder-box-plain"></div>
              </div>
              <div className="max-w-56 md:max-w-none md:w-96 h-8 placeholder-box-plain"></div>
              <div className="w-28 h-6 placeholder-box-plain"></div>
            </div>
            <div className="h-12 w-full md:w-32 placeholder-box-plain"></div>
          </div>
          <div className="mt-10 h-32 placeholder-box-plain"></div>
          <div className="mt-8">
            <div className="w-32 h-8 placeholder-box-plain"></div>
            <div className="my-5 h-96 md:h-80 placeholder-box-plain"></div>
          </div>
          <div className="mt-10">
            <div className="w-44 h-8 placeholder-box-plain"></div>
            <div className="my-5 h-96 md:h-80 placeholder-box-plain"></div>
          </div>
        </div>
      </div>

      {/* DETAILS PLACEHOLDER FOOTER */}
      <div className="bg-[var(--background-shade)] px-4 py-6 mt-auto">
        <div className="md:flex md:justify-between md:items-center max-w-screen-lg mx-auto">
          <div className="hidden md:block">
            <div className="w-60 h-8 mb-1 placeholder-box"></div>
            <div className="w-20 h-6 placeholder-box"></div>
          </div>
          <div className="h-12 w-full md:w-36 placeholder-box"></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsLoadingPage;
