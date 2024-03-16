import React from 'react';

function Navbar() {
  return (
    <nav className='z-10 bg-neutral-100 border-b border-gray-200 w-full fixed'>
      <div className='w-full bg-neutral-800 p-1 flex items-center justify-center'>
        <h1 className='text-white font-semibold'>This site is currently a Work-in-Progress</h1>
      </div>
      <div className='flex py-4 items-center justify-between lg:justify-start space-x-10 lg:w-[1024px] lg:m-auto lg:px-0 px-8'>
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
    </nav>
  );
}

export default Navbar;
