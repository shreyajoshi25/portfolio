import React from 'react'
import "./navbar.css"

const navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src="" alt="" />
        <span>Shreya</span>
        <span>Joshi</span>
      </div>
      <div className="right">
        <span>Home</span>
        <span>Projects</span>
        <span>Resume</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default navbar