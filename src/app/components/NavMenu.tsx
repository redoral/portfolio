import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiMail } from 'react-icons/fi';

function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className='col-span-1 flex flex-col items-start justify-start gap-12'>
      <Image src='/img/logos/logo.png' width={32} height={32} alt='Site logo' className='m-2' />
      <ul className='flex flex-col gap-3'>
        <li
          className={`w-40 rounded p-2 transition-colors hover:text-white ${pathname === '/' ? 'bg-white bg-opacity-5 font-semibold' : 'text-gray-300'} text-md`}
        >
          <Link href='/' className='flex items-center gap-4'>
            <FiHome /> Home
          </Link>
        </li>
        <li
          className={`w-40 rounded p-2 transition-colors hover:text-white ${pathname === '/contact' ? 'bg-white bg-opacity-5 font-semibold' : 'text-gray-300'} text-md`}
        >
          <Link href='/contact' className='flex items-center gap-4'>
            <FiMail /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
