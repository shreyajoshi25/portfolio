import React from 'react'
import "./navbar.css"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
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

      <a href="mailto:joshishreya2502@gmail.com" ><div className="right">
       <EmailOutlinedIcon className='mail'></EmailOutlinedIcon>
        <span>joshishreya2502@gmail.com</span>
      </div> </a>
    </div>
  )
}

export default navbar