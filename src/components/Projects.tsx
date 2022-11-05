import React from 'react';
import p3bg from '../assets/p3-bg.png';
import chirperbg from '../assets/chirper-bg.png';
import w3bestiarybg from '../assets/w3bestiary-bg.png';
import github from '../assets/github.svg';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

const ProjectsComponent: React.FC = () => {
  /** States and ref */
  const [fadeStyle, setFadeStyle] = React.useState(1);

  /** List of projects */
  const [currentProject, setCurrentProject] = React.useState(0);
  const projects = [
    {
      name: 'P3',
      desc: 'The Serverless Training planner is a serverless mobile app that Revature managers can use to look at important information regarding clientele demands and batch output for the company.',
      img: p3bg,
      url: 'https://github.com/redoral/p3-fe'
    },
    {
      name: 'Chirper',
      desc: 'Another serverless mobile app for a social media service. Allows users to register accounts with which they can post “chirps” that are broadcasted to all users on the site and more.',
      img: chirperbg,
      url: 'https://github.com/redoral/chirper-native-fe'
    },
    {
      name: 'W3 Bestiary',
      desc: 'A mobile app that serves as a player guide for the video game The Witcher 3: Wild Hunt.',
      img: w3bestiarybg,
      url: 'https://github.com/redoral/w3-bestiary-native'
    }
  ];

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
      <h1 className='section-title-text projects-title'>Projects</h1>
      <p className='projects-subtitle'>
        Check out more on my{' '}
        <a href='https://github.com/redoral' target='_blank' rel='noreferrer'>
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
              transition: 'opacity 0.2s ease-in-out'
            }}>
            {projects[currentProject].name}{' '}
            <a href={projects[currentProject].url} target='_blank' rel='noreferrer'>
              <img src={github} className='project-link-logo' alt='GitHub Logo' />
            </a>
          </h2>
          <p
            className='project-description'
            style={{
              opacity: fadeStyle,
              transition: 'opacity 0.2s ease-in-out'
            }}>
            {projects[currentProject].desc}
          </p>
          <p
            className='project-technologies'
            style={{
              opacity: fadeStyle,
              transition: 'opacity 0.2s ease-in-out'
            }}>
            Technologies: TypeScript, React Native, React Redux, Expo
          </p>
          <div className='arrow-btns'>
            <span onClick={prevProject} className='next-proj-btn'>
              <img src={leftArrow} className='arrow-icon' alt='Left Arrow Button' />
            </span>
            <span onClick={nextProject} className='next-proj-btn'>
              <img src={rightArrow} className='arrow-icon' alt='Right Arrow Button' />
            </span>
          </div>
        </div>
        <div
          className='project-img'
          style={{
            backgroundImage: `url(${projects[currentProject].img})`,
            opacity: fadeStyle
          }}></div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
