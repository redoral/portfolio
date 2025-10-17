'use client';
import React, { ReactNode, useState } from 'react';
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
    <>
      <div className='m-auto flex w-full max-w-screen-lg flex-1 flex-col gap-12 p-12'>
        <MobileNav />
        <DesktopNav />
        <div>
          <header className='mb-6'>
            <h1 className='text-kanagawa-bright-white text-3xl font-bold'>{getHeaderText()}</h1>
          </header>
          <main>
            <div className='flex w-full flex-col gap-6'>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default PageLayout;
