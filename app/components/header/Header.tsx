import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/header/logo.svg';

const Header = () => {
  return (
    <header
      className="min-h-[136px] bg-header-mobile bg-[length:100%_100%]
                    md:min-h-40 md:bg-header-tablet xl:bg-header-desktop "
    >
      <div className="container px-5 pt-12 md:px-16 md:pt-14">
        <Link href="/">
          <Image src={Logo} alt="Devjobs" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
