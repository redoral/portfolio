import React from 'react';
import { FaDocker, FaGhost, FaKeyboard } from 'react-icons/fa6';
import Project from '@/app/components/project';

function Projects() {
  return (
    <div className='grid gap-6 py-6'>
      <h2 className='text-2xl font-bold'>Projects</h2>
      <p className='max-w-96 text-gray-300'>A preview of some of my personal work on GitHub.</p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <Project
          name='pihole-unbound-docker'
          description='Quick start docker compose to deploy PiHole and Unbound to your local server.'
          backgroundColor='bg-blue-300/15'
          textColor='text-blue-300'
          borderColor='border-blue-300/15'
          repository='https://github.com/redoral/pihole-unbound-docker'
          icon={<FaDocker size={96} />}
        />
        <Project
          name='qmk_firmware'
          description='Fork of the official qmk repository to add custom firmware for Lily58 and Sofle V2 keyboards.'
          backgroundColor='bg-yellow-300/15'
          textColor='text-yellow-300'
          borderColor='border-yellow-300/15'
          repository='https://github.com/redoral/qmk_firmware'
          icon={<FaKeyboard size={96} />}
        />
        <Project
          name='phasbook'
          description='A work-in-progress React Native Phasmophobia guide app.'
          backgroundColor='bg-red-300/15'
          textColor='text-red-300'
          borderColor='border-red-300/15'
          repository='https://github.com/redoral/phasbook'
          icon={<FaGhost size={96} />}
        />
      </div>
    </div>
  );
}

export default Projects;
