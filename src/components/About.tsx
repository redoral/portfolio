import axios from 'axios';
import React from 'react';

const AboutComponent: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const aboutRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [currentTrack, setCurrentTrack] = React.useState({
    status: 'Recently played:',
    songId: '',
  });

  const token =
    'BQC7glzbOX2xFljO5zFzy0BoBp5buJeX7TELLi8hdpl80BWyuv8eXZPgbGlDib4Wk7lzCjcaujAPTR_KAEGOk4uKL0KVlzsL7q5idBQ6JI2infsdVyMZCWnEEeet3wR_8pJljk57ITaJMBs4gIj9sxRmaVtOPNWlcE7_uFzAams';

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

    getCurrentTrack();
    return () => {
      observer.unobserve(aboutRef.current);
      setCurrentTrack({ status: '', songId: '' });
    };
  }, []);

  const getCurrentTrack = async () => {
    const nowPlaying = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );

    if (nowPlaying.status === 200) {
      setCurrentTrack({
        status: 'Now playing:',
        songId: nowPlaying.data.item.uri.slice(14),
      });
    } else {
      const recentlyPlayed = await axios.get(
        `https://api.spotify.com/v1/me/player/recently-played?limit=1&before=${Date.now().toString()}`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );

      setCurrentTrack({
        status: 'Recently played:',
        songId: recentlyPlayed.data.items[0].track.uri.slice(14),
      });
    }
  };

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

        <p className='about-paragraph'>{currentTrack.status}</p>
        <iframe
          src={`https://open.spotify.com/embed/track/` + currentTrack.songId}
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
