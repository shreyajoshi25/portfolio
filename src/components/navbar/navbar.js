import React from 'react'
import "./navbar.css"

const navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>Shreya Joshi</span>
      </div>
      <div className="right">
        <span>About</span>
        <span>Projects</span>
        <span>Resume</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default navbar