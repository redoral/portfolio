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
    <div className='flex flex-col overflow-hidden rounded border border-white border-opacity-15 bg-black'>
      <div className={`flex items-center justify-center ${backgroundColor} bg-opacity-10 p-6 ${textColor}`}>{icon}</div>
      <div className='flex flex-col gap-2 border-t border-white border-opacity-15 p-6'>
        <h2 className='w-40 truncate text-lg font-bold'>{name}</h2>
        <p className='min-h-32 text-sm text-gray-300'>{description}</p>
        <div className='mt-6'>
          <a
            href={repository}
            target='_blank'
            className={`flex w-fit items-center gap-2 overflow-hidden rounded border ${borderColor} border-opacity-50 ${backgroundColor} bg-opacity-15 px-4 py-2 text-sm ${textColor} transition-all hover:border-opacity-25 hover:bg-opacity-10 hover:text-white`}
          >
            <FaGithub /> Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
