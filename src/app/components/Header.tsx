import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Header() {
  return (
    <header
      className={`w-full bg-center lg:bg-[center_-30rem] lg:h-[512px] h-96 rounded-3xl bg-cover bg-[url('/img/header.webp')] flex flex-col p-12 items-start justify-center bg-no-repeat`}>
      <h1 className='lg:text-xl text-sm text-neutral-100'>Full Stack</h1>
      <h1 className='lg:text-6xl text-3xl md:text-4xl text-neutral-100 font-bold'>
        Software Engineer
      </h1>
      <a
        href='#about'
        className='flex justify-between items-center py-4 px-4 w-48 bg-neutral-100 text-neutral-900 rounded text-xs my-6 hover:opacity-75 transition-opacity'>
        View more <FaLongArrowAltRight />
      </a>
    </header>
  );
}

export default Header;
