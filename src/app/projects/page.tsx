import React from 'react';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

export default async function Page() {
  return (
    <PageLayout>
      <h1 className='text-4xl font-bold'>Projects</h1>
      <div className='flex-2 grid gap-4 py-2 md:grid-cols-2'>
        <Link href='/projects/avista-digital-exchange' className='md:col-span-2'>
          <div className={`h-72 w-full bg-[url('/img/projects/dxdc.webp')] bg-cover bg-no-repeat md:h-96`} />
        </Link>
        <Link href='/projects/avista-supplier-diversity'>
          <div
            className={`h-72 w-full bg-[url('/img/projects/supplierdiversity.webp')] bg-cover bg-no-repeat md:h-96`}
          />
        </Link>
        <Link href='/projects/perfect-personnel-placement'>
          <div className={`h-72 w-full bg-[url('/img/projects/p3.webp')] bg-cover bg-no-repeat md:h-96`} />
        </Link>
      </div>
    </PageLayout>
  );
}
