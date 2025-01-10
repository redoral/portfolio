import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FiHome, FiMail } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';

function MobileNavMenu() {
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
    <nav className='col-span-1 flex items-center justify-between gap-12 lg:hidden'>
      <Image
        src='/img/logos/logo.png'
        width={48}
        height={48}
        alt='Site logo'
        className='m-2 rounded border border-white border-opacity-15'
      />
      <button
        onClick={toggleMenu}
        ref={navDropdownButton}
        className={`flex ${isMenuOpen ? 'rotate-90' : 'rotate-0'} text-gray-300 transition-all ease-in-out hover:opacity-50 active:opacity-100 lg:hidden`}
      >
        <RxHamburgerMenu size={24} />
      </button>
      <div
        className={`${isMenuOpen ? 'absolute' : 'hidden'} right-12 top-32 w-fit rounded border border-white border-opacity-15 bg-black p-6 transition-opacity`}
        ref={navDropdownMenu}
      >
        <ul className='flex flex-col gap-6 text-gray-300'>
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

export default MobileNavMenu;
