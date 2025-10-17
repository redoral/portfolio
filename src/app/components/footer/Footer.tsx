import React from 'react';
import { FaHandPeace } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className='flex w-full shrink-0 items-center justify-center px-12 text-xs lg:px-0'>
      <div className='bg-kanagawa-black mb-6 flex w-full max-w-[940px] justify-between rounded-xl px-6 py-4'>
        <p>
          <FaHandPeace className='text-kanagawa-yellow' />
        </p>
        <p>2025 Red Oral </p>
      </div>
    </footer>
  );
}

export default Footer;
