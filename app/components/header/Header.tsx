import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/header/logo.svg';
import ThemeSwitcher from './ThemeSwitcher';
import ProfileButton from './Profile/ProfileButton';
import { Suspense } from 'react';
import ProfileButtonLoader from './Profile/ProfileButtonLoader';

const Header = ({ theme }: { theme: Theme }) => {
  return (
    <header
      className="min-h-[136px] bg-header-mobile bg-[length:100%_100%] 
                md:min-h-40 md:bg-header-tablet xl:bg-header-desktop"
    >
      <div className="container px-5 pt-6 md:px-16 md:pt-10 flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Devjobs" priority />
        </Link>
        <ThemeSwitcher theme={theme} />
        <Suspense fallback={<ProfileButtonLoader />}>
          <ProfileButton />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
