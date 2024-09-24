import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/header/Header';
import { cookies } from 'next/headers';
import metadataDetails from '@/lib/metadataDetails';

const kumbh = Kumbh_Sans({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: metadataDetails.rootLayout.title,
  description: metadataDetails.rootLayout.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme')?.value
    ? (cookies().get('theme')!.value as 'dark' | 'light')
    : 'system';

  return (
    <html lang="en" className={theme}>
      <body className={kumbh.className}>
        <Header theme={theme} />
        {children}
      </body>
    </html>
  );
}
