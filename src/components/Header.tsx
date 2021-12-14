import React from 'react';
import DownArrowIcon from '../assets/down-arrow.png';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const HeaderComponent: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const headerRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.unobserve(headerRef.current);
        }
      });
    });
    observer.observe(headerRef.current);
    return () => observer.unobserve(headerRef.current);
  }, []);

  return (
    <div className='header-container'>
      <h1
        id='header-text'
        className={`fade-in-section-2s ${isVisible ? 'is-visible' : ''}`}
        ref={headerRef}
      >
        Hi, I'm Red!
      </h1>
      <p
        id='header-subtext'
        className={`fade-in-section-3s ${isVisible ? 'is-visible' : ''}`}
      >
        I'm a JavaScript developer currently based in Fairfield, CA.
        <br /> Scroll down to see more about me and my work!
      </p>
      <div
        className={`social-logo-container fade-in-section-3s ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <a href='https://linkedin.com/in/redoral' target='_blank'>
          <img src={linkedin} className='social-logo' />
        </a>
        <a href='https://github.com/redoral' target='_blank'>
          <img src={github} className='social-logo' />
        </a>
      </div>
      <span className={`fade-in-section-5s ${isVisible ? 'is-visible' : ''}`}>
        <img src={DownArrowIcon} width='74' height='74' id='down-arrow-icon' />
      </span>
    </div>
  );
};

export default HeaderComponent;
