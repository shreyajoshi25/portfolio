import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src="" alt="" />
        <span>Shreya</span>
        <span>Joshi</span>
      </div>
      <div className="right">
        <Link to='/' style={{textDecoration: 'none', color:'black'}}>
        <span>Home</span>
        </Link>
        <Link to='projects' style={{textDecoration: 'none', color:'black'}}>
        <span>Projects</span>
        </Link>
        <Link to='https://drive.google.com/file/d/1LK7ZYRERD_Q0lAf42XVkjVXYJ3FZo_an/view?usp=sharing' style={{textDecoration: 'none', color:'black'}}>
        <span>Resume</span>
        </Link>
        <Link to='contact' style={{textDecoration: 'none', color:'black'}}>
        <span>Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default navbar