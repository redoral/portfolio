import React from 'react';
import chirper from '../assets/chirper.png';
import p3 from '../assets/p3.png';
import w3bestiary from '../assets/w3bestiary.jpg';

const ProjectsComponent: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const projectsRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

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
    return () => observer.unobserve(projectsRef.current);
  }, []);

  return (
    <div className='projects-container' id='projects'>
      <h1
        className={`section-title-text fade-in-section-1s ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        Projects
      </h1>
      <p
        ref={projectsRef}
        className={`fade-in-section-2s ${isVisible ? 'is-visible' : ''}`}
      >
        Check out more on my{' '}
        <a href='https://github.com/redoral' target='_blank'>
          GitHub repositories
        </a>
        .
      </p>
      <div className='projects-subcontainer'>
        <div
          className={`project-box fade-in-section-3s ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <h2>P3</h2>
          <a
            href='http://github.com/Perfect-Personnel-Placement/frontend'
            target='_blank'
          >
            <img src={p3} height='512px' className='project-img' />
          </a>
          <p className='project-description'>
            The Serverless Training planner is a serverless mobile app that
            Revature managers can use to look at important information regarding
            clientele demands and batch output for the company.
            <br />
            <a
              href='http://github.com/Perfect-Personnel-Placement/frontend'
              target='_blank'
            >
              GitHub repo
            </a>
          </p>
        </div>
        <div
          className={`project-box fade-in-section-4s ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <h2>Chirper</h2>
          <a
            href='http://github.com/RevatureRobert/2106Jun07RNCN-2-p2-fe'
            target='_blank'
          >
            <img src={chirper} height='512px' className='project-img' />
          </a>
          <p className='project-description'>
            Another serverless mobile app for a social media service. Allows
            users to register accounts with which they can post “chirps” that
            are broadcasted to all users on the site and more. <br />
            <a
              href='http://github.com/RevatureRobert/2106Jun07RNCN-2-p2-fe'
              target='_blank'
            >
              GitHub repo
            </a>
          </p>
        </div>
        <div
          className={`project-box fade-in-section-5s ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <h2>Witcher 3 Bestiary (WIP)</h2>
          <a
            href='https://github.com/redoral/w3-bestiary-native'
            target='_blank'
          >
            <img src={w3bestiary} height='512px' className='project-img' />
          </a>
          <p className='project-description'>
            A mobile app that shows information about monsters such as loot,
            weaknesses, etc. from the video game The Witcher 3: Wild Hunt. A
            personal project made for fun and practice. <br />
            <a
              href='https://github.com/redoral/w3-bestiary-native'
              target='_blank'
            >
              GitHub repo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
