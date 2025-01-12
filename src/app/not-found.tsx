import Link from 'next/link';
import React from 'react';
import { TbError404Off } from 'react-icons/tb';

function NotFoundPage() {
  return (
    <div className='col-span-1 flex w-full flex-col gap-6 pb-12 text-gray-300 lg:col-span-3'>
      <h1 className='text-4xl font-bold'>Not found</h1>
      <TbError404Off className='my-12 text-red-300' size={128} />
      <p>The page you are looking for does not exist.</p>
      <Link href='/' className='underline transition-colors hover:text-white'>
        Return home
      </Link>
    </div>
  );
}

export default NotFoundPage;
