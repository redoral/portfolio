import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className='col-span-1'>
      <h1 className='mb-10 text-6xl'>R</h1>
      <ul className='flex gap-2 flex-col'>
        <li
          className={`py-1 px-2 w-32  ${pathname === '/' ? 'rounded bg-white bg-opacity-10 font-semibold' : ''} text-md`}>
          <Link href='/'>Home</Link>
        </li>
        <li
          className={`py-1 px-2 w-32  ${pathname === '/projects' ? 'rounded bg-white bg-opacity-10 font-semibold' : ''} text-md`}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li
          className={`py-1 px-2 w-32  ${pathname === '/contact' ? 'rounded bg-white bg-opacity-10 font-semibold' : ''} text-md`}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
