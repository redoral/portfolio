import Image from 'next/image';
import React from 'react';
import { FaAws, FaBullseye } from 'react-icons/fa';

function About() {
  return (
    <section className='grid grid-cols-1 gap-6 pb-6 pt-12 lg:grid-cols-3' id='about'>
      <Image
        alt='A portrait of Red'
        width={640}
        height={850}
        src={'/img/me.jpg'}
        className={`order-2 rounded-3xl lg:order-1`}
      />
      <div className='order-1 lg:order-2 lg:col-span-2'>
        <h1 className='text-4xl font-bold lg:text-5xl'>A little bit about me</h1>
        <p className='my-2'>
          My name is Red. I am an AWS Certified, Full Stack Software Engineer currently based in Spokane, WA. From web
          and mobile frontends to RESTful APIs and serverless backends, I am experienced in a magnitude of development
          languages, tools, and processes. And I love what I do.
        </p>
        <div className='my-4 flex items-center justify-between gap-4 rounded border p-2 text-xs backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-800/50'>
          <span>
            <h1 className='text-lg font-bold'>AWS Associate Developer</h1>
            <p> Issued Apr 2023</p>
            <p> Expires Apr 2026</p>
            <p> Credential ID 4Y18RZF172E1QSG9</p>
          </span>
          <FaAws size={32} className='mx-4' />
        </div>
        <div className='my-4 flex items-center justify-between gap-4 rounded border p-2 text-xs backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-800/50'>
          <span>
            <h1 className='text-lg font-bold'>Skills Highlights</h1>
            <p>TypeScript, Java, React, AWS, Spring Boot, Jest, and more</p>
          </span>
          <FaBullseye size={24} className='mx-4' />
        </div>
      </div>
    </section>
  );
}

export default About;
