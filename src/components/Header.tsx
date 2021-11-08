import React from 'react';
import DownArrowIcon from '../assets/down-arrow.png';

const HeaderComponent: React.FC = () => {
  return (
    <div className='header-container'>
      <h1 id='header-text'>Hi, I'm Red! ✌️</h1>
      <p id='header-subtext'>
        I'm a JavaScript developer currently based in Fairfield, CA.
        <br /> Scroll down to see more about me and my work!
      </p>
      <img src={DownArrowIcon} width='50' height='50' id='down-arrow-icon' />
    </div>
  );
};

export default HeaderComponent;
