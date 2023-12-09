'use client';
import Image from 'next/image';
import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      name: 'Avista Digital Exhange',
      description: 'A service used to visualize microgrid simulation data.',
      technologies: 'React, TypeScript, Vite, Apollo GraphQL, TailwindCSS, Apache E-Charts',
      image: '/img/dxdc.webp',
      size: 600
    },
    {
      name: 'Chirper',
      description: 'A serverless social media application for web and mobile.',
      technologies: 'React, React Native, TypeScript, Redux, AWS',
      image: '/img/chirper.webp',
      size: 200
    },
    {
      name: 'P3',
      description: 'A serverless social media application for web and mobile.',
      technologies: 'React, React Native, TypeScript, Redux, AWS',
      image: '/img/p3.jpg',
      size: 220
    }
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className='py-12 grid grid-cols-3 gap-12'>
      <div className='rounded-3xl col-span-2 h-[512px] w-full relative flex items-center justify-center'>
        <video
          autoPlay
          muted
          loop
          className='absolute z-[-1] overflow-hidden h-full w-full rounded-3xl object-cover'>
          <source src='./projectbg.mp4' type='video/webm' />
        </video>
        <div>
          <Image
            src={selectedProject.image}
            alt='Chirper'
            width={selectedProject.size}
            height={selectedProject.size}
            className='rounded-3xl'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-bold text-6xl'>Projects</h1>
        <ul className='my-4 space-x-4'>
          <li
            className={`${
              selectedProject.name === 'Avista Digital Exhange' ? 'font-bold' : 'font-normal'
            } float-left `}>
            <button onClick={() => setSelectedProject(projects[0])}>Avista Digital Exchange</button>
          </li>
          <li
            className={`${
              selectedProject.name === 'Chirper' ? 'font-bold' : 'font-normal'
            } float-left `}>
            <button onClick={() => setSelectedProject(projects[1])}>Chirper</button>
          </li>
          <li
            className={`${
              selectedProject.name === 'P3' ? 'font-bold' : 'font-normal'
            } float-left `}>
            <button onClick={() => setSelectedProject(projects[2])}>P3</button>
          </li>
        </ul>
        <div className='my-4 flex-1 flex flex-col h-full'>
          <h2 className='font-bold text-4xl'>{selectedProject.name}</h2>
          <p className='py-2'>{selectedProject.description}</p>
          <p className='text-xs py-2 '>Technologies: {selectedProject.technologies}</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
