import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className='col-span-1'>
      <Image src='/img/logos/redoral.png' width={32} height={32} alt='Site logo' className='mx-2 my-8' />
      <ul className='flex flex-col gap-2'>
        <li
          className={`w-32 p-2 transition-colors hover:text-white ${pathname === '/' ? 'rounded bg-white bg-opacity-10 font-semibold' : 'text-gray-300'} text-md`}
        >
          <Link href='/'>Home</Link>
        </li>
        <li
          className={`w-32 p-2 transition-colors hover:text-white ${pathname === '/projects' ? 'rounded bg-white bg-opacity-10 font-semibold text-white' : 'text-gray-300'} text-md`}
        >
          <Link href='/projects'>Projects</Link>
        </li>
        <li
          className={`w-32 p-2 transition-colors hover:text-white ${pathname === '/contact' ? 'rounded bg-white bg-opacity-10 font-semibold' : 'text-gray-300'} text-md`}
        >
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
