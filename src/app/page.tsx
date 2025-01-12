import React from 'react';
import { FaArrowTrendUp, FaAws, FaGithub } from 'react-icons/fa6';
import { Metadata } from 'next';
import Image from 'next/image';
import Projects from '@/app/components/projects';

export const metadata: Metadata = {
  title: 'Red Oral',
};

async function getStats() {
  const githubStats = await fetch('https://api.github.com/users/redoral/repos');
  return githubStats.json();
}

export default async function Page() {
  const stats = await getStats();

  return (
    <>
      <p className='max-w-96 text-gray-300'>
        Hi, I&apos;m Red. I&apos;m currently a <b className='text-white'>Software Engineer II</b> at{' '}
        <b className='text-white'>Commerce Architects</b>.
      </p>
      <div className='flex flex-col items-center gap-12 py-6 italic text-gray-300 lg:flex-row lg:py-12'>
        <Image src='/img/portrait.jpg' alt='Portrait of Red' width={96} height={96} className='rounded-full' />
        <div className='space-y-2 text-sm lg:text-base'>
          <a
            href='https://cp.certmetrics.com/amazon/en/public/verify/credential/4Y18RZF172E1QSG9'
            target='_blank'
            className='flex items-center gap-2 transition-colors hover:text-white'
          >
            <FaAws />
            <p>AWS Associate Developer Certified</p>
          </a>
          <a
            href='https://github.com/redoral?tab=repositories'
            target='_blank'
            className='flex items-center gap-2 transition-colors hover:text-white'
          >
            <FaGithub />
            <p>{stats?.length ? `${stats.length} GitHub repositories` : 'Failed to fetch GitHub repositories'}</p>
          </a>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-gray-300'>
          I am a Full Stack Software Engineer with a multitude of technical skills. From mobile & web apps to REST APIs
          & serverless backends, I am experienced in a magnitude of development tools and processes.
        </p>
        <p className='text-gray-300'>
          Professionally, I have worked on internal apps, grocery, and microgrid simulation frontends with React and
          React Native, as well as backend applications with AWS, Spring Boot, and Apollo GraphQL.
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
      <Projects />
    </>
  );
}
