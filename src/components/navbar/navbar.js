import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png"
const navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="middle">
        <Link to='/' style={{textDecoration: 'none', color:'black'}}>
        <span>Home</span>
        </Link>
        <Link to='projects' style={{textDecoration: 'none', color:'black'}}>
        <span>Projects</span>
        </Link>
        <Link to='resume' style={{textDecoration: 'none', color:'black'}}>
        <span>Resume</span>
        </Link>
        <Link to='contact' style={{textDecoration: 'none', color:'black'}}>
        <span>Contact</span>
        </Link>
      </div>

      <div className="right">
        <a href="mailto:joshishreya2502@gmail.com">joshishreya2502@gmail.com</a>
      </div>
    </div>
  )
}

export default navbar