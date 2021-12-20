import React from 'react';
import p3bg from '../assets/p3-bg.png';
import chirperbg from '../assets/chirper-bg.png';
import w3bestiarybg from '../assets/w3bestiary-bg.png';
import github from '../assets/github.svg';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

const ProjectsComponent: React.FC = () => {
  /** States and ref */
  const [isVisible, setVisible] = React.useState(false);
  const [fadeStyle, setFadeStyle] = React.useState(1);
  const projectsRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  /** List of projects */
  const [currentProject, setCurrentProject] = React.useState(0);
  const projects = [
    {
      name: 'P3',
      desc: 'The Serverless Training planner is a serverless mobile app that Revature managers can use to look at important information regarding clientele demands and batch output for the company.',
      img: p3bg,
    },
    {
      name: 'Chirper',
      desc: 'Another serverless mobile app for a social media service. Allows users to register accounts with which they can post “chirps” that are broadcasted to all users on the site and more.',
      img: chirperbg,
    },
    {
      name: 'W3 Bestiary',
      desc: 'Another serverless mobile app for a social media service. Allows users to register accounts with which they can post “chirps” that are broadcasted to all users on the site and more.',
      img: w3bestiarybg,
    },
  ];

  /** Checks if component is in view for transition */
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(projectsRef.current);
        }
      });
    });
    observer.observe(projectsRef.current);
    return () => {
      observer.unobserve(projectsRef.current);
      setCurrentProject(0);
    };
  }, []);

  /** Function to show the next project */
  const nextProject = () => {
    setFadeStyle(0);

    if (currentProject >= 0 && currentProject < 2) {
      setTimeout(() => {
        setCurrentProject(currentProject + 1);
        setFadeStyle(1);
      }, 200);
    } else if (currentProject === 2) {
      setTimeout(() => {
        setCurrentProject(0);
        setFadeStyle(1);
      }, 200);
    } else {
      setFadeStyle(1);
    }
  };

  /** Function to show the previous project */
  const prevProject = () => {
    setFadeStyle(0);

    if (currentProject > 0 && currentProject <= 2) {
      setTimeout(() => {
        setCurrentProject(currentProject - 1);
        setFadeStyle(1);
      }, 200);
    } else if (currentProject === 0) {
      setTimeout(() => {
        setCurrentProject(2);
        setFadeStyle(1);
      }, 200);
    } else {
      setFadeStyle(1);
    }
  };

  return (
    <div className='projects-container' id='projects'>
      <h1
        className={`section-title-text fade-in-section-1s projects-title ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        Projects
      </h1>
      <p
        ref={projectsRef}
        className={`fade-in-section-2s projects-subtitle ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        Check out more on my{' '}
        <a href='https://github.com/redoral' target='_blank'>
          GitHub repositories
        </a>
        .
      </p>
      <div className='projects-subcontainer'>
        <div className='project-info'>
          <h2
            className='project-name'
            style={{
              opacity: fadeStyle,
              transition: 'opacity 0.2s ease-in-out',
            }}
          >
            {projects[currentProject].name}{' '}
            <img src={github} className='project-link-logo' />
          </h2>
          <p
            className='project-description'
            style={{
              opacity: fadeStyle,
              transition: 'opacity 0.2s ease-in-out',
            }}
          >
            {projects[currentProject].desc}
          </p>
          <p
            className='project-technologies'
            style={{
              opacity: fadeStyle,
              transition: 'opacity 0.2s ease-in-out',
            }}
          >
            Technologies: TypeScript, React Native, React Redux, Expo
          </p>
          <div className='arrow-btns'>
            <span onClick={prevProject} className='next-proj-btn'>
              <img src={leftArrow} className='arrow-icon' />
            </span>
            <span onClick={nextProject} className='next-proj-btn'>
              <img src={rightArrow} className='arrow-icon' />
            </span>
          </div>
        </div>
        <div
          className={`project-img`}
          style={{
            backgroundImage: `url(${projects[currentProject].img})`,
            opacity: fadeStyle,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
