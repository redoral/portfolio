import React from 'react';

function Header() {
  return (
    <header
      style={{
        backgroundPosition: '0 -500px'
      }}
      className={`w-full lg:h-[512px] h-[300px] rounded-3xl bg-cover bg-[url('/header.jpeg')] flex flex-col lg:p-12 items-center justify-center bg-no-repeat `}>
      <h1 className='lg:text-xl text-neutral-100 lg:ml-[50px] lg:self-start mr-[450px]'>
        Full Stack
      </h1>
      <h1 className='lg:text-8xl text-6xl text-neutral-100 font-bold'>Software Engineer</h1>
      <button className='w-fit py-2 px-6 bg-neutral-100 rounded text-xs my-6 hover:opacity-75 transition-opacity'>
        View more
      </button>
    </header>
  );
}

export default Header;
