import PageLayout from '@/app/components/PageLayout';
import React from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PageLayout>
      <h1 className='text-4xl font-bold'>{params.slug}</h1>
      <p className='italic text-gray-300'>Project view is currently a work-in-progress</p>
    </PageLayout>
  );
}
