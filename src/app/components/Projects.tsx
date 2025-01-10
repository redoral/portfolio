import { FaDocker, FaGhost, FaGithub, FaKeyboard } from 'react-icons/fa6';
import Project from './Project';

function Projects() {
  return (
    <div className='grid gap-4'>
      {/** PROJECTS */}
      <h1 className='text-2xl font-bold'>Projects</h1>
      <p className='max-w-96 text-gray-300'>A preview of some of my personal work on GitHub.</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <Project
          name='pihole-unbound-docker'
          description='Quick start docker compose to deploy PiHole and Unbound to your local server.'
          color='blue'
          repository='https://github.com/redoral/pihole-unbound-docker'
          icon={<FaDocker size={96} />}
        />
        <Project
          name='qmk_firmware'
          description='Fork of the official qmk repository to add custom firmware for Lily58 and Sofle V2 keyboards.'
          color='yellow'
          repository='https://github.com/redoral/qmk_firmware'
          icon={<FaKeyboard size={96} />}
        />
        <Project
          name='phasbook'
          description='A work-in-progress React Native Phasmophobia guide app.'
          color='red'
          repository='https://github.com/redoral/phasbook'
          icon={<FaGhost size={96} />}
        />
      </div>
    </div>
  );
}

export default Projects;
