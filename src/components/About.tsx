import React from 'react';
import resume from '../assets/resume.pdf';

const AboutComponent: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const aboutRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    const currentAboutRef = aboutRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(currentAboutRef);
        }
      });
    });
    observer.observe(currentAboutRef);

    return () => {
      observer.unobserve(currentAboutRef);
    };
  }, []);

  return (
    <div className='about-container' id='about'>
      <div className={`about-me-section fade-in-section-2s ${isVisible ? 'is-visible' : ''}`}>
        <h1 className='projects-title' ref={aboutRef}>
          About me
        </h1>
        <p className='about-me-text'>
          My name's Red! I'm a 24-year old full stack developer who graduated in 2020 with a
          bachelor's in Information Technology. I'm just your average guy who likes video games, tv
          shows, movies, food, and more!
        </p>

        <a href={resume} className='dl-resume-btn' target='_blank' rel='noreferrer'>
          Download resume
        </a>
      </div>
      <div className={`skills-section fade-in-section-3s ${isVisible ? 'is-visible' : ''} `}>
        <div className='skills-box'>
          <h1 className='project-name' style={{ textAlign: 'center', marginBottom: '15px' }}>
            Skills
          </h1>
          <div className='skills-list'>
            <div className='skill-group'>
              <div className='skill-category'>
                <p className='skill-title'>Front-end: </p>
                <p className='skill-text'>
                  HTML, CSS, JavaScript, TypeScript, React.js, React Native, Redux, Less.js,
                  Bootstrap
                </p>
              </div>
              <div className='skill-category'>
                <p className='skill-title'>Back-end:</p>
                <p className='skill-text'>
                  Node.js, Express.js, PHP, Java, Spring Boot, NoSQL, MySQL, PostgreSQL
                </p>
              </div>
            </div>
            <div className='skill-group'>
              <div className='skill-category'>
                <p className='skill-title'>AWS: </p>
                <p className='skill-text'>
                  SAM, CloudFormation, EC2, S3, DynamoDB, RDS, CodePipeline, CloudWatch
                </p>
              </div>
              <div className='skill-category'>
                <p className='skill-title'>Toolkit: </p>
                <p className='skill-text'>
                  VSCode, Android Studio, IntelliJ IDEA, Postman, Insomnia, Git
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
