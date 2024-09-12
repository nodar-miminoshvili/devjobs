const terms = [
  {
    title: 'Data Collection',
    text: 'You consent to the collection and use of your personal data, including your full name and CV, for the purpose of evaluating your job application.',
  },
  {
    title: 'Privacy',
    text: 'Your information will be handled in accordance with our Privacy Policy and will only be shared with relevant parties involved in the recruitment process.',
  },
  {
    title: 'Accuracy',
    text: 'You confirm that the information provided is accurate and complete to the best of your knowledge.',
  },
  {
    title: 'Application Review',
    text: 'Submitting your CV does not guarantee employment or an interview.',
  },
  {
    title: 'Document Security',
    text: 'We take reasonable measures to protect your data, but we are not responsible for any unauthorized access to or loss of data.',
  },
];

const Terms = () => {
  return (
    <>
      <p>By submitting your application through this form, you agree to the following Terms:</p>
      <ul className="my-3.5 flex flex-col gap-2 list-disc list-outside ml-5 marker:text-[--text-teritary]">
        {terms.map((term, idx) => {
          return (
            <li key={idx} className="">
              <p className="inline">
                <strong className="font-bold text-[--text-primary]">{term.title}</strong>
                &nbsp;:&nbsp;
                {term.text}
              </p>
            </li>
          );
        })}
      </ul>
      <p>By applying, you acknowledge that you have read and agree to these terms.</p>
    </>
  );
};

export default Terms;
