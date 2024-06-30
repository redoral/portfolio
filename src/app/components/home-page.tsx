'use client';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PageLayout from './page-layout';

function HomePage({ stats }: { stats: number }) {
  return (
    <PageLayout>
      <h1 className='text-4xl font-bold'>Red Oral</h1>
      <p className='text-gray-300 max-w-96'>
        Hi, I&apos;m Red. I&apos;m currently a <b className='text-white'>Software Engineer II</b> at{' '}
        <b className='text-white'>Commerce Architects</b>.
      </p>
      {/** CONTENT */}
      <div className='py-10 flex gap-12 text-gray-300 items-center italic'>
        <Image
          src='/img/portrait.jpg'
          alt='Portrait of Red'
          width={96}
          height={96}
          className='rounded-full'
        />
        <div className='space-y-2'>
          <a href='https://github.com/redoral' target='_blank' className='flex items-center gap-2'>
            <FaGithub />
            <p>{stats} GitHub repositories</p>
          </a>
          <a href='https://github.com/redoral' target='_blank' className='flex items-center gap-2'>
            <FaLinkedin />
            <p>396 LinkedIn connections</p>
          </a>
        </div>
      </div>
      <div>
        <p className='text-gray-300'>
          I am a Full Stack Software Engineer with a multitude of technical skills. From mobile &
          web apps to REST APIs & serverless backends, I am experienced in a magnitude of
          development tools and processes.
        </p>
      </div>
    </PageLayout>
  );
}

export default HomePage;
