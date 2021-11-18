import React from 'react';

const ContactComponent: React.FC = () => {
  const [subject, setSubject] = React.useState('');
  const [body, setBody] = React.useState('');

  const sendMail = () => {
    window.open(
      `mailto:redmunozoral@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-subcontainer'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100284.04764086362!2d-122.10115367941367!3d38.23597327748718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808514d0f123c8db%3A0x5c335616d29bf368!2sFairfield%2C%20CA!5e0!3m2!1sen!2sus!4v1637191238642!5m2!1sen!2sus'
          width='600'
          height='475'
          loading='lazy'
          className='google-maps-embed '
        ></iframe>
        <div className='contact-box'>
          <h1 className='section-title-text'>Contact me!</h1>
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
