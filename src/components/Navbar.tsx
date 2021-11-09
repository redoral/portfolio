import React from 'react';
import HamburgerComponent from './Hamburger';

const NavbarComponent: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <div className='navbar-container'>
        <h2 id='site-logo'>RDRL ⚡</h2>
        <ul className='navbar'>
          <li>
            <a href='#about-section'>About</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className='hamburger-nav'>
          <a
            href='#'
            className='hamburger-icon'
            onClick={() => (!visible ? setVisible(true) : setVisible(false))}
          >
            ≡
          </a>
        </div>
      </div>
      <HamburgerComponent visible={visible} setVisible={setVisible} />
    </>
  );
};

export default NavbarComponent;
