const UserDetailsLoader = () => {
  return (
    <div
      className="px-1 py-6 rounded-md mx-[min(5vw,20px)] sm:mx-16 md:mx-8  
                -translate-y-10 flex flex-col items-center gap-5 md:flex-row md:px-6 md:gap-8 
                animate-pulse bg-[var(--button-light-bg)]"
    >
      <div className="w-[120px] aspect-square rounded-md bg-[--button-highlight]"></div>
      <div className="min-h-[130px] md:hidden"></div>
    </div>
  );
};

export default UserDetailsLoader;
