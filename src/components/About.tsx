import React from 'react';

const AboutComponent: React.FC = () => {
  return (
    <div className='about-container' id='about'>
      <div className='about-box box-bg'>
        <h1 className='section-title-text'>About me</h1>
        <p className='about-paragraph'>
          I am a 23-year old JavaScript developer specializing in fullstack
          applications. Graduated with a bachelor's degree in Information
          Technology in 2020. I'm just some guy who loves video games, LOTR,
          Star Wars, and more...
        </p>

        <p className='about-paragraph'>Favorite song: </p>
        <iframe
          src='https://open.spotify.com/embed/track/3HBcQ5GenzAlBhCIgDGL3x?utm_source=generator'
          width='100%'
          height='380'
          frameBorder='0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
      </div>
      <div className='about-box'>
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
