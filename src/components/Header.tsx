import React from 'react';
import DownArrowIcon from '../assets/down-arrow.png';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const HeaderComponent: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const headerRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    const currentHeadRef = headerRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.unobserve(currentHeadRef);
        }
      });
    });
    observer.observe(currentHeadRef);
    return () => observer.unobserve(currentHeadRef);
  }, []);

  return (
    <div className='header-container'>
      <h1
        id='header-text'
        className={`fade-in-section-2s ${isVisible ? 'is-visible' : ''}`}
        ref={headerRef}>
        Hi, I'm Red! ✌️
      </h1>
      <p id='header-subtext' className={`fade-in-section-3s ${isVisible ? 'is-visible' : ''}`}>
        I'm a full stack developer currently based in Reno, NV.
        <br /> Scroll down to see more about me and my work!
      </p>
      <div className={`social-logo-container fade-in-section-3s ${isVisible ? 'is-visible' : ''}`}>
        <a href='https://linkedin.com/in/redoral' rel='noreferrer' target='_blank'>
          <img src={linkedin} className='social-logo' alt='LinkedIn Logo' />
        </a>
        <a href='https://github.com/redoral' rel='noreferrer' target='_blank'>
          <img src={github} className='social-logo' alt='GitHub Logo' />
        </a>
      </div>
      <span className={`fade-in-section-5s ${isVisible ? 'is-visible' : ''}`}>
        <img
          src={DownArrowIcon}
          width='74'
          height='74'
          id='down-arrow-icon'
          alt='A downward pointing arrow.'
        />
      </span>
    </div>
  );
};

export default HeaderComponent;
