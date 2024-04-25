import React, {useState} from 'react'
import "./navbar.css"
// import styles from "./navbar.css"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png"
import menuIcon from "../../assets/menuIcon.png"
import closeIcon from "../../assets/closeIcon.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log("Before toggle:", menuOpen);
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  console.log("Rendered with menuOpen:", menuOpen);

  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="" />
      </div>

      <div className="menu">
        <img className="btn" src={menuOpen ? (closeIcon) : (menuIcon)} alt="" onClick={handleMenuToggle}/>
        <ul className="show">
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Home</li>
          </Link>
          <Link to='projects' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Projects</li>
          </Link>
          <Link to='resume' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Resume</li>
          </Link>
          <Link to='contact' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Contact</li>
          </Link>
        </ul>

        <ul className="hide" style={{ display: menuOpen ? 'flex' : 'none' }} onClick={() => setMenuOpen(false)}>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Home</li>
          </Link>
          <Link to='projects' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Projects</li>
          </Link>
          <Link to='resume' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Resume</li>
          </Link>
          <Link to='contact' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <a href="mailto:joshishreya2502@gmail.com" className='mail' ><div className="right">
       <EmailOutlinedIcon className='mail'></EmailOutlinedIcon>
        <span>joshishreya2502@gmail.com</span>
      </div> </a>

      
    </div>
  )
}

export default Navbar