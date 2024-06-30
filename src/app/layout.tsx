import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const inter = Sen({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Red Oral',
  description: 'Full stack software engineer.'
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang='en' className={`scroll-smooth`}>
      <body
        className={`${inter.className} dark:bg-neutral-900 bg-neutral-100 dark dark:text-white`}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
