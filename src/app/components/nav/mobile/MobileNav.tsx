import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { FiHome, FiMail } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import Link from 'next/link';

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navDropdownButton = useRef<HTMLButtonElement>(null);
  const navDropdownMenu = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const closeMenuOnOutsideClick = useCallback(
    (event: any) => {
      if (
        isMenuOpen &&
        !navDropdownMenu.current?.contains(event.target) &&
        !navDropdownButton.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen, navDropdownButton, navDropdownMenu]
  );

  useEffect(() => {
    window?.addEventListener('mousedown', closeMenuOnOutsideClick);
  }, [closeMenuOnOutsideClick]);

  return (
    <nav className='flex items-center gap-2 lg:hidden'>
      <button
        onClick={toggleMenu}
        ref={navDropdownButton}
        className={` ${isMenuOpen ? 'rotate-90' : 'rotate-0'} text-gray-300 transition-all ease-in-out hover:opacity-50 active:opacity-100 lg:hidden`}
      >
        <RxHamburgerMenu size={28} />
      </button>
      <Image
        src='/img/logos/logo.png'
        width={36}
        height={36}
        alt='Site logo'
        className='m-2 rounded border border-white border-opacity-15'
      />

      <div
        className={`${isMenuOpen ? 'h-[200px] opacity-100' : 'h-[0px] opacity-0'} fixed bottom-0 left-0 w-screen rounded border-t border-white border-opacity-15 bg-black p-6 transition-all`}
        ref={navDropdownMenu}
      >
        <span className='flex items-center justify-between'>
          <h1 className='text-lg font-bold'>Go to</h1>
          <button className='text-gray-300 transition-all hover:text-white' onClick={closeMenu}>
            <FaX />
          </button>
        </span>

        <ul className='my-6 flex flex-col gap-8 text-gray-300'>
          <li>
            <Link href='/' className='flex items-center gap-4 hover:opacity-50 active:text-white' onClick={closeMenu}>
              <FiHome /> Home
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='flex items-center gap-4 hover:opacity-50 active:text-white'
              onClick={closeMenu}
            >
              <FiMail /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;
