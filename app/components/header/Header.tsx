import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/header/logo.svg';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ theme }: { theme: Theme }) => {
  return (
    <header
      className="min-h-[136px] bg-header-mobile bg-[length:100%_100%]
                    md:min-h-40 md:bg-header-tablet xl:bg-header-desktop "
    >
      <div className="container px-5 pt-12 md:px-16 md:pt-14 flex justify-between">
        <Link href="/">
          <Image src={Logo} alt="Devjobs" />
        </Link>
        <ThemeSwitcher theme={theme} />
      </div>
    </header>
  );
};

export default Header;
