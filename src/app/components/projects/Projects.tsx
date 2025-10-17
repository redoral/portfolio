import React from 'react';
import { FaDocker, FaGhost, FaKeyboard } from 'react-icons/fa6';
import Project from '@/app/components/project';

function Projects() {
  return (
    <div className='grid gap-6 py-6'>
      <h2 className='text-kanagawa-fg text-2xl font-bold'>Projects</h2>
      <p className='text-kanagawa-fg max-w-96'>A preview of some of my personal work on GitHub.</p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <Project
          name='pihole-unbound-docker'
          description='Quick start docker compose to deploy PiHole and Unbound to your local server.'
          backgroundColor='bg-kanagawa-blue/15'
          textColor='text-kanagawa-blue'
          borderColor='border-kanagawa-blue/15'
          repository='https://github.com/redoral/pihole-unbound-docker'
          icon={<FaDocker size={96} />}
        />
        <Project
          name='qmk_firmware'
          description='Fork of the official qmk repository to add custom firmware for Lily58 and Sofle V2 keyboards.'
          backgroundColor='bg-kanagawa-yellow/15'
          textColor='text-kanagawa-yellow'
          borderColor='border-kanagawa-yellow/15'
          repository='https://github.com/redoral/qmk_firmware'
          icon={<FaKeyboard size={96} />}
        />
        <Project
          name='phasbook'
          description='A work-in-progress React Native Phasmophobia guide app.'
          backgroundColor='bg-kanagawa-red/15'
          textColor='text-kanagawa-red'
          borderColor='border-kanagawa-red/15'
          repository='https://github.com/redoral/phasbook'
          icon={<FaGhost size={96} />}
        />
      </div>
    </div>
  );
}

export default Projects;
