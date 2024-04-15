import React, {useState} from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();


    const serviceId = "service_7ey72kq";
    const templateId = "template_nzf3k9o";
    const publicKey = "FvgHAWXp3iqYIuPTR";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Shreya Joshi",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email send successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  }

  return (
    <div className='contact'>
        <h1 className='head'>Connect with me</h1>

        <div className="sides">
          <div className="left">
            <h3>Let's have a conversation!</h3>
            <p>Would love to connect with you.</p>
            <p className='email'>Either fill out the given form or reach out at <a href="mailto:joshishreya2502@gmail.com">joshishreya2502@gmail.com</a></p>
          </div>

          <div className="right">
            <form onSubmit={handleSubmit} className='form'>
              <span>Name</span>
              <input type="text" value={name} className='input' onChange={(e) => setName(e.target.value)} required/>
              <span>Email Address</span>
              <input type="text" value={email} className='input' onChange={(e) => setEmail(e.target.value)} required/>
              <span>Message</span>
              <textarea cols="30" rows="10" type="text" value={message} className='input message' onChange={(e) => setMessage(e.target.value)} required/>
              <button type='submit' value='send'>Send</button>
            </form>
          </div>
        </div>
        
    </div>
  )
}

export default Contact