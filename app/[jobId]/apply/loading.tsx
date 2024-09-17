const ApplicationFormLoader = () => {
  return (
    <div className="min-h-[calc(100dvh-136px)] md:min-h-[calc(100dvh-160px)] grid place-items-center application-placeholder">
      <div
        className="p-4 py-7 sm:p-8 md:p-10 rounded-md bg-[--background-shade] 
          flex flex-col items-center gap-3 my-12 max-w-[min(90dvw,25rem)] w-full animate-pulse"
      >
        {/* DETAILS OVERVIEW PLACEHOLDER */}
        <div className="mb-3 w-4/5 h-8 sm:h-9 mx-auto"></div>
        <div className="mb-2 w-11/12 h-7 sm:h-8"></div>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-14 h-14 rounded-md relative"></div>
          <div className="w-14 h-7"></div>
        </div>
        <div className="h-6 w-9/12"></div>

        {/* FORM PLACEHOLDER */}
        <div className="mt-6 h-[16.375rem] w-full rounded-lg"></div>
        <div className="mt-1 h-12 w-full"></div>
      </div>
    </div>
  );
};

export default ApplicationFormLoader;
