'use client';

import { useState } from 'react';
import Terms from './Terms';
import { applyToJob } from '@/utils/actions';
import { RiArrowDropUpFill as CollapseIcon } from 'react-icons/ri';
import { CgSpinnerAlt as SpinnerIcon } from 'react-icons/cg';
import SuccesMessage from './SuccessMessage';

const ApplicationForm = ({ jobId }: { jobId: string }) => {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleApply = async (formData: FormData) => {
    const fullName = formData.get('fullName');
    if (typeof fullName !== 'string') return;
    setisLoading(true);

    await applyToJob(fullName, jobId);

    setisLoading(false);
    setIsSubmittedSuccessfully(true);
  };

  return (
    <>
      <form
        action={e => handleApply(e)}
        className="flex flex-col gap-6 mt-6 text-[--text-primary] w-full"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="font-semibold">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            autoComplete="off"
            minLength={3}
            required
            className="border py-1.5 px-2 rounded-md bg-inherit border-[--checkbox-unchecked] max-w-full 
          focus:border-[--text-teritary] outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cvInput" className="font-semibold cursor-pointer ">
            Upload CV
          </label>
          <input
            type="file"
            name="cvInput"
            id="cvInput"
            accept=".pdf,.doc"
            required
            className="text-[--text-secondary] file:mr-3 file:border-0 file:tracking-wide file:px-3 file:py-1.5 
          file:rounded-md file:font-bold file:cursor-pointer file:bg-[--button-light-bg] file:text-[--button-light-text] 
          file:hover:bg-[--button-light-hover-bg] valid:text-[--text-teritary]"
          />
        </div>

        <div className="mt-3">
          <input type="checkbox" name="terms" id="terms" required />
          <label htmlFor="terms">
            <p>
              I agree to the&nbsp;
              <button
                type="button"
                onClick={() => setIsTermsExpanded(p => !p)}
                className="text-[#939bf4] transition-color hover:text-[--text-teritary] inline font-semibold"
              >
                terms and conditions
              </button>
            </p>
          </label>
          <div
            className={`grid transition-[grid-template-rows] duration-500 ${
              !isTermsExpanded ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
            }`}
          >
            <div className="mt-4 overflow-hidden text-[--text-secondary]">
              <Terms />
              <button
                type="button"
                onClick={() => setIsTermsExpanded(false)}
                className="mt-3.5 font-bold rounded-md flex w-fit mx-auto items-center
            text-[#939bf4] transition-colors hover:text-[--text-teritary]"
              >
                Show Less <CollapseIcon className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        <button className="ApplyButton mt-4">
          {!isLoading ? 'Apply' : <SpinnerIcon className="animate-spin text-2xl mx-auto" />}
        </button>
      </form>

      {isSubmittedSuccessfully && <SuccesMessage />}
    </>
  );
};

export default ApplicationForm;
