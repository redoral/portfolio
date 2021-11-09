import React from 'react';

const AboutComponent: React.FC = () => {
  return (
    <div className='about-container'>
      <div className='about-box box-bg'>
        <h1>About me</h1>
        <p>
          I am a 23-year old JavaScript developer specializing in fullstack
          applications. Graduated with a bachelor's degree in Information
          Technology in 2020.
        </p>

        <p>Current jam: </p>
        <iframe
          src='https://open.spotify.com/embed/track/52Y6scyr46bCC5iWSeswhP?utm_source=generator'
          width='100%'
          height='380'
          frameBorder='0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
      </div>
      <div className='about-box'>
        <h1>Skills</h1>
        <p className='skill-title'>Front-end: </p>
        <p>HTML, CSS, JavaScript, TypeScript, React.js, React Native</p>
        <p className='skill-title'>Back-end: </p>
        <p>JavaScript, TypeScript, PHP, Express.js, NoSQL, MySQL</p>
        <p className='skill-title'>AWS: </p>
        <p>SAM, CloudFormation, EC2, S3, DynamoDB, CodePipeline, CloudWatch</p>
        <p className='skill-title'>Toolkit: </p>
        <p>VSCode, Android Studio, Git</p>
      </div>
    </div>
  );
};

export default AboutComponent;
