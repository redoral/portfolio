import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import PageLayout from './components/PageLayout';

const inter = Sen({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Red Oral',
  description: 'Full stack software engineer.',
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang='en' className={`h-full scroll-smooth`}>
      <body
        className={`${inter.className} dark flex h-full flex-col bg-neutral-100 dark:bg-neutral-950 dark:text-white`}
      >
        <header></header>
        <main className='flex-auto'>
          <NextTopLoader color='#ff6961' />
          <div className='flex flex-col'>
            <PageLayout>{children}</PageLayout>
          </div>
        </main>
        <footer className='flex w-full shrink-0 items-center justify-center bg-black text-xs text-neutral-400'>
          <div className='flex w-full max-w-screen-xl justify-between px-12 py-4 lg:px-24'>
            <p>✌️</p>
            <p>2025 Red Oral </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
