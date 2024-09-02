import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-mobile': 'url(/header/mobile/bg-pattern-header.svg)',
        'header-tablet': 'url(/header/tablet/bg-pattern-header.svg)',
        'header-desktop': 'url(/header/desktop/bg-pattern-header.svg)',
      },
    },
  },
  plugins: [],
};
export default config;
