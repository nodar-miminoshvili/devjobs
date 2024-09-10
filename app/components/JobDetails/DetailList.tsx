type Props = {
  details: {
    overview: string;
    list: string[];
  };
  type: 'requirements' | 'whatYouWillDo';
};

const DetailList = ({ details, type }: Props) => {
  const list = details.list.map((bullet, idx) => (
    <li
      key={idx}
      className={`mb-3 leading-relaxed ${type === 'requirements' ? 'md:pl-3' : 'pl-3 md:pl-5'}`}
    >
      {bullet}
    </li>
  ));
  return (
    <div className="">
      <p className="my-5">{details.overview}</p>
      {type === 'requirements' ? (
        <ul className="list-disc list-outside ml-4 marker:text-[var(--text-teritary)] marker:mr-3">
          {list}
        </ul>
      ) : (
        <ol
          className="list-outside ml-2 marker:text-[var(--text-teritary)] marker:font-semibold marker:w-min-4
        marker:content-[counter(list-item)]"
        >
          {list}
        </ol>
      )}
    </div>
  );
};

export default DetailList;
