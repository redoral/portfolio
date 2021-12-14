import React from 'react';
import p3bg from '../assets/p3-bg.png';
import chirperbg from '../assets/chirper-bg.png';
import w3bestiarybg from '../assets/w3bestiary-bg.png';

const ProjectsComponent: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const projectsRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

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

  const nextProject = () => {
    if (currentProject >= 0 && currentProject < 2) {
      setCurrentProject(currentProject + 1);
    } else if (currentProject === 2) {
      setCurrentProject(0);
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
          <h2 className='project-name'>{projects[currentProject].name}</h2>
          <p className='project-description'>{projects[currentProject].desc}</p>
          <p className='project-technologies'>
            Technologies: TypeScript, React Native, React Redux, Expo
          </p>
          <span onClick={nextProject} className='next-proj-btn'>
            Next project
          </span>
        </div>
        <div
          className='project-img'
          style={{ backgroundImage: `url(${projects[currentProject].img})` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
