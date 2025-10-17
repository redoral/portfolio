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
    <div className='border-kanagawa-black bg-kanagawa-black flex flex-col overflow-hidden rounded border'>
      <div className={`flex items-center justify-center ${backgroundColor} p-6 ${textColor}`}>{icon}</div>
      <div className='border-kanagawa-black flex flex-col gap-2 border-t p-6'>
        <h2 className='text-kanagawa-fg w-40 truncate text-lg font-bold'>{name}</h2>
        <p className='text-kanagawa-fg min-h-32 text-sm'>{description}</p>
        <div className='mt-6'>
          <a
            href={repository}
            target='_blank'
            className={`flex w-fit items-center gap-2 overflow-hidden rounded border ${borderColor} ${backgroundColor} px-4 py-2 text-sm ${textColor} hover:text-kanagawa-fg transition-all`}
          >
            <FaGithub /> Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
