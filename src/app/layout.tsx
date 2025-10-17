import React from 'react';
import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import PageLayout from '@/app/components/page-layout/PageLayout';
import Footer from '@/app/components/footer';
import './globals.css';

const inter = Sen({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Red Oral',
  description:
    'Full Stack Software Engineer with a multitude of technical skills. From mobile & web apps to REST APIs & serverless backends, I am experienced in a magnitude of development tools and processes.',
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className={`${inter.className} dark bg-kanagawa-bg text-kanagawa-fg flex h-full flex-col`}>
        <NextTopLoader color='#c4746e' />
        <PageLayout>{children}</PageLayout>
        <Footer />
      </body>
    </html>
  );
}
