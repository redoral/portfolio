import React, { ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa6';

type ProjectProps = {
  name: string;
  description: string;
  repository: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  icon: ReactNode;
};

function Project({ name, description, repository, backgroundColor, borderColor, textColor, icon }: ProjectProps) {
  return (
    <div className='flex flex-col overflow-hidden rounded border border-neutral-800 bg-black'>
      <div className={`flex items-center justify-center ${backgroundColor} p-6 ${textColor}`}>{icon}</div>
      <div className='flex flex-col gap-2 border-t border-neutral-800 p-6'>
        <h2 className='w-40 truncate text-lg font-bold'>{name}</h2>
        <p className='min-h-32 text-sm text-gray-300'>{description}</p>
        <div className='mt-6'>
          <a
            href={repository}
            target='_blank'
            className={`flex w-fit items-center gap-2 overflow-hidden rounded border ${borderColor} ${backgroundColor} px-4 py-2 text-sm ${textColor} transition-all hover:text-white`}
          >
            <FaGithub /> Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
