'use client';
import React, { ReactNode } from 'react';
import NavMenu from './nav-menu';

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className='max-w-[1024px] w-full m-auto h-screen lg:p-24 p-12'>
      <div className='grid-cols-1 lg:grid-cols-4 grid gap-24'>
        <NavMenu />
        <div className='flex flex-col gap-4 w-full col-span-1 lg:col-span-3 pb-12'>{children}</div>
      </div>
    </div>
  );
}

export default PageLayout;
