import React from 'react'
import "./contact.css"
import intro_photo from "../../assets/intro_photo.png";

const Contact = () => {
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
            <form action="" className='form'>
              <span>Name</span>
              <input type="text" className='input'/>
              <span>Email Address</span>
              <input type="text" className='input'/>
              <span>Message</span>
              <input type="text" className='input message'/>
              <button>Send</button>
            </form>
          </div>
        </div>
        
    </div>
  )
}

export default Contact