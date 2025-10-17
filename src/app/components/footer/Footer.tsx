import React from 'react';
import { FaHandPeace } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className='bg-kanagawa-black flex w-full shrink-0 items-center justify-center text-xs'>
      <div className='flex w-full max-w-screen-lg justify-between px-12 py-4'>
        <p>
          <FaHandPeace className='text-kanagawa-yellow' />
        </p>
        <p>2025 Red Oral </p>
      </div>
    </footer>
  );
}

export default Footer;
