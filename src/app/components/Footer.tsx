import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex  justify-between py-6 w-full'>
      <div className='flex gap-2'>
        <a href='https://linkedin.com/in/redoral' target='_blank'>
          <FaLinkedin size={24} />
        </a>
        <a href='https://github.com/redoral' target='_blank'>
          <FaGithub size={24} />
        </a>
      </div>
      <p>2023 Red Oral</p>
    </footer>
  );
}

export default Footer;
