'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import dxdc from '../../../public/img/dxdc.webp';
import supplierdiversity from '../../../public/img/supplierdiversity.webp';
import p3 from '../../../public/img/p3.webp';

function Projects() {
  const projects = [
    {
      name: 'Avista Digital Exchange',
      description: 'A service used to capture and visualize microgrid simulation data.',
      technologies:
        'React, TypeScript, Vite, Apollo GraphQL, TailwindCSS, Apache E-Charts, Vitest, RTL',
      image: dxdc,
      size: 600
    },
    {
      name: 'Avista Supplier Diversity',
      description:
        'A platform made to help diversity-owned businesses match with other businesses to create a more inclusive economy.',
      technologies:
        'React, TypeScript, Vite, Apollo GraphQL, TailwindCSS, Vitest, RTL, Serverless, AWS',
      image: supplierdiversity,
      size: 400
    },
    {
      name: 'Perfect Personnel Placement',
      description: 'A mobile, serverless training planner app.',
      technologies: 'React, React Native, TypeScript, Redux, AWS',
      image: p3,
      size: 220
    }
  ];

  return (
    <section className='py-6' id='projects'>
      <h1 className='font-bold text-4xl lg:text-5xl'>Some things I worked on</h1>
      <p className='my-2'>Projects from my professional work</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 my-4 gap-6 dark:text-neutral-100 text-neutral-900'>
        <div className='flex w-full h-96 bg-[url("/img/dxdc.webp")] bg-cover rounded-xl'>
          <div className='h-28 self-end p-4 bg-neutral-100/50 dark:bg-neutral-800/50 w-full backdrop-blur-lg rounded-b-xl'>
            <h2 className='font-bold'>Avista Digital Exchange</h2>
            <h3 className='text-sm'>Developer, Data Capture Service</h3>
            <p className='dark:text-neutral-300 text-xs py-2'>TypeScript, React</p>
          </div>
        </div>
        <div className='flex w-full h-96 bg-[url("/img/supplierdiversity.webp")] bg-cover rounded-xl'>
          <div className='h-28 self-end p-4 bg-neutral-100/50 dark:bg-neutral-800/50 w-full backdrop-blur-lg rounded-b-xl'>
            <h2 className='font-bold'>Developer, Avista Supplier Diversity</h2>
            <h3 className='text-sm'>Frontend</h3>
            <p className='dark:text-neutral-300 text-xs py-2'>TypeScript, React</p>
          </div>
        </div>
        <div className='flex w-full h-96 bg-[url("/img/p3.webp")] bg-cover rounded-xl'>
          <div className='h-28 self-end p-4 bg-neutral-100/50 dark:bg-neutral-800/50 w-full backdrop-blur-lg rounded-b-xl'>
            <h2 className='font-bold'>Perfect Personnel Placement</h2>
            <h3 className='text-sm'>Architect and Developer, Frontend</h3>
            <p className='dark:text-neutral-300 text-neutral-500 text-xs py-2'>
              TypeScript, React Native
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
