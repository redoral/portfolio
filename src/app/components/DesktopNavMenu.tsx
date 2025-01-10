import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiMail } from 'react-icons/fi';

function DesktopNavMenu() {
  const pathname = usePathname();

  return (
    <nav className='col-span-1 hidden flex-col items-start justify-start gap-12 lg:flex'>
      <Image
        src='/img/logos/logo.png'
        width={64}
        height={64}
        alt='Site logo'
        className='m-2 rounded border border-white border-opacity-15'
      />
      <ul className='flex flex-col gap-4'>
        <li
          className={`w-40 justify-center rounded border border-opacity-15 px-4 py-2 transition-all hover:text-white ${pathname === '/' ? 'border-white bg-black bg-opacity-100 font-semibold' : 'border-transparent text-gray-300'} text-md`}
        >
          <Link href='/' className='flex items-center gap-4'>
            <FiHome /> Home
          </Link>
        </li>
        <li
          className={`w-40 rounded border border-opacity-15 px-4 py-2 transition-colors hover:text-white ${pathname === '/contact' ? 'border-white bg-black bg-opacity-100 font-semibold' : 'border-transparent text-gray-300'} text-md`}
        >
          <Link href='/contact' className='flex items-center gap-4'>
            <FiMail /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNavMenu;
