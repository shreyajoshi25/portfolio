import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="info">
            <span>2024 Shreya Joshi</span>
            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=100077572454478"><FacebookIcon className="social"/></a>
              <a href="https://www.instagram.com/shreyyajoshii/"><InstagramIcon className="social"/></a>
              <a href="https://www.linkedin.com/in/shreya-joshi-igdtuw/"><LinkedInIcon className="social"/></a>
              <a href="https://github.com/shreyajoshi25"><GitHubIcon className="social"/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer