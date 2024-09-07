const FullTimeFilter = ({
  isSelected,
  unmount,
  forMobile,
}: {
  isSelected: boolean;
  unmount?: boolean;
  forMobile?: boolean;
}) => {
  if (unmount) return null;
  return (
    <div className={forMobile ? 'block' : 'hidden md:block'}>
      <input type="checkbox" name="fullTime" id="fullTime" defaultChecked={isSelected} />
      <label htmlFor="fullTime" className="font-bold">
        <span>
          Full Time <span className={forMobile ? 'inline' : 'hidden lg:inline'}>Only</span>
        </span>
      </label>
    </div>
  );
};

export default FullTimeFilter;
