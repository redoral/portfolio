import React from 'react';

const AboutComponent: React.FC = () => {
  // const [isVisible, setVisible] = React.useState(false);
  // const aboutRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //         observer.unobserve(aboutRef.current);
  //       }
  //     });
  //   });
  //   observer.observe(aboutRef.current);

  //   return () => {
  //     observer.unobserve(aboutRef.current);
  //   };
  // }, []);

  return (
    <div className='about-container' id='about'>
      <div className='about-me-section'>
        <h1 className='projects-title'>About me</h1>
        <p className='about-me-text'>
          My name's Red! I'm a 23-year old fullstack JavaScript developer who
          graduated in 2020 with a bachelor's in Information Technology. I'm
          just your average guy who likes video games, tv shows, movies, food,
          and more!
        </p>

        <span className='dl-resume-btn'>Download resume</span>
      </div>
      <div className='skills-section'>
        <div className='skills-box'>
          <h1
            className='project-name'
            style={{ textAlign: 'center', marginBottom: '15px' }}
          >
            Skills
          </h1>
          <div className='skills-list'>
            <div className='skill-group'>
              <div className='skill-category'>
                <p className='skill-title'>Front-end: </p>
                <p className='skill-text'>
                  HTML, CSS, JavaScript, TypeScript, React.js, React Native,
                  React Redux, Bootstrap
                </p>
              </div>
              <div className='skill-category'>
                <p className='skill-title'>Back-end:</p>
                <p className='skill-text'>
                  Node.js, Express.js, PHP, NoSQL, MySQL
                </p>
              </div>
            </div>
            <div className='skill-group'>
              <div className='skill-category'>
                <p className='skill-title'>AWS: </p>
                <p className='skill-text'>
                  SAM, CloudFormation, EC2, S3, DynamoDB, RDS, CodePipeline,
                  CloudWatch
                </p>
              </div>
              <div className='skill-category'>
                <p className='skill-title'>Toolkit: </p>
                <p className='skill-text'>VSCode, Android Studio, Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
