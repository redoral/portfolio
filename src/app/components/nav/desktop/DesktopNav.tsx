import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiMail } from 'react-icons/fi';

function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className='hidden flex-col items-start justify-start gap-12 lg:flex'>
      <ul className='flex gap-12'>
        <li
          className={`hover:text-kanagawa-red justify-center py-2 transition-all ${pathname === '/' ? 'text-kanagawa-red font-semibold' : 'text-kanagawa-fg'} text-md`}
        >
          <Link href='/' className='flex items-center gap-4'>
            <FiHome /> Home
          </Link>
        </li>
        <li
          className={`hover:text-kanagawa-red py-2 transition-colors ${pathname === '/contact' ? 'text-kanagawa-red font-semibold' : 'text-kanagawa-fg'} text-md`}
        >
          <Link href='/contact' className='flex items-center gap-4'>
            <FiMail /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
