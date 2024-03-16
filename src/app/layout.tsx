import type { Metadata } from 'next';
import { Podkova } from 'next/font/google';
import './globals.css';

const inter = Podkova({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Red Oral (WIP)',
  description: 'I am a full stack software engineer and this is my personal website.'
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.1)_0%,rgba(255,255,255,1)_100%)]`}>
        {children}
      </body>
    </html>
  );
}
