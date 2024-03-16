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
      <p>Work in progress</p>
    </section>
  );
}

export default Projects;
