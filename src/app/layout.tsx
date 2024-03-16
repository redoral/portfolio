import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import './globals.css';

const inter = Sen({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Red Oral (WIP)',
  description: 'I am a full stack software engineer and this is my personal website.'
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang='en' className={`scroll-smooth dark`}>
      <body className={`${inter.className} dark:bg-neutral-900 bg-neutral-100`}>{children}</body>
    </html>
  );
}
