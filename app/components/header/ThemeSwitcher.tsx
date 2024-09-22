'use client';

import { switchTheme } from '@/utils/actions';
import { GoMoon as MoonIcon } from 'react-icons/go';
import { RiComputerLine as SystemIcon } from 'react-icons/ri';
import { GoSun as SunIcon } from 'react-icons/go';
import { ReactElement, useState } from 'react';

const ThemeSwitcher = ({ theme }: { theme: Theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  let themeIcon: ReactElement;
  switch (theme) {
    case 'system':
      themeIcon = <SystemIcon className="text-black" />;
      break;
    case 'dark':
      themeIcon = <MoonIcon className="text-yellow-400" />;
      break;
    case 'light':
      themeIcon = <SunIcon className="text-yellow-300" />;
      break;
  }

  return (
    <>
      <div className="relative ml-auto mr-7 sm:mr-9">
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center gap-0.5 text-xl"
        >
          {themeIcon}
          <span className="text-white text-sm font-medium leading-none">Theme</span>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <ul
            className="themeSwitcher flex justify-between items-center gap-1.5 w-max px-2.5 py-3 
        text-lg text-[--text-primary] absolute top-[125%] -left-[calc(3.625rem-50%)] z-40 
        bg-[--button-light-bg] rounded-md shadow-md"
          >
            <li className={`${theme === 'dark' && 'active'} `}>
              <button title="dark" onClick={() => switchTheme('dark')}>
                <MoonIcon />
              </button>
            </li>
            <li className={`${theme === 'system' && 'active'} text-[1rem]`}>
              <button title="system" onClick={() => switchTheme('system')}>
                <SystemIcon />
              </button>
            </li>
            <li className={`${theme === 'light' && 'active'}  `}>
              <button title="light" onClick={() => switchTheme('light')}>
                <SunIcon />
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full z-30"
        ></div>
      )}
    </>
  );
};

export default ThemeSwitcher;
