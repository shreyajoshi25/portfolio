import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Connect with me</h1>

        <div className="sides">
          <div className="left">
            <span>Would love to connect with you</span>
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