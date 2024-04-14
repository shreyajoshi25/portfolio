import React from 'react'
import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xnqeoljn");
  if (state.succeeded) {
      return <p>Thanks for contacting!</p>;
  }

  return (
    <div className='contact'>
        <h1 className='head'>Connect with me</h1>

        {/* <hr /> */}

        <div className="sides">
          <div className="left">
            <h3>Let's have a conversation!</h3>
            <p>Would love to connect with you.</p>
            <p className='email'>Either fill out the given form or reach out at <a href="mailto:joshishreya2502@gmail.com">joshishreya2502@gmail.com</a></p>
          </div>
          <div className="right">
            <form action="https://formspree.io/f/xnqeoljn" method="POST" className='form'>
              <span>Name</span>
              <input type="text" name="Name" className='input' required/>
              <span>Email Address</span>
              <input type="text" name="Email" className='input' required/>
              <span>Message</span>
              <input type="text" name="Message" className='input message' required/>
              <button type='submit' value='send'>Send</button>
            </form>
          </div>
        </div>
        
    </div>
  )
}

function App(){
  return (
    <Contact/>
  )
}
export default Contact