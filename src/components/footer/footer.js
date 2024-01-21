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
                <FacebookIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
                <GitHubIcon/>
            </div>
        </div>
    </div>
  )
}

export default Footer