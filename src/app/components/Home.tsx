'use client';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaArrowTrendUp, FaBurger } from 'react-icons/fa6';
import PageLayout from './PageLayout';

function Home({ stats }: { stats: number }) {
  return (
    <PageLayout>
      <h1 className='text-4xl font-bold'>Red Oral</h1>
      <p className='max-w-96 text-gray-300'>
        Hi, I&apos;m Red. I&apos;m currently a <b className='text-white'>Software Engineer II</b> at{' '}
        <b className='text-white'>Commerce Architects</b>.
      </p>
      {/** CONTENT */}
      <div className='flex flex-col items-center gap-12 py-6 italic text-gray-300 lg:flex-row lg:py-12'>
        <Image src='/img/portrait.jpg' alt='Portrait of Red' width={96} height={96} className='rounded-full' />
        <div className='space-y-2 text-sm lg:text-base'>
          <a href='https://github.com/redoral?tab=repositories' target='_blank' className='flex items-center gap-2'>
            <FaGithub />
            <p>{stats} GitHub repositories</p>
          </a>
          <a href='https://linkedin.com/in/redoral' target='_blank' className='flex items-center gap-2'>
            <FaLinkedin />
            <p>394 LinkedIn connections</p>
          </a>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' className='flex items-center gap-2'>
            <FaBurger />
            <p>7 burgers eaten (atleast)</p>
          </a>
        </div>
      </div>
      <div>
        <p className='text-gray-300'>
          I am an AWS Certified, Full Stack Software Engineer with a multitude of technical skills. From mobile & web
          apps to REST APIs & serverless backends, I am experienced in a magnitude of development tools and processes.
        </p>
      </div>
      <div className='flex flex-col gap-2 text-sm text-gray-300 lg:flex-row lg:gap-6'>
        <span className='flex items-center gap-2 transition-colors hover:text-white'>
          <FaArrowTrendUp />
          <a href='https://linkedin.com/in/redoral' target='_blank'>
            Add me on LinkedIn
          </a>
        </span>
        <span className='flex items-center gap-2 transition-colors hover:text-white'>
          <FaArrowTrendUp />
          <a href='https://github.com/redoral' target='_blank'>
            Follow me on GitHub
          </a>
        </span>
      </div>
    </PageLayout>
  );
}

export default Home;
