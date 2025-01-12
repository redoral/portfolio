import React from 'react';
import Link from 'next/link';
import { TbError404Off } from 'react-icons/tb';

function NotFoundPage() {
  return (
    <div>
      <TbError404Off className='my-12 text-red-300' size={128} />
      <p>The page you are looking for does not exist.</p>
      <Link href='/' className='underline transition-colors hover:text-white'>
        Return home
      </Link>
    </div>
  );
}

export default NotFoundPage;
