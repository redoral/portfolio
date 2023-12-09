import React from 'react';

function Navbar() {
  return (
    <nav className='py-6 flex items-center justify-between lg:justify-start space-x-10'>
      <h1 className='text-2xl font-bold'>redoral</h1>
      <ul className='space-x-6'>
        <li className='float-left'>
          <button>About</button>
        </li>
        <li className='float-left'>
          <button>Experience</button>
        </li>
        <li className='float-left'>
          <button>Projects</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
