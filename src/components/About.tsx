import React from 'react';

const AboutComponent: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const aboutRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(aboutRef.current);
        }
      });
    });
    observer.observe(aboutRef.current);
    return () => observer.unobserve(aboutRef.current);
  }, []);

  return (
    <div className='about-container' id='about'>
      <div
        className={`about-box box-bg fade-in-section-1s ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <h1 className='section-title-text'>About me</h1>
        <p className='about-paragraph' ref={aboutRef}>
          I am a 23-year old JavaScript developer specializing in fullstack
          applications. Graduated with a bachelor's degree in Information
          Technology in 2020. I'm just some guy who loves video games, books,
          food and more...
        </p>

        <p className='about-paragraph'>My personal favorite:</p>
        <iframe
          src='https://open.spotify.com/embed/track/3HBcQ5GenzAlBhCIgDGL3x?utm_source=generator'
          width='100%'
          height='380'
          frameBorder='0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
      </div>
      <div
        className={`about-box fade-in-section-2s ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <h1 className='section-title-text'>Skills</h1>
        <p className='skill-title'>Front-end: </p>
        <p className='skill-text'>
          HTML, CSS, JavaScript, TypeScript, React.js, React Native, React
          Redux, Bootstrap
        </p>
        <p className='skill-title'>Back-end: </p>
        <p className='skill-text'>Node.js, Express.js, PHP, NoSQL, MySQL</p>
        <p className='skill-title'>AWS: </p>
        <p>
          SAM, CloudFormation, EC2, S3, DynamoDB, RDS, CodePipeline, CloudWatch
        </p>
        <p className='skill-title'>Toolkit: </p>
        <p className='skill-text'>VSCode, Android Studio, Git</p>
      </div>
    </div>
  );
};

export default AboutComponent;
