import React from 'react';
import DownArrowIcon from '../assets/down-arrow.png';

const HeaderComponent: React.FC = () => {
  return (
    <div className='header-container'>
      <h1>Hi! I'm Red. 👋</h1>
      <p>I'm a JavaScript Developer. Scroll below to see more about me!</p>
      <img src={DownArrowIcon} width='50' height='50' id='down-arrow-icon' />
    </div>
  );
};

export default HeaderComponent;
