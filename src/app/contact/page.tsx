import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact | Red Oral',
};

export default async function Page() {
  return (
    <div className='col-span-1 flex w-full flex-col gap-4 pb-12 lg:col-span-3'>
      <h1 className='text-4xl font-bold'>Contact</h1>
      <p className='text-gray-300'>Currently not taking emails, texts, or calls.</p>
      <p className='text-gray-300'>
        For inquiries, you can message me on{' '}
        <a href='https://linkedin.com/in/redoral' target='_blank' className='text-white underline'>
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
