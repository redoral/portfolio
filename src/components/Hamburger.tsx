import React from 'react';

interface IProps {
  visible: boolean;
  setVisible: any;
}

const HamburgerComponent: React.FC<IProps> = (props: IProps) => {
  if (props.visible) {
    return (
      <div className='hamburger-wrapper'>
        <div className='hamburger-menu'>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default HamburgerComponent;
