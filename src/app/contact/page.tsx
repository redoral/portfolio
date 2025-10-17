import React from 'react';
import { Metadata } from 'next';
import { MdOutlinePhoneDisabled } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Contact | Red Oral',
};

export default async function Page() {
  return (
    <>
      <MdOutlinePhoneDisabled className='text-kanagawa-red my-12' size={128} />
      <p className='text-gray-300'>Currently not taking emails, texts, or calls.</p>
      <p className='text-gray-300'>
        For inquiries, you can message me on{' '}
        <a
          href='https://linkedin.com/in/redoral'
          target='_blank'
          className='hover:text-kanagawa-red underline transition-colors'
        >
          LinkedIn
        </a>
        .
      </p>
    </>
  );
}
