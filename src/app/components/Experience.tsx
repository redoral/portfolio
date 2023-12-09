import React from 'react';

function Experience() {
  return (
    <section className='py-6' id='experience'>
      <div className='col-span-2'>
        <h1 className='font-bold text-4xl lg:text-5xl'>Professional experience</h1>
        <p className='my-2'>Three of my most recent work experience</p>
      </div>
      <ol className='relative border-l border-gray-200 dark:border-neutral-600 mt-2'>
        <li className='mb-5 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-neutral-600 dark:bg-neutral-600'></div>
          <time className='mb-1 text-sm font-normal leading-none  dark:text-gray-500'>
            January 2023 - Present
          </time>
          <h3 className='text-base lg:text-lg font-bold'>Software Engineer I</h3>
          <h4 className='text-base lg:text-lg '>Commerce Architects</h4>
          <p className='mb-4 text-sm lg:text-base font-normal text-gray-600'>
            Partnered with Avista to create a frontend for a Data Capture service used in microgrid
            simulations on their Digital Exchange Platform. Helped develop the Supplier Diversity
            platform, which helps diversity-owned businesses get more exposure. Worked with
            TypeScript, React, Vite, GraphQL, Apache E-charts, AWS, and more.
          </p>
        </li>
        <li className='mb-5 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-neutral-600 dark:bg-neutral-600'></div>
          <time className='mb-1 text-sm font-normal leading-none '>June 2021 - November 2022</time>
          <h3 className='text-base lg:text-lg font-bold'>Associate Software Engineer</h3>
          <h4 className='text-base lg:text-lg '>Revature</h4>
          <p className='mb-4 text-sm lg:text-base font-normal text-gray-600'>
            Developed several projects, such as RESTFul APIs, React, and React Native applications.
            Trained intensively in several programming languages and tools such as Node.js, AWS,
            Spring Boot, and more.
          </p>
        </li>
        <li className='ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-neutral-600 dark:bg-neutral-600'></div>
          <time className='mb-1 text-sm font-normal leading-none '>November 2019 - March 2021</time>
          <h3 className='text-base lg:text-lg  font-bold'>Senior Chromebook Sales Specialist</h3>
          <h4 className='text-base lg:text-lg  '>Premium Retail Services</h4>
          <p className='text-sm lg:text-base font-normal text-gray-600'>
            Boosted Chromebook sales through training and education of Chromebooks to store
            associates and customers. Assisted managers with tasks and provided support to peers and
            new hires.
          </p>
        </li>
      </ol>
    </section>
  );
}

export default Experience;
