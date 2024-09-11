'use client';

const ApplicationForm = ({ jobId, userId }: { jobId: string; userId: string }) => {
  const handleApply = () => {
    console.log(jobId, userId);
  };
  return (
    <form
      action={() => handleApply}
      className="flex flex-col gap-6 mt-6 text-[var(--text-primary)] w-full"
    >
      <div className="flex flex-col gap-1.5 ">
        <label htmlFor="fullName" className="font-semibold">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="border py-1.5 px-2 rounded-md bg-inherit border-[var(--checkbox-unchecked)] max-w-full"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cvInput" className="font-semibold">
          Upload CV
        </label>
        <input type="file" name="cvInput" id="cvInput" />
      </div>

      <div className="mt-2">
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>

      <button className="ApplyButton mt-4">Apply</button>
    </form>
  );
};

export default ApplicationForm;
