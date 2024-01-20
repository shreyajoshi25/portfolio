import React from 'react'
import "./projects.css"

const Projects = () => {
  return (
    <div className='projects'>
      <div className="container">
      <div className="cards">
          <img src="" alt="" />
          <div className="info">
            <div className="date">January 2024</div>
            <div className="header">Wisdom Wellness Hub</div>
            <div className="details">A ReactJS-based web application designed to serve as a social media platform tailored for elders, fostering connections with friends living in proximity. The platform not only facilitates social interactions but also promotes the cultivation of new friendships, all within the context of maintaining and enhancing physical fitness.</div>
          </div>
        </div>


        <div className="cards">
          <img src="" alt="" />
          <div className="info">
            <div className="date"> March 2023</div>
            <div className="header">Clean Connect</div>
            <div className="details">A application which could serve as a bridge between the locals and the municipality.</div>
          </div>
        </div>

        
        <div className="cards">
          <img src="" alt="" />
          <div className="info">
            <div className="date">January 2023</div>
            <div className="header">Trash collector Game</div>
            <div className="details">Developed and launched a dynamic JavaScript web game, showcasing seamless gameplay, captivating visuals, and engaging challenges—all accessible directly through the browser.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects