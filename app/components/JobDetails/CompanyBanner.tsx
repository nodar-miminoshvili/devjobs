import Image from 'next/image';
import Link from 'next/link';

type Props = {
  companyDetails: {
    company: string;
    logo: string;
    logoBackground: string;
  };
};

const CompanyBanner = ({ companyDetails }: Props) => {
  const { company, logo, logoBackground } = companyDetails;

  return (
    <div
      className="flex flex-col items-center gap-7 relative bg-[var(--background-shade)] rounded-md pb-8 
    md:flex-row md:pb-0 md:min-h-36 md:gap-10"
    >
      <div
        className="absolute -translate-y-1/2 w-14 h-14 aspect-square rounded-md 
        md:relative md:translate-y-0 md:w-36 md:h-36 md:rounded-r-none"
        style={{ backgroundColor: logoBackground }}
      >
        <Image
          src={logo}
          alt={company}
          fill
          sizes="(max-width: 768px) 56px, 104px"
          className="object-scale-down md:object-contain md:p-5 fade-in"
        />
      </div>
      <div className="text-center pt-12 md:pt-0 md:text-left">
        <h2 className="text-[var(--text-primary)] text-xl font-bold mb-2.5 md:text-2xl md:mb-1.5">
          {company}
        </h2>
        <Link
          href="#"
          className="font-medium transition-colors hover:text-[var(--button-light-text)]"
        >
          example.com/{company.toLowerCase()}
        </Link>
      </div>
      <Link
        href="#"
        className="px-5 py-4 rounded-md font-bold bg-[var(--button-light-bg)] text-[var(--button-light-text)] 
        transition-colors hover:bg-[var(--button-light-hover-bg)] md:ml-auto md:mr-8"
      >
        Company Site
      </Link>
    </div>
  );
};

export default CompanyBanner;
