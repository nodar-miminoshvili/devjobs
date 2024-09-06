const FullTimeFilter = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <div className="hidden md:block">
      <input type="checkbox" name="fullTime" id="fullTime" defaultChecked={isSelected} />
      <label htmlFor="fullTime" className="font-bold">
        <span>
          Full Time <span className="hidden lg:inline">Only</span>
        </span>
      </label>
    </div>
  );
};

export default FullTimeFilter;
