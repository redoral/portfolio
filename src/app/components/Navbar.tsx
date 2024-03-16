'use client';

import React from 'react';
import { LuSunMoon } from 'react-icons/lu';

function Navbar() {
  return (
    <nav className='z-10 bg-neutral-100/75 border-b border-neutral-200 dark:border-neutral-800 w-full fixed backdrop-blur-lg dark:bg-neutral-900/75 dark:text-neutral-100'>
      <div className='w-full bg-neutral-800 dark:bg-neutral-100 p-1 flex items-center justify-center'>
        <h1 className='text-white dark:text-black font-semibold'>
          This site is currently a Work-in-Progress
        </h1>
      </div>
      <div className='flex py-4 items-center justify-between space-x-10 lg:w-[1024px] lg:m-auto lg:px-0 px-8'>
        <div className='flex items-center space-x-8'>
          <h1 className='text-2xl font-bold'>redoral</h1>
          <ul className='space-x-6 lg:text-base text-sm'>
            <li className='float-left'>
              <a href='#about'>About</a>
            </li>
            <li className='float-left'>
              <a href='#experience'>Experience</a>
            </li>
            <li className='float-left'>
              <a href='#projects'>Projects</a>
            </li>
          </ul>
        </div>
        <button onClick={() => localStorage.setItem('theme', 'dark')}>
          <LuSunMoon size={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
