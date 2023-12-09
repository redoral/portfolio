import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Header() {
  return (
    <header
      className={`w-full bg-center lg:bg-[center_-30rem] lg:h-[512px] h-96 rounded-3xl bg-cover bg-[url('/header.jpeg')] flex flex-col lg:p-12 items-center justify-center bg-no-repeat`}>
      <h1 className='lg:text-xl text-sm text-neutral-100 lg:ml-[50px] mr-[200px] lg:self-start md:mr-[250px] lg:mr-[450px]'>
        Full Stack
      </h1>
      <h1 className='lg:text-8xl text-3xl md:text-4xl text-neutral-100 font-bold'>
        Software Engineer
      </h1>
      <a
        href='#about'
        className='flex justify-between items-center py-2 px-4 w-32 bg-neutral-100 rounded text-xs my-6 hover:opacity-75 transition-opacity'>
        View more <FaLongArrowAltRight />
      </a>
    </header>
  );
}

export default Header;
