import React from 'react';
import HamburgerComponent from './Hamburger';
import logo from '../assets/logo.svg';

const NavbarComponent: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [isVisible, setVisible] = React.useState(false);

  const navbarRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    const currentNavbarRef = navbarRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(currentNavbarRef);
        }
      });
    });
    observer.observe(currentNavbarRef);
    return () => observer.unobserve(currentNavbarRef);
  }, []);

  return (
    <>
      <div className='navbar-container' ref={navbarRef}>
        <img src={logo} className='site-logo' alt='Site Logo' />
        <ul className={`navbar fade-in-section-2s ${isVisible ? 'is-visible' : ''}`}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
        <div className={`hamburger-nav fade-in-section-2s ${isVisible ? 'is-visible' : ''}`}>
          <span className='hamburger-icon' onClick={() => (!open ? setOpen(true) : setOpen(false))}>
            ≡
          </span>
        </div>
      </div>
      <HamburgerComponent open={open} setOpen={setOpen} />
    </>
  );
};

export default NavbarComponent;
