import Image from 'next/image';
import React from 'react';
import { FaAws, FaBullseye } from 'react-icons/fa';

function About() {
  return (
    <section className='pb-6 pt-12 grid grid-cols-1 lg:grid-cols-3 gap-6' id='about'>
      <Image
        alt='A portrait of Red'
        width={640}
        height={850}
        src={'/img/me.jpg'}
        className={`order-2 lg:order-1 rounded-3xl`}
      />
      <div className='lg:col-span-2 lg:order-2 order-1'>
        <h1 className='font-bold lg:text-5xl text-4xl'>A little bit about me</h1>
        <p className='my-2'>
          My name is Red. I am an AWS Certified, Full Stack Software Engineer currently based in
          Spokane, WA. From web and mobile frontends to RESTful APIs and serverless backends, I am
          experienced in a magnitude of development languages, tools, and processes. And I love what
          I do.
        </p>

        <div className='p-2 border dark:bg-neutral-800/50 backdrop-blur-md dark:border-neutral-800 flex justify-between items-center gap-4 rounded text-xs my-4'>
          <span>
            <h1 className='text-lg font-bold'>AWS Associate Developer</h1>
            <p> Issued Apr 2023</p>
            <p> Expires Apr 2026</p>
            <p> Credential ID 4Y18RZF172E1QSG9</p>
          </span>
          <FaAws size={32} className='mx-4' />
        </div>
        <div className='p-2 border flex dark:bg-neutral-800/50 backdrop-blur-md dark:border-neutral-800 justify-between items-center gap-4 rounded text-xs my-4'>
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
