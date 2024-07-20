'use client';
import React, { ReactNode } from 'react';
import NavMenu from './NavMenu';

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className='m-auto h-screen w-full max-w-screen-xl p-12 lg:p-24'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-24'>
        <NavMenu />
        <div className='col-span-1 flex w-full flex-col gap-4 pb-12 lg:col-span-3'>{children}</div>
      </div>
    </div>
  );
}

export default PageLayout;
