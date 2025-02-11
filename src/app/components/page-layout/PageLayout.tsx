'use client';
import React, { ReactNode } from 'react';
import MobileNav from '@/app/components/nav/mobile';
import DesktopNav from '@/app/components/nav/desktop';
import { usePathname } from 'next/navigation';

function PageLayout({ children }: { children: ReactNode }) {
  const path = usePathname();

  function getHeaderText() {
    if (path === '/') return 'Red Oral';
    if (path === '/contact') return 'Contact';

    return 'Not found';
  }

  return (
    <div className='m-auto flex w-full max-w-screen-xl flex-1 flex-col gap-12 p-12 lg:grid-cols-4 lg:flex-row lg:gap-24 lg:p-24'>
      <MobileNav />
      <DesktopNav />
      <div>
        <header className='mb-6'>
          <h1 className='text-3xl font-bold'>{getHeaderText()}</h1>
        </header>
        <main>
          <div className='flex w-full flex-col gap-6'>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default PageLayout;
