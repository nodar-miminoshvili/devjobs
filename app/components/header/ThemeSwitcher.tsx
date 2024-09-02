'use client';

import { switchTheme } from '@/utils/actions';
import { GoMoon as MoonIcon } from 'react-icons/go';
import { RiComputerLine as SystemIcon } from 'react-icons/ri';
import { GoSun as SunIcon } from 'react-icons/go';

const ThemeSwitcher = ({ theme }: { theme: Theme }) => {
  console.log(theme);
  return (
    <ul
      className="themeSwitcher flex justify-between items-center w-[5.8rem] p-1.5
        rounded-[100vw] border text-[1.125rem] text-white"
    >
      <li className={`${theme === 'dark' && 'active'} `}>
        <button onClick={() => switchTheme('dark')}>
          <MoonIcon />
        </button>
      </li>
      <li className={`${theme === 'system' && 'active'} text-[1rem]`}>
        <button onClick={() => switchTheme('system')}>
          <SystemIcon />
        </button>
      </li>
      <li className={`${theme === 'light' && 'active'}  `}>
        <button onClick={() => switchTheme('light')}>
          <SunIcon />
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
