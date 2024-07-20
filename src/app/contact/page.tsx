import React from 'react';
import PageLayout from '../components/PageLayout';

export default async function Page() {
  return (
    <PageLayout>
      <h1 className='text-4xl font-bold'>Contact</h1>
      <p className='text-gray-300'>Currently not taking email, text, or calls.</p>
      <p className='text-gray-300'>
        For inquiries, you can message me on{' '}
        <a href='https://linkedin.com/in/redoral' target='_blank' className='text-white underline'>
          LinkedIn
        </a>
        .
      </p>
    </PageLayout>
  );
}
