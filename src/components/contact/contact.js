import React from 'react'
import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';
import intro_photo from "../../assets/intro_photo.png";

function Contact() {
  const [state, handleSubmit] = useForm("xnqeoljn");
  if (state.succeeded) {
      return <p>Thanks for contacting!</p>;
  }

  return (
    <div className='contact'>
        <h1>Connect with me</h1>

        {/* <hr /> */}

        <div className="sides">
          <div className="left">
            <span>Let's have a conversation!</span>
            <p>Would love to connect with you.</p>
            <p className='email'>Either fill out the given form or email at joshishreya2502@gmail.com</p>
            {/* <img src={intro_photo} alt="" /> */}
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