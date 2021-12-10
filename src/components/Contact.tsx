import React from 'react';
import me from '../assets/me.jpg';

const ContactComponent: React.FC = () => {
  const [subject, setSubject] = React.useState('');
  const [body, setBody] = React.useState('');
  const [isVisible, setVisible] = React.useState(false);

  const contactRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(contactRef.current);
        }
      });
    });
    observer.observe(contactRef.current);
    return () => observer.unobserve(contactRef.current);
  }, []);

  const sendMail = () => {
    window.open(
      `mailto:redmunozoral@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <div className='contact-container' id='contact'>
      <div
        className={`contact-subcontainer fade-in-section-1s ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className='me-img' />
        <div className='contact-box'>
          <h1 className='section-title-text' ref={contactRef}>
            Contact me!
          </h1>
          <a href='mailto:redmunozoral@gmail.com'>redmunozoral@gmail.com</a>
          <br />
          <span>+1(606)854-3323</span>
          <div className='contact-form'>
            <p className='form-label'>Subject</p>
            <input
              type='text'
              className='email-subject-input'
              onChange={(ev) => setSubject(ev.target.value)}
            />
            <p className='form-label'>Message</p>
            <textarea
              className='email-body-input'
              onChange={(ev) => setBody(ev.target.value)}
            />
            <br />
            <span className='email-button' onClick={sendMail}>
              Mail
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
