import { Metadata } from 'next';
import React from 'react';
import { MdNoCell, MdOutlinePhone, MdOutlinePhoneDisabled } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Contact | Red Oral',
};

export default async function Page() {
  return (
    <div className='col-span-1 flex w-full flex-col gap-6 pb-12 lg:col-span-3'>
      <h1 className='text-4xl font-bold'>Contact</h1>
      <MdOutlinePhoneDisabled className='my-12 text-red-300' size={128} />
      <p className='text-gray-300'>Currently not taking emails, texts, or calls.</p>
      <p className='text-gray-300'>
        For inquiries, you can message me on{' '}
        <a
          href='https://linkedin.com/in/redoral'
          target='_blank'
          className='underline transition-colors hover:text-white'
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
