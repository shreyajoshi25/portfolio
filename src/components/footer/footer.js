import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="info">
            <span>2024 Shreya Joshi</span>
            <div className="socials">
                <Link to="https://www.facebook.com/profile.php?id=100077572454478"><FacebookIcon className="social"/></Link>
                <Link to="https://www.instagram.com/shreyyajoshii/"><InstagramIcon className="social"/></Link>
                <Link to="https://www.linkedin.com/in/shreya-joshi-igdtuw/"><LinkedInIcon className="social"/></Link>
                <Link to="https://github.com/shreyajoshi25"><GitHubIcon className="social"/></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer