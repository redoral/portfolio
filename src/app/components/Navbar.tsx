import React from 'react';

function Navbar() {
  return (
    <nav className='py-6 flex items-center justify-between lg:justify-start space-x-10'>
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
    </nav>
  );
}

export default Navbar;
