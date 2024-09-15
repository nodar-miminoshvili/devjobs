const JobListingPlaceholder = () => {
  return (
    <div
      className="w-full h-full px-6 pt-12 pb-6 flex flex-col gap-3 bg-[var(--background-shade)] rounded-md relative
      animate-pulse job-placeholder"
    >
      <div className="w-14 h-14 absolute top-0 -translate-y-1/2"></div>
      <div className="w-3/5 h-5"></div>
      <div className="w-4/5 h-6"></div>
      <div className="w-1/3 h-4"></div>
      <div className="w-3/5 h-5 mt-auto"></div>
    </div>
  );
};

export default JobListingPlaceholder;
